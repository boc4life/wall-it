'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    monthly_income: DataTypes.DECIMAL(10,2)
  }, {underscored: true});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Stock_buy);
    User.hasMany(models.Stock_sell);
    User.hasMany(models.User_expense);
  };
  return User;
};