const mongoose = require('../../database');

const VehicleSchema = new mongoose.Schema({
      name_owner: { 
        type: String,
        required: true
      },
      plate: {
        type: String,
        uppercase: true,
        unique: true,
        required: true
      },
      renavam: {
        type: String,
        required: true
      },
      driver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Driver',
        require: true
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
      }
  }, { 
    timestamps: true 
});

const Vehicle = mongoose.model('Vehicle', VehicleSchema);

module.exports = Vehicle;
