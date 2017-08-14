'use strict';

const router = require('express').Router();
const {Task} = require('../db/models');

module.exports = router;

//retreive all tasks for user and add .category and .color property to task
router.get('/:userId', function (req, res, next) {
    let userId = req.params.userId
    Task.findAll({
        where: {userId},
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
