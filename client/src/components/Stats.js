import React, { useEffect,useState } from 'react'
import {Redirect,Link} from 'react-router-dom'
import axios from 'axios'
import {BASE_URL} from '../constants'
import styled from 'styled-components'
import { ControlResponseStatusCode } from 'nexmo'
import _ from 'lodash'

function status (val) {
    switch(val){
        case "0":
            return "ממתין להתחברות ראשונית"
            break;
        case "1":
            return "ממתין לאישור פרטים אישיים"
            break;
        case "2":
            return "ממתין להגדרת הטופס"
            break;
        case "3":
            return "ממתין להשלמת השאלונים"
            break;
        case "4":
            return "ממתין להשלמת השאלונים"
            break;
        case "5":
            return "ממתין להשלמת השאלונים"
            break;
        case "6":
            return "ממתין להשלמת השאלונים"
            break;
        case "7":
            return "הושלם בהצלחה"
            break;
    }
}

const master =[
    302600424,200043263,39806823,301724761,39211024,300329331,305065021,301023651,28073047,34233122,300168507,1112
    // ,206324592
]
const mahlakot = [
    'כספים'
    ,'משאבי אנוש'
    ,'צמיד'
    ,'חינוך'
    ,'הדרכה'
    ,'מזכ"ל'
    ,'קשרי חוץ'
    ,'הגשמה'
    ,'מחשוב'
    ,'תפעול ורכש'
    ,'חוות הצופים'
    ,'בטיחות'
    ,'צופי ים'
    ,'עדת הצופים'
    ,'נוער וקהילה'
]

const Stats = () => {

    const [loader,setLoader] = useState(true)
    const [redi,setRedi] = useState(false)
    const [type,setType] = useState("master")
    const [unit,setUnit] = useState("")
    const [select,setSelect] = useState(true)
    const [unitType,setUnitType] = useState(1)
    const [peop,setPeop] = useState([])

    useEffect(()=>{
        if(mahlakot.includes(unit)){
            setUnitType(0)
            axios
            .post(BASE_URL+'/api/getusersby2',{hanaga:unit})
            .then(res=>{
                console.log(res)
                let arr = _.sortBy(res.data.data, [function(o) { return o.name; }]);
                console.log(arr)
                setPeop(arr)
            })
        }
        else{
            setUnitType(1)
            axios
            .post(BASE_URL+'/api/getusersby',{hanaga:unit})
            .then(res=>{
                console.log(res)
                let arr = _.sortBy(res.data.data, [function(o) { return o.name; }]);
                console.log(arr)
                setPeop(arr)
            })
        }

       
    },[unit])

    useEffect(()=>{
        
        let x1 = JSON.parse(localStorage.getItem("userdata"))
        console.log(x1)
        if(master.includes(x1.id)){
            setType("master")
            setSelect(false)
            setUnit("צפון")
            setLoader(false)
        }else{
            if(x1.role == "מרכז/ת הנהגה" || x1.role == "מנהל/ת מחלקה /יחידה" ){
                setType("user")
                setLoader(false)
                if(x1.role == "מרכז/ת הנהגה"){
                    setUnit(x1.bigunit)
                }else{
                    setUnit(x1.unit)
                }
            }
            else{
                setRedi(true)
                setLoader(false)
            }
        }

    },[])

    return (
        <React.Fragment>
            {loader ?
                 <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                :
                <Statcon>
                {redi && <Redirect to="/"/>}
                <h1 >המוערכים והמוערכות שלי</h1>
                <Divi>
                    <label>הנהגה\מחלקה</label>
                    <select 
                        onChange={(e)=>{
                            console.log(e.target.value)
                            setUnit(e.target.value)}}
                        disabled={select}
                        value={unit}
                    >
                        <option value={'0'}>בחר הנהגה/מחלקה</option>
                        <option value={'צפון'}>צפון</option>
                        <option value={'חיפה'}>חיפה</option>
                        <option value={'החורש'}>החורש</option>
                        <option value={'דרור'}>דרור</option>
                        <option value={'הצוק'}>הצוק</option>
                        <option value={'השחר'}>השחר</option>
                        <option value={'דן'}>דן</option>
                        <option value={'ת"א יפו'}>ת"א יפו</option>
                        <option value={'ר"ג'}>ר"ג</option>
                        <option value={'החוף'}>החוף</option>
                        <option value={'שורק'}>שורק</option>
                        <option value={'יהודה'}>יהודה</option>
                        <option value={'ירושלים'}>ירושלים</option>
                        <option value={'איילון'}>איילון</option>
                        <option value={'דרום'}>דרום</option>
                        <option value={'כספים'}>כספים</option>
                        <option value={'משאבי אנוש'}>משאבי אנוש</option>
                        <option value={'צמיד'}>צמיד</option>
                        <option value={'חינוך'}>חינוך</option>
                        <option value={'הדרכה'}>הדרכה</option>
                        <option value={'מזכ"ל'}>מזכ"ל</option>
                        <option value={'קשרי חוץ'}>קשרי חוץ</option>
                        <option value={'הגשמה'}>הגשמה</option>
                        <option value={'מחשוב'}>מחשוב</option>
                        <option value={'תפעול ורכש'}>תפעול ורכש</option>
                        <option value={'חוות הצופים'}>חוות הצופים</option>
                        <option value={'בטיחות'}>בטיחות</option>
                        <option value={'נוער וקהילה'}>נוער וקהילה</option>
                        <option value={'צופי ים'}>צופי ים</option>
                        <option value={'עדת הצופים'}>עדת הצופים</option>
                    </select>
                </Divi>
                {
                    peop.length == 0 ? 
                    <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                    :
                
                <Table>
                    <thead>
                        <th>שם מלא</th>
                        <th>תפקיד</th>
                        <th>סטטוס אישי</th>
                        <th>סטטוס שיחת הערכה</th>
                    </thead>    
                    <tbody>
                        {
                        peop.map((x)=>{
                            return(
                                <tr>
                                    <td>{x.name} {x.lastname}</td>
                                    <td>{x.role}</td>
                                    <td><StatusCircle status={x.step}/>{status(x.step)}</td>
                                    <td>{x.step == 0 ? "-":(x.step == 7 ? <Link to={`/evaluate/${x._id}`}>מוכן לקיום שיחת הערכה</Link>:"ממתין לסיום התהליך")}</td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </Table>
                }
            </Statcon>          
        }
        </React.Fragment>

    )
}

export default Stats


const StatusCircle = styled.div`
    background:${props=> props.status == "0" ? "gray" : (props.status == "7" ? "green":"yellow")};
    width:9px;
    height:9px;
    display:inline-block;
    margin-left:10px;
    border-radius:25px; 
`

const Statcon = styled.div`

text-align:center;
    h1{
        text-align:center;
    }
    label{
        text-align:right;
    }
    
`
const Divi = styled.div`
    display:flex;
    flex-direction:column;
    width: 20%;
    justify-content:flex-start;
    margin-bottom:2rem;
    margin-right:10%;
    select{
        padding:.5rem;
        border-radius:5px;
    }

`

const Table = styled.table`
    width:80%;
    margin:auto;
    margin-bottom:3rem;
    tbody{
        box-shadow:0 0 0 1px #4f4f4f;
        border-radius:5px;
    }
    td{
        padding: 1rem .5rem;
    }
`