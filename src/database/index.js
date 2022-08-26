import { Sequelize } from "sequelize";

import TrainerModel from "../app/models/trainer/TrainerModel";

import databaseConfig from "../config/database";

const models = [TrainerModel];

export default class Database {
  constructor() {
    this.init();
  }
  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}
