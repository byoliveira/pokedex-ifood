const yup = require('yup')

async function TrainerValidator(request, response, next) {
  const {
    name,
    age,
    city
  } = request.body

  const schema = yup.object().shape({
    name: yup.string().required('Name é obrigatório'),
    age: yup.number().required().positive(),
    city: yup.string().required()
  })

  // schema.isValid({
  //   name,
  //   age,
  //   city
  // }).then(resposta => {
  //   console.log(resposta)
  // })

  // const isValid = await schema.isValid({ name, age, city })

  // if (!isValid) {
  //   return response.status(400).json({
  //     message: "Deu problema"
  //   })
  // }

  await schema.validate({ name, age, city }).catch(err => {
    return response.status(400).json({
      message: err.errors
    })
  })

  // try {
  //   await schema.validate({ name, age, city })
  // } catch (err) {
  //   return response.status(400).json({
  //     message: err.errors
  //   })
  // }

  next()
}

module.exports = TrainerValidator