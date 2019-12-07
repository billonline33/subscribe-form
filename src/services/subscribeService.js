/* can easily add more actions here later on*/
export const subscribeService = {
  submitForm: submitSubscriptionForm
};

export function submitSubscriptionForm(payLoad) {
  let thisBody = JSON.stringify(payLoad);
  console.log('this body 111=', thisBody);

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
