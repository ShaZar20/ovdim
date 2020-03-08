import React, { useState, useEffect } from 'react'
import Form2 from './evaluation/Form2';
import {MdChevronRight} from "react-icons/md"; 
import TextareaAutosize from 'react-textarea-autosize';
import {Redirect} from 'react-router-dom'
import {BASE_URL} from '../constants'
import axios from 'axios'

const main = [{
    subject:"אשכול מדדי מקצועיות",
    question:[
        {main:"מהי הערכתך כלפי העובד/ת בנוגע לידע ובקיאות בתחום האחריות שלו/ה?",
        type:"scala"
        },
        {
            main:"מהי הערכתך כלפי העובד/ת בנגע לעמידה ביעדים אישים ומקצועים? ",
            type:"scala"
        },
        {
            main:"מהי הערכתך כלפי העובד/ת בנוגע לליווי וחניכה? ",
            type:"scala"
        },
        {
            main:"מהי הערכתך כלפי העובד/ת בנוגע מתן פתרונות בתחום האחריות שלו/ה ?",
            type:"scala"
        },
        {
            main:"מהי הערכתך כלפי העובד/ת בנוגע לניהול הזמן והבחנה בין עיקר ותפל?",
            type:"scala"
        },
        {
            main:"מילוי הערכה מילולית על  ",
            type:"open"
        }
    ]},
    {
    subject:"אשכול מדדי אישיות",
    question:[
        {
            main:"מהי הערכתך כלפי העובד/ת בנוגע ליחסי אנוש שלו/ה? ",
            type:"scala"
        },
        {
            main:"מהי הערכתך כלפי העובד/ת בנוגע לשירותיות שלו/ה?  ",
            type:"scala"
        },
        {
            main:"מהי הערכתך כלפי העובד/ת בנוגע לאמינות שלו/ה?  ",
            type:"scala"
        },
        {
            main:"מהי הערכתך כלפי העובד/ת בנוגע לדיסקרטיות שלו/ה? ",
            type:"scala"
        },
        {
            main:"מהי הערכתך כלפי העובד/ת בנוגע לקבלת ביקורת?",
            type:"scala"
        },        {
            main:"מילוי הערכה מילולית על  ",
            type:"open"
        }        
    ]},
    {
    subject:"אשכול מדדי תנועת הצופים",
    question:[
        {
            main:"מהי הערכתך כלפי העובד/ת בנוגע לחיבור ופעולה לאור מטרות התנועה? ",
            type:"scala"
        },
        {
            main:"מהי הערכתך כלפי העובד/ת בנוגע לדוגמא אישית שלו/ה?",
            type:"scala"
        },
        {
            main:"מהי הערכתך כלפי העובד/ת בנוגע למנהיגות שלו/ה ?",
            type:"scala"
        },
        {
            main:"מהי הערכתך כלפי העובד/ת בנוגע לניהול וקידום תהליכים? ",
            type:"scala"
        },
        {
            main:"מהי הערכתך כלפי העובד/ת בנוגע ללמידה עצמאית ויכולת הסקת מסקנות שלו/ה? ",
            type:"scala"
        },
        {
            main:"מהי הערכתך כלפי העובד/ת בנוגע לעבודת צוות?",
            type:"scala"
        },
        {
            main:"מילוי הערכה מילולית על  ",
            type:"open"
        }
    ]},
    {
    subject:"אשכול אישי",
    question:[
        {
            main:"מהם הערכים המובילים אותך בתפקיד? ",
            type:"open"
        },
        {
            main:"מה הדבר שהכי בוער בך לעשות /לקדם/ לשנות במסגרת התפקיד? ",
            type:"open"
        },
        {
            main:"מהם האתגרים שלך בתפקיד? ",
            type:"open"
        },
        {
            main:"מהי מידת שביעות רצונך מתפקידך כיום בתנועת הצופים?",
            type:"scala2"
        },
        {
            main:"באיזו מידה את/ה רואה את עצמך מתקדם/ת בעתיד לתפקידים נוספים בתנועה? ",
            type:"scala2"
        },
        {
            main:"בחר/י 3 עובדים/ות אשר לדעתך מתאימים/ות להתקדם לתפקידים שונים בתנועה",
            type:"list"
        }
    ]}
]


