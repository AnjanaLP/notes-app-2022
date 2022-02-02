const NotesApi = require('./notesApi');

require('jest-fetch-mock').enableMocks()

describe('NotesApi class', () => {
  it('calls fetch and loads the notes', async () => {
    const api = new NotesApi();
    fetch.mockResponseOnce(JSON.stringify({
      0: "This note is coming from the server"
    }));

    api.loadNotes(result => {
      expect(result[0]).toBe('This note is coming from the server');
    });
  });
});
