const TrainerModel = require("../../models/trainer/TrainerModel")

const ListTrainerService = {
  listAll: () => {
    const trainers = [(
      /* new TrainerModel({
        id: '5ed061a8-dacb-4b14-af79-7e7abea09b45',
        name: "Daniel",
        email: 'daniel@digitalhouse.com',
        password: '123456',
        age: 32,
        city: "Pallet"
      }, */
      new TrainerModel(
        '5ed061a8-dacb-4b14-af79-7e7abea09b45',
        'Bruno',
        'boliveira@digitalhouse.com',
        '123456',
        25,
        'Cariacica -'
        )
      ),
    ]

    return trainers
  },
  FindTrainer: (email, password) => {
    const trainer = ListTrainerService.listAll().find(trainer => trainer.email === email && trainer.password === password)

    return trainer
  }
}

module.exports = ListTrainerService