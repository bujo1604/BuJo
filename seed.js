const db = require('./server/db');
const User = require('./server/db/models/user');
const Color = require('./server/db/models/color');
const Category = require('./server/db/models/category');
const Event = require('./server/db/models/event');
const Task = require('./server/db/models/task');
const Note = require('./server/db/models/note');

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
  { name: 'self care', userId: 3, colorId: 1},
  { name: 'health', userId: 3, colorId: 2},
  { name: 'exercise', userId: 3, colorId: 3},
  { name: 'learning', userId: 3, colorId: 4},
  { name: 'social', userId: 3, colorId: 5},
];
const events = [
  { name: 'Mom\'s Birthday Dinner', location: '46 Ashland Avenue', date: '20170815', time: '20:00:00', userId: 1},
  { name: 'Grace Hopper Graduation', location: '5 Hanover Square', date: '20170815', time: '09:00:00', userId: 1},
  { name: 'Beach Trip', location: 'Rockaway Beach', date: '20170815', time: '11:00:00', userId: 1},
  { name: 'Going Away Party', location: '240 East 10th Street', date: '20170815', time: '20:00:00', userId: 1},
  { name: 'Hiking', location: 'Bear Mountain', date: '20170816', time: '10:00:00', userId: 1},
  { name: 'Doctor\'s Appointment', location: '80 East 11th Street', date: '20170816', time: '9:00:00', userId: 1},
  { name: 'Painting Class', location: '120 East 20th Street', date: '20170817', time: '20:00:00', userId: 1},
  { name: 'Yoga Class', location: '100 Saint Marks', date: '20170815', time: '20:00:00', userId: 2},
  { name: 'Grace Hopper Graduation', location: '5 Hanover Square', date: '20170815', time: '09:00:00', userId: 2},
  { name: 'Wedding', location: 'Church', date: '20170816', time: '10:00:00', userId: 2},
  { name: 'Interview with Google', location: 'Google', date: '20170816', time: '9:00:00', userId: 2},
  { name: 'Dinner with Mom', location: '46 Ashland Avenue', date: '20170817', time: '18:00:00', userId: 2},
  { name: 'Pilates Class', location: '150 5th Avenue, Brooklyn, NY 11217', date: '20170907', time: '09:00:00', userId: 3},
  { name: 'Vacation', location: 'Lake', date: '20170908', time: '10:00:00', userId: 3},
  { name: 'Dinner For Dads Birthday', location: 'sushi', date: '2010909', time: '9:00:00', userId: 3},
  { name: 'Welcome to Nightvale Book Release Party', location: 'The Strand', date: '20171017', time: '18:00:00', userId: 3},
];

const tasks = [
  { name: 'laundry', status: 'complete', date: '20170815', userId: 1, categoryId: 3, value:1},
  { name: 'run', status: 'complete', date: '20170815', userId: 1, categoryId: 2, value:1},
  { name: 'call mom', status: 'incomplete', date: '20170815', userId: 1, categoryId: 7, value:1},
  { name: 'grocery shopping', status: 'incomplete', date: '20170816', userId: 1, categoryId: 3,value:1},
  { name: 'fix sink', status: 'complete', date: '20170816', userId: 1, categoryId: 3,value:1},
  { name: 'paint', status: 'incomplete', date: '20170816', userId: 1, categoryId: 6, value:1},
  { name: 'reacto', status: 'complete', date: '20170816', userId: 1, categoryId: 5, value:1},
  { name: 'skype Ana', status: 'complete', date: '20170817', userId: 1, categoryId: 4, value:1},
  { name: 'cal Mom', status: 'complete', date: '20170917', userId: 1, categoryId: 2, value:1},
  { name: 'mop floor', status: 'complete', date: '20170918', userId: 1, categoryId: 1, value:1},
  { name: 'study', status: 'complete', date: '20170918', userId: 1, categoryId: 7, value:1},
  { name: 'run', status: 'complete', date: '20171016', userId: 1, categoryId: 6, value:1},
  { name: 'yoga', status: 'complete', date: '20171017', userId: 1, categoryId: 3, value:1},
  { name: 'study for google interview', status: 'incomplete', date: '20170815', userId: 2, categoryId: 13, value:1},
  { name: 'reacto', status: 'complete', date: '20170815', userId: 2, categoryId: 13, value:1},
  { name: 'learn d3', status: 'incomplete', date: '20170816', userId: 2, categoryId: 13 , value:1},
  { name: 'grocery shopping', status: 'complete', date: '20170816', userId: 2, categoryId: 14, value:1},
  { name: 'laundry', status: 'complete', date: '20170817', userId: 2, categoryId: 14, value:1},
  { name: 'Emergency Dance Party', status: 'incomplete', userId: 3, categoryId: 16 , value:1, assigned: 'unassigned', FutureMonth: '20170801'},
  { name: 'Go See The New York Neofuturists', status: 'incomplete', userId: 3, categoryId: 14 , value:1, assigned: 'unassigned', FutureMonth: '20170901'},
  { name: 'Performing Afts Camp Reunion', status: 'incomplete', userId: 3, categoryId: 15 , value:1, assigned: 'unassigned', FutureMonth: '20170901'},
  { name: 'Finish reading the book', status: 'complete', date: '20170816', userId: 3, categoryId: 15, value:1, assigned: 'assigned'},
  { name: 'Take care of the dogs', status: 'complete', date: '20170817', userId: 3, categoryId: 15, value:1, assigned: 'assigned', FutureMonth: '20170801'},
];



const notes = [
  { text: 'life is good', date: '20170815', userId: 1},
  { text: 'life is bad', date: '20170816', userId: 1},
  { text: 'life is hard', date: '20170816', userId: 1},
  { text: 'life is short', date: '20170817', userId: 1},
  { text: 'life is ok', date: '20170817', userId: 1},
  { text: 'life is good', date: '20170815', userId: 2},
  { text: 'life is bad', date: '20170816', userId: 2},
  { text: 'life is hard', date: '20170816', userId: 2},
  { text: 'life is short', date: '20170817', userId: 2},
  { text: 'life is ok', date: '20170817', userId: 2},

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
  ))
  .then(() =>
  Promise.all(notes.map(note =>
    Note.create(note))
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
