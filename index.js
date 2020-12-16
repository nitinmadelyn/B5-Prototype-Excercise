/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
this.name = name;
this.age = age;   
this.stomach = new Array(); 
}

Person.prototype.eat = function(food){
this.stomach.push(food)
}
Person.prototype.poop = function(){
this.stomach = new Array()
}
Person.prototype.toString = function(){
return this.name+", "+this.age;
}

const newPerson = new Person("Nitin", 22);
//this will add apple to stomach array
newPerson.eat("apple");
console.log(newPerson.stomach);

//this will empty stomach array
newPerson.poop();
console.log(newPerson.stomach);

//this will return name & age
console.log(newPerson.toString());


/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;  

  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function(gallons){
  this.tank = gallons;
}
Car.prototype.drive = function(milesPerGallon){
  this.odometer += milesPerGallon * this.milesPerGallon;
  this.tank -= milesPerGallon;
  if(this.tank <= 0){
    return "I ran out of fuel at "+this.odometer+" miles!"
  }
}

//this will initialize function
const baleno = new Car("Baleno", 10);

//this will fill 1 gallon fuel
baleno.fill(1);
console.log(baleno);

//this will drive car by 10miles 1gallon = 10miles in this case
console.log(baleno.drive(1));



/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
  Person.call(this, name, age)
  this.favoriteToy = favoriteToy;
} 
Baby.prototype = Object.create(Person.prototype);
Baby.prototype.play = function() {
  return this.name+" is playing with "+this.favoriteToy+" at age of "+this.age;
}

let newBaby = new Baby("Kiwi", 2, "puzzle");

//this will call play() prototype method of Baby function
console.log(newBaby.play())


/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. "this" will default to global object in no-strict mode
  2. "this" points to the object on which the function is called
  3. "this" points to the object which is initialized using "new" keyword
  4. "this" refers to the context of an executing function
*/


///////// END OF CHALLENGE /////////
