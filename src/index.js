let numbers = [1, 5, 10, 20];

console.log(numbers.sort());
const books = [
  {
    title: "The Hobbit",
    author: "Tolkien",
    year: 1937,
    rating: 4.7,
    genres: ["Fantasy"],
  },
  {
    title: "1984",
    author: "Orwell",
    year: 1949,
    rating: 4.8,
    genres: ["Dystopian", "Political Fiction"],
  },
  {
    title: "The Name of the Wind",
    author: "Rothfuss",
    year: 2007,
    rating: 4.5,
    genres: ["Fantasy", "Adventure"],
  },
  {
    title: "Brave New World",
    author: "Huxley",
    year: 1932,
    rating: 4.2,
    genres: ["Dystopian"],
  },
  {
    title: "Dune",
    author: "Herbert",
    year: 1965,
    rating: 4.6,
    genres: ["Science Fiction", "Adventure"],
  },
  {
    title: "Fahrenheit 451",
    author: "Bradbury",
    year: 1953,
    rating: 4.3,
    genres: ["Dystopian", "Science Fiction"],
  },
  {
    title: "The Road",
    author: "McCarthy",
    year: 2006,
    rating: 4.0,
    genres: ["Post-Apocalyptic"],
  },
  {
    title: "To Kill a Mockingbird",
    author: "Lee",
    year: 1960,
    rating: 4.9,
    genres: ["Classic", "Coming-of-Age"],
  },
];

function addClassic(books, key) {
  books.forEach((book) => {
    if (book.year >= 1950) {
      book[key] = false;
    } else {
      book[key] = true;
    }
  });
  return books;
}

console.log(addClassic(books, "isClassic"));

const array = [1, 2, 3];
console.log(
  array.map((item, index) => {
    return (array[index + 3] = array[index] + 3);
  }),
);
console.log(array);

