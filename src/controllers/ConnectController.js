const Driver = require('../models/Driver');
const Vehicle = require('../models/Vehicle');

module.exports ={
  async store(request, response) {
    const { driver } = request.headers;

    const driverLogged = await Driver.findById(driver);
    const vehicleConnect = await Vehicle.findById(request.params.id);

    if (!vehicleConnect) {
      return response.status(400).json({ error: "Vehicle not exist" });
    }

    if (driverLogged.vehicles.find(element => element == request.params.id)) {
      return response.status(400).json({ error: "Vehicle is associated" }); 
    }
    
    driverLogged.vehicles.push(vehicleConnect._id);
    
    await driverLogged.save();
    
    return response.json( driverLogged );
  }
};
