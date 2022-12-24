 import React  from "react";
 import Questions from './Questions'
 



 const QuestionList=({questionLIST})=>{
    return(
            <>
               {
                  questionLIST.map((question)=>(
                     <Questions question={question} key={question.id}/>
               ))
            }
            </>
    )
         }

 export default QuestionList