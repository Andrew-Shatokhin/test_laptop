// ==============================================1/41=========================================
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"]
// };
// console.log(apartment)
// ==============================================1/41=========================================

// ==============================================2/41=========================================
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com"
//   }
// };
// console.log(apartment)
// ==============================================2/41=========================================

// ==============================================3/41=========================================
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// // Change code above this line
// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);
// ==============================================3/41=========================================

// ==============================================4/41=========================================
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length-1];
// // Change code above this line
// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);
// ==============================================4/41=========================================

// ==============================================5/41=========================================
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];
// // Change code above this line
// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);
// ==============================================5/41=========================================

// ==============================================6/41=========================================


// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");

// console.log(apartment);
// ==============================================6/41=========================================

// ==============================================7/41=========================================
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: "Jamaica",
//   city: "Kingston"
// };
// console.log(apartment)
// ==============================================7/41=========================================

// ==============================================8/41=========================================


// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   // Change code below this line
//   name,
//   price,
//   image,
//   tags
//   // Change code above this line
// };
// console.log(product)
// ==============================================8/41=========================================

// ==============================================9/41=========================================
// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",
  
// };
// console.log(credentials)
// ==============================================9/41=========================================

// ==============================================10/41=========================================
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for(const key in apartment){
//   keys.push(key);
//   values.push(apartment[key])
// };
// console.log(keys);
// console.log(values);
// ==============================================10/41=========================================

// ==============================================11/41=========================================
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
// if(apartment.hasOwnProperty(key)){
//   keys.push(key);
//   values.push(apartment[key]);
// }
  

//   // Change code above this line
// }
// console.log(keys);
// console.log(values);
// ==============================================11/41=========================================

// ==============================================12/41=========================================

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
// for(key in object){
//   if(object.hasOwnProperty(key)){
//     propCount += 1;
//   }
// }
//   // Change code above this line
//   return propCount;
// };
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
// ==============================================12/41=========================================

// ==============================================13/41=========================================
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
//     values.push(apartment[key])
// };
// console.log(keys);
// console.log(values);
// ==============================================13/41=========================================

// ==============================================14/41=========================================
                                            // Option 1

// function countProps(object) {

//     const keys = Object.keys(object);
//     const propCount = keys.length;
// //   let propCount = 0;

// //   for (const key in object) {
// //     if (object.hasOwnProperty(key)) {
// //       propCount += 1;
// //     }
// //   }

//   return propCount;

// };
// -------------------------------------------------------------------------------------------------
                                            // Option 2

// function countProps(object) {
    
//     const keys = Object.keys(object);
//     let propCount = 0;

//   for (const key of keys) {
//      propCount += 1;
//     }

//   return propCount;
  
// };


// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
// --------------------------------------------------------------------------------------------------
// ==============================================14/41=========================================

// ==============================================15/41=========================================
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);
// ==============================================15/41=========================================

// ==============================================16/41=========================================
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const values = Object.values(salaries);
//   for (const value of values) {
//     totalSalary += value;
//   }
//   // Change code above this line
  
//   return totalSalary;
// };
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));
// ==============================================16/41=========================================

// ==============================================17/41=========================================
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
 

// console.log(hexColors);
// console.log(rgbColors);
// ==============================================17/41=========================================

