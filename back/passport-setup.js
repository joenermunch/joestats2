const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
const User = require('./models/User');
const mongoose = require('mongoose');

passport.serializeUser(function (user, done) {
  return done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id).then(function (user) {
    done(null, user);
  }).catch(function (err) {
    done(err, null, { message: 'User does not exist' });
  });
});
passport.use(
  new SpotifyStrategy(
    {
      clientID: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      callbackURL: 'http://localhost:5000/auth/spotify/callback'
    },
    function (accessToken, refreshToken, expires_in, profile, done) {

      User.findOne({ spotifyID: profile.id }).then(currentUser => {
        currentUser ? done(null, currentUser) : new User({ spotifyID: profile.id, accessToken, refreshToken }).save().then(newUser => done(null, newUser))
      })

    }
  )
);