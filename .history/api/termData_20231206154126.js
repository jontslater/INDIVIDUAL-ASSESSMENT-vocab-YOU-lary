import client from '../utils/client';

const endpoint = client.databaseURL;

const getTerm = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/language.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export default getTerm;
