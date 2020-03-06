import React from 'react';
import {NavLink} from 'react-router-dom'
export default class PersonalInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            hanaga: "",
            shevet: "",
            job: "",
            disable:false
        };
    }
    componentDidMount(){
        let x = JSON.parse(localStorage.getItem("userdata"))
        console.log(x)
        this.setState({
            name:x.lastName + " " + x.name,
            hanaga:x.bigUnit,
            shevet:x.unit,
            job:x.role,
            disable:true
        })
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
                        disabled={this.state.disable} 
                        type="text"
                        value={this.state.name}
                        onChange={this.onNameChange}
                    />
                    <p>הנהגה *</p>
                    <input
                        disabled={this.state.disable} 
                        type="text"
                        value={this.state.hanaga}
                        onChange={this.onHanagaChange}
                    />
                    <p>שבט *</p>
                    <input
                        disabled={this.state.disable} 
                        type="text"
                        value={this.state.shevet}
                        onChange={this.onShevetChange}
                    />
                    <p>תפקיד *</p>
                    <input
                        disabled={this.state.disable} 
                        type="text"
                        value={this.state.job}
                        onChange={this.onJobChange}
                    />
                    <NavLink to="/02" style={{textAlign:"left"}}><button className="login-button">אישור</button></NavLink>
                </div>
            </div>
        )
    }
}



