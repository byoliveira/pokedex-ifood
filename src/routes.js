const Router = require('express');

const controller = require('./app/controllers/LegendaryController');

const routes = new Router();

//routes.get('/legendaries', controller.index);
routes.get('/legendaries', controller.ListData);
routes.post('/legendaries', controller.create);
routes.put('/legendaries/:id', controller.update);
routes.delete('/legendaries/:id', controller.delete);

module.exports = routes;