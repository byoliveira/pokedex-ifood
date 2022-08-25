const CreateTrainerService = require("../../services/trainer/CreateTrainerService")

class CreateTrainerController {
  constructor() {}

  create(request, response) {
    const {
      name,
      email,
      password,
      age,
      city
    } = request.body

    if (!name) {
      return response.status(400).json({
        message: "Nome é obrigatório"
      })
    }

    if (!age) {
      return response.status(400).json({
        message: "Idade é obrigatório"
      })
    }

    const createdTrainer = CreateTrainerService.create(name, email, password, age, city)

    if (!createdTrainer.sucess) {
      return response.status(400).json(createdTrainer.message)
    }

    return response.status(200).json(createdTrainer.message)
  }
}

export default CreateTrainerController;