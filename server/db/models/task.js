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
     status: {
        type: Sequelize.ENUM('complete', 'incomplete')
    },
    date: {
        type: Sequelize.STRING
    }, 
    value: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    }
});

module.exports = Task;

//mb other table for status
// mb no useId in task
