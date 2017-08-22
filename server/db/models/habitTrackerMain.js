'use strict';
const Sequelize = require('sequelize');
const db = require('../db');

const HabitTrackerMain = db.define('habitTrackerMain', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    month: {
        type: Sequelize.STRING
    }
});

module.exports = HabitTrackerMain;
