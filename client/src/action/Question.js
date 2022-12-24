import * as api from '../Api'


// my code
export const askQuestion = (questionData, navigate) => async ( dispatch) => {

    try{

        const { data } = await api.postQuestion(questionData)
        dispatch({
            type:"POST_QUESTION",
            payload:data
        })
        dispatch(fetchAllquestion())
        navigate('/')

    }catch(error){
        console.log(error);
    }
     
}


export const fetchAllquestion  = () => async (disptach) => {
    try {
        const { data } = await api.getAllquestion()
        disptach({ type: 'FETCH_ALL_QUESTIONS', payload: data})
    } catch (error) {
        console.log(error)
    }
}


export const deleteQuestion = (id, navigate) => async (dispatch) =>{
    try {
        await api.deleteQuestion(id)
        dispatch(fetchAllquestion())
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}

export const voteQuestion = (id, value, userId) => async (dispatch) => {
    try {
         await api.voteQuestions(id, value, userId)
        dispatch(fetchAllquestion())
    } catch (error) {
        console.log(error)
    }
}


//this code is for post new answer
export const PostAnswer = (answerData) => async (dispatch) =>{
    
    try {
        const {id, userAnswered,answerBody,noOfAnswers, userId} = answerData;
        const {data} = await api.postAnswer(id, userAnswered, answerBody, noOfAnswers, userId)
        // console.log(data)
        dispatch({type:'POST_ANSWER', payload: data}) // make sure POST_ANSWER is same as reduser file 
        dispatch(fetchAllquestion())

         
    } catch (error) {
        console.log(error)
    }
}

export const deleteAnswer = (id, AnswerId, noOfAnswers) => async (dispatch) =>{
    try {
        await api.deleteAnswer(id, AnswerId, noOfAnswers)
        dispatch(fetchAllquestion())
    } catch (error) {
        console.log(error)
    }
}