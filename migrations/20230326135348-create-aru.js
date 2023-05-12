'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('aruk', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nev: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      kategoriaId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      leiras: {
        type: Sequelize.STRING(600)
      },
      keszlet: {
        type: Sequelize.INTEGER
      },
      ar: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      kepUrl: {
        type: Sequelize.STRING
      }   
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('aruk');
  }
};