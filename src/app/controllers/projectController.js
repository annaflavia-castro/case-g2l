const express = require('express');
const authMiddleware = require('../middlewares/auth')

const Driver = require('../models/driver')
const Vehicle = require('../models/vehicle')

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req,res) => {
    try {
        const drivers = await Driver.find().populate(['user', 'vehicles']);

        return res.send({ drivers });
    } catch (err){
        return res.status(400).send({ error: 'Error  showing all drivers' });
    }
})

router.get('/:driverId', async (req, res) => {
    try {
        const driver = await Driver.findById(req.params.driverId).populate('user');

        return res.send({ driver });
    } catch (err){
        return res.status(400).send({ error: 'Error showing the driver' });
    }
})

router.post('/', async( req, res) => {
    try  {
        const { title, description, vehicles } = req.body;

        const driver = await Driver.create({title, description, user: req.userId});

        await Promise.all(vehicles.map(async vehicle => {
            const driverVehicle = new Vehicle({...vehicle, driver: driver._id });

            await driverVehicle.save()

            driver.vehicles.push(driverVehicle);
        }));

        await driver.save();

        return res.send({ driver })
    } catch( err) {
        return res.status(400).send({ error: 'Error creating a new driver'})
    }
})

router.put('/:driverId', async (req, res) => {
    try  {
        const { title, description, vehicles } = req.body;

        const driver = await Driver.findByIdAndUpdate(req.params.driverId, {
            title, 
            description
        }, { new: true });

        driver.vehicles = [];
        await Vehicle.remove({ driver: driver._id });
        
        await Promise.all(vehicles.map(async vehicle => {
            const driverVehicle = new Vehicle({...vehicle, driver: driver._id });

            await driverVehicle.save()

            driver.vehicles.push(driverVehicle);
        }));

        await driver.save();

        return res.send({ driver })
    } catch( err) {
        return res.status(400).send({ error: 'Error updating the driver'})
    }
})

router.delete('/:driverId', async (req, res) => {
    try {
        await Driver.findByIdAndRemove(req.params.driverId);

        return res.send();
    } catch (err){
        return res.status(400).send({ error: 'Error deleting the driver' });
    }
})

module.exports = app => app.use('/drivers', router);
