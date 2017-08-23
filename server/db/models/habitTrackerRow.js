'use strict';
const Sequelize = require('sequelize');
const db = require('../db');

const HabitTrackerRow = db.define('habitTrackerRow', {
    habit: {
        type: Sequelize.STRING,
        allowNull: false
    },
    month: {
        type: Sequelize.STRING
    },
    c1: {
        type: Sequelize.STRING
    },
    c2: {
        type: Sequelize.STRING
    },
    c3: {
        type: Sequelize.STRING
    },
    c4: {
        type: Sequelize.STRING
    },
    c5: {
        type: Sequelize.STRING
    },
    c6: {
        type: Sequelize.STRING
    },
    c7: {
        type: Sequelize.STRING
    },
    c8: {
        type: Sequelize.STRING
    },
    c9: {
        type: Sequelize.STRING
    },
    c10: {
        type: Sequelize.STRING
    },
    c11: {
        type: Sequelize.STRING
    },
    c12: {
        type: Sequelize.STRING
    },
    c13: {
        type: Sequelize.STRING
    },
    c14: {
        type: Sequelize.STRING
    },
    c15: {
        type: Sequelize.STRING
    },
    c16: {
        type: Sequelize.STRING
    },
    c17: {
        type: Sequelize.STRING
    },
    c18: {
        type: Sequelize.STRING
    },
    c19: {
        type: Sequelize.STRING
    },
    c20: {
        type: Sequelize.STRING
    },
    c21: {
        type: Sequelize.STRING
    },
    c22: {
        type: Sequelize.STRING
    },
    c23: {
        type: Sequelize.STRING
    },
    c24: {
        type: Sequelize.STRING
    },
    c25: {
        type: Sequelize.STRING
    },
    c26: {
        type: Sequelize.STRING
    },
    c27: {
        type: Sequelize.STRING
    },
    c28: {
        type: Sequelize.STRING
    },
    c29: {
        type: Sequelize.STRING
    },
    c30: {
        type: Sequelize.STRING
    },
    c31: {
        type: Sequelize.STRING
    }
});

module.exports = HabitTrackerRow;
