const db = require('../data/db-config');

module.exports = {
  get: () => db('cars'),
  getById: (id) => db('cars').where({ id }),
  insert: (car) => db('cars').insert(car),
  update: (id, car) => db('cars').where({ id }).update(car),
  delete: (id) => db('cars').where({ id }).del(),
}