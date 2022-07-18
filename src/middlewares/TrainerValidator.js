/* Daniel Filho,
Jackson Oliveira,
Lilian Lucena */

const yup = require('yup')

async function TrainerValidator(request, response, next) {

  const schema = yup.object().shape({
    name: yup.string().strict().required('Name é obrigatório').min(10).typeError("Nome deve ser string."),
    age: yup.number().strict().typeError("Idade deve ser número"),
    city: yup.string().strict().required().min(10).typeError("Cidade deve ser string.")
  })

  await schema.validate(request.body).catch(err => {
    return response.status(400).json({
      message: err.errors
    })
  })

  next()
}

module.exports = TrainerValidator