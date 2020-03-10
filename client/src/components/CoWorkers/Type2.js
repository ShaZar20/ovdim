import React from 'react';
import sLogo from '../../images/search-logo.png';
import { TiDelete } from 'react-icons/ti';
import {Redirect} from 'react-router-dom'


export default class Type2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            melave: "",
            menoalimYeshirim: [],
            merakezHanaga: "",
            notniShirot: [],
            textValue1: "",
            textValue2: "",
            textValue3: "",
            textValue4: "",
            melaveNamesResultes: [],
            menoalimNamesResultes: [],
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

    onMenoalimChange = (text = "") =>  {
        if (text === "") {
        return this.setState({
            textValue1: "", 
            menoalimNamesResultes: []
        })
        }
        const resultes = [...this.state.namesArr.filter(name => name.toLowerCase().trim().indexOf(text.toLowerCase().trim()) !== -1)];
        this.setState({
            textValue1: text,
            menoalimNamesResultes: resultes
        })
    };

    onMerakezChange = (text = "") => {
        if (text === "") {
            return this.setState({
              textValue3: "", 
              merakezNamesResultes: []
            })
          }
          else {
              const resultes = [...this.state.namesArr.filter(name => name.toLowerCase().trim().indexOf(text.toLowerCase().trim()) !== -1)];
              return this.setState({
                  textValue3: text,
                  merakezNamesResultes: resultes
              })
          }
    };  

    menoalimNameSelect = (name) => {
        if(this.state.menoalimYeshirim.length < 12) {
           return this.setState(prevState => ({menoalimYeshirim: [...prevState.menoalimYeshirim,name], textValue1: ""})); 
        }
        else{
            return this.setState({textValue1: name})
        }
    };

    onNotenShirotChange = (text = "") =>  {
        if (text === "") {
        return this.setState({
            textValue4: "", 
            notniShirotNamesResultes: []
        })
        }
        const resultes = [...this.state.namesArr.filter(name => name.toLowerCase().trim().indexOf(text.toLowerCase().trim()) !== -1)];
        this.setState({
            textValue4: text,
            notniShirotNamesResultes: resultes
        })
    };

    notniShrirotNameSelect = (name) => {
        if(this.state.notniShirot.length < 8) {
           return this.setState(prevState => ({notniShirot: [...prevState.notniShirot,name], textValue4: ""})); 
        }
        else{
            return this.setState({textValue4: name})
        }
    };

    render() {
        return (
            <div className="">
                <div className="container">  
                <h2>פרטים אודות המוערכות/ים שלי</h2> 
                <div className="sub-container">
                    <p>* את מי אני מנהל/ת באופן ישיר ?</p>
                    <div className="code-input">
                        <img src={sLogo} alt="sLogo" className="sLogo" />
                        <input
                            placeholder="חיפוש על פי שם מלא"
                            onChange = {(e) => { this.onMenoalimChange(e.target.value); }}
                            value = {this.state.textValue1}
                    
                        />
                        {this.state.textValue1 && <TiDelete style={{width:"3rem",height:"3rem"}} onClick={(e) => {this.setState({textValue1:""});}} />} 
                    </div>
                    <ul hidden={!this.state.textValue1}>
                        {this.state.menoalimNamesResultes.map((name, i) => 
                        <li
                            key={i}
                            onClick={(e) => {this.menoalimNameSelect(name)}}
                        >
                        {name}
                        </li>)}
                    </ul>
                    <div>ניתן לבחור עד 12 אנשים</div>
                    <div className="container-selected_names">
                        {this.state.menoalimYeshirim && this.state.menoalimYeshirim.map((name, i) =>
                            <div  className="selected-input">{name}<TiDelete style={{width:"3rem",height:"3rem"}} onClick={(e) => { this.setState(this.state.menoalimYeshirim.splice(i,1)); }}/>
                            </div> )
                        }    
                    </div>
                    <p>* מי הרכז/ת המרחבי שמלווה אותי ?</p>
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
                            value = {this.state.textValue3}
                    
                        />
                        {this.state.textValue3 && <TiDelete style={{width:"2rem",height:"2rem"}} onClick= {(e) => {this.setState({textValue3: ""})}}/>}
                    </div>
                    <ul hidden={!this.state.textValue3}>
                        {this.state.merakezNamesResultes.map((name, i) => 
                        <li
                            key={i}
                            onClick={(e) => {this.setState({merakezHanaga: name, textValue3: ""})}}
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
                    <p>מי בעלי התפקיד המקצועי ממחלקות המטה שנותנים לי שירות ? (רשות)</p>
                    <div className="code-input">
                        <img src={sLogo} alt="sLogo" className="sLogo" />
                        <input
                            placeholder="חיפוש על פי שם מלא"
                            onChange = {(e) => {this.onNotenShirotChange(e.target.value); }}
                            value = {this.state.textValue4}
                    
                        />
                        {this.state.textValue4 && <TiDelete style={{width:"2rem",height:"2rem"}} onClick= {(e) => {this.setState({textValue4: ""})}}/>}
                    </div>
                    <ul hidden={!this.state.textValue4}>
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
                        disabled={!this.state.melave || this.state.menoalimYeshirim.length === 0 || !this.state.merakezHanaga}
                        onClick={()=>{
                            console.log(this.state)
                            let people = [this.state.melave].concat(this.state.menoalimYeshirim).concat([this.state.merakezHanaga]).concat(this.state.notniShirot)
                            console.log(people)
                            let data = {
                                people:people
                            }
                            localStorage.setItem("about",JSON.stringify(data))
                            this.setState({redirect:true})
                        }}
                    >
                    התחלת התהליך
                    </button>
                    {this.state.redirect && <Redirect to="/home" />}
                    </div>
                </div>
            </div>
        )
    }
}


