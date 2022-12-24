import axios from 'axios'

const API = axios.create({baseURL: 'http://localhost:5000'})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('Profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
    return req
})


export const logIn = (authData) => API.post('/user/login', authData);
export const signUp = (authData) => API.post('/user/signup', authData);

export const postQuestion = (questionData) => API.post('/questions/Ask', questionData )
export const getAllquestion = () => API.get('/questions/get') 
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`) 
export const voteQuestions = (id, value, userId) => API.patch(`/questions/vote/${id}`, {value, userId})

export const postAnswer = (id, userAnswered,answerBody,noOfAnswers, userId) => API.patch(`/answer/post/${id}`, { userAnswered,answerBody,noOfAnswers, userId })
export const deleteAnswer = (id, AnswerId, noOfAnswers) => API.patch(`/answer/delete/${id}`, { AnswerId, noOfAnswers})
//this all api will import in action files

export const fetchAllUsers = () => API.get('/user/getAllUsers');
export const updatedProfile = (id, updateData) => API.patch(`/user/update/${id}`, updateData)