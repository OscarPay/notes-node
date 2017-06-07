/**
 * Created by oscar on 6/06/17.
 */

// Command: node debug playground/debugging.js

let person = {
  name: 'Person'
};

person.age = 25;

debugger;

person.name = 'Oscar';

console.log(person);