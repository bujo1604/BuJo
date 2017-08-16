'use strict';
const Sequelize = require('sequelize');
const db = require('../db');
const Color = require('./color');

const Category = db.define('category', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    } }
// }, {
//     scopes: {
//         hex:{
//             include:[{
//                    model: Color
//                 }]
//         }
//     }
// }
);


module.exports = Category;
