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

`

const Name = styled.div`
    margin-right:${props => props.precent != 6 ? `${100/6*props.precent}%` : '90%'};
`
const TheName = styled.div`
    margin-right:-30%;
    font-size:13px;
`

const Progcon = styled.div`
    width:250px;
    margin: 2rem 75% 0 0 ;
    @media(max-width:450px){
        margin:2rem auto;
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