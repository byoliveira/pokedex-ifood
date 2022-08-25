import TrainerModel from "../../models/trainer/TrainerModel";

const ListTrainerService = {
  listAll: () => {
    const trainers = [
      new TrainerModel(
        '5ed061a8-dacb-4b14-af79-7e7abea09b45',
        "Daniel",
        'daniel@digitalhouse.com',
        '123456',
        32,
        "Pallet"
      ),

      new TrainerModel(
        '5ed061a8-dacb-4b14-af79-7e7abea09b45',
        'Bruno',
        'boliveira@digitalhouse.com',
        '123456',
        25,
        'Cariacica'
        ),
    ]

    return trainers
  },

  FindTrainer: (email, password) => {
    const trainer = ListTrainerService.listAll().find(trainer => trainer.email === email && trainer.password === password)

    return trainer
  }
}

export default ListTrainerService