const { v4 } = require('uuid')
const TrainerModel = require('../../models/trainer/TrainerModel')

const CreateTrainerService = {
  create: (name, email, password, age, city) => {
    if (name.length < 5) {
      const createdTrainer = {
        sucess: false,
        message: "Nome precisa ter pelo menos 5 caracteres"
      }

      return createdTrainer
    }

    if (age < 15 || age >= 40) {
      return {
        sucess: false,
        message: "Somente maiores de 15 e menores de 40 anos podem participar"
      }
    }

    const newTrainer = new TrainerModel(v4(), name, email, password, age, city)

    return {
      sucess: true,
      message: newTrainer
    }
  }
}

module.exports = CreateTrainerService