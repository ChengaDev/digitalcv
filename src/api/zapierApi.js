import 'isomorphic-fetch';

export const submitContactForm = (
  firstname,
  lastname,
  email,
  phone,
  subject,
  content
) => {
  return fetch('https://hooks.zapier.com/hooks/catch/6005811/omqqwdb/', {
    method: 'POST',
    body: JSON.stringify({
      firstname: firstname,
      lastname: lastname,
      email: email,
      phone: phone,
      subject: subject,
      content: content
    })
  });
};

export default {
  submitContactForm
};
