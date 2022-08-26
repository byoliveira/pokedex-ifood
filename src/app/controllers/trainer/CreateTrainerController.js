import CreateTrainerService from "../../services/trainer/CreateTrainerService";

export default class CreateTrainerController {
  constructor() {
    this.service = new CreateTrainerService();
  }

  create(request, response) {
    const { name, email, password, age, city } = request.body;

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

    const createdTrainer = this.service.create(
      name,
      email,
      password,
      age,
      city
    );

    if (!createdTrainer.sucess) {
      return response.status(400).json(createdTrainer.message);
    }

    return response.status(200).json(createdTrainer.message);
  }
}
