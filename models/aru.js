'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aru extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Aru.belongsTo(models.Kategoria, {
        as: "Kategoria",
        foreignKey: 'kategoriaId'
      })
    }
  }
  Aru.init({
    nev: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    kategoriaId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    leiras: DataTypes.STRING(600),
    keszlet: DataTypes.INTEGER,
    ar: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    kepUrl: DataTypes.STRING    
  }, {
    sequelize,
    modelName: 'Aru',
    tableName: 'aruk',
    timestamps: false
  });
  return Aru;
};