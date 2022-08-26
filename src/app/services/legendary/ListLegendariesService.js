import LegendaryModel from "../../models/legendary/LegendaryModel";

export default class ListLegendariesService {
  constructor() {}

  listAll() {
    const pokemon = new LegendaryModel(
      1,
      "MewTwo",
      "Descrição",
      "pokemon",
      "1000,00",
      "1000,00",
      "1000,00",
      "1000,00",
      "1000,00",
      "1000,00"
    );
    const pokemon2 = new LegendaryModel(
      2,
      "Pikachu",
      "Descrição",
      "pokemon",
      "1000,00",
      "1000,00",
      "1000,00",
      "1000,00",
      "1000,00",
      "1000,00"
    );

    return [pokemon, pokemon2];
  }

  listOne(pokemonName) {
    const pokemonList = ListLegendariesService.listLegendariesService();
    const pokemon = pokemonList.find((item) => item.name === pokemonName);
    return pokemon;
  }
}
