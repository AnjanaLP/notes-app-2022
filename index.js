// console.log doesn't print anything on the page
// it is not meant to be visible to the user, but for you
// to help in debugging and getting visibility in your JS code.
//
// on Mac (using Chrome), use Option+Command+J to open the console and see this message.
const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

const notesModel = new NotesModel();
const notesView = new NotesView(notesModel);

notesModel.addNote('This is an example note');
notesView.displayNotes();
