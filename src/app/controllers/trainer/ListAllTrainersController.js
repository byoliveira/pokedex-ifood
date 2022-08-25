const ListTrainerService = require("../../services/trainer/ListTrainerService")

class ListAllTrainersController {
  constructor() {}

  list(request, response) {
    const trainers = ListTrainerService.listAll()

    return response.send(trainers)
  }
}

export default ListAllTrainersController;