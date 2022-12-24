 import Questions from '../models/Question.js'
 import mongoose from 'mongoose'
 
 
 export   const AskQuestion = async (req, res) => {
    const userId = req.userId
    const postQuestionData = req.body;
    const postQuestion = new Questions(postQuestionData);

    try{
        await postQuestion.save();
        res.status(200).json("Posted a Question Successfully")
    }catch(error){
        res.status(409).json("Couldn't post a New question");
        console.log(error);
    }
}

export const getAllQuestion = async (req, res) => {
    try {
        const questionList = await Questions.find();
        res.status(200).json(questionList);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
    
    //my code 
    // try {
    //     const questionList = await Questions.find();
    //     res.status(200).json(questionList);

    // } catch (error) {
    //     res.status(404).json({message: error.message})
    // }
}


export const deleteQuestion = async (req, res) => {

    const { id:_id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send("Question Unavalible")
     }
    try {
        await Questions.findByIdAndRemove(_id)
        res.status(200).json({message:'Successfully Deleted....'})
    } catch (error) {
        res.status(404).json({message:error.message})
    }

}


export const voteQuestion = async (req, res) => {
    const { id:_id } = req.params;
    const {value, userId} = req.body
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send("Question Unavalible")
     }

     try {
        const question = await Questions.findById(_id);
        const upIndex = question.upVotes.findIndex((id) => id === String(userId));
        const downIndex = question.downVotes.findIndex((id) => id === String(userId));

        if(value === 'upVote'){
            if(downIndex !== -1){
                question.downVotes = question.downVotes.filter((id) => id !== String(userId))
            }
            if(upIndex === -1){
                question.upVotes.push(userId)
            }else{
                question.upVotes = question.upVotes.filter((id) => id !== String(userId))
            }
        }
        if(value === 'downVote'){
            if(upIndex !== -1){
                question.upVotes = question.upVotes.filter((id) => id !== String(userId))
            }
            if(downIndex === -1){
                question.downVotes.push(userId)
            }else{
                question.downVotes = question.downVotes.filter((id) => id !== String(userId))
            }
        }

        await Questions.findByIdAndUpdate(_id, question)
        res.status(200).json({ message: "voted successfully...."})
     } catch (error) {
        res.status(404).json({ message: " id not found "}) 
     }
}