'use strict';

const router = require('express').Router();
const {Category} = require('../db/models');

module.exports = router;


router.get('/', function (req, res, next) {
    Category.findAll()
    .then(category => res.json(category))
    .catch(next);

});


router.get('/:categoryId', function (req, res, next) {
    Category.findById(req.params.categoryId)
    .then(category => res.json(category))
    .catch(next);
});


router.post('/', function (req, res, next) {
   Category.create({
        name: req.body.name,
        color: req.body.color})
        .then(category => res.status(201).send(category))
        .catch(next);
});

router.put('/:categoryId', function (req, res, next) {
    Category.findById(req.params.categoryId)
    .then(category => {
        if (!category) {res.sendStatus(404)}
        return category.update({
            name: req.body.name,
            color: req.body.color});
    })
    .then(category => {
        res.send(category);
    })
    .catch(next);
});

router.delete('/:categoryId', function (req, res, next) {
    const id = req.params.categoryId;

  Category.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});
