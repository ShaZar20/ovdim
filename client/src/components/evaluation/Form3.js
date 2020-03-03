import React from 'react';

export default class Form3 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isCheck: 0
            
        }
    }

    isDisable = () => {

    };

    render() {
        return (
            <div className="boxTwo">
                <p>full name</p>
                <div>
                    <button className="form-button" disabled={true}>שירותיות</button>
                    <button className="form-button">שירותיות</button>
                    <button className="form-button">שירותיות</button>
                    <button className="form-button">שירותיות</button>
                    <button className="form-button">שירותיות</button>
                </div>
            </div>
        )
    }
}