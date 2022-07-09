const ListLegendariesService = require("../../services/legendary/ListLegendariesService")

const DeleteLegendaryService = {
  delete: (id) => {
    const pokemons = ListLegendariesService.listLegendariesService()
    const pokemonIndice = pokemons.findIndex(item => item.id === Number(id))

    if (pokemonIndice === -1) {
      return { erro: "Pokémon não encontrado" }
    }

    pokemons.splice(pokemonIndice, 1)

    return { mensagem: "Pokémon removido com sucesso" }
  }
}

module.exports = DeleteLegendaryService