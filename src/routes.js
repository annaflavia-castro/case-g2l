const express = require('express');
const DriverController = require('./controllers/DriverController');
const VehicleController = require('./controllers/VehicleController');
const ConnectController = require('./controllers/ConnectController');

const routes = express.Router();

routes.post('/drivers', DriverController.store);
routes.post('/vehicles', VehicleController.store);
routes.post('/drivers/:id/connect_vehicles', ConnectController.store);

routes.get('/drivers', DriverController.index);
routes.get('/vehicles', VehicleController.index);

routes.put('/drivers/:id', DriverController.update);
routes.put('/vehicles/:id', VehicleController.update);

routes.delete('/drivers/:id', DriverController.destroy);
routes.delete('/vehicles/:id', VehicleController.destroy);

module.exports = routes;
