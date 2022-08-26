import TrainerModel from "../../models/trainer/TrainerModel";

export default class ListTrainerService {
  constructor() {}

  listAll() {
    const trainers = [
      new TrainerModel(
        "5ed061a8-dacb-4b14-af79-7e7abea09b45",
        "Bruno",
        "boliveira@digitalhouse.com",
        "123456",
        25,
        "Cariacica"
      ),
    ];

    return trainers;
  }

  listOne(email, password) {
    const trainer = this.listAll().find(
      (trainer) => trainer.email === email && trainer.password === password
    );

    return trainer;
  }
}
