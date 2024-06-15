const mongoose = require('mongoose');

const qualificationSchema = new mongoose.Schema({
  name: String,
  email: String,
  coursename: String,
  university: String,
  year: String,
});

module.exports = mongoose.model('Qualification', qualificationSchema);
