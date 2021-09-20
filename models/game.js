'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Game.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      rating: DataTypes.INTEGER,
      background_image: DataTypes.STRING,
      released: DataTypes.STRING,
      platform: DataTypes.STRING,
      website: DataTypes.STRING,
      price: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Game',
      tableName: 'games'
    }
  )
  return Game
}