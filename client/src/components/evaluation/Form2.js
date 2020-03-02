import React from 'react';

export default class Form2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkStatus: [false, false, false, false, false],
            isCheck: false
        }
        
    }
    onChange = (value) => {
        const checkStatus = [...this.state.checkStatus];
        if(this.state.isCheck === value){
            checkStatus[value-1] = false;
            this.setState({checkStatus, isCheck: false});
            this.props.onChange(0, this.props.index)
        }
        else if(this.state.isCheck && this.state.isCheck !== value) {
            checkStatus[this.state.isCheck-1] = false;
            checkStatus[value-1] = true
            this.setState({ checkStatus, isCheck: value })
            this.props.onChange(value, this.props.index)
        }
        else {
            checkStatus[value-1] = true;
            this.setState({ checkStatus, isCheck: value });
            this.props.onChange(value, this.props.index)
        }

    };
    

    render () {
        return (
            <div className="boxTwo">
                <p>{this.props.name}</p>
                <div className="inputChB-container">
                    <label className="input-box">
                        <input type="checkbox" id="chB1" name="workerValue" checked={this.state.checkStatus[0]} onChange={(e) => {this.onChange(1, this.prevState)}} />
                        1
                        <span className="checkmark" />
                    </label>
                    <label className="input-box">
                        <input type="checkbox" id="chB2" name="workerValue" checked={this.state.checkStatus[1]} onChange={(e) => {this.onChange(2, this.prevState )}} />
                        2
                        <span className="checkmark" />
                    </label>
                    <label className="input-box">
                        <input type="checkbox" id="chB3" name="workerValue" checked={this.state.checkStatus[2]} onChange={(e) => {this.onChange(3, this.prevState )}} />
                        3
                        <span className="checkmark" />
                    </label>
                    <label className="input-box">
                        <input type="checkbox" id="chB4" name="workerValue" checked={this.state.checkStatus[3]} onChange={(e) => {this.onChange(4, this.prevState )}} />
                        4
                        <span className="checkmark" />
                    </label>
                    <label className="input-box">
                        <input type="checkbox" id="chB5" name="workerValue" checked={this.state.checkStatus[4]} onChange={(e) => {this.onChange(5, this.prevState )}} />
                        5
                        <span className="checkmark" />
                    </label>

                </div>
            </div>
        )
    }
}