import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import db from '../db.js'

const router = express.Router()

//register new user endpoint /auth/register

router.post('/register', (req,res) => {
    const {username, password} = req.body
    //save username and irreversibly encrypted password
    // save gilg@gmail.com | dad s d awdwad s

    //encryped password
    const hashedPassword = bcrypt.hashSync(password, 8)
     
    //save new user and hashed password to DB
    try{
    const insertUser = db.prepare(`INSERT INTO users(username,password)
     VALUES (?,?)   `)
     const result = insertUser.run(username, hashedPassword)
    
     // add firts todo to user
     const defaultTodo = `Add your first todo`
     const insertTodo = db.prepare(`INSERT INTO todos (user_id task)
        VALUES (?,?)`)
        insertTodo.run(result.lastInsertRowid, defaultTodo)

        //create token 
        const token = jwt.sign({id: result.lastInsertRowid}, process.env.
        JWT_SECRET, {expiresIn: '24h'})
        res.json({token})
    }catch(err) {
        console.log(err.message)
        res.status(503)
    }  
})

router.post('/login', (req,res) => {
// we get email, and look up pass associated with email in the DB
})
export default router