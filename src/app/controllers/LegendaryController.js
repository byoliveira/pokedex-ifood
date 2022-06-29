const LegendariesService = require('../services/LegendariesService');

const controller = {
  index: (request, response) => {
    const listLegendaries = LegendariesService.listLegendariesService()
    response.json(listLegendaries)
  },
  ListData: (request, response) => {
    const { name } = request.query;

    const legendary = LegendariesService.listPokemonData(name);

    return response.json(legendary)
  }
}

module.exports = controller;