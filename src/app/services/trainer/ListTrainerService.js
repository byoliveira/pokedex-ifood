const TrainerModel = require("../../models/trainer/TrainerModel")

const ListTrainerService = {
  listAll: () => {
    const trainers = [
      new TrainerModel(
        '5ed061a8-dacb-4b14-af79-7e7abea09b45',
        "Daniel",
        32,
        "Pallet"
      ),
      new TrainerModel(
        '5ed061a8-dacb-4b14-af79-7e7abea09b47',
        "Larissa",
        25,
        "Vermelion"
      ),
    ]

    return trainers
  }
}

module.exports = ListTrainerService