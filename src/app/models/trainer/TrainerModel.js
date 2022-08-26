import Sequelize, { Model } from "sequelize";

export class TrainerModel extends Model {
  static init(sequelize) {
    super.init(
      {
        id: Sequelize.UUIDV4(),
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
        age: Sequelize.STRING,
        city: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}
