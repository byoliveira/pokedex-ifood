import ListLegendariesService from "../../services/legendary/ListLegendariesService";

export default class UpdateLegendaryService {
  constructor() {
    this.service = new ListLegendariesService();
  }

  update(
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
  ) {
    const pokemons = this.service.listAll();
    const pokemonIndice = pokemons.findIndex((item) => item.id === Number(id));

    if (pokemonIndice === -1) {
      return { erro: "Pokemon não encontrado" };
    }

    pokemons[pokemonIndice] = {
      name,
      description,
      type,
      healthPoints,
      specialAttack,
      defense,
      attack,
      experience,
      specialDefense,
    };

    return {
      id,
      ...pokemons[pokemonIndice],
    };
  }
}
