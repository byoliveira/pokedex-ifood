import Router from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import legendaryValidator from './middlewares/LegendaryValidator'
import trainerValidator from './middlewares/TrainerValidator'

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

routes.get('/trainers', trainerController.listAll);
routes.post('/trainers', trainerValidator, trainerController.create);
routes.put('/trainers/:id', trainerController.update);
routes.post('/uploads', uploadFile.single('file'), uploadFileController.storeFile);
routes.post('/session', SessionController.create);


export default routes;