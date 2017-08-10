'use strict';
const Sequelize = require('sequelize');
const db = require('../db');

const Task = db.define('task', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    description: {
       type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
     status: {
        type: Sequelize.ENUM('available', 'unavailable')
    },
});

module.exports = Task;
