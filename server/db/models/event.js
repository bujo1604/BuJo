'use strict';
const Sequelize = require('sequelize');
const db = require('../db');

const Event = db.define('event', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    location: {
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.STRING
    },
    time: {
        type: Sequelize.STRING
    }
});

module.exports = Event;
