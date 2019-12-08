/* can easily add more actions here later on*/
export const subscribeService = {
  submitForm: submitSubscriptionForm
};

export function submitSubscriptionForm(payLoad) {
  let thisBody = JSON.stringify(payLoad);
  console.log('this body 111=', thisBody);

  debugger;

  fetch('/submit-form', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json'
    },
    body: thisBody
  })
    .then(res => {
      console.log('res 001=', res);

      if (res.ok) {
        return res.json();
      } else {
        return null;
      }
    })
    .then(data => {
      console.log('data=', data);
      return data;
    })
    .catch(err => {
      console.log('subscribeService error', err);
      return null;
    });
}
