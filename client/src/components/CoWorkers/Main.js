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


const Main = () => {

    const [type,setType] = useState(1)
    useEffect(()=>{
        let x = JSON.parse(localStorage.getItem("userdata"))
        console.log(x)
        let rollType = "מרכז/ת הנהגה";
        switch(rollType) {
            case "מרכז/ת הנהגה": setType = 1;
            case "צוות הנהגה": setType = 2;
            case "מנהל/ת משרד": setType = 3;
            case "מרכז/ת שבט": setType = 4;
            case "מנהל/ת מחלקה /יחידה": setType = 5;
            case "דרג מתנדב": setType = 6;
            case "מנהל/ת מרחב": setType = 7;
            case "רכז/ת מרחבי": setType = 8;
            case "תפקידי מטה": setType = 9;
            case "מנהל/ת חשבונות הנהגה": setType = 3;
            case "מנהל/ת חשבונות בהנהגה": setType = 3;
            case "רכז/ת צופי ים ועדה": setType = 9;

        }
    },[])
    
    switch(type) {
        case 1: return <Type1 />
        case 2: return <Type2 /> 
        case 3: return <Type3 />
        case 4: return <Type4 />
        case 5: return <Type5 />
        case 6: return <Type6 /> 
        case 7: return <Type7 />
        case 8: return <Type8 />
        case 9: return <Type9 />
    }
};

export default Main;