// ==============================================18/41=========================================

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for (product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
    
// }
// return null;

//   // Change code above this line
// };
// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));
// ==============================================18/41=========================================

// ==============================================19/41=========================================

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   let propValue = [];
  
//   for (product of products) {
//     if (Object.keys(product).includes(propName)) {
//       propValue.push(product[propName])
//     }
   
// }
//   return propValue;

//   // Change code above this line
// };
// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));
// ==============================================19/41=========================================

// ==============================================20/41=========================================
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   let totalPrice = 0;
//   for (product of products) {
//     if (Object.values(product).includes(productName)) {
//        totalPrice = product.price * product.quantity;
//   }
// }
//   return totalPrice;

//   // Change code above this line
// };
// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));
// ==============================================20/41=========================================

// ==============================================21/41=========================================
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {yesterday, today, tomorrow} = highTemperatures


// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);
// ==============================================21/41=========================================

// ==============================================22/41=========================================
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const { yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;



// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);
// ==============================================22/41=========================================

// ==============================================23/41=========================================
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const { yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;



// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// console.log(meanTemperature);
// ==============================================23/41=========================================

// ==============================================24/41=========================================
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//   // const { hex, rgb } = color;
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// };
// console.log(hexColors);
// console.log(rgbColors);
// ==============================================24/41=========================================

// ==============================================25/41=========================================

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const { today: { low: lowToday, high: highToday, icon: todayIcon= "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" }, tomorrow: { low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" }} = forecast;

// console.log(highToday);
// console.log(lowToday);
// console.log(todayIcon);
// console.log(highTomorrow);
// console.log(lowTomorrow);
// console.log(tomorrowIcon);
// ==============================================25/41=========================================

// ==============================================26/41=========================================

// function calculateMeanTemperature(forecast) {
// const { today: { low: todayLow, high: todayHigh}, tomorrow: { low: tomorrowLow, high: tomorrowHigh }} = forecast;

  
  
//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// };
// console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }));
// console.log(calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }));
// ==============================================26/41=========================================

// ==============================================27/41=========================================

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = (Math.max(...scores));
// const worstScore = (Math.min(...scores));
// console.log(bestScore);
// console.log(worstScore);
// ==============================================27/41=========================================

// ==============================================28/41=========================================
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = (Math.max(...allScores));
// const worstScore = (Math.min(...allScores));
// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);
// ==============================================28/41=========================================

// ==============================================29/41=========================================
// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };

// console.log(finalSettings);
// ==============================================29/41=========================================

// ==============================================30/41=========================================
// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
// return {completed, category, priority, ...data}
//   // Change code above this line
// };
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
// console.log(makeTask({ category: "Finance", text: "Take interest" }));
// console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));
// console.log(makeTask({ text: "Buy bread" }));
// ==============================================30/41=========================================

// ==============================================31/41=========================================
// Change code below this line
// function add(...args) {
 
//   let sum = 0;
//   for (let i = 0; i < args.length; i += 1){
//     sum += args[i];
//     }
  
//   return sum;
//   // Change code above this line
// };

// console.log(add(15, 27));
// console.log(add(12, 4, 11, 48));
// console.log(add(32, 6, 13, 19, 8));
// console.log(add(74, 11, 62, 46, 12, 36));
// ==============================================31/41=========================================

// ==============================================32/41=========================================
// Change code below this line
// function addOverNum(firstArg, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > firstArg) {
//       total += arg;
//     }
    
//   }

//   return total;
//   // Change code above this line
// };
// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));
// ==============================================32/41=========================================

// ==============================================33/41=========================================
// Change code below this line
// function findMatches(arr, ...args) {
//   const matches = []; // Don't change this line
//   // console.log(args);
//   for (const el of args) {
//     if (arr.includes(el)) {
//       matches.push(el)
//     }
//   }
//   // Change code above this line
//   return matches;
// };
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));
// ==============================================33/41=========================================

// ==============================================34/41=========================================

// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`
//   }
//   // Change code above this line
// };
// console.log(bookShelf.removeBook("Red sunset"));
// console.log(bookShelf.updateBook("Sands of dune", "Dune"));
// ==============================================34/41=========================================

// ==============================================35/41=========================================
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const bookIndex = this.books.indexOf(oldName);
//     // console.log(bookIndex);
//     this.books.splice(bookIndex, 1, newName);
//     // console.log(this.books);
//     // return this.books;

//     // Change code above this line
//   },
//   };

// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// console.log(bookShelf.updateBook("The last kingdom", "Dune"));
// ==============================================35/41=========================================

// ==============================================36/41=========================================

// const atTheOldToad = {
//   // Change code below this line
// potions: []


//   // Change code above this line
// };
// ==============================================36/41=========================================

// ==============================================37/41=========================================

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
//   getPotions() {
//    return this.potions;
// }
//   // Change code above this line
// };
// console.log(atTheOldToad.getPotions());
// ==============================================37/41=========================================

// ==============================================38/41=========================================
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line
//     this.potions.splice(this.potions.length, 0, potionName);
//     // return this.potions;

//     // Change code above this line
//   },
// };
// // console.log(atTheOldToad.addPotion("Invisibility"));
// // console.log(atTheOldToad.addPotion("Power potion"));
// ==============================================38/41=========================================

// ==============================================39/41=========================================
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     const indexPotion = this.potions.indexOf(potionName);
//     this.potions.splice(indexPotion, 1);
//     return this.potions;

//     // Change code above this line
//   },
// };
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));
// ==============================================39/41=========================================

// ==============================================40/41=========================================
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
// const indexPotion = this.potions.indexOf(oldName);
//     this.potions.splice(indexPotion, 1, newName);
//     return this.potions;
//     // Change code above this line
//   },
// };
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility"));
// ==============================================40/41=========================================

// ==============================================41/41=========================================
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
      for (const item of this.potions) {
            if (item.name === newPotion.name) {
                return `Error! Potion ${newPotion.name} is already in your inventory!`;
            }
    }
    
        
    this.potions.push(newPotion);
    return this.potions;
  },
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      const potion = this.potions[i];
      if (potion.name === potionName) {
        this.potions.splice(i, 1);
      }
    }
    return `Potion ${potionName} is not in inventory!`;
  },
  updatePotionName(oldName, newName) {
    let resalt = `Potion ${oldName} is not in inventory`;
    for (let i = 0; i < this.potions.length; i += 1) {
      const potion = this.potions[i];

      if (oldName === potion.name) {
        potion.name = newName;
        resalt = `Found ${oldName} change to ${newName} `;
      }
    }
    return console.log(resalt);
  },
  // Change code above this line
};
// console.log(atTheOldToad.getPotions());
console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }))
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"));


// atTheOldToad.addPotion({ name: "Invisibility", price: 620 })

