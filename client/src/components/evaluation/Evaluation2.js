import React from 'react';

const Evaluation2 = () => (
    <div className="container">
        <div className="sub-title">זהות חינוכית ערכית</div>
        <div className="title">עד כמה לדעתך היא/הוא מהווה דמות ערכית וחינוכית ?</div>
        <div className="boxTwo">
            <p>name</p>
            <div className="input-box">
                1
                <input type="checkbox" /> 
            </div>
            <div className="input-box">
                2
                <input type="checkbox" /> 
            </div>
            <div className="input-box">
                3
                <input type="checkbox" /> 
            </div>
            <div className="input-box">
                4
                <input type="checkbox" /> 
            </div>
            <div className="input-box">
                5
                <input type="checkbox" /> 
            </div>
        </div>
        <button className="login-button">לשאלה הבאה</button>
    </div>
);

export default Evaluation2;