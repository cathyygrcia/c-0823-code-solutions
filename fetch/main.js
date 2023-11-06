const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((users) => {
    console.log('Array of user objects:', users);
  })
  .catch((error) => {
    console.error('There was a problem with the fetch operation:', error);
  });

const pokeUrl = 'https://pokeapi.co/api/v2/pokemon/25';

fetch(pokeUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((pokemonData) => {
    console.log('Pokemon Data:', pokemonData);
  })
  .catch((error) => {
    console.error('There was a problem with the fetch operation:', error);
  });
