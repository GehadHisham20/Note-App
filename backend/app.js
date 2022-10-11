import express from 'express'
import dbConnection from './config/dbConnection.js';
import userRouter from './api/user.api.js';
import cors from 'cors'
import notesRouter from './api/notes.api.js';
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())
app.use("/users",userRouter)
app.use("/notes",notesRouter)
app.listen(port, () => console.log(`server is running on ${port}!`))
dbConnection()