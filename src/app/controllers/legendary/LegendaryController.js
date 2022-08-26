class LegendaryControllers {
  constructor() {}

  ListData(request, response) {
    const { name } = request.query;

    if (!name) {
      return response.status(400).json({ "erro": "Você não passou o nome do pokemon" })
    }

    const legendary = ListLegendariesService.listPokemonData(name);

    return response.json(legendary)
  }
}

module.exports = LegendaryControllers;