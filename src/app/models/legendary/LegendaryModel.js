import Sequelize, { Model } from "sequelize";

export default class LegendaryModel extends Model {
  static init(sequelize) {
    super.init(
      {
        id: Sequelize.UUIDV4(),
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        type: Sequelize.STRING,
        healthPoints: Sequelize.INTEGER,
        specialAttack: Sequelize.INTEGER,
        defense: Sequelize.INTEGER,
        attack: Sequelize.INTEGER,
        experience: Sequelize.INTEGER,
        specialDefense: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
}
