'use strict';
const Sequelize = require('sequelize');
const db = require('../db');

const HabitTrackerRow = db.define('habitTrackerRow', {
    habit: {
        type: Sequelize.STRING,
        allowNull: false
    },
    month: {
        type: Sequelize.STRING,
        defaultValue: "white"
    },
    c1: {
        type: Sequelize.STRING,
        defaultValue: "white"
    },
    c2: {
        type: Sequelize.STRING,
        defaultValue: "white"
    },
    c3: {
        type: Sequelize.STRING,
        defaultValue: "white"
    },
    c4: {
        type: Sequelize.STRING,
        defaultValue: "white"
    },
    c5: {
        type: Sequelize.STRING,
        defaultValue: "white"
    },
    c6: {
        type: Sequelize.STRING,
        defaultValue: "white"
    },
    c7: {
        type: Sequelize.STRING,
        defaultValue: "white"
    },
    c8: {
        type: Sequelize.STRING,
        defaultValue: "white"
    },
    c9: {
        type: Sequelize.STRING,
        defaultValue: "white"
    },
    c10: {
        type: Sequelize.STRING,
        defaultValue: "white"
    },
    c11: {
        type: Sequelize.STRING,
        defaultValue: "white"
    },
    c12: {
        type: Sequelize.STRING,
        defaultValue: "white"
    },
    c13: {
        type: Sequelize.STRING,
        defaultValue: "white"
    },
    c14: {
        type: Sequelize.STRING,
        defaultValue: "white"
    },
    c15: {
        type: Sequelize.STRING,
        defaultValue: "white"
    },
    c16: {
        type: Sequelize.STRING,
        defaultValue: "white"
    },
    c17: {
        type: Sequelize.STRING,
        defaultValue: "white"
    },
    c18: {
        type: Sequelize.STRING,
        defaultValue: "white"
    },
    c19: {
        type: Sequelize.STRING,
        defaultValue: "white"
    },
    c20: {
        type: Sequelize.STRING,
        defaultValue: "white"
    },
    c21: {
        type: Sequelize.STRING,
        defaultValue: "white"
    },
    c22: {
        type: Sequelize.STRING,
        defaultValue: "white"
    },
    c23: {
        type: Sequelize.STRING,
        defaultValue: "white"
    },
    c24: {
        type: Sequelize.STRING,
        defaultValue: "white"
    },
    c25: {
        type: Sequelize.STRING,
        defaultValue: "white"
    },
    c26: {
        type: Sequelize.STRING,
        defaultValue: "white"
    },
    c27: {
        type: Sequelize.STRING,
        defaultValue: "white"
    },
    c28: {
        type: Sequelize.STRING,
        defaultValue: "white"
    },
    c29: {
        type: Sequelize.STRING,
        defaultValue: "white"
    },
    c30: {
        type: Sequelize.STRING,
        defaultValue: "white"
    },
    c31: {
        type: Sequelize.STRING,
        defaultValue: "white"
    }
});

module.exports = HabitTrackerRow;
