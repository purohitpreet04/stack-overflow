import React from "react";
import { useSelector,useDispatch } from 'react-redux' 
import {Link, useParams} from 'react-router-dom'
import moment from 'moment'
import { confirm } from "react-confirm-box";
// import { useNavigate } from "react-router-dom";


// import QuestonDetails from "./QuestionDetails";
import Avatar from "../../components/Avatar/Avatar";
import './Question.css'
import  {deleteAnswer} from '../../action/Question'
 



const DisplayAns = ({question,handleShare}) =>{

    const User = useSelector((state) => (state.currentUserReducer))
    const { id } = useParams()
    const dispatch = useDispatch()
    const handleDelete = async (answerId, noOfAnswers) => {
        const Delete = await confirm('Are you Sure?')
        if(Delete){
        dispatch(deleteAnswer(id, answerId, noOfAnswers - 1))
        }
    }
    // console.log(AnswerId, noOfAnswers - 1 , id);


    return(
        <div>
            {
                question.answer.map((ans)=>(
                    <div className="display-ans" key={ans._id}>
                        <p>{ans.answerBody}</p>
                        <div className="question-action-user">
                            <div>
                                <button type="button" onClick={handleShare}>Share</button>
                                {
                                   User?.result?._id === ans?.userId && (
                                     <button type='button' onClick={() => handleDelete(ans._id, question.noOfAnswers)}>Delete</button>
                                                                )           
                                 }
                             </div>
                            <div>
                                <p>Answered {moment(ans.answeredOn).fromNow()}</p>
                                <Link to={`/users/${question.userId}`} className="user-link" style={{color:'#0086d8'}}>
                                <Avatar backgroundColor='green' px='8px' py='5px'  borderRadius='4px'>{ans.userAnswered.charAt(0).toUpperCase()}</Avatar>
                                <div>
                                     {ans.userAnswered}
                                </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayAns