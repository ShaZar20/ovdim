import React from 'react';
import sLogo from '../../images/search-logo.png';
import { TiDelete } from 'react-icons/ti';



export default class Type5 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menalYashir: "asd",
            melove: "",
            textValue1: "",
            textValue2: "",
            menalYashirNamesResultes: [],
            meloveNamesResultes: [],
            namesArr: ["sdd", "aasss", "sdde", "test1", "test2"]
        }
    }
    
    onmenalYashirChange = (text = "") =>  {
    if (text === "") {
      return this.setState({
        textValue2: "", 
        menalYashirNamesResultes: []
      })
    }
    else {
        const resultes = [...this.state.namesArr.filter(name => name.toLowerCase().trim().indexOf(text.toLowerCase().trim()) !== -1)];
        return this.setState({
            textValue2: text,
            menalYashirNamesResultes: resultes
        })
    }
    };

    onMeloveChange = (text = "") => {
        if (text === "") {
            return this.setState({
              textValue1: "", 
              meloveNamesResultes: []
            })
          }
          else {
              const resultes = [...this.state.namesArr.filter(name => name.toLowerCase().trim().indexOf(text.toLowerCase().trim()) !== -1)];
              return this.setState({
                  textValue1: text,
                  meloveNamesResultes: resultes
              })
          }
    };  

    render() {
        return (
            <div className="">
                <div className="container">  
                <h2>פרטים אודות המוערכות/ים שלי</h2> 
                <div className="sub-container">
                    <p>* מי המנהל/ת הישיר/ה שלי ?</p>
                    <div className="code-input">
                        <img src={sLogo} alt="sLogo" className="sLogo" />
                        <input
                            placeholder="חיפוש על פי שם מלא"
                            onChange = {(e) => {this.onmenalYashirChange(e.target.value); }}
                            value = {this.state.textValue2}
                    
                        />
                        {this.state.textValue2 && <TiDelete onClick= {(e) => {this.setState({textValue2: ""})}}/>}
                    </div>
                    <ul hidden={!this.state.textValue2}>
                        {this.state.menalYashirNamesResultes.map((name, i) => 
                        <li
                            key={i}
                            onClick={(e) => {this.setState({menalYashir: name, textValue2: ""})}}
                        >
                        {name}
                        </li>)}
                    </ul>
                    <div>ניתן לבחור עד 1 אנשים</div>
                    <div>
                        {this.state.menalYashir && <div className="selected-input">
                            {this.state.menalYashir}<TiDelete onClick={(e) => {this.setState({menalYashir: ""})}}/>
                        </div>}
                    </div>
                    <p>* את מי אני מלווה מקצועית ?</p>
                    <div className="code-input">
                        <img src={sLogo} alt="sLogo" className="sLogo" />
                        <input
                            placeholder="חיפוש על פי שם מלא"
                            onChange = {(e) => {this.onMeloveChange(e.target.value); }}
                            value = {this.state.textValue1}
                    
                        />
                        {this.state.textValue1 && <TiDelete onClick= {(e) => {this.setState({textValue1: ""})}}/>}
                    </div>
                    <ul hidden={!this.state.textValue1}>
                        {this.state.meloveNamesResultes.map((name, i) => 
                        <li
                            key={i}
                            onClick={(e) => {this.setState({melove: name, textValue1: ""})}}
                        >
                        {name}
                        </li>)}
                    </ul>
                    <div>ניתן לבחור עד 1 אנשים</div>
                    <div>
                        {this.state.melove && <div className="selected-input">
                            {this.state.melove}<TiDelete onClick={(e) => {this.setState({melove: ""})}}/>
                        </div>}
                    </div>
                    <button 
                        className="login-button"
                        disabled={!this.state.menalYashir || !this.state.melove}
                    >
                    התחלת התהליך
                    </button>
                    </div>
                </div>
            </div>
        )
    }
}


