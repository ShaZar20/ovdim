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
        if(x.role == "מרכז/ת שבט"){
            axios
            .post(BASE_URL + '/api/getusersby/',{hanage:x.bigUnit})
            .then(res=>{
                console.log(res)
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
            case 0: return (<div>damn</div>)
            case 1: return <Type1 />
            case 2: return <Type2 arr={arr}/> 
            case 3: return <Type3 />
            case 4: return <Type4 />
            case 5: return <Type5 />
            case 6: return <Type6 /> 
            case 7: return <Type7 />
            case 8: return <Type8 />
            case 9: return <Type9 />
        }
    }
    else{
        return <div></div>
    }
};

export default Main;

