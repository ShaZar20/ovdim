import React, { useState, useEffect } from 'react'
import Form2 from './evaluation/Form2';
import {MdChevronRight} from "react-icons/md"; 
import TextareaAutosize from 'react-textarea-autosize';
import {Redirect} from 'react-router-dom'
import {BASE_URL} from '../constants'
import axios from 'axios'
import _ from 'lodash'
import { TiDelete } from 'react-icons/ti';


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


const Scala = (arr,param,step,setq,setC,co) => {
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
                            if(b[i].content == ""){
                                setC(co+1)
                            }
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
                            if(b[i].content == ""){
                                setC(co+1)
                            }
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
                            if(b[i].content == ""){
                                setC(co+1)
                            }
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
                            if(b[i].content == ""){
                                setC(co+1)
                            }
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
                            if(b[i].content == ""){
                                setC(co+1)
                            }
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
    const [dis,setDis] = useState(true)
    const [counte,setCounte] = useState(0)
    const [doned,setDoned] = useState(false)
    const [arr,setArr] = useState([])
    const [chosen,setChosen] = useState([])
    const [textValue1,settextValue1] = useState('')
    const [chosena,setChosenA] = useState([])
    // const [update,setUpdate] = useState(false)
    const one = 1
    let update = false
    useEffect(()=>{
        
        axios
        .post(BASE_URL + '/api/getusers/')
        .then(res=>{
            console.log(res)
            let b = []
            res.data.data.map((x)=>{
                b.push(x.name + " "+ x.lastname )
            })
            setArr(b)
            // setLoader(false)
        })
        


        let x = JSON.parse(localStorage.getItem("about"))
        let x1 = JSON.parse(localStorage.getItem("userdata"))
        // console.log(x,x1)
        

        axios
        .post(BASE_URL+'/api/getstatus',{id:x1.id})
        .then(
            res =>{
                console.log(res)
                if(res.data.step == "2"){
                    axios
                    .post(BASE_URL+'/api/setstatus',{id:x1.id,step:"3"})
                    .then(ress=>{
                        console.log("set",ress)
                    })
                }
                else {
                    switch(res.data.step){
                        case "0":
                            window.location.href = "/"
                            break;
                        case "1":
                            window.location.href = "/01" 
                            break;
                        case "4":
                            break;
                        case "5":
                            break;
                        case "7":
                            window.location.href = "/done";
                            break;
                    }
                }
            }
        )



        
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
        // console.log("sssssssssss",quiz)
        setQuiz(quiz)

        axios
        .post(BASE_URL+ '/api/getquestions',{from: me })
        .then(res=>{
            // console.log(res)
            let arr = [...res.data]
            let arr1 = _.sortBy(arr, [function(o) { return o.order; }]);
            console.log(arr)
            console.log(arr1)
            let z = true
            let counterq= 0
            arr1.map((w)=>{
                if(w.content == "" && z){
                    // console.log(w.order)
                    counterq ++
                    z=false
                    setStep(w.order)
                }
            })
            // res.data.map((w,i)=>{
                setDoned(true)
                if(arr1.length!=0){
                    console.log("workinggggggggg")
                    setQuiz(arr1)
                }
                else{
                    console.log("//////",quiz)
                    axios
                    .post(BASE_URL+'/api/saveanswers',{data:quiz})
                    .then(res=>{
                        console.log(quizi)
                    })
                }
            // })
        })



    },[])
    return (
        <div>
            {!doned && <div style={{width:"100%",margin:"4rem 0",textAlign:"center",fontSize:"20px"}}>
                    מכינים את השאלות עבורך..
                </div>}
            {quizi.length!=0 && doned &&
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
                                    setDis(false)
                                    setCounte(total)
                                }}>
                                     <MdChevronRight style={{width:"2rem",height:"2rem"}}/> לעמוד הקודם 
                                </button>
                                :
                                <button 
                                className="back-button"
                                onClick={()=>{
                                    setStep(step-total)
                                    setDis(false)
                                    setCounte(total)
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
                                    
                                    
                                    {Scala(quizi,total,step,setQuiz,setCounte,counte)}
                                    {/* <Form2  name="אבירם רויזמן"  onChange={this.onChange} index={0}/>
                                    <Form2  name="שי עזר" onChange={this.onChange} index={1} />
                                    <Form2  name="מוחמד" onChange={this.onChange} index={2} /> */}
                                    <div className="buttonToLeft-container">
                                        <button 
                                        disabled = {counte>=total ? false:true}
                                        onClick={()=>{
                                            setCounte(0)
                                // console.log("boom")
                                axios
                                .post(BASE_URL+'/api/saveanswers',{data:quizi})
                                .then(res=>{
                                    // console.log(res)
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

                        (quizi[step].type=="scala2"
                        ?
                        <div>
                            {step != 0 && 
                                (
                                    quizi[step-1].type == "open" ?
                                <button 
                                className="back-button"
                                onClick={()=>{
                                    setStep(step-1)
                                    setDis(false)
                                    setCounte(total)
                                }}>
                                     <MdChevronRight style={{width:"2rem",height:"2rem"}}/> לעמוד הקודם 
                                </button>
                                :
                                <button 
                                className="back-button"
                                onClick={()=>{
                                    setStep(step-total)
                                    setDis(false)
                                    setCounte(total)
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
                                    
                                    
                                    {Scala(quizi,one,step,setQuiz,setCounte,counte)}
                                    {/* <Form2  name="אבירם רויזמן"  onChange={this.onChange} index={0}/>
                                    <Form2  name="שי עזר" onChange={this.onChange} index={1} />
                                    <Form2  name="מוחמד" onChange={this.onChange} index={2} /> */}
                                    <div className="buttonToLeft-container">
                                        <button 
                                        disabled = {counte>=one ? false:true}
                                        onClick={()=>{
                                            setCounte(0)
                                // console.log("boom")
                                axios
                                .post(BASE_URL+'/api/saveanswers',{data:quizi})
                                .then(res=>{
                                    // console.log(res)
                                    setStep(step+one)
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
                        (quizi[step].type == "list" 
                        ?
                        <div>
                        {step != 0 && 
                            (
                                quizi[step-1].type == "open" ?
                            <button 
                            className="back-button"
                            onClick={()=>{
                                setStep(step-1)
                                setDis(false)
                                setCounte(total)
                            }}>
                                 <MdChevronRight style={{width:"2rem",height:"2rem"}}/> לעמוד הקודם 
                            </button>
                            :
                            <button 
                            className="back-button"
                            onClick={()=>{
                                setStep(step-total)
                                setDis(false)
                                setCounte(total)
                            }}>
                                 <MdChevronRight style={{width:"2rem",height:"2rem"}}/> לעמוד הקודם 
                            </button>
                            )
                            
                        }
                        <div className="container">
                            <div className="sub-title">{quizi[step].subject}</div>
                            <div className="title">{quizi[step].question}</div>
                            <div className="sub-container" style={{margin:"0",width:"100%",marginTop:"5rem"}}>

                               



                                                       
                        
                            <div className="code-input">
                                <input
                                    placeholder="חיפוש על פי שם מלא"
                                    onChange = {(e) => {
                                    
                                        if (e.target.value === "") {
                                            settextValue1('')
                                            setChosenA([])
                                            }
                                            else{
                                                const resultes = [...arr.filter(name => name.toLowerCase().trim().indexOf(e.target.value.toLowerCase().trim()) !== -1)]
                                                settextValue1(e.target.value)
                                                setChosenA(resultes)
                                            }
                                    
                                    }}
                                    value = {textValue1}
                            
                                />
                                {textValue1 && <TiDelete style={{width:"2rem",height:"2rem"}} onClick={(e) => {settextValue1('')}} />} 
                            </div>
                            <ul hidden={!textValue1}>
                                {chosena.map((name, i) => 
                                <li
                                    key={i}
                                    onClick={(e) => {
                                        if(chosen.length < 3){
                                            setChosen([...chosen,name])
                                            settextValue1('')
                                        }
                                    }}
                                >
                                {name}
                                </li>)}
                            </ul>
                            <div>ניתן לבחור עד 3 אנשים</div>
                            <div className="container-selected_names">
                                {chosen && chosen.map((name, i) =>
                                    <div  className="selected-input">{name}<TiDelete style={{width:"3rem",height:"3rem"}} onClick={(e) => { 
                                        let newq = [...chosen]
                                        // console.log("what",i,newq)
                                        // console.log(newq.splice(i,1))
                                        setChosen(newq.splice(i,1)) }}/>
                                    </div> )
                                }    
                            </div>
                        




                                <div className="buttonToLeft-container">
                                    <button 
                                    // disabled = {counte>=one ? false:true}
                                    onClick={()=>{
                                        setCounte(0)
                                        quizi[step].content = JSON.stringify(chosen)
                                        console.log(quizi[step])
                            // console.log("boom")
                            axios
                            .post(BASE_URL+'/api/saveanswers',{data:quizi})
                            .then(res=>{
                                // console.log(res)
                                // setStep(step+one)
                                setLoad(false)
                            
                                if(quizi.length == step+1){
                                    // alert("done")
                                    setDone(true)
                                }
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
                                    setDis(false)
                                    setCounte(total)
                                }}>
                                     <MdChevronRight style={{width:"2rem",height:"2rem"}}/> לעמוד הקודם 
                                </button>
                                :
                                <button 
                                className="back-button"
                                onClick={()=>{
                                    setStep(step-total)
                                    setDis(false)
                                    setCounte(total)
                                }}>
                                     <MdChevronRight style={{width:"2rem",height:"2rem"}}/> לעמוד הקודם 
                                </button>
                                }
                            <div className="container" style={{maxWidth:"850px"}}>
                            <div className="sub-title">{quizi[step].subject}</div>
                            <div className="title" style={{marginBottom:"2rem"}}>{quizi[step].question} {quizi[step].about} {quizi[step].about == quizi[step].from && "(אני)"}</div>
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
                              <TextareaAutosize  value={quizi[step].content} onChange={(e)=>{
                                  if(e.target.value == ""){
                                    setDis(true)
                                  }
                                  else{
                                    setDis(false)
                                  }
                                  let d = [...quizi]
                                  d[step].content = e.target.value
                                  setQuiz(d)
                              }} style={{height:"40px",textAlign: "right",direction: "rtl"}} cols={20} rows={2} 
                            //   onChange={(e)=>{this.addactions(e,j)}}  
                              className="Card" 
                            //   key={j} 
                              placeholder="פרט\י את הסיבות והדוגמאות המשקפות את הציונים המופיעים מעלה" 
                            //   value={z.value} 
                              /> 
                             <div className="buttonToLeft-container">
                                <button 
                                // disabled = {dis}
                                className="login-button"
                                onClick={()=>{
                                    if(quizi[step].content == ""){
                                        quizi[step].content = "--ללא הערות--"
                                    }
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
                        
                        )
                        )
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