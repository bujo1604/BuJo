'use strict';

const router = require('express').Router();
const {Task, Color} = require('../db/models');

module.exports = router;


//retreive all tasks for user between start and end date query
//and add .category and .color property to task
router.get('/:userId', function (req, res, next) {
    if (!req.query.startdate || !req.query.enddate) return next()
    Task.findAll({
        where: {
            userId: req.params.userId,
            date: { $between: [req.query.startdate, req.query.enddate]}
        },
        include: [{ all: true, nested: true }]
    })
    .then(task => res.json(task))
    .catch(next);

});

//retreive all tasks for user
//add .category and .color property to task
router.get('/:userId', function (req, res, next) {
    Task.findAll({
        where: {
            userId: req.params.userId,
        },
        include: [{ all: true, nested: true }]
    })
    .then(task => res.json(task))
    .catch(next);

});



router.get('/:taskId', function (req, res, next) {
   Task.findById(req.params.taskId)
    .then(task => res.json(task))
    .catch(next);
});


router.post('/', function (req, res, next) {
   Task.create({
        name: req.body.name,
        description: req.body.description,
        status: req.body.status})
        .then(task => res.status(201).send(task))
        .catch(next);
});

router.put('/:taskId', function (req, res, next) {
     Task.findById(req.params.taskId)
    .then(task => {
        if (!task) {res.sendStatus(404)}
        return task.update({
            name: req.body.name,
            description: req.body.description,
            status: req.body.status});
    })
    .then(task => {
        res.send(task);
    })
    .catch(next);
});

router.delete('/:taskId', function (req, res, next) {
    const id = req.params.taskId;

  Task.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});
