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
      vehicle: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Driver',
          required: true
      },
      proprietor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    }
}, { 
    timestamps: true 
});

const Vehicle = mongoose.model('Vehicle', VehicleSchema)

module.exports = Vehicle
