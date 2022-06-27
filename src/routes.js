const Router = require('express');

const controller = require('./app/controllers/LegendaryController');

const routes = new Router();

routes.get('/legendaries', controller.index)

module.exports = routes;