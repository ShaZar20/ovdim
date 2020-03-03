import React, { useState } from 'react';
import {BASE_URL} from '../constants'
import axios from 'axios'

// import logo from '../images/Zofim-logo.png';
import LoadingPage from './LoadingPage';

const LoginViaSmsPage = () => {
    const [phone,setPhone] = useState('')
    const [id,setId] = useState('')
    const [press,setPress] = useState(false)
    const [press1,setPress1] = useState(false)
    const [loader,setLoader] = useState(false)
    const [request,setRequest] = useState('')
    const [code,setCode] = useState('')

    if(loader){
        return(
            <LoadingPage/>
        )
    }
    else{
        return(
            <div className="container">
                <h2 className="title-center">התחברות לאזור אישי באמצעות סמס</h2>
                <div className="sub-container">
                    <p>תעודת זהות *</p>
                    <input value={id} onChange={(e)=>setId(e.target.value)}/>
                    <p>טלפון נייד *</p>
                    <div className="code-input">
                        <input value={phone} onChange={(e)=>setPhone(e.target.value)} />
                        <button id="but" onClick={(e)=>{
                            let evente = e
                            let phonet = phone
                            let setUp = setPress1
                            // setTimeout(()=>{
                            //     setUp(false)
                            // },600)
                            // console.log(evente.target.id)
                            setPress(!press)
                            setPress1(!press1)

                            axios
                            .post(BASE_URL+'/api/validation/finduser',{id,phone})
                            .then(res=>{
                                console.log(res)
                                if(res.data.IsUser){
                                    setLoader(true)
                                    console.log(res)
                                    axios
                                    .post(BASE_URL+'/api/validation/',{number:phonet})
                                    .then(res=>{
                                        console.log(res)
                                        if(res.data.status == 0){
                                            setRequest(res.data.request_id)
                                        }
                                        setLoader(false)
                                    })
                                }
                                else{
                                    alert("מצטערים - נראה שהפרטים האלו לא נמצאים במערכת , בבקשה יידע את מחלקת משאבי אנוש")
                                }
                            })
                        }} disabled={press1}>קבלת קוד</button>
                    </div>
                    <p>קוד *</p>
                    <input 
                        placeholder="יש להזין את הקוד שקיבלת"
                        disabled={!press}
                        value = {code}
                        onChange ={(e)=>{setCode(e.target.value)}}
                    />
                    
                    <button 
                        className="login-button"
                        disabled={!press}
                        onClick={()=>{
                            axios
                            .post(BASE_URL+'/api/validation/check/',({request,code}))
                            .then(res=>{
                                console.log(res)
                            })
                        }}
                    >
                        כניסה
                    </button>
                </div>
            </div>
        )
    }
};

export default LoginViaSmsPage; 