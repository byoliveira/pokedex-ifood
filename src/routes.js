const Router = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const legendaryValidator = require('./middlewares/LegendaryValidator')
const trainerValidator = require('./middlewares/TrainerValidator')

const controller = require('./app/controllers/legendary/LegendaryController');
const trainerController = require('./app/controllers/trainer/TrainerController')
const uploadFileController = require('./app/controllers/utils/UploadFileController');
const SessionController = require('./app/controllers/trainer/SessionController')

const uploadFile = multer({ storage: multerConfig })

const routes = new Router();

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


module.exports = routes;