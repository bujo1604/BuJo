const db = require('./server/db');
const User = require('./server/db/models/user');
const Color = require('./server/db/models/color');
const Category = require('./server/db/models/category');
const Event = require('./server/db/models/event');
const Task = require('./server/db/models/task');

const users = [{
  email: 'lena@gmail.com',
  password: '123',
  salt: 'iamSaltzzz',
  googleId: '23020zjsjwgoogleID223'
},
{
  email: 'svetlana@gmail.com',
  password: '123',
  salt: 'iamSaltzzz',
  googleId: '23020zjsjwgoogleID223'
},
{
  email: 'emily@gmail.com',
  password: '123',
  salt: 'iamSaltzzz',
  googleId: '23020zjsjwgoogleID223'
},
{
  email: 'maggy@gmail.com',
  password: '123',
  salt: 'iamSaltzzz',
  googleId: '23020zjsjwgoogleID223'
}];

const colors = [
  { hex: '#E91E63'},
  { hex: '#E57373'},
  { hex: '#7C4DFF'},
  { hex: '#2196F3'},
  { hex: '#26C6DA'},
  { hex: '#4CAF50'},
  { hex: '#CDDC39'},
  { hex: '#FF9800'}
];

const categories = [
  { name: 'self care', userId: 1, colorId: 1},
  { name: 'exercise', userId: 1, colorId: 2},
  { name: 'home', userId: 1, colorId: 3},
  { name: 'social', userId: 1, colorId: 4},
  { name: 'learning', userId: 1, colorId: 5},
  { name: 'creativity', userId: 1, colorId: 6},
  { name: 'family', userId: 1, colorId: 7},
  { name: 'nature', userId: 1, colorId: 8},
  { name: 'self care', userId: 2, colorId: 1},
  { name: 'exercise', userId: 2, colorId: 2},
  { name: 'creativity', userId: 2, colorId: 3},
  { name: 'social', userId: 2, colorId: 4},
  { name: 'learning', userId: 2, colorId: 5},
  { name: 'home', userId: 2, colorId: 6},
];
const events = [
  { name: 'Mom\'s Birthday Dinner', location: '46 Ashland Avenue', time: '20:00:00', userId: 1},
  { name: 'Grace Hopper Graduation', location: '5 Hanover Square', time: '09:00:00', userId: 1},
  { name: 'Beach Trip', location: 'Rockaway Beach', time: '11:00:00', userId: 1},
  { name: 'Going Away Party', location: '240 East 10th Street', time: '20:00:00', userId: 1},
  { name: 'Hiking', location: 'Bear Mountain', time: '10:00:00', userId: 1},
  { name: 'Doctor\'s Appointment', location: '80 East 11th Street', time: '9:00:00', userId: 1},
  { name: 'Painting Class', location: '120 East 20th Street', time: '20:00:00', userId: 1},
  { name: 'Yoga Class', location: '100 Saint Marks', time: '20:00:00', userId: 2},
  { name: 'Grace Hopper Graduation', location: '5 Hanover Square', time: '09:00:00', userId: 2},
  { name: 'Wedding', location: 'Church', time: '10:00:00', userId: 2},
  { name: 'Interview with Google', location: 'Google', time: '9:00:00', userId: 2},
  { name: 'Dinner with Mom', location: '46 Ashland Avenue', time: '18:00:00', userId: 2}
];

const tasks = [
  { name: 'laundry', status: 'complete', userId: 1, categoryId: 3},
  { name: 'run', status: 'complete', userId: 1, categoryId: 2},
  { name: 'call mom', status: 'incomplete', userId: 1, categoryId: 7},
  { name: 'grocery shopping', status: 'incomplete', userId: 1, categoryId: 3},
  { name: 'fix sink', status: 'complete', userId: 1, categoryId: 3},
  { name: 'paint', status: 'incomplete', userId: 1, categoryId: 6},
  { name: 'reacto', status: 'complete', userId: 1, categoryId: 5},
  { name: 'skype Ana', status: 'complete', userId: 1, categoryId: 4},
  { name: 'study for google interview', status: 'incomplete', userId: 2, categoryId: 13},
  { name: 'reacto', status: 'complete', userId: 2, categoryId: 13},
  { name: 'learn d3', status: 'incomplete', userId: 2, categoryId: 13},
  { name: 'grocery shopping', status: 'complete', userId: 2, categoryId: 14},
  { name: 'laundry', status: 'complete', userId: 2, categoryId: 14},
];


const seed = () =>
  Promise.all(users.map(user =>
    User.create(user))
  )
  .then(() =>
  Promise.all(colors.map(color =>
    Color.create(color))
  ))
  .then(() =>
  Promise.all(categories.map(category =>
    Category.create(category))
  ))
  .then(() =>
  Promise.all(events.map(event =>
    Event.create(event))
  ))
  .then(() =>
  Promise.all(tasks.map(task =>
    Task.create(task))
  )
);


const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};
main();
