const mongoose = require('mongoose');

mongoose.connect(process.env.DB_KEY, { useNewUrlParser: true, useUnifiedTopology: true }, console.log('Connection to DB OK'));  