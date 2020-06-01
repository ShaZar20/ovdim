import React, { useEffect } from 'react'
import Axios from 'axios'
import {BASE_URL} from '../constants'
import ProgressLine from './ProgressLine'
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
        <React.Fragment>
        <div style={{margin:"5rem auto"}} className="enterPage-container">
            <h1 style={{fontWeight:"bold",textAlign:"center",fontSize:"18px"}}>סיימת בהצלחה!</h1>
            <h1 style={{textAlign:"center",marginTop:"2rem"}}>סיימת את השאלון הערכת עובדים בתנועת הצופים! 
                תודה רבה על הזמן שהקדשת. 
                המשך התהליך יהיה מול המנהל/ת הישיר/ה בהנהגה / במחלקה. 
                שיהיה בהצלחה :)</h1>
        </div>
        </React.Fragment>
    )
}

export default Final;

