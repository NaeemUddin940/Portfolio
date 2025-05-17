import express from 'express'
const app = express()

// env file import and use here
import dotenv from 'dotenv'
dotenv.config()
const port = process.env.PORT


app.listen(port, () => {
    console.log(`Server is running on port: http://localhost:${port}`);
})