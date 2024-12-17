
import { dir } from 'console'
import express from 'express'
import path, {dirname} from 'path'
import { fileURLToPath } from 'url'
import authRoutes from './routes/authRoutes.js'
import todoRoutes from './routes/ToDoRoutes.js'

const app = express()
const PORT = process.env.PORT || 3000

//get the file path from the url of code module
const __filename = fileURLToPath(import.meta.url)
//get the directory name from file path
const __dirname = dirname(__filename)


//middleware
app.use(express.json())
//serves the html file from the /public directory
//tells express to serve all the files from the public folder

app.use(express.static(path.join(__dirname, '../public')))


//serving up html file from public directory
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'public','index.html' ))
} )

//routes

app.use('/auth', authRoutes)
app.use('/todos',todoRoutes)

app.listen(PORT, () => {
    console.log(`Server has started on port: ${PORT}`)
})