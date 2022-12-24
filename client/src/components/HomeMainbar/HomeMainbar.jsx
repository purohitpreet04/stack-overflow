import React from "react";
import {  useLocation } from "react-router-dom";
import "./HomeMainbar.css";
import QuestionList from './QuestionList'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'


const HomeMainbar = () => {
  const user = useSelector(state => state.currentUserReducer);
  const location = useLocation();
  const Navigate = useNavigate();
  const questionLIST = useSelector(state => state.questionReducers)
  // console.log(questionLIST);
  



  // var questionList = [
  //   {
  //     _id: 1,
  //     upVotes :3,
  //     downVotes: 2,
  //     noOfAnswers: 2,
  //     questionTitle: "What is a function?",
  //     questionBody: "It meant to be",
  //     questionTags: ["java", "node js", "react js", "mongo db","Express js"],
  //     userPosted: "mano",
  //     askedOn: "jan 1",
  //     userId:1,
  //     answer:[{
  //       answerBody: "Answer" ,
  //       userAnswered: 'kumar' ,
  //       answeredOn:"jan 2",
  //       userld:2,
  //     }]
  //   },
  //   {
  //     _id: 2,
  //     upVotes :3,
  //     downVotes: 2,
  //     noOfAnswers: 0,
  //     questionTitle: "What is a function?",
  //     questionBody: "It meant to be",
  //     questionTags: ["javascript", "R", "python"],
  //     userPosted: "mano",
  //     askedOn: "jan 1",
  //     userId:1,
  //     answer:[{
  //       answerBody: "Answer" ,
  //       userAnswered: 'kumar' ,
  //       answeredOn:"jan 2",
  //       userld:2,
       
  //     }]
  //   },
  //   {
  //     _id: 3,
  //     upVotes :3,
  //     downVotes: 2,
  //     noOfAnswers: 0,
  //     questionTitle: "What is a function?",
  //     questionBody: "It meant to be",
  //     questionTags: ["javascript", "R", "python"],
  //     userPosted: "mano",
  //     askedOn: "jan 1",
  //     userId:1,
  //     answer:[{
  //       answerBody: "Answer" ,
  //       userAnswered: 'kumar' ,
  //       answeredOn:"jan 2",
  //       userld:2,
       
  //     }]
  //   }
    
  // ];

  const checkAuth=()=>{
    if(user===null){
      Navigate('/Auth')
      alert("Login or Sign up to Aak a Question ")
    }else{
      Navigate('/AskQuestion')
    }
  }


  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}

        <button onClick={checkAuth} className="ask-btn">
          Ask Questions
        </button>
      </div>
      
      <div >
            {
                questionLIST.data=== null ?
                <h1>Loading....</h1> : 
                <>
                 <p>{ questionLIST.data.length } questions</p>
                <QuestionList questionLIST={questionLIST.data}/> 
                </>
            }
     
     </div>
    
    </div>
  );
};

export default HomeMainbar;
