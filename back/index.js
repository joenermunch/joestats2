const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const passport = require('passport');
const cors = require('cors');
const bodyParser = require('body-parser');
const Router = require('./router');
const cookieSession = require('cookie-session');
require('dotenv').config();
require('./passport-setup');
require('./db-setup')

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "Origin, X-Requested-With, Content-Type, Accept"
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieSession({
  name: 'joe',
  keys: ['key1', 'key2']
}));
app.use(passport.initialize());
app.use(passport.session());


app.use(Router);


app.listen(PORT, console.log(`Listening on PORT ${PORT}...`));