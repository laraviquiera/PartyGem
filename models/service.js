const Schema = require('mongoose').Schema;

const serviceSchema = new Schema({
  name: { type: String, required: true },
  category: {
    type: String,
    enum: ['Catering', 'Entertainment', 'Venue']
  }
});

module.exports = serviceSchema;
