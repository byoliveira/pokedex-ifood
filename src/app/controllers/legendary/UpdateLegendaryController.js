const UpdateLegendaryService = require('../../services/legendary/UpdateLegendaryService');

class UpdateLegendaryController {
    constructor() {}

    update(request, response) {
        const { id } = request.params
        const {
          name,
          description,
          type,
          healthPoints,
          specialAttack,
          defense,
          attack,
          experience,
          specialDefense
        } = request.body;
    
        const updatedLegendary = UpdateLegendaryService.update(
          id,
          name,
          description,
          type,
          healthPoints,
          specialAttack,
          defense,
          attack,
          experience,
          specialDefense
        )
    
        response.json(updatedLegendary)
      }
}

export default UpdateLegendaryController;