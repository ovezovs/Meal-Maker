/*
Written by: Shageldi Ovezov

Completed as a part of Codecademy JavaScript course
*/

// object for generating a random meal
const menu = {
  _courses : {
  appetizers: [],
  mains: [],
  desserts: [],
  },
  	get appetizers() {},
  	set appetizers(appetizerIn) {},
    get mains() {},
  	set mains(mainIn) {},
    get desserts() {},
  	set desserts(dessertIn) {},
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    } 
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName, 
      price: dishPrice,
    };
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    let rindex = Math.floor(Math.random() * dishes.length);
    return dishes[rindex]
  },
  generateRandomMeal() {
    let appetizer = this.getRandomDishFromCourse('appetizers');
    let main = this.getRandomDishFromCourse('mains');
    let dessert = this.getRandomDishFromCourse('desserts');
    let totalPrice = 	(appetizer.price + main.price + dessert.price);
    let readyMeal = 'Your meal consists of ' + appetizer.name + ', ' + main.name + ', and ' + dessert.name + '. Total Price: ' + totalPrice;
    return readyMeal 
  },
};

// Adding dishes to our courses
menu.addDishToCourse('appetizers', 'Greek Salad', 4);
menu.addDishToCourse('appetizers', 'Turkmen Salad', 5);
menu.addDishToCourse('appetizers', 'Olivye', 4);
menu.addDishToCourse('mains', 'Turkish Kofte', 9);
menu.addDishToCourse('mains', 'Merjimek soup', 7);
menu.addDishToCourse('mains', 'Turkmen Manty', 11);
menu.addDishToCourse('desserts', 'Chocolate Cake', 6);
menu.addDishToCourse('desserts', 'Ice-cream cone', 3);
menu.addDishToCourse('desserts', 'Baklava', 6);

// Generating a random meal
let meal = menu.generateRandomMeal();
console.log(meal);

