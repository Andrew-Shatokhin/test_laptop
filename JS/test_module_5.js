// console.log("hello from module 5")
//  ==============================================1/20=========================================
const pizzaPalace = {
  pizzas: ["Supercheese", "Smoked", "Four meats"],
    // Change code below this line
    checkPizza(pizzaName) {
        // console.log(pizzas.includes(pizzaName));
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
  // Change code above this line
};

console.log(pizzaPalace.order("Smoked"));
console.log(pizzaPalace.order("Four meats"));
console.log(pizzaPalace.order("Big Mike"));
console.log(pizzaPalace.order("Viennese"));
//  ==============================================1/20=========================================

//  ==============================================2/20=========================================





