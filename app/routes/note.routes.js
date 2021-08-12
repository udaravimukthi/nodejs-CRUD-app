module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');

    //create a new note
    app.post('/notes',notes.create);
 
    //retreive all the notes
    app.get('/notes', notes.findAll);

    //reteive a single note with a given id
    app.get('/notes/:noteid', notes.findOne);

    //update a note with a note id
    app.get('/notes/:noteId', notes.update);

    //delete a note with the given noteid
    app.delete('/notes/:noteId', notes.delete);
}