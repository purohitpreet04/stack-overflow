import React, {useState} from "react";
import {useDispatch} from 'react-redux'
import {updateProfile} from '../../action/Users'


const EditProfileForm = ({currentUser, setSwitch}) =>{

    const dispatch = useDispatch()

    const [name, setName] = useState(currentUser?.result?.name)
    const [about, setAbout] = useState(currentUser?.result?.about)
    const [tags, setTags] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(tags.length === 0){
            dispatch(updateProfile(currentUser?.result?._id, {name, about, tags: currentUser?.result?.tags}))
        }else{
            dispatch(updateProfile( currentUser?.result?._id, {name, about, tags}))
        }

        setSwitch(false)
    }


    return (
        <div>
            <h1 className="edit-profile-title">
                Edit Your Profile
            </h1>
            <h2 className="edit-profile-title-2">
                Public information
            </h2>
            <form className="edit-profile-form" onSubmit={handleSubmit}>
                <label htmlFor='name'>
                    <h3>Display Name</h3>    
                    <input type='text' value={name} onChange={(e) => {setName(e.target.value)}}/>
                </label> 
                
                <label htmlFor='about'>
                    <h3>About me</h3>    
                   <textarea id='about' row='10' cols='30' value={about}  onChange={(e) => {setAbout(e.target.value)}}></textarea>
                </label> 

                <label htmlFor='tags'>
                    <h3>Watched tags</h3>
                    <p>Add tags separated by 1 space</p>   
                    <input type='text' value={tags} id='tags' onChange={(e) => setTags(e.target.value.split(','))}/><br/>
                </label> 
                <input type="submit" value='Save Profile' className="user-submit-btn" />
                <button className="user-cancel-btn" onClick={() => {setSwitch(false)}}>cancel</button>

            </form>
        </div>
    )

}

export default EditProfileForm