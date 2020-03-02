import React, { useState } from 'react';
import {BASE_URL} from '../constants'
import axios from 'axios'
// import logo from '../images/Zofim-logo.png';
import LoadingPage from './LoadingPage';

const LoginViaSmsPage = () => {
    const [phone,setPhone] = useState('')
    const [id,setId] = useState('')
    const [press,setPress] = useState(false)
    const [loader,setLoader] = useState(false)

    if(loader){
        return(
            <LoadingPage/>
        )
    }
    else{
        return(
            <div className="container">
                <h2 className="title">התחברות לאזור אישי באמצעות סמס</h2>
                <div className="sub-container">
                    <p>תעודת זהות *</p>
                    <input value={id} onChange={(e)=>setId(e.target.value)}/>
                    <p>טלפון נייד *</p>
                    <form className="code-input">
                        <input value={phone} onChange={(e)=>setPhone(e.target.value)} />
                        <button onClick={()=>{
                            setPress(!press)
                            setLoader(true)
                            axios
                            .post(BASE_URL+'/api/validation/',{number:phone})
                            .then(res=>{
                                console.log(res)
                                setLoader(false)
                            })
                        }} disabled={press}>קבלת קוד</button>
                    </form>
                    <p>קוד *</p>
                    <input 
                        placeholder="יש להזין את הקוד שקיבלת"
                        disabled={!press}
                    />
                    
                    <button 
                        className="login-button"
                        disabled={!press}
                    >
                        כניסה
                    </button>
                </div>
            </div>
        )
    }
};

export default LoginViaSmsPage; 