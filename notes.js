console.log('Starting notes.js');

const fs = require('fs');

const fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

const addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    var duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
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