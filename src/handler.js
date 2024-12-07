const nanoid = require("nanoid");
const notes = require('./notes.js');

const addNoteHandler = (request, h) => {
    const { title, tag, body} = request.payload;

    const id = nanoid(16);
    const createdAt = new Date().toISOString;
    const updatedAt = createdAt;

    const newNote = {
        title, tag, body, id, createdAt, updatedAt
    };

    notes.push(newNote);
};



module.exports = {addNoteHandler};