'use strict';

const router = require('express').Router();
const {Note} = require('../db/models');

module.exports = router;

//retreive all notes for user
router.get('/:userId', function (req, res, next) {
    let userId = req.params.userId
    Note.findAll({
        where: {userId},
    })
    .then(task => res.json(task))
    .catch(next);
});

//post note for user
router.post('/', function (req, res, next) {
    return Note.create({
        userId: req.body.userId,
        text: req.body.note,
        date: req.body.date
    })
    .then(newNote => res.json(newNote))
    .catch(next);
});


router.put('/:noteId', function (req, res, next) {
     Note.findById(req.params.taskId)
    .then(note => {
        if (!note) {res.sendStatus(404)}
        return note.update({
            userId: req.body.userId,
            text: req.body.note,
            date: req.body.date});
    })
    .then(note => {
        res.send(note);
    })
    .catch(next);
});
