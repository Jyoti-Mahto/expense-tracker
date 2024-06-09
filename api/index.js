import { connectDb } from './utils/db/config.js'
import express from 'express'
import { createUser } from './handlers/users/post.js'

const app = express()
app.use(express.json())

app.post('/createUser', createUser)

app.listen(3000, () => {
    connectDb()
    console.log(`Server is running on port 3000`);
});