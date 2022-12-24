import express from 'express'
import {getAllQuestion, AskQuestion, deleteQuestion, voteQuestion } from '../controllers/Question.js'
import auth from '../middlewares/Auth.js'


const router = express.Router() 

router.post('/Ask',auth, AskQuestion)
router.get('/get', getAllQuestion)
router.delete('/delete/:id',auth, deleteQuestion)
router.patch('/vote/:id',auth, voteQuestion)


export default router