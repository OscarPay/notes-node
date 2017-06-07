// let obj = {
//     name: 'Oscar'
// };
//
// let stringObj = JSON.stringify(obj);
//
// console.log(typeof stringObj);
// console.log(stringObj);

// let personString = '{"name":"Oscar", "age": 22}';
// let person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person.age);

const fs = require('fs');

let originalNote = {
    title: 'Some title',
    body: 'Some body'
};

let originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

let noteString = fs.readFileSync('notes.json');
let note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);