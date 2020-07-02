const serverless = require('serverless-http');
const express = require('express');
const app = express();

// # scraper modules
const { getAll, getCountries, getByCountry } = require('./scraper');

/**
 * @public
 * @description get all cases
 */
app.get('/all', async (req, res, next) => {
  try {
    const data = await getAll();
    // # return response
    return res.status(200).json(data);
  } catch (e) {
    if (e) {
      return next(e);
    }
  }
});

/**
 * @public
 * @description get all cases by countries
 */
app.get('/countries', async (req, res, next) => {
  try {
    const data = await getCountries();
    // # return response
    return res.status(200).json(data);
  } catch (e) {
    if (e) {
      return next(e);
    }
  }
});

/**
 * @public
 * @description get all cases by country
 */
app.get('/:country', async (req, res, next) => {
  try {
    const { country } = req.params;
    const data = await getByCountry(country);
    // # return response
    return res.status(200).json(data);
  } catch (e) {
    if (e) {
      return next(e);
    }
  }
});

// # error handling routes
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  res.status(err.status).json({
    status: err.status,
    request_url: req.originalUrl,
    message: err.message,
  });
});

// # catching global error
app.use((err, req, res, next) => {
  if (err) {
    const status = err.status || 500;
    return res.status(status).json({
      status: err.status,
      request_url: req.originalUrl,
      message: err.message,
    });
  }
});

module.exports.handler = serverless(app);
