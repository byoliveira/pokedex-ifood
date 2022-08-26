import ListLegendariesService from "../../services/legendary/ListLegendariesService";

export default class DeleteLegendaryService {
  constructor() {
    this.service = new ListLegendariesService();
  }

  delete(id) {
    const pokemons = this.service.listAll();
    const pokemonIndice = pokemons.findIndex((item) => item.id === Number(id));

    if (pokemonIndice === -1) {
      return { erro: "Pokémon não encontrado" };
    }

    pokemons.splice(pokemonIndice, 1);

    return { mensagem: "Pokémon removido com sucesso" };
  }
}
