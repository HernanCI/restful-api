'use strict';

const {
  Model
} = require('sequelize');
module.exports  = (sequelize, DataTypes) => {
  class Accounts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Accounts.belongsToMany(models.AccountHolders, {
        through: models.AccountsAccountHolders,
        onDelete: 'cascade'
      })
    }
  };
  Accounts.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
      autoIncrement: true
    },
    balance: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'Accounts',
  });
  return Accounts;
};
