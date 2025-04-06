// Your code here
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`) //prints name and age of person class instance
  }

  static introducePeople(person) {
    if (!Array.isArray(person)) {
      throw new Error("introducePeople only takes an array as an argument."); //Print error message if person is not an array
    } else if (this.checkForNoClass(person)) {
      throw new Error("All items in array must be Person class instances.") //Error message if an array element is not a class of Person
    } else {
      person.forEach(el => el.introduce()); //Run the introduce instance method on every instance of Person Class
    }
  }

  static checkForNoClass(array) {
    return array.some(el => !(el instanceof Person)); // Checks whether array element is not a Instance of the Person Class.
  }
}



/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
