console.log('Starting notes.js');

const fs = require('fs');

const addNote = (title, body) => {
    var notes = [];
    var note = {
        title,
        body
    };

    //getting all notes 

    try {
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch (e) {

    }

    var duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }

}

const getAll = () => {
    console.log('Getting all notes');
}

const getNote = (title) => {
    console.log('Reading note: ', title);
}

const removeNote = (title) => {
    console.log('Removing note: ', title);
}


module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};