import mongoose from 'mongoose'


const QuestionSchema = mongoose.Schema({
    userId:{type:String},
    userPosted: {type: String, required: "Question must have a Author"},
    questionTitle:{type: String, required: "Question must have a Title"},
    questionBody: {type: String, required: "Question must have a Body"},
    questionTags: {type: [String], required: "Question must have a Tags"},
    askedOn:{type:Date , default:Date.now},
    noOfAnswers: {type:Number, default:0},
    upVotes :{type:[String], default:[]},
    downVotes: {type:[String], default:[]},
    answer:[{
        answerBody: String ,
        userAnswered:String ,
        userId:String,
        answeredOn:{type:Date , default:Date.now},
      }]
})


export default mongoose.model("Questions",QuestionSchema )