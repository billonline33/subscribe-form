const fetch = require('node-fetch');
const config = require('../config');

module.exports = app => {
  app.post('/submit-form', (req, res, next) => {
    fetch(config.subscriptionBaseUrl.endPoint, {
      method: 'POST',
      headers: {
        'x-auth': 'react-test',
        'Content-type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(req.body)
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then(data => {
        res.send({ data });
      })
      .catch(err => {
        next(err);
      });
  });
};