const Scala = (arr,param,step,setq) => {
    let show = []
    for (let i=step;i<step+param;i++){
        show.push(
            <div className="boxTwo">
                <p>{arr[i].about}</p>
                <div className="inputChB-container">
                    <label className="input-box">
                        <input type="checkbox" id="chB1" name="workerValue" checked={arr[i].content == 1 ? true : false} 
                        onChange={(e) => {
                            console.log("nbopo")
                            let b = [...arr]
                            if(b[i].content == "1"){
                                b[i].content = ""
                            }
                            else{
                                b[i].content = 1
                            }
                            setq(b)
                        }} 
                        />
                        1
                        <span className="checkmark" />
                    </label>
                    <label className="input-box">
                        <input type="checkbox" id="chB2" name="workerValue" checked={arr[i].content == 2 ? true : false} 
                         onChange={(e) => {
                            console.log("nbopo")
                            let b = [...arr]
                            if(b[i].content == "2"){
                                b[i].content = ""
                            }
                            else{
                                b[i].content = 2
                            }
                            setq(b)
                        }} 
                        />
                        2
                        <span className="checkmark" />
                    </label>
                    <label className="input-box">
                        <input type="checkbox" id="chB3" name="workerValue" checked={arr[i].content == 3 ? true : false} 
                         onChange={(e) => {
                            console.log("nbopo")
                            let b = [...arr]
                            if(b[i].content == "3"){
                                b[i].content = ""
                            }
                            else{
                                b[i].content = 3
                            }
                            setq(b)
                        }} 
                        />
                        3
                        <span className="checkmark" />
                    </label>
                    <label className="input-box">
                        <input type="checkbox" id="chB4" name="workerValue" checked={arr[i].content == 4 ? true : false} 
                         onChange={(e) => {
                            console.log("nbopo")
                            let b = [...arr]
                            if(b[i].content == "4"){
                                b[i].content = ""
                            }
                            else{
                                b[i].content = 4
                            }
                            setq(b)
                        }} 
                        />
                        4
                        <span className="checkmark" />
                    </label>
                    <label className="input-box">
                        <input type="checkbox" id="chB5" name="workerValue" checked={arr[i].content == 5 ? true : false} 
                         onChange={(e) => {
                            console.log("nbopo")
                            let b = [...arr]
                            if(b[i].content == "5"){
                                b[i].content = ""
                            }
                            else{
                                b[i].content = 5
                            }
                            setq(b)
                        }} 
                        />
                        5
                        <span className="checkmark" />
                    </label>

                </div>
            </div>
            // <Form2  name={arr[i].about}  
            //     onChange={onChange}
            //     value={arr[i].content}
            //     index={i}/>

            // <div>
            //     {arr[i].about} - {arr[i].question}
            // </div>
        )
    }
    return show
}


