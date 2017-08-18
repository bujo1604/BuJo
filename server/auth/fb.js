
//   const passport = require('passport')
// const router = require('express').Router()
// const FacebookStrategy = require('passport-facebook-oauth').OAuth2Strategy
// const {User} = require('../db/models')
// module.exports = router

/**
 * For OAuth keys and other secrets, your Node process will search
 * process.env to find environment variables. On your production server,
 * you will be able to set these environment variables with the appropriate
 * values. In development, a good practice is to keep a separate file with
 * these secrets that you only share with your team - it should NOT be tracked
 * by git! In this case, you may use a file called `secrets.js`, which will
 * set these environment variables like so:
 *
 * process.env.GOOGLE_CLIENT_ID = 'your google client id'
 * process.env.GOOGLE_CLIENT_SECRET = 'your google client secret'
 * process.env.GOOGLE_CALLBACK = '/your/google/callback'
 */

// const googleConfig = {
//   clientID: process.env.GOOGLE_CLIENT_ID,
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//   callbackURL: process.env.GOOGLE_CALLBACK
// }

// const strategy = new GoogleStrategy(googleConfig, (token, refreshToken, profile, done) => {
//   const googleId = profile.id
//   const name = profile.displayName
//   const email = profile.emails[0].value

//   User.find({where: {googleId}})
//     .then(user => user
//       ? done(null, user)
//       : User.create({name, email, googleId})
//         .then(user => done(null, user))
//     )
//     .catch(done)
// })

// passport.use(strategy)

// router.get('/', passport.authenticate('google', {scope: 'email'}))

// router.get('/callback', passport.authenticate('google', {
//   successRedirect: '/home',
//   failureRedirect: '/login'
// }))


// passport.use(new FacebookStrategy({
//     clientID: FACEBOOK_APP_ID,
//     clientSecret: FACEBOOK_APP_SECRET,
//     callbackURL: "http://localhost:3000/auth/facebook/callback"
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ facebookId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
// ));


// router.get('/auth/facebook',
//   passport.authenticate('facebook'));

// router.get('/auth/facebook/callback',
//   passport.authenticate('facebook', { failureRedirect: '/login' }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   });

//  router.get('/auth/facebook',
//   passport.authenticate('facebook', { scope: ['user_friends', 'manage_pages'] }));

//   router.get('/auth/facebook',
//   passport.authenticate('facebook', { authType: 'rerequest', scope: ['user_friends', 'manage_pages'] }));
// new FacebookStrategy({
//   clientID: FACEBOOK_APP_ID,
//   clientSecret: FACEBOOK_APP_SECRET,
//   callbackURL: "http://localhost:3000/auth/facebook/callback",
//   profileFields: ['id', 'displayName', 'photos', 'email']
// }), ...)

//   new FacebookStrategy({
//   clientID: FACEBOOK_APP_ID,
//   clientSecret: FACEBOOK_APP_SECRET,
//   callbackURL: "http://localhost:3000/auth/facebook/callback",
//   enableProof: true
// }, ...)

// config/passport.js

// load all the things we need
// var LocalStrategy    = require('passport-local').Strategy;
// var FacebookStrategy = require('passport-facebook').Strategy;

// // load up the user model
// var User  = require('../db/models');

// // load the auth variables
// var configAuth = require('./auth');

// module.exports = function(passport) {

//     // used to serialize the user for the session
//     passport.serializeUser(function(user, done) {
//         done(null, user.id);
//     });

//     // used to deserialize the user
//     passport.deserializeUser(function(id, done) {
//         User.findById(id, function(err, user) {
//             done(err, user);
//         });
//     });

//     // code for login (use('local-login', new LocalStategy))
//     // code for signup (use('local-signup', new LocalStategy))

//     // =========================================================================
//     // FACEBOOK ================================================================
//     // =========================================================================
//     passport.use(new FacebookStrategy({

//         // pull in our app id and secret from our auth.js file
//         clientID        : configAuth.facebookAuth.clientID,
//         clientSecret    : configAuth.facebookAuth.clientSecret,
//         callbackURL     : configAuth.facebookAuth.callbackURL

//     },

//     // facebook will send back the token and profile
//     function(token, refreshToken, profile, done) {

//         // asynchronous
//         process.nextTick(function() {

//             // find the user in the database based on their facebook id
//             User.findOne({ 'facebook.id' : profile.id }, function(err, user) {

//                 // if there is an error, stop everything and return that
//                 // ie an error connecting to the database
//                 if (err)
//                     return done(err);

//                 // if the user is found, then log them in
//                 if (user) {
//                     return done(null, user); // user found, return that user
//                 } else {
//                     // if there is no user found with that facebook id, create them
//                     var newUser            = new User();

//                     // set all of the facebook information in our user model
//                     newUser.facebook.id    = profile.id; // set the users facebook id
//                     newUser.facebook.token = token; // we will save the token that facebook provides to the user
//                     newUser.facebook.name  = profile.name.givenName + ' ' + profile.name.familyName; // look at the passport user profile to see how names are returned
//                     newUser.facebook.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first

//                     // save our user to the database
//                     newUser.save(function(err) {
//                         if (err)
//                             throw err;

//                         // if successful, return the new user
//                         return done(null, newUser);
//                     });
//                 }

//             });
//         });

//     }));

// };



const passport = require('passport')
const router = require('express').Router()
const FacebookStrategy = require('passport-facebook').Strategy;
const {User} = require('../db/models')
module.exports = router

/**
 * For OAuth keys and other secrets, your Node process will search
 * process.env to find environment variables. On your production server,
 * you will be able to set these environment variables with the appropriate
 * values. In development, a good practice is to keep a separate file with
 * these secrets that you only share with your team - it should NOT be tracked
 * by git! In this case, you may use a file called `secrets.js`, which will
 * set these environment variables like so:
 *
 * process.env.GOOGLE_CLIENT_ID = 'your google client id'
 * process.env.GOOGLE_CLIENT_SECRET = 'your google client secret'
 * process.env.GOOGLE_CALLBACK = '/your/google/callback'
 */

//   process.env.clientID = '643395725995953';
//    process.env.clientSecret = '399073e4435ab8c87f589c2a57e63558';
// process.env.callbackURL = "http://localhost:3000/auth/facebook/callback";

const facebookConfig = {
  clientID: '643395725995953',
  clientSecret:'399073e4435ab8c87f589c2a57e63558',
  callbackURL: 'auth/facebook/callback'
}

const strategy = new FacebookStrategy(facebookConfig, (token, refreshToken, profile, done) => {
  const facebookId = profile.id
  const name = profile.displayName
  const email = profile.emails[0].value

  User.find({where: {clientId}})
    .then(user => user
      ? done(null, user)
      : User.create({name, email, facebookId})
        .then(user => done(null, user))
    )
    .catch(done)
})

passport.use(strategy)

router.get('/', passport.authenticate('facebook', {scope: 'email'}))

router.get('/callback', passport.authenticate('facebook', {
  successRedirect: '/home',
  failureRedirect: '/login'
}))
