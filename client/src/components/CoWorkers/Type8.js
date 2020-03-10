import React from 'react';
import sLogo from '../../images/search-logo.png';
import { TiDelete } from 'react-icons/ti';
import {Redirect} from 'react-router-dom'


export default class Type7 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menalYashir: "",
            deregMelove: [],
            menalMerhav: [],
            meloveMeanhaga: [],
            textValue1: "",
            textValue2: "",
            textValue3: "",
            textValue4: "",
            menalNamesResultes: [],
            deregMeloveNamesResultes: [],
            meloveMeanhagaNamesResultes: [],
            menalMerhavNamesResultes: [],
            namesArr: props.arr,
            redirect:false
        }
    }
    
    onMenalChange = (text = "") =>  {
    if (text === "") {
      return this.setState({
        textValue1: "", 
        menalNamesResultes: []
      })
    }
    else {
        const resultes = [...this.state.namesArr.filter(name => name.toLowerCase().trim().indexOf(text.toLowerCase().trim()) !== -1)];
        return this.setState({
            textValue1: text,
            menalNamesResultes: resultes
        })
    }
    };

    onDeregMeloveChange = (text = "") =>  {
        if (text === "") {
        return this.setState({
            textValue2: "", 
            deregMeloveNamesResultes: []
        })
        }
        const resultes = [...this.state.namesArr.filter(name => name.toLowerCase().trim().indexOf(text.toLowerCase().trim()) !== -1)];
        this.setState({
            textValue2: text,
            deregMeloveNamesResultes: resultes
        })
    };

    deregMeloveNameSelect = (name) => {
        if(this.state.deregMelove.length < 8 ) {
           return this.setState(prevState => ({deregMelove: [...prevState.deregMelove,name], textValue2: ""})); 
        }
        else{
            return this.setState({textValue2: name})
        }
    };

    onMeloveMeanhagaChange = (text = "") =>  {
        if (text === "") {
        return this.setState({
            textValue3: "", 
            meloveMeanhagaNamesResultes: []
        })
        }
        const resultes = [...this.state.namesArr.filter(name => name.toLowerCase().trim().indexOf(text.toLowerCase().trim()) !== -1)];
        this.setState({
            textValue3: text,
            meloveMeanhagaNamesResultes: resultes
        })
    };

    meloveMeanhagatNameSelect = (name) => {
        if(this.state.meloveMeanhaga.length < 8) {
           return this.setState(prevState => ({meloveMeanhaga: [...prevState.meloveMeanhaga,name], textValue3: ""})); 
        }
        else{
            return this.setState({textValue3: name})
        }
    };

    onmenalMerhavChange = (text = "") =>  {
        if (text === "") {
        return this.setState({
            textValue4: "", 
            menalMerhavNamesResultes: []
        })
        }
        const resultes = [...this.state.namesArr.filter(name => name.toLowerCase().trim().indexOf(text.toLowerCase().trim()) !== -1)];
        this.setState({
            textValue4: text,
            menalMerhavNamesResultes: resultes
        })
    };

    melaveMerhavNameSelect = (name) => {
        if(this.state.menalMerhav.length < 1) {
           return this.setState(prevState => ({menalMerhav: [...prevState.menalMerhav,name], textValue4: ""})); 
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
                    <p>* מי המנהל/ת הישיר/ה שלי ?</p>
                    <div className="code-input">
                        <img src={sLogo} alt="sLogo" className="sLogo" />
                        <input
                            placeholder="חיפוש על פי שם מלא"
                            onChange = {(e) => { this.onMenalChange(e.target.value); }}
                            value = {this.state.textValue1}
                    
                        />
                        {this.state.textValue1 && <TiDelete style={{width:"2rem",height:"2rem"}} onClick={(e) => {this.setState({textValue1:""});}} />} 
                    </div>
                    <ul hidden={!this.state.textValue1}>
                        {this.state.menalNamesResultes.map((name, i) => 
                        <li
                            key={i}
                            onClick={(e) => {this.setState({menalYashir: name, textValue1: ""})}}
                        >
                        {name}
                        </li>)}
                    </ul>
                    <div>ניתן לבחור עד 1 אנשים</div>
                    <div>
                        {this.state.menalYashir && <div className="selected-input">
                            {this.state.menalYashir}<TiDelete style={{width:"3rem",height:"3rem"}} onClick={(e) => {this.setState({menalYashir: ""})}}/>
                        </div>}
                    </div>
                    <p>* מי הדרג המקצועי אותו אני מלווה ?</p>
                    <div className="code-input">
                        <img src={sLogo} alt="sLogo" className="sLogo" />
                        <input
                            placeholder="חיפוש על פי שם מלא"
                            onChange = {(e) => {this.onDeregMeloveChange(e.target.value); }}
                            value = {this.state.textValue2}
                    
                        />
                        {this.state.textValue2 && <TiDelete style={{width:"2rem",height:"2rem"}} onClick= {(e) => {this.setState({textValue2: ""})}}/>}
                    </div>
                    <ul hidden={!this.state.textValue2}>
                        {this.state.deregMeloveNamesResultes.map((name, i) => 
                        <li
                            key={i}
                            onClick={(e) => {this.deregMeloveNameSelect(name)}}
                        >
                        {name}
                        </li>)}
                    </ul>
                    <div>ניתן לבחור עד 8 אנשים</div>
                    <div className="container-selected_names">
                        {this.state.deregMelove && this.state.deregMelove.map((name, i) =>
                            <div  className="selected-input">{name}<TiDelete style={{width:"3rem",height:"3rem"}} onClick={(e) => { this.setState(this.state.deregMelove.splice(i,1)); }}/></div> )}
                    </div>
                    <p>* מי מנהל המרחב שלי ?</p>
                    <div className="code-input">
                        <img src={sLogo} alt="sLogo" className="sLogo" />
                        <input
                            placeholder="חיפוש על פי שם מלא"
                            onChange = {(e) => {this.onmenalMerhavChange(e.target.value); }}
                            value = {this.state.textValue4}
                    
                        />
                        {this.state.textValue4 && <TiDelete style={{width:"2rem",height:"2rem"}} onClick= {(e) => {this.setState({textValue4: ""})}}/>}
                    </div>
                    <ul hidden={!this.state.textValue4}>
                        {this.state.menalMerhavNamesResultes.map((name, i) => 
                        <li
                            key={i}
                            onClick={(e) => {this.melaveMerhavNameSelect(name)}}
                        >
                        {name}
                        </li>)}
                    </ul>
                    <div>ניתן לבחור עד 1 אנשים</div>

                    <div className="container-selected_names">
                        {this.state.menalMerhav && this.state.menalMerhav.map((name, i) =>
                            <div  className="selected-input">{name}<TiDelete style={{width:"3rem",height:"3rem"}} onClick={(e) => { this.setState(this.state.menalMerhav.splice(i,1)); }}/></div> )}
                    </div>

                    <p>* את מי אני מלווה מצוות ההנהגה ?</p>
                    <div className="code-input">
                        <img src={sLogo} alt="sLogo" className="sLogo" />
                        <input
                            placeholder="חיפוש על פי שם מלא"
                            onChange = {(e) => {this.onMeloveMeanhagaChange(e.target.value); }}
                            value = {this.state.textValue3}
                    
                        />
                        {this.state.textValue3 && <TiDelete style={{width:"2rem",height:"2rem"}} onClick= {(e) => {this.setState({textValue3: ""})}}/>}
                    </div>
                    <ul hidden={!this.state.textValue3}>
                        {this.state.meloveMeanhagaNamesResultes.map((name, i) => 
                        <li
                            key={i}
                            onClick={(e) => {this.meloveMeanhagatNameSelect(name)}}
                        >
                        {name}
                        </li>)}
                    </ul>
                    <div>ניתן לבחור עד 8 אנשים</div>
                    <div className="container-selected_names">
                        {this.state.meloveMeanhaga && this.state.meloveMeanhaga.map((name, i) =>
                            <div  className="selected-input">{name}<TiDelete style={{width:"3rem",height:"3rem"}} onClick={(e) => { this.setState(this.state.meloveMeanhaga.splice(i,1)); }}/></div> )}
                    </div>
                    
                    <button 
                        className="login-button"
                        disabled={!this.state.menalYashir || this.state.deregMelove.length === 0 || this.state.menalMerhav.length === 0 || this.state.meloveMeanhaga.length === 0}
                        onClick={()=>{
                            console.log(this.state)
                            let people = [this.state.menalYashir].concat(this.state.deregMelove).concat(this.state.menalMerhav).concat(this.state.meloveMeanhaga)
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
//  <div>ניתן לבחור עד 8 אנשים</div>
//  <div>ניתן לבחור עד 1 אנשים</div>