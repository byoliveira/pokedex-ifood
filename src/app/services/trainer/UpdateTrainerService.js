const ListTrainerService = require("./ListTrainerService")

const UpdateTrainerService = {
  update: (id, name, age, city) => {
    const trainers = ListTrainerService.listAll()

    const updateTrainer = trainers.find(trainer => trainer.id === id)
    const updateTrainerIndex = trainers.findIndex(trainer => trainer.id === id)

    if (!updateTrainer) {
      return {
        sucess: false,
        message: "Treinador não encontrado"
      }
    }

    if (name.length < 5) {
      return {
        sucess: false,
        message: "Nome precisa ter pelo menos 5 caracteres"
      }
    }

    if (age < 15 || age >= 40) {
      return {
        sucess: false,
        message: "Somente maiores de 15 e menores de 40 anos podem participar"
      }
    }

    if (city !== "Pallet" && city !== "Vermelion") {
      return {
        sucess: false,
        message: "Somente moradores de Pallet e Vermelion podem participar"
      }
    }

    trainers[updateTrainerIndex] = {
      id,
      name,
      age,
      city
    }

    return {
      sucess: true,
      message: trainers[updateTrainerIndex]
    }
  }
}

module.exports = UpdateTrainerService