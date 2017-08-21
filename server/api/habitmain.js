'use strict';

const router = require('express').Router();
const {HabitTrackerMain} = require('../db/models');

module.exports = router;



//retreive all tasks for user
//add .category and .color property to task

router.get('/:userId/', function (req, res, next) {
    HabitTrackerMain.findAll({
        where: {
            userId: req.params.userId,
           
        }
        
    })
    .then(habitm => res.json(habitm))
    .catch(next);

});
