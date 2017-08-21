'use strict';

const router = require('express').Router();
const { Color} = require('../db/models');

module.exports = router;

//retreive all tasks for user and add .category and .color property to task
router.get('/', function (req, res, next) {
    Color.findAll()
    .then(color => res.json(color))
    .catch(next);

});

