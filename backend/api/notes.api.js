import  express  from "express"
import addNote from '../services/note/addNote.js';
import getNotes from './../services/note/getNotes.js';
import getUserNotes from './../services/note/getUserNotes.js';
import updateNote from './../services/note/updateNote.js';
import deleteNote from './../services/note/deleteNote.js';
import authentication from './../middleware/authentication.js';
import noteValidation from './../middleware/validation/note.validation.js';
const notesRouter=express.Router()

notesRouter.post('/',authentication,noteValidation,addNote)
.get('/',authentication,getNotes)
.get('/usernotes',authentication,getUserNotes)
.patch('/',authentication,noteValidation,updateNote)
.delete('/',authentication,deleteNote)

export default notesRouter;