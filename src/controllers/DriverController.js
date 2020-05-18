const Driver = require('../models/Driver');

module.exports ={
  async index(request, response) {
    const drivers = await Driver.find();

    return response.json(drivers);
  },

  async store(request, response) {
    const {
      first_name,
      last_name,
      cpf,
      birth_date,
      status,
      vehicles,
    } = request.body;

    const driverExists = await Driver.findOne({ cpf: cpf });

    if (driverExists) {
      return response.json(driverExists);
    }

    const driver = await Driver.create({
      first_name: first_name,
      last_name: last_name,
      cpf: cpf,
      birth_date: birth_date,
      status,
      vehicles,
    });

    return response.json(driver);
  },

  async update(request, response) {
    const {...data } = request.body

    const driver = await Driver.findByIdAndUpdate(request.params.id, data, {
      new: true
    })

    return response.json(driver);
  },

  async destroy (request, response) {
    const deleteDriver = await Driver.findByIdAndRemove(request.params.id)

    if (!deleteDriver) {
      return response.status(400).json({ error: "Driver not found" });
    }

    return response.status(204).send();
  }
};
