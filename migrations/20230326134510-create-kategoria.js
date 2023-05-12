'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('kategoriak', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nev: {
        type: Sequelize.STRING(50)
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('kategoriak');
  }
};