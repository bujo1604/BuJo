'use strict';

const router = require('express').Router();
const {Event} = require('../db/models');

module.exports = router;


router.get('/', function (req, res, next) {
    Event.findAll()
    .then(event => res.json(event))
    .catch(next);

});


router.get('/:eventId', function (req, res, next) {
    Event.findById(req.params.eventId)
    .then(event => res.json(event))
    .catch(next);
});


router.post('/', function (req, res, next) {
   Event.create({
        name: req.body.name,
        location: req.body.location,
        time: req.body.time})
        .then(event => res.status(201).send(event))
        .catch(next);
});

router.put('/:eventId', function (req, res, next) {
     Event.findById(req.params.eventId)
    .then(event => {
        if (!event) {res.sendStatus(404)}
        return event.update({
            name: req.body.name,
            location: req.body.location,
            time: req.body.time});
    })
    .then(event => {
        res.send(event);
    })
    .catch(next);
});

router.delete('/:eventId', function (req, res, next) {
    const id = req.params.eventId;

  Event.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});
