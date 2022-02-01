(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.notes = [];
        }
        getNotes() {
          return this.notes;
        }
        addNote(note) {
          this.notes.push(note);
        }
        reset() {
          this.notes = [];
        }
      };
      module.exports = NotesModel2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesModel2 = require_notesModel();
      var NotesView2 = class {
        constructor(notesModel2 = new NotesModel2()) {
          this.notesModel = notesModel2;
          this.mainContainerEl = document.querySelector("#main-container");
          this.addNoteButtonEl = document.querySelector("#add-note-button");
          this.addNoteButtonEl.addEventListener("click", () => {
            const newNote = document.querySelector("#add-note-input").value;
            this.addNewNote(newNote);
          });
        }
        displayNotes() {
          const all_the_notes = this.notesModel.getNotes();
          all_the_notes.forEach((note) => {
            const noteEl = document.createElement("div");
            noteEl.innerText = note;
            noteEl.className = "note";
            this.mainContainerEl.append(noteEl);
          });
        }
        addNewNote(newNote) {
          this.notesModel.addNote(newNote);
          this.displayNotes();
        }
      };
      module.exports = NotesView2;
    }
  });

  // index.js
  var NotesModel = require_notesModel();
  var NotesView = require_notesView();
  var notesModel = new NotesModel();
  var notesView = new NotesView(notesModel);
  notesModel.addNote("This is an example note");
  notesView.displayNotes();
})();
