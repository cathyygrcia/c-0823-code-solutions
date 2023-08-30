const a = 2;
const b = 3;
const c = 4;

const maximumValue = Math.max(a, b, c);
console.log('maximumValue:', maximumValue);

const heroes = ['Batman', 'Antman', 'Spiderman', 'Captain America'];
let randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
const randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

const library = [
  {
    title: 'The Great Gatsby',
    author: 'Scott Fitzgerald',
  },
  {
    title: 'The Sun Also Rises',
    author: 'Ernest Hemingway',
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
  },
];

const lastBook = library.pop();
console.log('lastBook', lastBook);

const firstBook = library.shift();
console.log('firstBook:', firstBook);

const js = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};

const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('Library:', library);

const fullName = 'Cathy Garcia';
const firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);

const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
