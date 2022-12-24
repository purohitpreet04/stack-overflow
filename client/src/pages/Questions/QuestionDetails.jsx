import React from "react";
import {  Link, useParams, useNavigate,useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import moment from "moment";
import copy from 'copy-to-clipboard'
import { confirm } from "react-confirm-box";


import upvotes from '../../assets/sort-up-solid.svg' 
import downvotes from '../../assets/sort-down-solid.svg'
import './Question.css'
import Avatar from '../../components/Avatar/Avatar'
import DisplayAns from "./DisplayAns";
import { PostAnswer, deleteQuestion, voteQuestion } from '../../action/Question.js'


const QuestonDetails = () => {

      const { id } = useParams()
      const questionsList = useSelector((state) => (state.questionReducers))
      const User = useSelector((state) => (state.currentUserReducer))
      const [answer,setAnswer] = useState('')
      const dispatch = useDispatch()
      const navigate = useNavigate()
      const location = useLocation()
      const url = 'http://localhost:3000'



    //   console.log(questionsList)
    //   console.log(location)
       const handleShare = () =>{
                    copy(url+location.pathname)
                    alert('Copied url:'+url+location.pathname)
                                }
     

      const handlePostans = (e, answerLength) =>{
        e.preventDefault()

        if(User === null){
          alert("Login or Signup to answer a Question ")
          navigate('/Auth')
        } else {
          if(answer === ''){
            alert('Enter an answer before submitting')
          }else{
            dispatch( PostAnswer(
              {id, 
              noOfAnswers: answerLength + 1,
              answerBody: answer, 
              userAnswered:User.result.name,
              userId:User.result._id}))  
            }
          // console.log({noOfAnswers,answerBody,userAnswered});
        }}

        const handleDelete = async () => {
         const Delete = await confirm('Are you Sure?')
            if(Delete){
            dispatch(deleteQuestion(id, navigate))
            }else{

            }
        }

        const handleUpvote = async () =>{
            dispatch(voteQuestion(id, 'upVote'))
        }

        const handleDownvote = async () =>{
            dispatch(voteQuestion(id, 'downVote'))
        }

      return (
        <div className='question-details-page'>
            {
                questionsList.data === null ?
                <h1>Loading...</h1> :
                <>
                    {
                        questionsList.data.filter(question=> question._id === id).map(question =>(
                            <div key={question._id}>
                                <section className='question-details-container'>
                                    <h1>{question.questionTitle}</h1>
                                    <div className='question-details-container-2'>
                                        <div className="question-votes">
                                            <img src={upvotes} alt="" width='18' className='votes-icon' onClick={handleUpvote}/>
                                            <p>{question.upVotes.length - question.downVotes.length}</p>
                                            <img src={downvotes} alt="" width='18' className='votes-icon' onClick={handleDownvote}/>

                                        </div>
                                        <div style={{width: "100%"}}>
                                            <p className='question-body'>{question.questionBody}</p>
                                            <div className="question-details-tags">
                                                {
                                                    question.questionTags.map((tag) => (
                                                        <p key={tag}>{tag}</p>
                                                    ))
                                                }
                                            </div>
                                            <div className="question-action-user">
                                                <div>
                                                    <button type='button' onClick={handleShare}>Share</button>
                                                    {
                                                          User?.result?._id === question?.userId && (
                                                            <button type='button' onClick={handleDelete}>Delete</button>
                                                        )
                                                      
                                            
                                                    }
                                                </div>
                                                <div>
                                                    <p>asked {moment(question.askedOn).fromNow()}</p>
                                                    <Link to={`/Users/${question.userId}`} className='user-link' style={{color:'#0086d8'}}>
                                                        <Avatar backgroundColor="orange" px='8px' py='5px' borderRadius="4px">{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                        <div>
                                                            {question.userPosted}
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {
                                    question.noOfAnswers !== 0 && (
                                        <section>
                                            <h3>{question.noOfAnswers} Answers</h3>
                                            <DisplayAns key={question._id} question={question} handleShare={handleShare}/>
                                        </section>
                                    )
                                }
                                <section className='post-ans-container'>
                                    <h3>Your Answer</h3>
                                    <form onSubmit={ (e) => { handlePostans(e, question.answer.length) }}>
                                        <textarea cols="30" rows="10" onChange={ e => setAnswer( e.target.value ) }></textarea><br />
                                        <input type="Submit" className='post-ans-btn' value='Post Your Answer'/>
                                    </form>
                                    <p>
                                        Browse other Question tagged
                                        {
                                            question.questionTags.map((tag) => (
                                                <Link to='/Tags' key={tag} className='ans-tags'> {tag} </Link>
                                            ))
                                        } or 
                                        <Link to='/AskQuestion' style={{textDecoration: "none", color:"#009dff"}}> ask your own question.</Link>
                                    </p>
                                </section>
                            </div>
                        ))
                    }
                </>
            }
        </div>
    )
}
  export default QuestonDetails

//       return(
        
//         <div className="question-details-page">
//             {
//                 questionLIST.data=== null ? 
//                 <h1>Loading....</h1> : 
//                 <>
//                     {
//                         questionLIST.data.filter(question=> question._id === id).map(question =>(
//                             <div key={question._id}>
//                                 <section className="question-details-container" >
//                                     <h1>{question.questionTitle}</h1>
//                                         <div className="question-details-container-2">
//                                                 <div className="question-votes">
//                                                     <img src={upvotes} alt="" width="18" className="votes-icon"/>
//                                                     <p>{question.upVotes - question.downVotes}</p>
//                                                     <img src={downvotes} alt="" width="18" className="votes-icon" />
//                                                 </div>
//                                                 <div style={{width:"100%"}}>
//                                                   <p className="question-body">{question.questionBody}</p>
//                                                   <div className="question-details-tags">
//                                                     {
//                                                       question.questionTags.map((tag)=>(
//                                                         <p key={tag}>{tag}</p>
//                                                       ))
//                                                     }
//                                                   </div>
//                                                   <div className="question-action-user">
//                                                     <div>
//                                                       <button type="button">Share</button>
//                                                       <button type="button">Delete</button>
//                                                     </div>
//                                                     <div>
//                                                       <p>asked {question.askedOn}</p>
//                                                       <Link to={`/user/${question.userId}`} className="user-link" style={{color:'#0086d8'}}>
//                                                         <Avatar backgroundColor='orange' px='8px' py='5px'>{question.userPosted.charAt(0).toUpperCase()}</Avatar>
//                                                         <div>
//                                                           {question.userPosted}
//                                                         </div>
//                                                       </Link>
//                                                     </div>
//                                                   </div>
//                                                </div>                                     
//                                        </div>
//                                 </section>
//                                 {
//                                   question.noOfAnswers !== 0 && (
//                                   <section>
//                                     <h3>{question.noOfAnswers} answers</h3>
//                                     <DisplayAns key={question._id} question={question}/>
//                                   </section>
//                                   )
//                                 }
//                                 <section className="post-ans-container">
//                                   <h3 className="">Your Answer</h3>
//                                   {/* this form is for new ans */}
//                                   <form onSubmit={ (e) => {handlePostans(e, question.answer.length) } } >
//                                     <textarea  cols="30" rows="10" onChange={ e => setAnswer( e.target.value )} ></textarea><br/>
//                                     <input type="submit" className="post-ans-btn" value="Post Your Answer"/>
//                                   </form>

//                                   <p>
//                                     Browse other Question tagged
//                                     {
//                                       question.questionTags.map((tags)=>(
//                                         <Link to="/tags" key={tags} className="ans-tags"> {tags} </Link>
//                                       ))
//                                     } or 
//                                     <Link to='/AskQuestion' style={{textDecoration:'none', color:'#009dff'}}>  Ask Your Own Question</Link>
//                                   </p>

//                                 </section>
//                             </div>
//                         ))
//                     }

//                 </>
//             }
            
//         </div>
//     )
// }



  // var questionList = [
    //     {
    //       _id:'1',
    //       upVotes :3,
    //       downVotes: 2,
    //       noOfAnswers: 2,
    //       questionTitle: "What is a function?",
    //       questionBody: "It meant to be",
    //       questionTags: ["java", "node js", "react js", "mongo db","Express js"],
    //       userPosted: "preet",
    //       askedOn: "jan 1",
    //       userId:1,
    //       answer:[{
      //         answerBody: "Answer" ,
      //         userAnswered: 'kumar' ,
      //         answeredOn:"jan 2",
      //         userld:2,
      //       }]
      //     },
      //     {
        //       _id: '2',
        //       upVotes :3,
        //       downVotes: 2,
        //       noOfAnswers: 0,
        //       questionTitle: "What is a function?",
        //       questionBody: "It meant to be",
        //       questionTags: ["javascript", "R", "python"],
        //       userPosted: "preet",
        //       askedOn: "jan 1",
        //       userId:1,
        //       answer:[{
          //         answerBody: "Answer" ,
          //         userAnswered: 'kumar' ,
          //         answeredOn:"jan 2",
          //         userld:2,
          
          //       }]
          //     },
          //     {
    //       _id: '3',
    //       upVotes :3,
    //       downVotes: 2,
    //       noOfAnswers: 0,
    //       questionTitle: "What is a function?",
    //       questionBody: "It meant to be",
    //       questionTags: ["javascript", "R", "python"],
    //       userPosted: "preet",
    //       askedOn: "jan 1",
    //       userId:1,
    //       answer:[{
      //         answerBody: "Answer" ,
      //         userAnswered: 'kumar' ,
      //         answeredOn:"jan 2",
      //         userld:2,
      
      //       }]
      //     }
      
      //   ];