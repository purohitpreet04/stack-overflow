import mongoose from 'mongoose'
import Questions from '../models/Question.js'
 
export const postAnswer = async (req, res) => {
    const {id: _id} = req.params;
    const {noOfAnswers, userAnswered, answerBody, userId} = req.body;
    // const userId = req.userId;
    if(!mongoose.Types.ObjectId.isValid(_id)){
       return res.status(404).send("Question Unavalible")
    }
    upadateonOfQuestion(_id, noOfAnswers)
    try {
        
        const updetedQuestion = await Questions.findByIdAndUpdate( _id , { $addToSet:{ 'answer': [ {answerBody, userAnswered, userId} ] }})  
        res.status(200).json(updetedQuestion)

    } catch (error) {
        res.status(400).json(error)
    }
}

 const upadateonOfQuestion = async (_id, noOfAnswers ) => {
    try {
        await Questions.findByIdAndUpdate(_id, { $set: {'noOfAnswers': noOfAnswers}})
    } catch (error) {
        console.log(error);
    }
}

export const deleteAnswer = async (req, res) =>{
    const { id:_id } = req.params;
    const { AnswerId, noOfAnswers } = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('Question unavailable...');
    }
    if(!mongoose.Types.ObjectId.isValid(AnswerId)){
        return res.status(404).send('Answer unavailable...');
    }
    upadateonOfQuestion(_id, noOfAnswers)

    try{
        await Questions.updateOne(
            { _id }, 
            { $pull: { 'answer': { _id: AnswerId } } }
        )
        res.status(200).json({ message: "Successfully deleted..."})
    }catch(error){
        res.status(405).json(error)
    }
}

//     const {id: _id} = req.params
//     const {AnswerId, noOfAnswers} = req.body;

//     if(!mongoose.Types.ObjectId.isValid(_id)){
//         return res.status(404).send("Question Unavalible")
//      }
//     if(!mongoose.Types.ObjectId.isValid(AnswerId)){
//         return res.status(404).send("Answer Unavalible")
//      }
//      updatenoOfanswer(_id, noOfAnswers)
//      try {
//          await Questions.updateOne(
//             {_id},
//             {$pull: { 'answer':{_id: AnswerId}}}
//          )
//          res.status(200).json({message:'successfully deleted Answer....'})
//      } catch (error) {
        
//      }

// }