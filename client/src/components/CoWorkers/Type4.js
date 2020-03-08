import React from 'react';
import sLogo from '../../images/search-logo.png';
import { TiDelete } from 'react-icons/ti';
import {Redirect} from 'react-router-dom'


export default class Type4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            melaveShevet: "",
            merakezHanaga: "",
            melaveMiktzoey: "",
            textValue1: "",
            textValue2: "",
            textValue3: "",
            melaveShevetNamesResultes: [],
            merakezNamesResultes: [],
            melaveMiktzoeyNamesResultes: [],
            namesArr: props.arr,
            redirect:false
        }
    }
    
    onMelaveShevetChange = (text = "") =>  {
    if (text === "") {
      return this.setState({
        textValue2: "", 
        melaveShevetNamesResultes: []
      })
    }
    else {
        const resultes = [...this.state.namesArr.filter(name => name.toLowerCase().trim().indexOf(text.toLowerCase().trim()) !== -1)];
        return this.setState({
            textValue2: text,
            melaveShevetNamesResultes: resultes
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
    
    onMelaveMiktzoeyChange = (text = "") =>  {
        if (text === "") {
          return this.setState({
            textValue3: "", 
            melaveMiktzoeyNamesResultes: []
          })
        }
        else {
            const resultes = [...this.state.namesArr.filter(name => name.toLowerCase().trim().indexOf(text.toLowerCase().trim()) !== -1)];
            return this.setState({
                textValue3: text,
                melaveMiktzoeyNamesResultes: resultes
            })
        }
    };

    render() {
        return (
            <div className="">
                <div className="container">  
                <h2>פרטים אודות המוערכות/ים שלי</h2> 
                <div className="sub-container">
                    <p>* מי המלווה השבטי שלי ?</p>
                    <div className="code-input">
                        <img src={sLogo} alt="sLogo" className="sLogo" />
                        <input
                            placeholder="חיפוש על פי שם מלא"
                            onChange = {(e) => {this.onMelaveShevetChange(e.target.value); }}
                            value = {this.state.textValue2}
                    
                        />
                        {this.state.textValue2 && <TiDelete onClick= {(e) => {this.setState({textValue2: ""})}}/>}
                    </div>
                    <ul hidden={!this.state.textValue2}>
                        {this.state.melaveShevetNamesResultes.map((name, i) => 
                        <li
                            key={i}
                            onClick={(e) => {this.setState({melaveShevet: name, textValue2: ""})}}
                        >
                        {name}
                        </li>)}
                    </ul>
                    <div>ניתן לבחור עד 1 אנשים</div>
                    <div>
                        {this.state.melaveShevet && <div className="selected-input">
                            {this.state.melaveShevet}<TiDelete onClick={(e) => {this.setState({melaveShevet: ""})}}/>
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
                    <p>* מי מלווה אותי מקצועית בהנהגה ?</p>
                    <div className="code-input">
                        <img src={sLogo} alt="sLogo" className="sLogo" />
                        <input
                            placeholder="חיפוש על פי שם מלא"
                            onChange = {(e) => {this.onMelaveMiktzoeyChange(e.target.value); }}
                            value = {this.state.textValue3}
                    
                        />
                        {this.state.textValue3 && <TiDelete onClick= {(e) => {this.setState({textValue3: ""})}}/>}
                    </div>
                    <ul hidden={!this.state.textValue3}>
                        {this.state.melaveMiktzoeyNamesResultes.map((name, i) => 
                        <li
                            key={i}
                            onClick={(e) => {this.setState({melaveMiktzoey: name, textValue3: ""})}}
                        >
                        {name}
                        </li>)}
                    </ul>
                    <div>ניתן לבחור עד 1 אנשים</div>
                    <div>
                        {this.state.melaveMiktzoey && <div className="selected-input">
                            {this.state.melaveMiktzoey}<TiDelete onClick={(e) => {this.setState({melaveMiktzoey: ""})}}/>
                        </div>}
                    </div>

                    <button 
                        className="login-button"
                        disabled={!this.state.melaveShevet || !this.state.merakezHanaga || !this.state.melaveMiktzoey}
                        onClick={()=>{
                            console.log(this.state)
                            let people = [this.state.merakezHanaga].concat([this.state.melaveShevet]).concat([this.state.melaveMiktzoey])
                            console.log(people)
                            // let data = {
                            // }
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


