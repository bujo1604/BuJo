'use strict';
const Sequelize = require('sequelize');
const db = require('../db');

const Note = db.define('note', {
    text: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    date: {
        type: Sequelize.STRING
    }
});

module.exports = Note;
