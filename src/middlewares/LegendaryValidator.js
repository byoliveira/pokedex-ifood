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

    await schema.validate(request.body).catch(err => {
      return response.status(400).json({
        error: err.errors
      })
    });
    next()
  }  

module.exports = legendaryValidator;

