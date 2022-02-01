/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./notesView');
const NotesModel = require('./notesModel');

describe('NotesView', () => {

  it('displays all the notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const notesModel = new NotesModel();
    const notesView = new NotesView(notesModel);

    notesModel.addNote('Buy milk');
    notesModel.addNote('Go to the gym');

    notesView.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });

  it("adds a note", () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const notesModel = new NotesModel();
    const notesView = new NotesView(notesModel);

    const inputEl = document.querySelector('#add-note-input');
    const buttonEl = document.querySelector('#add-note-button');

    inputEl.value = 'New note title';
    buttonEl.click();

    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].innerText).toEqual('New note title');
  });
});
