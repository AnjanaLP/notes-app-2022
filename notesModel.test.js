const NotesModel = require('./notesModel');


describe('NotesModel', () => {

  it('initially has no notes', () => {
    const notes = new NotesModel();
    expect(notes.getNotes()).toEqual([]);
  });

  it('can add notes', () => {
    const notes = new NotesModel();
    notes.addNote('Buy milk');
    notes.addNote('Go to the gym');
    expect(notes.getNotes()).toEqual(['Buy milk', 'Go to the gym' ]);
  });

  it('can clear all the notes', () => {
    const notes = new NotesModel();
    notes.addNote('Buy milk');
    notes.addNote('Go to the gym');
    notes.reset();
    expect(notes.getNotes()).toEqual([]);
  });
});
