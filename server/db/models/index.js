const User = require('./user');
const Category = require('./category');
const Color = require('./color');
const Event = require('./event');
const Task = require('./task');
const Note = require('./note');
const HabitTrackerMain = require('./habitTrackerMain');
const HabitTrackerRow = require('./habitTrackerRow');

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
User.hasMany(Task);
User.hasMany(Category);
User.hasMany(Event);
User.hasMany(Note);
User.hasMany(HabitTrackerMain);
User.hasMany(HabitTrackerRow);
HabitTrackerMain.belongsTo(User);
HabitTrackerMain.hasMany(HabitTrackerRow);
HabitTrackerRow.belongsTo(HabitTrackerMain);
HabitTrackerRow.belongsTo(User);
Task.belongsTo(Category);
Category.belongsTo(Color);
Event.belongsTo(User);


module.exports = {
  User,
  Category,
  Color,
  Event,
  Task,
  Note,
  HabitTrackerMain,
  HabitTrackerRow
};
