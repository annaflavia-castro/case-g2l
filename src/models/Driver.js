const { Schema, model } = require('mongoose');

const DriverSchema = new Schema({
  first_name: { 
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  cpf: {
    type: String,
    required: true
  },
  birth_date: {
    type: String,
    required: false
  },
  status: {
    type: Boolean, default: true
  },
  vehicles: [{
    type: Schema.Types.ObjectId,
    ref: 'Driver'
  }],
}, { 
  timestamps: true 
});

module.exports = model('Driver', DriverSchema);
