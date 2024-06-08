import { connectDb } from './utils/db/config.js'
import express from 'express'
import { addUser } from './handlers/users/post.js'

const app = express()

app.post('/user', addUser)

app.listen(3000, () => {
    connectDb()
    console.log(`Server is running on port 3000`);
});