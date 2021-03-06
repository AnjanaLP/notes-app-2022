/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./notesView');
const NotesModel = require('./notesModel');
const NotesApi = require('./notesApi');
require('jest-fetch-mock').enableMocks()

describe('NotesView', () => {

  it('displays all the notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel();
    const api = new NotesApi();
    const view = new NotesView(model, api);

    model.addNote('Buy milk');
    model.addNote('Go to the gym');

    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });

  it("adds a note", () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel();
    const api = new NotesApi();
    const view = new NotesView(model, api);

    const inputEl = document.querySelector('#add-note-input');
    const buttonEl = document.querySelector('#add-note-button');

    inputEl.value = 'New note title';
    buttonEl.click();

    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].innerText).toEqual('New note title');
  });

  it('clears the previous list of notes before displaying all the notes ', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel();
    const api = new NotesApi();
    const view = new NotesView(model, api);

    model.addNote('Buy milk');
    view.displayNotes();

    model.addNote('Go to the gym');
    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });

  it("clears the text input after clicking the 'Add note' button", () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel();
    const api = new NotesApi();
    const view = new NotesView(model, api);

    const inputEl = document.querySelector('#add-note-input');
    const buttonEl = document.querySelector('#add-note-button');

    inputEl.value = 'New note';
    buttonEl.click();

    expect(inputEl.value).toEqual("");
  });
});
