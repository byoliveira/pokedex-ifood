import UpdateLegendaryService from "../../services/legendary/UpdateLegendaryService";

export default class UpdateLegendaryController {
  constructor() {
    this.service = new UpdateLegendaryService();
  }

  update(request, response) {
    const { id } = request.params;
    const {
      name,
      description,
      type,
      healthPoints,
      specialAttack,
      defense,
      attack,
      experience,
      specialDefense,
    } = request.body;

    const updatedLegendary = this.service.update(
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
    );

    response.json(updatedLegendary);
  }
}
