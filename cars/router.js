const express = require('express');
const router = express.Router();

const db = require('./db');

router.get('/', async (req, res, next) => {
    try {
      const cars = await db.get();
      res.status(200).json(cars);
    } catch (error) {
      next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
      const car = await db.getById(req.params.id);
      res.status(200).json(car);
    } catch (error) {
      next(error);
    }
});

router.post('/', async (req, res, next) => {
    try {
      const car = await db.insert(req.body);
      res.status(200).json(car);
    } catch (error) {
      next(error);
    }
});

router.use((error, req, res) => {
    res.status(500).json({
        file: 'router',
        method: req.method,
        url: req.url,
        message: error.message
    })
});
  

module.exports = router;