import React, { useState, useEffect } from 'react';
import {BASE_URL} from '../constants'
import axios from 'axios'
import uuidv1 from 'uuid/v1';
// import logo from '../images/Zofim-logo.png';
import LoadingPage from './LoadingPage';
import moment from 'moment'

const LoginViaSmsPage = () => {
    const [phone,setPhone] = useState('')
    const [id,setId] = useState('')
    const [press,setPress] = useState(false)
    const [press1,setPress1] = useState(false)
    const [loader,setLoader] = useState(false)
    const [request,setRequest] = useState('')
    const [code,setCode] = useState('')
    const [pincode,setPinCode] = useState( Math.floor(100000 + Math.random() * 900000))
    
    useEffect(()=>{
        let x = JSON.parse(localStorage.getItem("isuser"))
        if(moment()<=moment(x.time).add(10,'minutes')){
            if(x.isuser == true){
                window.location.href = "/01"
            }
        }
    },[])

        return(
            <React.Fragment>
                {
                    loader ? 
                    <LoadingPage/>
                    :
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
                                setTimeout(()=>{
                                    setUp(false)
                                },60000)

                                setPress1(!press1)
    
                                axios
                                .post(BASE_URL+'/api/validation/finduser',{id,phone})
                                .then(res=>{
                                    console.log("finduser",res)
                                    localStorage.setItem("isuser",JSON.stringify({isuser:res.data.IsUser,time:moment()}))
                                    localStorage.setItem("userdata",JSON.stringify(res.data.data))
                                    if(res.data.IsUser){
                                        setLoader(true)
                                        setPress(!press)
                                        let sendi = "972" + phonet.substr(1)
    
                                        axios
                                        .post(BASE_URL+'/api/validation/',{number:sendi,pincode:pincode})
                                        .then(res=>{
                                            console.log("sms",res)
                                            if(res.data.status == 0){
                                                let tttt = setLoader
                                                setTimeout(()=>{
                                                    tttt(false)
                                                },2000)
                                                // setLoader(false)
                                            }
                                            else{
                                                alert("oops")
                                            }
                                            
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
                            onClick={(e)=>{
                                e.target.innerHTML = "checking.."
                                if(code == pincode){
                                    window.location.href = "/01"
                                }
                                else{
                                    alert("אופס .. נראה שהקוד שהקשת לא נכון")
                                }
                            }}
                        >
                            כניסה
                        </button>
                    </div>
                </div>
                }
            </React.Fragment>
           
        )
    
};

export default LoginViaSmsPage; 