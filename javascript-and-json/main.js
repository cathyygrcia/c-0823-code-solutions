const books = [
  {
    isbn: '978-0-593-48149-3',
    title: 'The Island',
    author: 'Natasha Preston',
  },
  {
    isbn: '978-0-06-231500-7',
    title: 'The Alchemist',
    author: 'Paulo Coelho',
  },
  {
    isbn: '978-0-14-017739-8',
    title: 'Of Mice and Men',
    author: 'John Steinbeck',
  },
];

console.log('books array: ', books);
console.log('typeof books:', typeof books);

const booksJsonString = JSON.stringify(books);
console.log('JSON String:', booksJsonString);
console.log('typeof booksJsonString', typeof booksJsonString);

const studentJsonString = '{"id":1234567, "name": "Cathy Garcia"}';
console.log('studentJsonString:', studentJsonString);
console.log('typeof studentJsonString:', typeof studentJsonString);

const studentObj = JSON.parse(studentJsonString);

console.log('Student Object:', studentObj);
console.log('Type of Student Object:', typeof studentObj);
