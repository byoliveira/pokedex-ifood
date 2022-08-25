import Router from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
<<<<<<< HEAD

import legendaryValidator from './middlewares/LegendaryValidator'
import trainerValidator from './middlewares/TrainerValidator'
=======
import legendaryValidator from './middlewares/LegendaryValidator';

const controller = require('./app/controllers/legendary/LegendaryController');

const ListAllTrainersController = require('./app/controllers/trainer/ListAllTrainersController')
const CreateTrainerController = require('./app/controllers/trainer/CreateTrainerController')
const UpdateTrainerController = require('./app/controllers/trainer/UpdateTrainerController')

const uploadFileController = require('./app/controllers/utils/UploadFileController');
const SessionController = require('./app/controllers/auth/SessionController')
>>>>>>> 7b1d0a03ccd1b46cec07ce5c5612084d3a93ebb2

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

<<<<<<< HEAD
routes.get('/trainers', trainerController.listAll);
routes.post('/trainers', trainerValidator, trainerController.create);
routes.put('/trainers/:id', trainerController.update);
=======
const listAllTrainersController = new ListAllTrainersController();
const createTrainerController = new CreateTrainerController();
const updatedTrainerController = new UpdateTrainerController();

routes.get('/trainers', listAllTrainersController.list);
routes.post('/trainers', createTrainerController.create);
routes.put('/trainers/:id', updatedTrainerController.update);

>>>>>>> 7b1d0a03ccd1b46cec07ce5c5612084d3a93ebb2
routes.post('/uploads', uploadFile.single('file'), uploadFileController.storeFile);

routes.post('/session', SessionController.create);

<<<<<<< HEAD

=======
>>>>>>> 7b1d0a03ccd1b46cec07ce5c5612084d3a93ebb2
export default routes;