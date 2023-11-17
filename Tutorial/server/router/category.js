const express = require('express');
const router = express.Router();
const pool = require('../config/db')


router.get('/', function (request, response) {
    pool.query('SELECT * FROM public.category ORDER BY category_id ASC ', (error, results) => {
        if(error) {
            throw error;
        }
        response.status(200).json(results.rows)
    })
});

router.get('/:category', function (request, response) {
    pool.query(
      `SELECT * FROM film_category fc INNER JOIN film f ON fc.film_id = f.film_id INNER JOIN category c ON fc.category_id = c.category_id WHERE c.name = '${request.params.category}'`, (error, results) => {
        if (error) {
          throw error;
        }
        response.status(200).json(results.rows)
      })
  });


module.exports = router;