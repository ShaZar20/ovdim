import React from 'react';
import sLogo from '../../images/search-logo.png';
import { TiDelete } from 'react-icons/ti';
import {Redirect} from 'react-router-dom'
import ProgressLine from '../ProgressLine'

export default class Type3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            melave: "",
            merakezHanaga: "",
            notniShirot: [],
            textValue1: "",
            textValue2: "",
            textValue3: "",
            melaveNamesResultes: [],
            merakezNamesResultes: [],
            notniShirotNamesResultes: [],
            namesArr: props.arr,
            redirect:false
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
            <React.Fragment>
            <div className="">
                <div className="container" style={{marginTop:"4rem"}}>  
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
                        {this.state.textValue2 && <TiDelete style={{width:"2rem",height:"2rem"}} onClick= {(e) => {this.setState({textValue2: ""})}}/>}
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
                            {this.state.melave}<TiDelete style={{width:"3rem",height:"3rem"}} onClick={(e) => {this.setState({melave: ""})}}/>
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
                        {this.state.textValue1 && <TiDelete style={{width:"2rem",height:"2rem"}} onClick= {(e) => {this.setState({textValue1: ""})}}/>}
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
                            {this.state.merakezHanaga}<TiDelete style={{width:"3rem",height:"3rem"}} onClick={(e) => {this.setState({merakezHanaga: ""})}}/>
                        </div>}
                    </div>
                    <p>מי בעלי התפקיד המקצועי ממחלקות המטה\הנהגה שנותנים לי שירות ? (רשות)</p>
                    <div className="code-input">
                        <img src={sLogo} alt="sLogo" className="sLogo" />
                        <input
                            placeholder="חיפוש על פי שם מלא"
                            onChange = {(e) => {this.onNotenShirotChange(e.target.value); }}
                            value = {this.state.textValue3}
                    
                        />
                        {this.state.textValue3 && <TiDelete style={{width:"2rem",height:"2rem"}} onClick= {(e) => {this.setState({textValue3: ""})}}/>}
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
                            <div  className="selected-input">{name}<TiDelete style={{width:"3rem",height:"3rem"}} onClick={(e) => { this.setState(this.state.notniShirot.splice(i,1)); }}/></div> )}
                    </div>
                    

                    <button 
                        className="login-button"
                        disabled={!this.state.melave || !this.state.merakezHanaga}
                        onClick={()=>{
                            console.log(this.state)
                            let people = [this.state.melave].concat([this.state.merakezHanaga]).concat(this.state.notniShirot)
                            console.log(people)
                            // let data = {
                                let data = {
                                    people:people
                                }
                                localStorage.setItem("about",JSON.stringify(data))
                                this.setState({redirect:true})
                            // }
                        }}
                    
                    >
                    התחלת התהליך
                    </button>
                    {this.state.redirect && <Redirect to="/home" />}
                    </div>
                </div>
            </div>
            <ProgressLine step={1} />
            </React.Fragment>
        )
    }
}


