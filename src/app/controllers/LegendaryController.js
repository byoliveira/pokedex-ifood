const LegendaryModel = require('../models/LegendaryModel');

const controller = {
  index: (request, response) => {
    const pokemon = new LegendaryModel(
      1,
      'MewTwo',
      'Descrição',
      'pokemon'
    )

    response.json(pokemon)
  }
}

module.exports = controller;