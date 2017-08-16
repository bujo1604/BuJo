const router = require('express').Router();
module.exports = router;

router.use('/users', require('./users'));
router.use('/categories', require('./category'));
router.use('/tasks', require('./task'));
router.use('/colors', require('./color'));
router.use('/events', require('./event'));
router.use('/notes', require('./note'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
