import UpdateTrainerService from "../../services/trainer/UpdateTrainerService";

export default class UpdateTrainerController {
  constructor() {
    this.service = new UpdateTrainerService();
  }

  update(request, response) {
    const { id } = request.params;
    const { name, age, city } = request.body;

    if (!name) {
      return response.status(400).json({
        message: "Nome é obrigatório",
      });
    }

    if (!age) {
      return response.status(400).json({
        message: "Idade é obrigatório",
      });
    }

    const updatedTrainer = this.service.update(id, name, age, city);

    if (!updatedTrainer.sucess) {
      return response.status(400).json(updatedTrainer.message);
    }

    return response.status(200).json(updatedTrainer.message);
  }
}
