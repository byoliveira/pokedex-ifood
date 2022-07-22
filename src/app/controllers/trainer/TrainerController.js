const CreateTrainerService = require("../../services/trainer/CreateTrainerService")
const ListTrainerService = require("../../services/trainer/ListTrainerService")
const UpdateTrainerService = require("../../services/trainer/UpdateTrainerService")

const controller = {
  listAll: (request, response) => {
    const trainers = ListTrainerService.listAll()

    return response.send(trainers)
  },
  create: (request, response) => {
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
  },
  update: (request, response) => {
    const { id } = request.params
    const {
      name,
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

    const updatedTrainer = UpdateTrainerService.update(id, name, age, city)

    if (!updatedTrainer.sucess) {
      return response.status(400).json(updatedTrainer.message)
    }

    return response.status(200).json(updatedTrainer.message)
  }
}

module.exports = controller