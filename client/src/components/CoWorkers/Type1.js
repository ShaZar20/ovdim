import React from 'react';
import sLogo from '../../images/search-logo.png';
import { TiDelete } from 'react-icons/ti';
import {Redirect} from 'react-router-dom'
import ProgressLine from '../ProgressLine'


export default class Type1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menalYashir: "",
            menoalimYeshirim: [],
            notniShirot: [],
            textValue1: "",
            textValue2: "",
            textValue3: "",
            menalNamesResultes: [],
            menoalimNamesResultes: [],
            notniShirotNamesResultes: [],
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

    onMenoalimChange = (text = "") =>  {
        if (text === "") {
        return this.setState({
            textValue2: "", 
            menoalimNamesResultes: []
        })
        }
        const resultes = [...this.state.namesArr.filter(name => name.toLowerCase().trim().indexOf(text.toLowerCase().trim()) !== -1)];
        this.setState({
            textValue2: text,
            menoalimNamesResultes: resultes
        })
    };

    menoalinNameSelect = (name) => {
        if(this.state.menoalimYeshirim.length < 12 ) {
           return this.setState(prevState => ({menoalimYeshirim: [...prevState.menoalimYeshirim,name], textValue2: ""})); 
        }
        else{
            return this.setState({textValue2: name})
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
                    <p>* את מי אני מנהל/ת באופן ישיר ?</p>
                    <div className="code-input">
                        <img src={sLogo} alt="sLogo" className="sLogo" />
                        <input
                            placeholder="חיפוש על פי שם מלא"
                            onChange = {(e) => {this.onMenoalimChange(e.target.value); }}
                            value = {this.state.textValue2}
                    
                        />
                        {this.state.textValue2 && <TiDelete style={{width:"2rem",height:"2rem"}} onClick= {(e) => {this.setState({textValue2: ""})}}/>}
                    </div>
                    <ul hidden={!this.state.textValue2}>
                        {this.state.menoalimNamesResultes.map((name, i) => 
                        <li
                            key={i}
                            onClick={(e) => {this.menoalinNameSelect(name)}}
                        >
                        {name}
                        </li>)}
                    </ul>
                    <div>ניתן לבחור עד 12 אנשים</div>
                    <div className="container-selected_names">
                        {this.state.menoalimYeshirim && this.state.menoalimYeshirim.map((name, i) =>
                            <div  className="selected-input">{name}<TiDelete style={{width:"3rem",height:"3rem"}} onClick={(e) => { this.setState(this.state.menoalimYeshirim.splice(i,1)); }}/></div> )}
                    </div>
                    <p>מי בעלי התפקיד המקצועי ממחלקות המטה\הנהגה שנותנים לי שירות  ? (רשות)</p>
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
                        disabled={!this.state.menalYashir || this.state.menoalimYeshirim.length === 0}
                        onClick={()=>{
                            console.log(this.state)
                            let people = [this.state.menalYashir].concat(this.state.menoalimYeshirim).concat(this.state.notniShirot)
                            people.push("דניאל עמירה")
                            console.log(people)
                            let data = {
                                people:people
                            }
                            localStorage.setItem("about",JSON.stringify(data))
                            this.setState({redirect:true})
                            // let data = {
                          
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
//  <div>ניתן לבחור עד 8 אנשים</div>
//  <div>ניתן לבחור עד 1 אנשים</div>