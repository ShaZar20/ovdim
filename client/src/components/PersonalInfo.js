import React from 'react';
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import {BASE_URL} from '../constants'
import ProgressLine from './ProgressLine'
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

        axios
        .post(BASE_URL+'/api/getstatus',{id:x.id})
        .then(
            res =>{
                console.log(res)
                if(res.data.step == "0"){
                    axios
                    .post(BASE_URL+'/api/setstatus',{id:x.id,step:"1"})
                    .then(res=>{
                        console.log(res)
                    })
                }
                else {
                    switch(res.data.step){
                        case "2":
                            window.location.href = "/02"
                            break;
                        case "3": 
                            window.location.href ="/main"
                            break;
                        case "4":
                            break;
                        case "5":
                            break;
                        case "7":
                            window.location.href = "/done";
                            break;
                    }
                }
            }
        )

        
        this.setState({
            name:x.lastname + " " + x.name,
            hanaga:x.bigunit,
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
            <React.Fragment>
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
                    <NavLink to="/02" style={{textAlign:"left"}}><button  className="login-button" style={{maxWidth:"unset",width:"100%"}}>אישור</button></NavLink>
                    <div style={{fontWeight:"bold"}}>
                        <p style={{textAlign:"center",margin:"0",marginTop:"10px"}} >יש לאשר את נכונות הפרטים.</p>
                        <p style={{textAlign:"center",margin:"0"}}>במידה והפרטים לא נכונים - נא לפנות לרכז\ת משאבי אנוש מרחבי\ת.</p>
                    </div>
                </div>
            </div>
            <ProgressLine step={0} />
            </React.Fragment>
        )
    }
}



