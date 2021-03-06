'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.comment.belongsTo(models.user)
      models.comment.belongsTo(models.campground)
    }
  };
  comment.init({
    text: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    campgroundId: DataTypes.INTEGER,
    submittedBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'comment',
  });
  return comment;
};