import React from 'react';
import Form2 from './Form2';

export default class Evaluation2 extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            numValueArr: []
        }
        
    }

    onChange = (numValue, index) => {
        const numValueArr = [...this.state.numValueArr];
        numValueArr[index] = numValue;
        this.setState({ numValueArr });
    };

    isDisable = () => {
        console.log(this.state.numValueArr.length === 0);
        this.state.numValueArr.map(value => {if(value < 1 || value > 5) return true;})
        if(this.state.numValueArr.length === 0)
            return true;
        else return false;
    };

    render() {
        return(
            <div className="container">
                <div className="sub-title">זהות חינוכית ערכית</div>
                <div className="title">עד כמה לדעתך היא/הוא מהווה דמות ערכית וחינוכית ?</div>
                <form style={{width: '80%', margin: '1rem 0'}} >
                    {/* {props.nameArr.map(name, i => <Form2 name={name} onChange={this.onChange} index={i} />)} */}
                    <Form2  name="אבירם רויזמן"  onChange={this.onChange} index={0}/>
                    <Form2  name="שי עזר" onChange={this.onChange} index={1} />
                    <Form2  name="מוחמד" onChange={this.onChange} index={2} />
                    <div className="buttonToLeft-container">
                        <button className="login-button" type="submit" disabled={this.isDisable}>לשאלה הבאה</button>
                    </div>
                </form>
            </div>
        )
    }
};
