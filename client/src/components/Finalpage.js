import React, { useEffect } from 'react'
import Axios from 'axios'
import {BASE_URL} from '../constants'

const Final = () => {
    useEffect(()=>{
        let x1 = JSON.parse(localStorage.getItem("userdata"))
        console.log(x1)
        let me = x1.id
        Axios
        .post(BASE_URL+'/api/setstatus',{id:me,step:"7"})
        .then(res=>{
            console.log(res)
        })
        // axios
        // .post()
    },[])

    return (
        <div style={{margin:"5rem auto"}} className="enterPage-container">
            <h1>סיימת בהצלחה!</h1>
        </div>
    )
}

export default Final;

