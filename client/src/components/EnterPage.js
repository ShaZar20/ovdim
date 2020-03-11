import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

const EnterPage = () => {
    const [redirect,setRedirect] = useState(false)

    return(
        <div className="enterPage-container">
            <h1>הסבר על התהליך</h1>
            <p>ברוך/ה הבא/ה לתהליך הערכת העובדים של תנועת הצופים.</p>
            <p>באמצעות תהליך זה אנו מצליחים לבצע הערכת עובדים ועובדות מקצועית ויעילה.</p>
            <p>אנא הקדישו כחצי שעה להשלמת התהליך.</p>
            <button 
            onClick={()=>{setRedirect(true)}}
            className="login-button">בואו נתחיל!</button>
            {redirect && <Redirect to="/main"/>}
            <div className="text">מזכירים כי יש להשלים את התהליך ברצף ובסיום לא לשכוח ללחוץ על כפתור "שליחה" .</div>
        </div>
    )
};

export default EnterPage;