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
  const schema =  yup.object().shape({
    name: yup.string().required('Name é obrigatório'),
    type: yup.string().required('Type é obrigatório'),
    description: yup.string().required().min(10)
  })

   if(! (await schema.isValidSync(request.body))) {
    return response.status(400).json({error: 'Não foi possível cadastrar o legendary, verifique os campos obrigatório!'})
  } 

  next();
}

module.exports = legendaryValidator;