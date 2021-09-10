import Sequelize from "sequelize";

const sequelize = new Sequelize(
  "postgres://dsulewgt:IMGp_TmAgGhX4gOQd5itDeCyeLLUkp0R@queenie.db.elephantsql.com/dsulewgt",
  {
    dialect: "postgre",
    define: {
      timestamps: false,
    },
  }
);

export default sequelize;
