const Router = require('express');

const controller = require('./app/controllers/LegendaryController');

const routes = new Router();

//routes.get('/legendaries', controller.index);
routes.get('/legendaries', controller.ListData)

module.exports = routes;