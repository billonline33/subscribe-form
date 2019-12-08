const fetch = require('node-fetch');
const config = require('../config');

module.exports = app => {
  app.post('/submit-form', (req, res) => {
    console.log('000=', req.body);
    fetch(config.subscriptionBaseUrl.endPoint, {
      method: 'POST',
      headers: {
        'x-auth': 'react-test',
        'Content-type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(req.body)
    })
      .then(res => res.json())
      .then(data => {
        console.log('data=', data);
        res.send({ data });
      })
      .catch(err => {
        // Todo, error handling here
        console.log(err);
      });
  });
};
