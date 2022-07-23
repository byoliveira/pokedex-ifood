const jwt = require('jsonwebtoken')
const ListTrainerService = require('../../services/trainer/ListTrainerService')
const controller = require('../../controllers/trainer/TrainerController')
// const yup = require('yup')


const SessionController = {
    create: (request, response) => {
        const {email, password} = request.body

        const trainer = ListTrainerService.listAll()

        const trainerIndex = trainer.findIndex(trainer => trainer.email === email)

        if (trainerIndex < 0) {
            return response.status(401).json({error: 'Trainer not found'})
        }

        if (trainer[trainerIndex].password !== password) {
            return response.status(401).json({error: 'Invalid password'})
        }

        const {id, name} = trainer

        return response.json({
            
        })
    }
}

module.exports = SessionController