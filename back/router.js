const express = require('express');
const passport = require('passport');
const Router = express.Router();
const cors = require('cors');
const axios = require('axios');
const User = require('./models/User');
var wkhtmltoimage = require('wkhtmltoimage');

Router.use(cors());

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Router.get('/auth/spotify', passport.authenticate('spotify'), function (req, res) {
  // The request will be redirected to spotify for authentication, so this
  // function will not be called.
});

Router.get('/failed', (req, res) => res.send({ error: 'failed' }));
Router.get('/success', (req, res) => console.log(req.user));

Router.get(
  '/auth/spotify/callback',
  passport.authenticate('spotify', { failureRedirect: '/failed' }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('http://localhost:4200/userpage');
  }
);

//'/api/auth/spotify'

Router.get('/auth/spotify/cookies', (req, res) => {
  res.send(req.user);
})

Router.get('/auth/spotify/refresh', (req, res) => {

  axios({
    method: 'POST',
    url: 'https://accounts.spotify.com/api/token',
    params: {
      grant_type: 'refresh_token',
      refresh_token: req.user.refreshToken,
      client_id: "0b07a4951b614124920b1c1c4edffecb",
      client_secret: "b993ed97c4734ce5b7b1d11ff75ba11c",
    },
    headers: { "content-type": "application/x-www-form-urlencoded" }
  })
    .then((response) => {

      const filter = { spotifyID: req.user.spotifyID };
      const update = { accessToken: response.data.access_token };

      User.findOneAndUpdate(filter, update).then(user => {
        res.send({ status: 'ok' });
      });

    })
    .catch((error) => {
      console.log(error);
      res.status(500).send(error);
    });
})

Router.get('/auth/spotify/toptracks', (req, res) => {
  axios({
    method: 'GET',
    url: 'https://api.spotify.com/v1/me/top/tracks',
    headers: {
      Authorization: "Bearer " + req.user.accessToken,
    }
  })
    .then((response) => {

      let filteredResponse = [];

      response.data.items.map(item => {
        filteredResponse.push(
          {
            album: {
              name: item.album.name, id: item.album.id, images: item.album.images.map(image => {
                return {
                  url: image.url
                }
              })
            },
            artists: item.artists.map(artist => {
              return {
                name: artist.name,
                id: artist.id
              }
            }),
            id: item.id,
            name: item.name,
            uri: item.uri
          })
      })
      res.status(200).send(filteredResponse);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
})

Router.get('/auth/spotify/topartists', (req, res) => {
  axios({
    method: 'GET',
    url: 'https://api.spotify.com/v1/me/top/artists',
    headers: {
      Authorization: "Bearer " + req.user.accessToken,
    },
  })
    .then((response) => {
      let filteredResponse = [];
      response.data.items.map(item => {
        filteredResponse.push({ name: item.name, id: item.id, uri: item.uri, images: item.images.map(image => image.url) })
      })
      res.send(filteredResponse);
    });
})


module.exports = Router;