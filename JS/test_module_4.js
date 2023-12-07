// console.log("hello from module 4")
// ==============================================1/48=========================================
// function makePizza() {
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

function makePizza(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}

makePizza("Royal Grand", function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}.`);
});
// Change code below this line

makePizza("Ultracheese", function eatPizza(pizzaName) {
  console.log(`Eating pizza ${pizzaName}`)
});
