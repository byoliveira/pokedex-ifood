const ListLegendariesService = require('../../services/legendary/ListLegendariesService');
const CreateLegendaryService = require('../../services/legendary/CreateLegendaryService');
const UpdateLegendaryService = require('../../services/legendary/UpdateLegendaryService');
const DeleteLegendaryService = require('../../services/legendary/DeleteLegendaryService');

const controller = {
  index: (request, response) => {
    const listLegendaries = ListLegendariesService.listLegendariesService()
    response.json(listLegendaries)
  },
  ListData: (request, response) => {
    const { name } = request.query;

    if (!name) {
      return response.status(400).json({ "erro": "Você não passou o nome do pokemon" })
    }

    const legendary = ListLegendariesService.listPokemonData(name);

    return response.json(legendary)
  },
  create: (request, response) => {
    const {
      name,
      description,
      type,
      healthPoints,
      specialAttack,
      defense,
      attack,
      experience,
      specialDefense
    } = request.body;

    const legendary = CreateLegendaryService.createLegendary(
      name,
      description,
      type,
      healthPoints,
      specialAttack,
      defense,
      attack,
      experience,
      specialDefense
    );

    return response.json(legendary)
  },
  update: (request, response) => {
    const { id } = request.params
    const {
      name,
      description,
      type,
      healthPoints,
      specialAttack,
      defense,
      attack,
      experience,
      specialDefense
    } = request.body;

    const updatedLegendary = UpdateLegendaryService.update(
      id,
      name,
      description,
      type,
      healthPoints,
      specialAttack,
      defense,
      attack,
      experience,
      specialDefense
    )

    response.json(updatedLegendary)
  },
  delete: (request, response) => {
    const { id } = request.params

    const resultado = DeleteLegendaryService.delete(id)

    response.send(resultado)
  }
}

module.exports = controller;