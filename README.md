 # JavaScript Classes

This project explores **JavaScript classes**, introduced in ES6, which provide a cleaner and more structured way to work with objects and object-oriented programming.

## 📌 What are Classes?
- A **class** is a blueprint for creating objects.
- It bundles **properties** (data) and **methods** (functions) together.
- Classes make code more organized and easier to reuse.

## 🛠️ Key Features
1. **Constructor** – a special method for initializing objects.
2. **Methods** – functions defined inside a class.
3. **Inheritance** – one class can extend another (`extends` and `super`).
4. **Encapsulation** – data can be private (`#property`) or public.

## 🔹 Example

```javascript
// Defining a class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

// Creating an instance
const person1 = new Person("Alice", 25);
person1.greet();  // Output: Hi, I'm Alice and I'm 25 years old.
