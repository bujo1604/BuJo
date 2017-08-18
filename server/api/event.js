'use strict';

const router = require('express').Router();
const {Event} = require('../db/models');

module.exports = router;

//retreive all events for user
router.get('/:userId', function (req, res, next) {
    let userId = req.params.userId
    Event.findAll({where: {userId}})
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
        time: req.body.time,
        date: req.body.date,
        userId: req.body.userId})
        
        .then(event => res.status(201).send(event))
        .catch(next);
});

router.put('/:eventId', (req, res, next) => {
    const id = req.params.eventId;
    Event.findById(id)
    .then(event => {
      
        return event.update(req.body)})
    .then(updated => {
       
        let updatedResponse = updated.dataValues;
       
        res.send({message: 'Updated event sucessfully', updatedResponse})
    })
    .catch(next);
})

router.delete('/:eventId', function (req, res, next) {
    const id = req.params.eventId;

  Event.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});
