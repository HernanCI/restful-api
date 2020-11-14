'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AccountsAccountHolders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Accounts.belongsToMany(models.AccountHolders, { through: AccountsAccountHolders });
      models.AccountHolders.belongsToMany(models.Accounts, { through: AccountsAccountHolders });
      
    }
  };
  AccountsAccountHolders.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    accountId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    accountHolderId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'AccountsAccountHolders',
  });
  return AccountsAccountHolders;
};