const Router = require('express');

const controller = require('./app/controllers/LegendaryController');

const routes = new Router();

//routes.get('/legendaries', controller.index);
routes.get('/legendaries', controller.ListData);
routes.post('/legendaries', controller.create);

module.exports = routes;