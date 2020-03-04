import React from 'react';
import sLogo from '../../images/search-logo.png';
import { TiDelete } from 'react-icons/ti';



export default class Type3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            melave: "asd",
            merakezHanaga: "",
            notniShirot: ["sdd", "aasss", "sdde", "test1", "test2"],
            textValue1: "",
            textValue2: "",
            textValue3: "",
            melaveNamesResultes: [],
            merakezNamesResultes: [],
            notniShirotNamesResultes: [],
            namesArr: ["sdd", "aasss", "sdde", "test1", "test2"]
        }
    }
    
    onMelaveChange = (text = "") =>  {
    if (text === "") {
      return this.setState({
        textValue2: "", 
        melaveNamesResultes: []
      })
    }
    else {
        const resultes = [...this.state.namesArr.filter(name => name.toLowerCase().trim().indexOf(text.toLowerCase().trim()) !== -1)];
        return this.setState({
            textValue2: text,
            melaveNamesResultes: resultes
        })
    }
    };

    onMerakezChange = (text = "") => {
        if (text === "") {
            return this.setState({
              textValue1: "", 
              merakezNamesResultes: []
            })
          }
          else {
              const resultes = [...this.state.namesArr.filter(name => name.toLowerCase().trim().indexOf(text.toLowerCase().trim()) !== -1)];
              return this.setState({
                  textValue1: text,
                  merakezNamesResultes: resultes
              })
          }
    };  

    onNotenShirotChange = (text = "") =>  {
        if (text === "") {
        return this.setState({
            textValue3: "", 
            notniShirotNamesResultes: []
        })
        }
        const resultes = [...this.state.namesArr.filter(name => name.toLowerCase().trim().indexOf(text.toLowerCase().trim()) !== -1)];
        this.setState({
            textValue3: text,
            notniShirotNamesResultes: resultes
        })
    };

    notniShrirotNameSelect = (name) => {
        if(this.state.notniShirot.length < 8) {
           return this.setState(prevState => ({notniShirot: [...prevState.notniShirot,name], textValue3: ""})); 
        }
        else{
            return this.setState({textValue3: name})
        }
    };

    render() {
        return (
            <div className="">
                <div className="container">  
                <h2>פרטים אודות המוערכות/ים שלי</h2> 
                <div className="sub-container">
                    <p>* מי מלווה אותי מקצועית ?</p>
                    <div className="code-input">
                        <img src={sLogo} alt="sLogo" className="sLogo" />
                        <input
                            placeholder="חיפוש על פי שם מלא"
                            onChange = {(e) => {this.onMelaveChange(e.target.value); }}
                            value = {this.state.textValue2}
                    
                        />
                        {this.state.textValue2 && <TiDelete onClick= {(e) => {this.setState({textValue2: ""})}}/>}
                    </div>
                    <ul hidden={!this.state.textValue2}>
                        {this.state.melaveNamesResultes.map((name, i) => 
                        <li
                            key={i}
                            onClick={(e) => {this.setState({melave: name, textValue2: ""})}}
                        >
                        {name}
                        </li>)}
                    </ul>
                    <div>ניתן לבחור עד 1 אנשים</div>
                    <div>
                        {this.state.melave && <div className="selected-input">
                            {this.state.melave}<TiDelete onClick={(e) => {this.setState({melave: ""})}}/>
                        </div>}
                    </div>
                    <p>* מי מרכז/ת ההנהגה שלי ?</p>
                    <div className="code-input">
                        <img src={sLogo} alt="sLogo" className="sLogo" />
                        <input
                            placeholder="חיפוש על פי שם מלא"
                            onChange = {(e) => {this.onMerakezChange(e.target.value); }}
                            value = {this.state.textValue1}
                    
                        />
                        {this.state.textValue1 && <TiDelete onClick= {(e) => {this.setState({textValue1: ""})}}/>}
                    </div>
                    <ul hidden={!this.state.textValue1}>
                        {this.state.merakezNamesResultes.map((name, i) => 
                        <li
                            key={i}
                            onClick={(e) => {this.setState({merakezHanaga: name, textValue1: ""})}}
                        >
                        {name}
                        </li>)}
                    </ul>
                    <div>ניתן לבחור עד 1 אנשים</div>
                    <div>
                        {this.state.merakezHanaga && <div className="selected-input">
                            {this.state.merakezHanaga}<TiDelete onClick={(e) => {this.setState({merakezHanaga: ""})}}/>
                        </div>}
                    </div>
                    <p>מי בעלי התפקיד המקצועי ממחלקות המטה שנותנים לי שירות ?</p>
                    <div className="code-input">
                        <img src={sLogo} alt="sLogo" className="sLogo" />
                        <input
                            placeholder="חיפוש על פי שם מלא"
                            onChange = {(e) => {this.onNotenShirotChange(e.target.value); }}
                            value = {this.state.textValue3}
                    
                        />
                        {this.state.textValue3 && <TiDelete onClick= {(e) => {this.setState({textValue3: ""})}}/>}
                    </div>
                    <ul hidden={!this.state.textValue3}>
                        {this.state.notniShirotNamesResultes.map((name, i) => 
                        <li
                            key={i}
                            onClick={(e) => {this.notniShrirotNameSelect(name)}}
                        >
                        {name}
                        </li>)}
                    </ul>
                    <div>ניתן לבחור עד 8 אנשים</div>
                    <div className="container-selected_names">
                        {this.state.notniShirot && this.state.notniShirot.map((name, i) =>
                            <div  className="selected-input">{name}<TiDelete onClick={(e) => { this.setState(this.state.notniShirot.splice(i,1)); }}/></div> )}
                    </div>
                    

                    <button 
                        className="login-button"
                        disabled={!this.state.melave || !this.state.merakezHanaga}
                    >
                    התחלת התהליך
                    </button>
                    </div>
                </div>
            </div>
        )
    }
}


