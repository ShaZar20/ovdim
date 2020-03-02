import React from 'react';
import Form1 from './Form1';

export default class Evaluation1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueArr: []
        }

    }
    valueUpdate = (text = "", index) => {
        const valueArr = [...this.state.valueArr];
        valueArr[index] = text;
        this.setState({ valueArr });
    };

    render() {
        return(
            <div className="container">
                <div className="sub-title">זהות חינוכית ערכית</div>
                <div className="title">מהם הערכים המובילים בתפקיד ?</div>
                <div className="evaluation-container">
                    {/* {props.nameArr.map(name, i => <Form1 name={name} valueArr={this.state.valueArr} valueUpdate={this.valueUpdate} index={i} />)} */}
                    <Form1 name="shay ezer" valueArr={this.state.valueArr} valueUpdate={this.valueUpdate} index={0} />
                    <Form1 name="sdkkr" valueArr={this.state.valueArr} valueUpdate={this.valueUpdate} index={1} />
                    <Form1 name="safdfee kkdsa" valueArr={this.state.valueArr} valueUpdate={this.valueUpdate} index={2} />
                    <Form1 name="ssdfm ewwe" valueArr={this.state.valueArr} valueUpdate={this.valueUpdate} index={3} />
                </div>
                <div className="buttonToLeft-container">
                <button className="login-button">לשאלה הבאה</button>
                </div>
            </div>

        )
    }
};

