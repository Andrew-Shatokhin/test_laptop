// console.log("hello from module 5")
//  ==============================================1/20=========================================
// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//     // Change code below this line
//     checkPizza(pizzaName) {
//         // console.log(pizzas.includes(pizzaName));
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };

// console.log(pizzaPalace.order("Smoked"));
// console.log(pizzaPalace.order("Four meats"));
// console.log(pizzaPalace.order("Big Mike"));
// console.log(pizzaPalace.order("Viennese"));
//  ==============================================1/20=========================================

//  ==============================================2/20=========================================

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
//  ==============================================2/20=========================================

//  ==============================================3/20=========================================
// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };
// console.log(historyService.getOrdersLog());
// console.log(historyService.getEmails());
// console.log(historyService.getOrdersByEmail("solomon@topmail.net"));
//  ==============================================3/20=========================================

//  ==============================================4/20=========================================
// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };
// // Change code below this line

// const child = Object.create(parent);

// // Change code above this line
// child.name = "Jason";
// child.age = 27;

// console.log('parent:', parent);
// console.log('child:', child);
//  ==============================================4/20=========================================

//  ==============================================5/20=========================================
// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };
// // Change code below this line

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// // Change code above this line
// console.log('ancestor:', ancestor);
// console.log('parent:', parent);
// console.log('child:', child)
//  ==============================================5/20=========================================

//  ==============================================6/20=========================================
// class Car {

// }
// const newCar = new Car()
// console.log(newCar);
//  ==============================================6/20=========================================

//  ==============================================7/20=========================================
// class Car {
//   // Change code below this line
//   constructor(brand, model, price) {
//     this.brand = brand,
//     this.model = model,
//     this.price = price
// }


//   // Change code above this line
// };

// console.log(new Car("Audi", "Q3", 36000));
// console.log(new Car("BMW", "X5", 58900));
// console.log(new Car("Nissan","Murano", 31700));
//  ==============================================7/20=========================================

//  ==============================================8/20=========================================
// class Car {
//   // Change code below this line
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code above this line
// }
// const audi = new Car({
//   brand: "Audi",
//   model: "Q3",
//   price: 36000
// });
// const bmw = new Car({
//   brand: "BMW",
//   model: "X5",
//   price: 58900
// });
// const nissan = new Car({
//   brand: "Nissan",
//   model: "Murano",
//   price: 31700
// });
// console.log(audi);
// console.log(bmw);
// console.log(nissan);
//  ==============================================8/20=========================================

//  ==============================================9/20=========================================
// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code below this line
//   getPrice() {
//     return this.price;
//   }
//   changePrice(newPrice) {
//     this.price = newPrice
//   }


  // Change code above this line
// }
//  ==============================================9/20=========================================

//  ==============================================10/20=========================================
// class Storage{
//   constructor(items) {
//     this.items = items
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(newItem) {
//     this.items.push(newItem)
//   }
//   removeItem(itemToRemove) {
//     const idx = this.items.indexOf(itemToRemove);
//     // console.log(idx);
//     this.items.splice(idx, 1);
//     // return this.items;
//   }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
//  ==============================================10/20=========================================

//  ==============================================11/20=========================================
// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue
//   }
//   getValue() {
//     return this.value;
//   }
//   padStart(str) {
//     // return str.concat(this.value) 
//     this.value = str + this.value
//   }
//   padEnd(str) {
//     this.value = this.value + str
//   }
//   padBoth(str) {
//     this.value = str + this.value + str
//   }
// }


// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="
//  ==============================================11/20=========================================

//  ==============================================12/20=========================================
// class Car {
//   // Change code below this line
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getBrand() {
//     return this.#brand;
//   }
//   changeBrand(newBrand) {
//    this.#brand = newBrand;
//   }

//   // Change code above this line
// }

// const audi = new Car({ brand: "Audi", model: "Q3", price: 36000 });
// const bmw = new Car({ brand: "bmw", model: "X5", price: 58900 });
// const nissan = new Car({ brand: "Nissan", model: "Murano", price: 31700 });




// console.log(audi);
// console.log(bmw);
// console.log(nissan);
// audi.changeBrand("Honda");
// console.log(audi);
//  ==============================================12/20=========================================

//  ==============================================13/20=========================================
class Storage {
  // Change code below this line
  #items;

  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    this.#items = this.#items.filter(item => item !== itemToRemove);
  }
}

// Change code above this line
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]
//  ==============================================13/20=========================================

//  ==============================================14/20=========================================
