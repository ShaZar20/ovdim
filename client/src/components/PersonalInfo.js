import React from 'react';

export default class PersonalInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            hanaga: "",
            shevet: "",
            job: ""
        };
    }

    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({ name }));
    };

    onHanagaChange = (e) => {
        const hanaga = e.target.value;
        this.setState(() => ({ hanaga }));
    };

    onShevetChange = (e) => {
        const shevet = e.target.value;
        this.setState(() => ({ shevet }));
    };

    onJobChange = (e) => {
        const job = e.target.value;
        this.setState(() => ({ job }));
    };
    
    render() {
        return (
            <div className="container">
                <div className="sub-container">
                    <h2 className="title-center">הפרטים האישיים שלי</h2>
                    <p>שם מלא *</p>
                    <input 
                        type="text"
                        value={this.state.name}
                        onChange={this.onNameChange}
                    />
                    <p>הנהגה *</p>
                    <input 
                        type="text"
                        value={this.state.hanaga}
                        onChange={this.onHanagaChange}
                    />
                    <p>שבט *</p>
                    <input 
                        type="text"
                        value={this.state.shevet}
                        onChange={this.onShevetChange}
                    />
                    <p>תפקיד *</p>
                    <input 
                        type="text"
                        value={this.state.job}
                        onChange={this.onJobChange}
                    />
                    <button className="login-button">אישור</button>
                </div>
            </div>
        )
    }
}



