import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

const EnterPage = () => {
    const [redirect,setRedirect] = useState(false)

    return(
        <div className="enterPage-container">
            <h1>הסבר על התהליך</h1>
            <p>ברוך/ה הבא/ה לתהליך הערכת העובדים של תנועת הצופים.</p>
            <p>מטרת התהליך היא לגרום לך למלא 10 שאלונים ב30 דק'.</p>
            <p>אנא השקיע/י מזמנך ככל הניתן. אנחנו וכל צוות מיטי ורובין נמצאים לשירותך.</p>
            <button 
            onClick={()=>{setRedirect(true)}}
            className="login-button">בואו נתחיל!</button>
            {redirect && <Redirect to="/main"/>}
            <div className="text">מזכירים כי יש להשלים את התהליך ברצף ובסיום לא לשכוח ללחוץ על כפתור "שליחה" .</div>
        </div>
    )
};

export default EnterPage;