const NotesModel = require('./notesModel');

class NotesView {

  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.mainContainerEl = document.querySelector('#main-container');
    this.addNoteButtonEl = document.querySelector('#add-note-button');

    this.addNoteButtonEl.addEventListener('click', () => {
      const newNote = document.querySelector('#add-note-input').value;
      this.addNewNote(newNote);
    });
  }

  displayNotes() {
    document.querySelectorAll('.note').forEach(element => element.remove());

    const all_the_notes = this.model.getNotes();

    all_the_notes.forEach(note => {
      const noteEl = document.createElement("div");
      noteEl.innerText = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
    })
  }

  addNewNote(newNote) {
    document.querySelector('#add-note-input').value = "";
    this.model.addNote(newNote);
    this.displayNotes();
  }
}

module.exports = NotesView;
