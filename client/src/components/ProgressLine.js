import React,{useState} from 'react';
import styled from 'styled-components'



const arr = [
    "פרטים אישיים",
    "הרכבת הטופס שלי",
    "אשכול מדדי מקצועיות",
    "אשכול מדדי אישיות",
    "אשכול מדדי תנועת הצופים",
    "אשכול אישי",
    "סיימת!"
] 

const ProgressLine = (props) => {
    const [par,setPar] = useState(props.step)
    
    return(
        <Progcon>
            <Title>הושלמו {par} מתוך 6 שלבים</Title>
            <Prog>
                <Progress precent={par}></Progress>
            </Prog>
            <Name precent={par}>
                <TheName>
                    {arr[par]}
                </TheName>
            </Name>
        </Progcon>
    )
}


export default ProgressLine;

const Title = styled.div`
    font-size:16px;
    @media(max-width:450px){
        font-size:14px;
    }

`

const Name = styled.div`
    margin-right:${props => props.precent != 6 ? `${100/6*props.precent}%` : '90%'};
`
const TheName = styled.div`
    margin-right:-30%;
    font-size:13px;
`

const Progcon = styled.div`
    width: 250px;
    z-index: 100;
    margin: 0 70% 0 0;
    position: absolute;
    top: 90px;
    @media(max-width:450px){
        /* margin:2rem auto; */
        width: 190px;
        z-index: 100;
        margin:0;
        left:5px;
        position: absolute;
        top: 80px;
    }
`

const Prog = styled.div`
    height:10px;
    background:#E0E0E0;
    border-radius:5px;
    width:100%;
    display:flex;
    justify-content:flex-start;
`

const Progress = styled.div`
    background:#2F80ED;
    border-radius:5px;
    height:10px;
    width:${props=> props.precent == 0 ? "1%" : `${100/6*props.precent}%`};

`