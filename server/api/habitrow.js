'use strict';

const router = require('express').Router();
const {HabitTrackerMain, HabitTrackerRow} = require('../db/models');

module.exports = router;



//retreive all tasks for user
//add .category and .color property to task

router.get('/:userId', function (req, res, next) {
    HabitTrackerRow.findAll({
        where: {
            userId: req.params.userId,
            
        }
        
    })
    .then(habitm => res.json(habitm))
    .catch(next);

});

router.put('/:rowId', function (req, res, next) {
  const rowId = req.params.rowId;

  HabitTrackerRow.findById(rowId)
    .then(row => row.update(req.body))
    .then((updatedRow)=>{res.json(updatedRow)})
    .catch(next);
});
