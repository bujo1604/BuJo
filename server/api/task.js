'use strict';

const router = require('express').Router();
const {Task} = require('../db/models');

module.exports = router;


router.get('/', function (req, res, next) {
    Task.findAll()
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
