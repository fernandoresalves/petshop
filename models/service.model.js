import Sequelize from "sequelize";
import db from "../repositories/db.js";
import Animal from "../models/animal.model.js";

const Service = db.define(
  "servicos",
  {
    servicoId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    descricao: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    valor: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
  },
  { underscored: true }
);

Service.belongsTo(Animal, { foreignKey: "animalId" });

export default Service;
