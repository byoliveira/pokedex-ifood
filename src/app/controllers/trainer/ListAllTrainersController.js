import ListTrainerService from "../../services/trainer/ListTrainerService";

export default class ListAllTrainersController {
  constructor() {
    this.service = new ListTrainerService();
  }

  listAll(request, response) {
    const trainers = this.service.listAll();

    return response.send(trainers);
  }
}
