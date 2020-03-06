import React from 'react';
import sLogo from '../../images/search-logo.png';
import { TiDelete } from 'react-icons/ti';



export default class Type7 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menalYashir: "",
            menoalimYeshirim: ["sdd", "aasss", "sdde", "test1", "test2"],
            meloveMerhav: [],
            notniShirot: ["sdd", "aasss", "sdde", "test1", "test2"],
            textValue1: "",
            textValue2: "",
            textValue3: "",
            textValue4: "",
            menalNamesResultes: [],
            menoalimNamesResultes: [],
            notniShirotNamesResultes: [],
            meloveMerhavNamesResultes: [],
            namesArr: ["sdd", "aasss", "sdde", "test1", "test2"]
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
        if(this.state.menoalimYeshirim.length < 8 ) {
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

    onMeloveMerhavChange = (text = "") =>  {
        if (text === "") {
        return this.setState({
            textValue4: "", 
            meloveMerhavNamesResultes: []
        })
        }
        const resultes = [...this.state.namesArr.filter(name => name.toLowerCase().trim().indexOf(text.toLowerCase().trim()) !== -1)];
        this.setState({
            textValue4: text,
            meloveMerhavNamesResultes: resultes
        })
    };

    melaveMerhavNameSelect = (name) => {
        if(this.state.meloveMerhav.length < 8) {
           return this.setState(prevState => ({meloveMerhav: [...prevState.meloveMerhav,name], textValue4: ""})); 
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
                        {this.state.textValue1 && <TiDelete onClick={(e) => {this.setState({textValue1:""});}} />} 
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
                            {this.state.menalYashir}<TiDelete onClick={(e) => {this.setState({menalYashir: ""})}}/>
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
                        {this.state.textValue2 && <TiDelete onClick= {(e) => {this.setState({textValue2: ""})}}/>}
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
                    <div>ניתן לבחור עד 8 אנשים</div>
                    <div className="container-selected_names">
                        {this.state.menoalimYeshirim && this.state.menoalimYeshirim.map((name, i) =>
                            <div  className="selected-input">{name}<TiDelete onClick={(e) => { this.setState(this.state.menoalimYeshirim.splice(i,1)); }}/></div> )}
                    </div>
                    <p>* את מי אני מלווה מצוות מרחב ?</p>
                    <div className="code-input">
                        <img src={sLogo} alt="sLogo" className="sLogo" />
                        <input
                            placeholder="חיפוש על פי שם מלא"
                            onChange = {(e) => {this.onMeloveMerhavChange(e.target.value); }}
                            value = {this.state.textValue4}
                    
                        />
                        {this.state.textValue4 && <TiDelete onClick= {(e) => {this.setState({textValue4: ""})}}/>}
                    </div>
                    <ul hidden={!this.state.textValue4}>
                        {this.state.meloveMerhavNamesResultes.map((name, i) => 
                        <li
                            key={i}
                            onClick={(e) => {this.melaveMerhavNameSelect(name)}}
                        >
                        {name}
                        </li>)}
                    </ul>
                    <div>ניתן לבחור עד 8 אנשים</div>

                    <div className="container-selected_names">
                        {this.state.meloveMerhav && this.state.meloveMerhav.map((name, i) =>
                            <div  className="selected-input">{name}<TiDelete onClick={(e) => { this.setState(this.state.meloveMerhav.splice(i,1)); }}/></div> )}
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
                        disabled={!this.state.menalYashir || this.state.menoalimYeshirim.length === 0 || this.state.meloveMerhav.length === 0}
                    >
                    התחלת התהליך
                    </button>
                    </div>
                </div>
            </div>
        )
    }
}
//  <div>ניתן לבחור עד 8 אנשים</div>
//  <div>ניתן לבחור עד 1 אנשים</div>