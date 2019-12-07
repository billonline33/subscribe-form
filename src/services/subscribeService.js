import { apiConstants } from '../constants/api.constants';

/* can easily add more actions here later on*/
export const subscribeService = {
  submitForm: submitSubscriptionForm
};

export function submitSubscriptionForm(payLoad) {
  const endPointURL = `${apiConstants.baseURL}/submit-form`;

  let thisBody = JSON.stringify(payLoad);
  console.log('this body 111=', thisBody);

  //debugger;

  fetch('/test')
    .then(res => res.json())
    .then(data => {
      console.log('data=', data);
    })
    .catch(err => {
      console.log(err);
    });

  fetch('/submit-form', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json'
    },
    body: thisBody
  })
    .then(res => res.json())
    .then(data => {
      console.log('data=', data);
    })
    .catch(err => {
      console.log(err);
    });
}
