'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class campground extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.campground.belongsTo(models.user)
      models.campground.hasMany(models.comment)
    }
  };
  campground.init({
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(10, 2),
    imageUrl: DataTypes.STRING,
    description: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'campground',
  });
  return campground;
};