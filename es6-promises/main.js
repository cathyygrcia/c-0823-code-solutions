import takeAChance from './take-a-chance.js';

takeAChance('Cathy')
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  });
