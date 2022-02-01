/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./notesView');
const NotesModel = require('./notesModel');

describe('NotesView', () => {

  it('displays each note in a div', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const notesModel = new NotesModel();
    const notesView = new NotesView(notesModel);

    notesModel.addNote('Buy milk');
    notesModel.addNote('Go to the gym');

    notesView.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });
});
