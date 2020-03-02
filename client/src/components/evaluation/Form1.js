import React from 'react';

export default class Form1 extends React.Component {
    constructor(props) {
        super (props);
        this.state ={
        }
    }

    render() {
        return (
            <div className="box">
                <p>{this.props.name}</p>
                <input
                    type="text" 
                    onChange = {(e) => this.props.valueUpdate(e.target.value, this.props.index)}
                />
            </div>
        )
    }
}