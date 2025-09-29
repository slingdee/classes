 //Class declaration
 class MyClass {
  constructor (){ }
  method1(){}
  method2(){}
  method3(){}
 }

 //define a class of Person
 class Person{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  sayHi(){
    return `Hi ${this.name}`
  }
 }
 let davie = new Person("Davie", 22)
 console.log(davie.sayHi())


 let user ={
  name:"John",
  surname: "Smith",

  get fullName(){
    return `${this.name} ${this.surname}`
  },
  set fullName(value){
    [this.name, this.surname] = value.split(" ");
  }

 }

 //access fullName, not as a function but as a method
 console.log(user.fullName)

 //error when you try assigning a value to it if it only has a getter and no setter.
 user.fullName = "Testing out"
console.log(user.fullName);

user.fullName = "Alice Cooper";

console.log(user.name);

//class declaration
class Rectangle{
  constructor(width, height){
      this.width = width;
      this.height = height;
  }
  //Getter: lets us access area like a property(firstRectangle.area) instead of a method
  get area(){
     return this.calcArea();
  }
  //regular method that calculates the area 
  calcArea(){
    return this.width * this.height;
  }
  //Generator method(note the *): returns values one by one when iterated
  *getSides(){
    //yield means keep this value, but keep funtion paused
    yield this.width;
    yield this.height;
    yield this.width;
    yield this.height
  }
}

const firstRectangle = new Rectangle(15, 7)
console.log(firstRectangle.area)
console.log([...firstRectangle.getSides()])

class Animal {
  constructor(name){
    this.name = name;
  }
  speak(){
    return `${this.name} makes a noise`
  }
}
//extends keyword is used in class declarations to create a class as a child of another constructor.
class Dog extends Animal{
  constructor(name){
    //call the super class constructor and pass in the parameter
    super(name);
  }
  speak(){
    return `${this.name} barks`
  }
}
const d = new Dog("Benjie");
console.log(d.speak())

class Lion extends Animal{
  speak(){
    super.speak();
    return `${this.name} roars`
  }
}
const l = new Lion("Buzzy");
console.log(l.speak())