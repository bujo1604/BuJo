'use strict';

const router = require('express').Router();
const {HabitTrackerMain, HabitTrackerRow} = require('../db/models');

module.exports = router;

router.get('/:userId', function (req, res, next) {
    if (!req.query.startdate || !req.query.enddate) return next()
    HabitTrackerRow.findAll({
        where: {
            userId: req.params.userId,
            month: { $between: [req.query.startdate, req.query.enddate]}
        }
        
    })
    .then(habitm => res.json(habitm))
    .catch(next);

});

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

router.post('/', function (req, res, next) {
    HabitTrackerRow.create(req.body)
    .then(function(newRow){
        res.status(201).json(newRow);
    })
    .catch(next);
});

router.put('/:rowId', function (req, res, next) {
  const rowId = req.params.rowId;

  HabitTrackerRow.findById(rowId)
    .then(row => row.update(req.body))
    .then((updatedRow)=>{res.json(updatedRow)})
    .catch(next);
});
