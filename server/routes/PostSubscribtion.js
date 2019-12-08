const fetch = require('node-fetch');
const config = require('../config');

module.exports = app => {
  app.post('/submit-form', (req, res, next) => {
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
      .then(res => {
        console.log('111 res=', res);
        if (res.ok) {
          console.log('send okay');
          return res.json();
        } else {
          console.log('send res.state=', res.status);
          throw new Error('Oppss!! Something went wrong');
        }
      })
      .then(data => {
        console.log('data=', data);
        res.send({ data });
      })
      .catch(err => {
        // Todo, error handling here
        console.log('error=', err);
        next(err);
        // res.status(err.status).send(err.message);
      });
  });
};
