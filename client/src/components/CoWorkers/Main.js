import React, {useEffect,useState} from 'react';
import Type1 from './Type1';
import Type2 from './Type2';
import Type3 from './Type3';
import Type4 from './Type4';
import Type5 from './Type5';
import Type6 from './Type6';
import Type7 from './Type7';
import Type8 from './Type8';
import Type9 from './Type9';
import axios from 'axios'
import {BASE_URL} from '../../constants'


const Main = () => {

    const [type,setType] = useState(1)
    const [arr,setArr] = useState([])
    const [loader,setLoader] = useState(true)

    useEffect(()=>{
        let x = JSON.parse(localStorage.getItem("userdata"))

        
        axios
        .post(BASE_URL+'/api/getstatus',{id:x.id})
        .then(
            res =>{
                console.log(res)
                if(res.data.step == "1"){
                    axios
                    .post(BASE_URL+'/api/setstatus',{id:x.id,step:"2"})
                    .then(res=>{
                        console.log(res)
                    })
                }
                else {
                    switch(res.data.step){
                        case "0":
                            window.location.href = "/"
                            break;
                        case "3": 
                            window.location.href ="/main"
                            break;
                        case "1":
                            window.location.href ="/01"
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







        if(x.role == "מרכז/ת שבט"){
            console.log("aaaaaa",x)
            axios
            .post(BASE_URL + '/api/getusersby/',{hanaga:x.bigunit})
            .then(res=>{
                console.log(res)
                let b = []
                res.data.data.map((x)=>{
                    b.push(x.name + " "+ x.lastname )
                })
                setArr(b)
                setLoader(false)
            })
        }
        else{
            axios
            .post(BASE_URL + '/api/getusers/')
            .then(res=>{
                console.log(res)
                let b = []
                res.data.data.map((x)=>{
                    b.push(x.name + " "+ x.lastname )
                })
                setArr(b)
                setLoader(false)
            })
        }
        console.log(x)
        let rollType = x.role;
        console.log(rollType)

        switch(rollType) {
            case "מרכז/ת הנהגה": 
                setType(1);
                break;
            case "צוות הנהגה": 
                setType(2);
                break;
            case "מנהל/ת משרד": 
                setType(3);
                break;
            case "מרכז/ת שבט": 
                setType(4);
                break;
            case "מנהל/ת מחלקה /יחידה": 
                setType(5);
                break;
            case "דרג מתנדב": 
                setType(6);
                break;
            case "גזבר/ית שבט":
                setType(6);
                break;
            case "יור ועדה":
                setType(6);
                break;
            case "יור תנועת הצופים":
                setType(6);
                break;
            case "סגן ראש שבט":
                setType(6);
                break;
            case "סגן/ית ראש הנהגה":
                setType(6);
                break;
            case "עוזר/ת גזבר הנהגה":
                setType(6);
                break;
            case "גזבר/ית הנהגה":
                setType(6);
                break;
            case "ראש הנהגה":
                setType(6);
                break;
            case "ראש שבט":
                setType(6);
                break;
            case "מנהל/ת מרחב": 
                setType(7);
                break;
            case "רכז/ת מרחבי": 
                setType(8);
                break;
            case "תפקידי מטה": 
                setType(9);
                break;
            case "מנהל/ת חשבונות הנהגה": 
                setType(3);
                break;
            case "מנהל/ת חשבונות בהנהגה": 
                setType(3);
                break;
            case "רכז/ת צופי ים ועדה": 
                setType(9);
                break;
            default :setType(0)
        }
    },[])
    
    if(!loader){
        switch(type) {
            case 0: return (<div style={{textAlign:"center",marginTop:"3rem",fontSize:"16px"}}>היי , נראה שקרתה תקלה , אנא צור קשר עם רכז משאבי האנוש שלך לפתרון</div>)
            case 1: return <Type1 arr={arr} />
            case 2: return <Type2 arr={arr} /> 
            case 3: return <Type3 arr={arr} />
            case 4: return <Type4 arr={arr} />
            case 5: return <Type5 arr={arr} />
            case 6: return <Type6 arr={arr} /> 
            case 7: return <Type7 arr={arr} />
            case 8: return <Type8 arr={arr} />
            case 9: return <Type9 arr={arr} />
        }
    }
    else{
        return <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    }
};

export default Main;

