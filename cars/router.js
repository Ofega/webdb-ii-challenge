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


module.exports = router;