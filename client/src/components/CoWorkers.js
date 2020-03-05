import React from 'react';
import sLogo from '../images/search-logo.png';
import { TiDelete } from 'react-icons/ti';



export default class CoWorkers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            namesArr: ["ששש","aaa","sss"],
            namesResultes: [],
            menalYashir: "שי עזר",
            menoalYashir: [],
            melave: "",
            melove: "",
            meracazHnaga: "",
            melaveShevet: ""
        }
    }

    onFormChange = (text = "") =>  {
        if (text === "") {
          return this.setState({ 
            namesResultes: []
          })
        }
        const resultes = [...this.state.namesArr.filter(name => name.toLowerCase().trim().indexOf(text.toLowerCase().trim()) !== -1)];
        this.setState({
          namesResultes: resultes
          })
      };

    selectName = (props) => {
        switch(props.type) {
            case 1:
                return this.setState({menalYashir: props.name})
            case 2:
                return this.setState({menoalYashir: [...props.name]})
            case 3:
                return this.setState({melave: props.name})
            case 4:
                return this.setState({melove: props.name})
            case 5:
                return this.setState({meracazHnaga: props.name})
            case 6:
                return this.setState({melaveShevet: props.name})
            default: return 1;
        }
    };

    cancelSelction = () => {

    };

    render() {
        return (
            <div className="container">  
                <h2>פרטים אודות המוערכות/ים שלי</h2> 
                <div className="sub-container">
                    <SwitchForm 
                        workerType = {2}
                        onFormChange = {this.onFormChange}
                        namesResultes = {this.state.namesResultes} 
                        menalYashir = {this.state.menalYashir}
                        menoalYashir = {this.state.menoalYashir}
                        melave = {this.state.melave}
                        melove = {this.state.melove}
                        meracazHnaga = {this.state.meracazHnaga}
                        melaveShevet = {this.state.melaveShevet}
                        cancelSelction = {this.cancelSelction}
                    />
                    <button 
                        className="login-button"
                        disabled={true}
                    >
                        התחלת התהליך
                    </button>
                </div>
            </div>
        )
    }
}

// 1. לא הייתי משתמש בפורם בגלל שיש לו תכונות משלו והא מרנדר את הדף לפעמים , הייתי עושה דיב
//2. הייתי מייצר קומפוננטה נוספת של בחירה מרובה 


const Form = (props) => (
    <div>   
        <form className="code-input">
            <img src={sLogo} alt="sLogo" className="sLogo" />
            <input
                placeholder="חיפוש על פי שם מלא"
                onChange = {(e) => {props.onFormChange(e.target.value); }}
            />
        </form>
        <ul>
            {props.namesResultes.map((name, i) => 
                <li
                    key={i}
                    onClick={(e) => { 
                                        name = e.target.value;
                                        props.selectName(name, props.type); 
                                    }}
                >
                    {name}
                </li>
            )}
        </ul>
    </div>
);

const SwitchForm = (props) => {
    switch (props.workerType) {
        case 1: 
            return <div>
                <p>* מי המנהל/ת הישיר/ה שלי ?</p>
                <Form 
                    onFormChange = {props.onFormChange}
                    namesResultes = {props.namesResultes}
                    type = {1}
                    // max = {3} // זה פרופס שרלוונטי רק לבחירה מרובה - והוא מגדיר מה המקסימום בחירות 
                />
                <div>
                    {props.menalYashir && <div className="selected-input">
                        {props.menalYashir}<TiDelete onClick={props.cancelSelction}/>
                    </div>}
                </div>
                <p>* את מי אני מנהל/ת באופן ישיר ?</p>
                <Form 
                    onFormChange = {props.onFormChange}
                    namesResultes = {props.namesResultes}
                    type = {2}
                />  
            </div>
        case 2:
            return <div>
                <p>* את מי אני מנהל/ת באופן ישיר ?</p>
                <Form 
                    onFormChange = {props.onFormChange}
                    namesResultes = {props.namesResultes}
                    type = {2}
                />
                <p>* מי מלווה אותי מקצועית ?</p>
                <Form 
                    onFormChange = {props.onFormChange}
                    namesResultes = {props.namesResultes}
                    type = {3}
                />
                <p>* מי מרכז/ת ההנהגה שלי ?</p>
                <Form 
                    onFormChange = {props.onFormChange}
                    namesResultes = {props.namesResultes}
                    type = {5}
                />  
            </div>
        case 3:
            return <div>
                <p>* מי מלווה אותי מקצועית ?</p>
                <Form 
                    onFormChange = {props.onFormChange}
                    namesResultes = {props.namesResultes}
                    type = {3}
                />
                <p>* מי מרכז/ת ההנהגה שלי ?</p>
                <Form 
                    onFormChange = {props.onFormChange}
                    namesResultes = {props.namesResultes}
                    type = {5}
                />  
            </div>
        case 4:
            return <div>
                <p>* מי מרכז/ת ההנהגה שלי ?</p>
                <Form 
                    onFormChange = {props.onFormChange}
                    namesResultes = {props.namesResultes}
                    type = {5}
                />
                <p>* מי המלווה השבטי שלי ?</p>
                <Form 
                    onFormChange = {props.onFormChange}
                    namesResultes = {props.namesResultes}
                    type = {6}
                />  
            </div>
        case 5:
            return <div>
                <p>* מי המנהל/ת הישיר/ה שלי ?</p>
                <Form 
                    onFormChange = {props.onFormChange}
                    namesResultes = {props.namesResultes}
                    type = {1}
                />
                <p>* את מי אני מלווה מקצועית ?</p>
                <Form 
                    onFormChange = {props.onFormChange}
                    namesResultes = {props.namesResultes}
                    type = {4}
                />  
            </div>
        default: return 1;
    }
};