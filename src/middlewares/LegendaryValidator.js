/* function legendaryValidator(request, response, next) {
 const { name } = request.body;

 if (!name) {
  return response.status(400).json({error: "Nome é obrigatório"})
 }

 next();
}

module.exports = legendaryValidator; */

/* const { body } = require('express-validator')

const legendaryValidatorList = [

] */

const yup = require('yup');

async function legendaryValidator(request, response, next) {
  const schema = yup.object().shape({
    name: yup
      .string()
      .strict()
      .required('Nome é obrigatório')
      .typeError('Nome deve ser uma string'),
    type: yup
      .string()
      .strict()
      .required('Tipo é obrigatório')
      .typeError('Tipo deve ser uma string'),
    description: yup
      .string()
      .strict()
      .required()
      .min(10)
      .typeError('Descrição deve ser uma string')
  })

  await schema.validate(request.body).catch(err => {
    return response.status(400).json({
      message: err.errors
    })
  })

  next();
}

module.exports = legendaryValidator;