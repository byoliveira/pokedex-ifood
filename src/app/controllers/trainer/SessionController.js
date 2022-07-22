const jwt = require('jsonwebtoken');
const ListTrainerService = require('../../services/trainer/ListTrainerService');
const controller = require('../../controllers/trainer/TrainerController');


const SessionController = {
  create: (request, response) => {
    const { email, password } = request.body

    const trainer = ListTrainerService.FindTrainer(email, password)


  /*   if(trainerIndex < 0) {
      return response.status(401).json({error: 'Trainer not found'})
    }

    if(trainer[trainerIndex].password !== password) {
      return response.status(401).json({error: 'Invalid password'})
    } */

    const {id, name} = trainer;

    return response.json({
      trainer: {
        id,
        name,
        email
      },
      token: jwt.sign({ id }, 'a07bda8fd5e39462b4c3d860a36f6b4d', {
        expiresIn: '5d'
      })
    })
  }
}

module.exports = SessionController