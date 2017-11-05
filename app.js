console.log('Starting app.js');

const fs = require('fs');
const _  = require('lodash');
const yargs  = require('yargs');

const notes = require('./notes.js');


const argv = yargs.argv;
let command  = process.argv[2];

console.log('Command :', command);
console.log('Yargs :', argv);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if(note) {
        console.log('Note Created');
        notes.logNote(note);
    } else {
        console.log('Note Title Taken');
    }

} else if(command === 'list'){
    notes.getAll();
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if( note ) {
        console.log('Note Found');
        notes.logNote(note);
    } else {
        console.log('Note not found');
    }
} else if (command === 'remove') {
    const noteRemoved = notes.removeNote(argv.title);
    const message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
    console.log('Invalid Command');
}
