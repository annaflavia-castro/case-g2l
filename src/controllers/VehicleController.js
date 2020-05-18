const Vehicle = require('../models/Vehicle');

module.exports ={
  async index(request, response) {
    const vehicles = await Vehicle.find();

    return response.json(vehicles);
  },

  async store(request, response) {
    const {
      name_owner,
      plate,
      renavam
    } = request.body;

    const vehicleExists = await Vehicle.findOne({ plate: plate });

    if (vehicleExists) {
      return response.json(vehicleExists);
    }
  
    const vehicle = await Vehicle.create({
      name_owner: name_owner,
      plate: plate,
      renavam: renavam
    });

    return response.json(vehicle);
  },

  async update(request, response) {
    const {...data } = request.body

    const vehicle = await Vehicle.findByIdAndUpdate(request.params.id, data, {
      new: true
    })

    return response.json(vehicle);
  },

  async destroy (request, response) {
    const deleteVehicle = await Vehicle.findByIdAndRemove(request.params.id)

    if (!deleteVehicle) {
      return response.status(400).json({ error: "Vehicle not found" });
    }

    return response.status(204).send();
  }
};