const Questions = () => {
    const [step,setStep] = useState(0)
    const [eshcol,setEshcol] = useState(1)
    const [quizi,setQuiz] = useState([])
    const [once,setOnce] = useState(true)
    const [total,setTotal] = useState(0)
    const [done,setDone] = useState(false)    
    const [load,setLoad] = useState(false)
    useEffect(()=>{
        let x = JSON.parse(localStorage.getItem("about"))
        let x1 = JSON.parse(localStorage.getItem("userdata"))
        console.log(x,x1)
        let me = x1.name + " "+ x1.lastname
        let arrwithoutme = x.people;
        let arrwithme = [...x.people].concat([x1.name + " "+ x1.lastname ])
        setTotal(arrwithme.length)
        let quiz = []
        let counter = 0
        main.forEach((z,i)=>{
            if(i==3){
                z.question.forEach((c,s)=>{
                    quiz.push({
                        from:me,
                        about:me,
                        subject:z.subject,
                        question:c.main,
                        content:'',
                        type:c.type,
                        order:counter
                    })
                    counter ++
                })
            }
            else{
                z.question.forEach((d,j)=>{
                    arrwithme.forEach((n,l)=>{
                        quiz.push({
                            from:me,
                            about:n,
                            subject:z.subject,
                            question:d.main,
                            content:'',
                            type:d.type,
                            order:counter
                        })
                        counter ++
                    })
                })
            }
        })
        setQuiz(quiz)
    },[])
    return (
        <div>
            {quizi.length!=0 &&
                <React.Fragment>
                    
                    {
                        quizi[step].type == "scala" ? 
                        <div>
                            {step != 0 && 
                                (
                                    quizi[step-1].type == "open" ?
                                <button 
                                className="back-button"
                                onClick={()=>{
                                    setStep(step-1)
                                }}>
                                     <MdChevronRight style={{width:"2rem",height:"2rem"}}/> לעמוד הקודם 
                                </button>
                                :
                                <button 
                                className="back-button"
                                onClick={()=>{
                                    setStep(step-total)
                                }}>
                                     <MdChevronRight style={{width:"2rem",height:"2rem"}}/> לעמוד הקודם 
                                </button>
                                )
                                
                            }
                            <div className="container">
                                <div className="sub-title">{quizi[step].subject}</div>
                                <div className="title">{quizi[step].question}</div>
                                <div style={{width: '80%', margin: '1rem 0'}} >
                                    {/* {props.nameArr.map(name, i => <Form2 name={name} onChange={this.onChange} index={i} />)} */}
                                    
                                    
                                    {Scala(quizi,total,step,setQuiz)}
                                    {/* <Form2  name="אבירם רויזמן"  onChange={this.onChange} index={0}/>
                                    <Form2  name="שי עזר" onChange={this.onChange} index={1} />
                                    <Form2  name="מוחמד" onChange={this.onChange} index={2} /> */}
                                    <div className="buttonToLeft-container">
                                        <button onClick={()=>{
                                // console.log("boom")
                                axios
                                .post(BASE_URL+'/api/saveanswers',{data:quizi})
                                .then(res=>{
                                    console.log(res)
                                    setStep(step+total)
                                    setLoad(false)
                                })
                                setLoad(true)
                                }} className="login-button"  >
                                    {load ? "טוען ": "לשאלה הבאה"}
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                        :


                        <div>
                              {quizi[step-1].type == "open" ?
                                <button 
                                className="back-button"
                                onClick={()=>{
                                    setStep(step-1)
                                }}>
                                     <MdChevronRight style={{width:"2rem",height:"2rem"}}/> לעמוד הקודם 
                                </button>
                                :
                                <button 
                                className="back-button"
                                onClick={()=>{
                                    setStep(step-total)
                                }}>
                                     <MdChevronRight style={{width:"2rem",height:"2rem"}}/> לעמוד הקודם 
                                </button>
                                }
                            <div className="container" style={{maxWidth:"850px"}}>
                            <div className="sub-title">{quizi[step].subject}</div>
                            <div className="title" style={{marginBottom:"2rem"}}>{quizi[step].question} {quizi[step].about}</div>
                            {
                                quizi.map((w,e)=>{
                                    if (w.subject == quizi[step].subject && w.about == quizi[step].about && w.type == "scala" ){
                                            return (
                                                <div className="prat">
                                                    <div>{w.question}</div>
                                                    <div>{w.content}</div>
                                                </div>
                                                )
                                        }
                                    })
                                }
                              <TextareaAutosize value={quizi[step].content} onChange={(e)=>{
                                  let d = [...quizi]
                                  d[step].content = e.target.value
                                  setQuiz(d)
                              }} style={{height:"100%",textAlign: "right",direction: "rtl"}} cols={20} rows={2} 
                            //   onChange={(e)=>{this.addactions(e,j)}}  
                              className="Card" 
                            //   key={j} 
                              placeholder="פרט\י את הסיבות והדוגמאות המשקפות את הציונים המופיעים מעלה" 
                            //   value={z.value} 
                              /> 
                             <div className="buttonToLeft-container">
                                <button 
                                className="login-button"
                                onClick={()=>{

                                    // console.log("boom")
                                    if(quizi.length == step+1){
                                        // alert("done")
                                        setDone(true)
                                    }
                                    else{
                                        axios
                                        .post(BASE_URL+'/api/saveanswers',{data:quizi})
                                        .then(res=>{
                                            console.log(res)
                                            setStep(step+1)
                                            setLoad(false)
                                        })
                                        setLoad(true)
                                    }
                                }}>
                                     {load ? "טוען ": "לשאלה הבאה"}
                                </button>
                            </div>
                            </div>
                        </div>
                    }
                    
                </React.Fragment>
            }
            {
                done && <Redirect to="/done"/>
            }
        </div>
    )
}

export default Questions;