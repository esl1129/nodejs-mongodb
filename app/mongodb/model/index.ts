const dbConfig = require('../config/config.ts');
const mongoose = require('mongoose');

// Use Node.js native promise 
mongoose.Promise = global.Promise;

const db = {
    mongoose : mongoose,
    url : dbConfig.url,
    tutorial : require('./model.ts')(mongoose)
};

module.exports = db;
