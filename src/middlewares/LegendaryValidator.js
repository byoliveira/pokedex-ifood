const yup = require('yup');

async function legendaryValidator(request, response, next) {

    const schema = yup.object().shape({ 
      name: yup.string().strict().required('Nome é obrigatório').typeError('Deve ser uma string'),
      type: yup.string().strict().required('O tipo é obrigatório').typeError('Deve ser uma string'),
      description: yup.string().strict().required().min(10).typeError('Deve ser uma string'),
    })

    await schema.validate(request.body).catch(err => {
      return response.status(400).json({
        error: err.errors
      })
    });
    next()
  }  

module.exports = legendaryValidator;

