// console.log("hello from module 4")
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];
// function makePizza() {
  // ==============================================1/48=========================================
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;
// console.log(result);

// console.log(pointer)
// ==============================================1/48=========================================

// ==============================================2/48=========================================

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
  
// };
// console.log(makeMessage("Royal Grand", makePizza));
// console.log(makeMessage("Ultracheese", deliverPizza));
// ==============================================2/48=========================================

// ==============================================3/48=========================================

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`)
// });
// ==============================================3/48=========================================

// ==============================================4/48=========================================
// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
//     }
          
//     return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//       },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// // function onOrderError(error) {
// //   return `Error! There is no pizza with a name ${error} in the assortment`;
// // }

// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError))
// ==============================================4/48=========================================

// ==============================================5/48=========================================
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line
//   orderedItems.forEach(function callback(item, index) {
//     // console.log(`Индекс: ${index} элемент: ${item}`)
//     totalPrice += orderedItems[index]
//   });

//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   totalPrice += orderedItems[i];
//   // }

//   // Change code above this line
//   return totalPrice;
// };
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// ==============================================5/48=========================================

// ==============================================6/48=========================================
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line
//   numbers.forEach(function callback(el, index) {
//     if (el > value) {
//       filteredNumbers.push(el)
//     }
//   })

  

//   // Change code above this line
//   return filteredNumbers;
// };
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));
// ==============================================6/48=========================================

// ==============================================7/48=========================================
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line
//   firstArray.forEach(function callback(el, index) {
//     if (secondArray.includes(el)) {
//       commonElements.push(el);
//     }
//   });

//    return commonElements;
//   // Change code above this line
// };
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
// ==============================================7/48=========================================

// ==============================================8/48=========================================
// Change code below this line

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// }
// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));
// ==============================================8/48=========================================

// ==============================================9/48=========================================
// Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// // Change code above this line
// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));
// ==============================================9/48=========================================

// ==============================================10/48=========================================
// Change code below this line
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach(item => {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// // Change code above this line
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// ==============================================10/48=========================================

// ==============================================11/48=========================================
// Change code below this line
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// };
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));
// ==============================================11/48=========================================

// ==============================================12/48=========================================
// Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach(element => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// };
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
// ==============================================12/48=========================================

// ==============================================13/48=========================================
// function changeEven(numbers, value) {
//   // Change code below this line
//   let even = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       even.push(numbers[i] + value);
//     } else {
// even.push(numbers[i])
//     }
    
//   }
//   return even;
//   // Change code above this line
// };
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
// console.log(changeEven([17, 24, 68, 31, 42], 100));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));
// ==============================================13/48=========================================

// ==============================================14/48=========================================
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths);
// ==============================================14/48=========================================

// ==============================================15/48=========================================
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(book => book.title);
// console.log(titles)
// ==============================================15/48=========================================

// ==============================================16/48=========================================
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(book => book.genres);
// console.log(genres);
// ==============================================16/48=========================================

// ==============================================17/48=========================================
// Change code below this line
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];
// const getUserNames = users => users.map((user) => user.name);
// const getUserNames = users => users.map(({name}) => name);
// const getUserNames = users.map(user => user.name);.
// console.log(getUserNames());
// Change code above this line
// ==============================================17/48=========================================
  
// ==============================================18/48=========================================
// Change code below this line
// const getUserEmails = users => users.map((user) => user.email);


// const getUserEmails = users => users.map(({email}) => email);


// Change code above this line
// console.log(getUserEmails(users))
// ==============================================18/48=========================================
  
// ==============================================19/48=========================================
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number %2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);
// console.log(evenNumbers);
// console.log(oddNumbers);
// ==============================================19/48=========================================

// ==============================================20/48=========================================
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((book, index, array)=> array.indexOf(book) === index);
// console.log(allGenres);
// console.log(uniqueGenres)
// ==============================================20/48=========================================

// ==============================================21/48=========================================
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(({ rating }) => rating >= MIN_RATING);
// const booksByAuthor = books.filter(({author})=> author === AUTHOR);
// console.log(topRatedBooks);
// console.log(booksByAuthor);
// ==============================================21/48=========================================

// ==============================================22/48=========================================
// Change code below this line
// const getUsersWithEyeColor = (users, color) => users.filter(({ eyeColor }) => eyeColor === color);
// const getUsersWithEyeColor = (users, color) => users.filter( user => user.eyeColor === color);

// // Change code above this line
// console.log(getUsersWithEyeColor(users, "blue"));
// console.log(getUsersWithEyeColor(users, "green"));
// ==============================================22/48=========================================

// ==============================================23/48=========================================
// Change code below this line
// v.1
// const getUsersWithAge = (users, minAge, maxAge) => users.filter(user => user.age > minAge && user.age < maxAge);
// v.2
// const getUsersWithAge = (users, minAge, maxAge) => users.filter(({ age }) => age > minAge && age < maxAge);

// // Change code above this line
// console.log(getUsersWithAge(users, 20, 30));
// console.log(getUsersWithAge(users, 30, 40));
// console.log(getUsersWithAge(users, 80, 100));
// ==============================================23/48=========================================

// ==============================================24/48=========================================

// Change code below this line
// const getUsersWithFriend = (users, friendName) => users.filter(user => user.friends.includes(friendName));
// const getUsersWithFriend = (users, friendName) => users.filter(({ friends }) => friends.includes(friendName));

// // Change code above this line
// console.log(getUsersWithFriend(users, "Briana Decker"));
// console.log(getUsersWithFriend(users, "Goldie Gentry"));
// console.log(getUsersWithFriend(users, "Adrian Cross"));
// ==============================================24/48=========================================

// ==============================================25/48=========================================
// Change code below this line
// const getFriends = (users) => users.filter(({ friends }) => friends);
// const getFriends = (users) => users.flatMap(user => user.friends).filter((friend, index, users) => users.indexOf(friend) === index);
// const getFriends = (users) => users.flatMap(user => user.friends);
// const getAllFriends = getFriends(users);
// const getUniqueFriends = getAllFriends.filter((friend, index, users) => users.indexOf(friend) === index);

// Change code above this line
// console.log(getFriends(users));
// console.log(getAllFriends);
// console.log(getUniqueFriends);
// ==============================================25/48=========================================

// ==============================================26/48=========================================
// Change code below this line
// v.1
// const getActiveUsers = (users) => users.filter(user => user.isActive === true);
// v.2
// const getActiveUsers = (users) => users.filter(user => user.isActive);
// v.3
// const getActiveUsers = (users) => users.filter(({isActive}) => isActive);



// Change code above this line
// console.log(getActiveUsers(users));
// ==============================================26/48=========================================

// ==============================================27/48=========================================
// const getInactiveUsers = (users) => users.filter(user => !user.isActive);
// const getInactiveUsers = (users) => users.filter(({ isActive }) => !isActive);

// console.log(getInactiveUsers(users));
// ==============================================27/48=========================================

// ==============================================28/48=========================================
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// // const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookWithTitle = books.find(({ title }) => title === BOOK_TITLE);

// // const bookByAuthor = books.find(book => book.author === AUTHOR);
// const bookByAuthor = books.find(({ author }) => author === AUTHOR);

// console.log(bookWithTitle);
// console.log(bookByAuthor);
// ==============================================28/48=========================================

// ==============================================29/48=========================================
// const getUserWithEmail = (users, email) => users.find(user => user.email === email);


// // Change code above this line

// console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
// console.log(getUserWithEmail(users, "elmahead@omatom.com"));
// console.log(getUserWithEmail(users, "blackburndotson@furnigeer.com"));
// console.log(getUserWithEmail(users, "shernthony@kog.com"));
// ==============================================29/48=========================================

// ==============================================30/48=========================================
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(number => number %2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(number => number %2 !== 0);

// const eachElementInSecondIsEven = secondArray.every(number => number %2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(number => number %2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every(number => number %2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(number => number %2 !== 0);

// console.log(eachElementInFirstIsEven);
// console.log(eachElementInFirstIsOdd);

// console.log(eachElementInSecondIsEven);
// console.log(eachElementInSecondIsOdd);

// console.log(eachElementInThirdIsEven);
// console.log(eachElementInThirdIsOdd);
// ==============================================30/48=========================================

// ==============================================31/48=========================================
// // const isEveryUserActive = (users) => users.every(user => user.isActive);
// const isEveryUserActive = (users) => users.every(({ isActive }) => isActive);

// // Change code above this line
// console.log(isEveryUserActive(users))
// ==============================================31/48=========================================

// ==============================================32/48=========================================
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some(number=> number %2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(number=> number %2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(number=> number %2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(number=> number %2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some(number=> number %2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(number=> number %2 !== 0);

// console.log(anyElementInFirstIsEven);
// console.log(anyElementInFirstIsOdd);

// console.log(anyElementInSecondIsEven);
// console.log(anyElementInSecondIsOdd);

// console.log(anyElementInThirdIsEven);
// console.log(anyElementInThirdIsOdd);
// ==============================================32/48=========================================

// ==============================================33/48=========================================

// Change code below this line
// const isAnyUserActive = users => users.some(user => user.isActive);
// // Change code above this line
// console.log(isAnyUserActive(users));
// ==============================================33/48=========================================

// ==============================================34/48=========================================
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((acc, number) => {
//   return acc + number
// }, 0);
// // console.log(totalPlayTime);
// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(averagePlayTime);
// ==============================================34/48=========================================

// ==============================================35/48=========================================
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line
// // v.1
// // const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
// //   return acc + (player.playtime / player.gamesPlayed)
// // }, 0);
// // v.2
// const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
//   const { playtime, gamesPlayed } = player;
//   return acc + (playtime / gamesPlayed)
// }, 0);

// console.log(totalAveragePlaytimePerGame);
// ==============================================35/48=========================================

// ==============================================36/48=========================================
// Change code below this line
const calculateTotalBalance = users => users.reduce((acc, user) => {
  return acc + user.balance
}, 0); 
// Change code above this line
console.log(calculateTotalBalance(users));
// ==============================================36/48=========================================

// ==============================================37/48=========================================
