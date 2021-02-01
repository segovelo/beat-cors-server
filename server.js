const express = require('express');
const request = require('request');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/cheeses', (req, res) => {
  request(
    { url: 'https://9ofhfkvsec.execute-api.us-east-2.amazonaws.com/latest/cheeses' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }
      res.json(JSON.parse(body));
    }
  )
});

// endpoint to get a specific post
app.get('/cheeses/:name', (req, res) => {
  const { name } = req.params;
  request(
    { url: 'https://9ofhfkvsec.execute-api.us-east-2.amazonaws.com/latest/cheeses/'+name },
    (error, response, body) => {
      if (error) {
        return res.status(500).json({ type: 'error', message: err.message });
      }
      if(response.statusCode === 404) {
         return  res.status(404).send('Cheese not found');
      }
      res.json(JSON.parse(body));
    }
  )
});


module.exports = app;
