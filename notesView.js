const NotesModel = require('./notesModel');

class NotesView {

  constructor(notesModel = new NotesModel()) {
    this.notesModel = notesModel;
    this.mainContainerEl = document.querySelector('#main-container');
    this.addNoteButtonEl = document.querySelector('#add-note-button');

    this.addNoteButtonEl.addEventListener('click', () => {
      const newNote = document.querySelector('#add-note-input').value;
      this.addNewNote(newNote);
    });
  }

  displayNotes() {
    const all_the_notes = this.notesModel.getNotes();

    all_the_notes.forEach(note => {
      const noteEl = document.createElement("div");
      noteEl.innerText = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
    })
  }

  addNewNote(newNote) {
    this.notesModel.addNote(newNote);
    this.displayNotes();
  }
}

module.exports = NotesView;
