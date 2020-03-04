import React from 'react';

export default class Form3 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isCheck: 0,
            checkArr: [false, true, true, true, true]
        }
    }

    isDisable = (index) => {
        console.log("isDisable function is running!")
        if((this.state.isCheck < 4) && this.state.checkArr[index]){
            let checkArr = [...this.state.checkArr];
            checkArr[index] = false;
            let isCheck = this.state.isCheck;
            isCheck++;
            return this.setState({isCheck,
             checkArr })
        }
        else if((this.state.isCheck < 4) && !this.state.checkArr[index]){
            const checkArr = [...this.state.checkArr];
            checkArr[index] = true;
            let isCheck = this.state.isCheck;
            isCheck--;
            return this.setState({
            checkArr })
        }
        else if(this.state.isCheck >= 3 ){
            alert("ניתן לבחור עד שלוש תכונות");
        }
    };

    render() {
        return (
            <div className="boxTwo">
                <p>full name</p>
                <div className="ck-box">
                    <label className="ck-button">
                        <input type="checkbox"  className="check-hidden"/>
                        <span className="checkbox-style">שירותיות</span>
                    </label>
                    <label className="ck-button">
                        <input type="checkbox"  className="check-hidden"/>
                        <span className="checkbox-style">שירותיות</span>
                    </label>
                    <label className="ck-button">
                        <input type="checkbox"  className="check-hidden"/>
                        <span className="checkbox-style">שירותיות</span>
                    </label>
                    <label className="ck-button">
                        <input type="checkbox"  className="check-hidden"/>
                        <span className="checkbox-style">שירותיות</span>
                    </label>
                    <label className="ck-button">
                        <input type="checkbox"  className="check-hidden"/>
                        <span className="checkbox-style">שירותיות</span>
                    </label>
                    <label className="ck-button">
                        <input type="checkbox"  className="check-hidden"/>
                        <span className="checkbox-style">שירותיות</span>
                    </label>
                    {/* <button className="form-button" disabled={this.state.checkArr[0]} onClick={(e) => {this.isDisable(0)}} id={0}>שירותיות</button>
                    <button className="form-button" id={2}>שירותיות</button>
                    <button className="form-button" id={3}>שירותיות</button>
                    <button className="form-button" id={4}>שירותיות</button>
                    <button className="form-button" id={5}>שירותיות</button> */}
                </div>
            </div>
        )
    }
}