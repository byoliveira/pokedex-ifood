import Router from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import legendaryValidator from './middlewares/LegendaryValidator';

const ListAllTrainersController = require('./app/controllers/trainer/ListAllTrainersController')
const CreateTrainerController = require('./app/controllers/trainer/CreateTrainerController')
const UpdateTrainerController = require('./app/controllers/trainer/UpdateTrainerController')

const ListAllLegendariesController = require('./app/controllers/legendary/ListAllLegendariesController')
const CreateLegendaryController = require('./app/controllers/legendary/CreateLegendaryController')
const UpdateLegendaryController = require('./app/controllers/legendary/UpdateLegendaryController')
const DeleteLegendaryController = require('./app/controllers/legendary/DeleteLegendaryController')

const uploadFileController = require('./app/controllers/utils/UploadFileController');
const SessionController = require('./app/controllers/auth/SessionController')

import uploadFileController from './app/controllers/utils/UploadFileController';
import SessionController from './app/controllers/trainer/SessionController'

uploadFile = multer({ storage: multerConfig })

routes = new Router();

const ListAllLegendariesController = new ListAllLegendariesController();
const CreateLegendaryController = new CreateLegendaryController();
const UpdateLegendaryController = new UpdateLegendaryController();
const DeleteLegendaryController = new DeleteLegendaryController();

routes.get('/legendaries', ListAllLegendariesController.index());
routes.post('/legendaries', legendaryValidator, CreateLegendaryController.create());
routes.put('/legendaries/:id', UpdateLegendaryController.update());
routes.delete('/legendaries/:id', DeleteLegendaryController.delete());

const listAllTrainersController = new ListAllTrainersController();
const createTrainerController = new CreateTrainerController();
const updatedTrainerController = new UpdateTrainerController();

routes.get('/trainers', listAllTrainersController.list);
routes.post('/trainers', createTrainerController.create);
routes.put('/trainers/:id', updatedTrainerController.update);

routes.post('/uploads', uploadFile.single('file'), uploadFileController.storeFile);

routes.post('/session', SessionController.create);

export default routes;