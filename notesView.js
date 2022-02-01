const NotesModel = require('./notesModel');

class NotesView {

  constructor(notesModel = new NotesModel()) {
    this.notesModel = notesModel;
    this.mainContainerEl = document.querySelector('#main-container');
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
}

module.exports = NotesView;
