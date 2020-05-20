const mongoose = require('../../database');

const DriverSchema = new mongoose.Schema({
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
        unique: true,
        required: true
    },
    birth_date: {
        type: String,
        required: true
    },
    status: {
        type: Boolean, 
        default: true
    },
    vehicles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vehicle'
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    }
}, { 
    timestamps: true 
});

const Driver = mongoose.model('Driver', DriverSchema)

module.exports = Driver
