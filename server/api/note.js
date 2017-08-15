'use strict';

const router = require('express').Router();
const {Note} = require('../db/models');

module.exports = router;

//retreive all tasks for user and add .category and .color property to task
router.get('/:userId', function (req, res, next) {
    let userId = req.params.userId
    Note.findAll({
        where: {userId},
    })
    .then(task => res.json(task))
    .catch(next);

});
