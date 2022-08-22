import Sequelize,{ Model } from 'sequelize'

class TrainerModel extends Model {
  static init(sequelize){
    super.init({
      id: Sequelize.UUIDV4(),
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.STRING,
      age: Sequelize.STRING,
      city: Sequelize.STRING
    }, {
      sequelize
    })
  }
}

export { TrainerModel }


/* function TrainerModel(id, name, email, password, age, city) {
  this.id = id
  this.name = name
  this.email = email
  this.password = password
  this.age = age
  this.city = city
}

module.exports = TrainerModel */