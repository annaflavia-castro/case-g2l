const { Schema, model } = require('mongoose');

const VehicleSchema = new Schema({
  name_owner: { 
    type: String,
    required: true
  },
  plate: {
    type: String,
    required: true
  },
  renavam: {
    type: String,
    required: true
  }
}, { 
  timestamps: true 
});

module.exports = model('Vehicle', VehicleSchema);
