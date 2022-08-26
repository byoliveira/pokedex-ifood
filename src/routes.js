import Router from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import legendaryValidator from './middlewares/LegendaryValidator';

const controller = require('./app/controllers/legendary/LegendaryController');

const ListAllTrainersController = require('./app/controllers/trainer/ListAllTrainersController')
const CreateTrainerController = require('./app/controllers/trainer/CreateTrainerController')
const UpdateTrainerController = require('./app/controllers/trainer/UpdateTrainerController')

const uploadFileController = require('./app/controllers/utils/UploadFileController');
const SessionController = require('./app/controllers/auth/SessionController')

import controller from './app/controllers/legendary/LegendaryController';
import trainerController from './app/controllers/trainer/TrainerController'
import uploadFileController from './app/controllers/utils/UploadFileController';
import SessionController from './app/controllers/trainer/SessionController'

 uploadFile = multer({ storage: multerConfig })

 routes = new Router();

//routes.get('/legendaries', controller.index);
routes.get('/legendaries', controller.ListData);
routes.post('/legendaries', legendaryValidator, controller.create);
routes.put('/legendaries/:id', controller.update);
routes.delete('/legendaries/:id', controller.delete);


const listAllTrainersController = new ListAllTrainersController();
const createTrainerController = new CreateTrainerController();
const updatedTrainerController = new UpdateTrainerController();

routes.get('/trainers', listAllTrainersController.list);
routes.post('/trainers', createTrainerController.create);
routes.put('/trainers/:id', updatedTrainerController.update);

routes.post('/uploads', uploadFile.single('file'), uploadFileController.storeFile);

routes.post('/session', SessionController.create);

export default routes;