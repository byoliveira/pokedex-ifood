import DeleteLegendaryService from "../../services/legendary/DeleteLegendaryService";

export default class DeleteLegendaryController {
  constructor() {
    this.service = new DeleteLegendaryService();
  }

  delete(request, response) {
    const { id } = request.params;

    const resultado = this.service.delete(id);

    response.send(resultado);
  }
}
