import React from 'react';
import sLogo from '../../images/search-logo.png';
import { TiDelete } from 'react-icons/ti';



export default class Type6 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deregMelove: [],
            textValue1: "",
            deregMeloveNamesResultes: [],
            namesArr: ["sdd", "aasss", "sdde", "test1", "test2"]
        }
    }
    
    onMenoalimChange = (text = "") =>  {
        if (text === "") {
        return this.setState({
            textValue1: "", 
            deregMeloveNamesResultes: []
        })
        }
        const resultes = [...this.state.namesArr.filter(name => name.toLowerCase().trim().indexOf(text.toLowerCase().trim()) !== -1)];
        this.setState({
            textValue1: text,
            deregMeloveNamesResultes: resultes
        })
    };  

    menoalmnNameSelect = (name) => {
        if(this.state.deregMelove.length < 8) {
           return this.setState(prevState => ({deregMelove: [...prevState.deregMelove,name], textValue1: ""})); 
        }
        else{
            return this.setState({textValue1: name})
        }
    };

    

    render() {
        return (
            <div className="">
                <div className="container">  
                <h2>פרטים אודות המוערכות/ים שלי</h2> 
                <div className="sub-container">
                    <p>* מי הדרג המקצועי אותו אני מלווה  ?</p>
                    <div className="code-input">
                        <img src={sLogo} alt="sLogo" className="sLogo" />
                        <input
                            placeholder="חיפוש על פי שם מלא"
                            onChange = {(e) => { this.onMenoalimChange(e.target.value); }}
                            value = {this.state.textValue1}
                    
                        />
                        {this.state.textValue1 && <TiDelete onClick={(e) => {this.setState({textValue1:""});}} />} 
                    </div>
                    <ul hidden={!this.state.textValue1}>
                        {this.state.deregMeloveNamesResultes.map((name, i) => 
                        <li
                            key={i}
                            onClick={(e) => {this.menoalmnNameSelect(name)}}
                        >
                        {name}
                        </li>)}
                    </ul>
                    <div>ניתן לבחור עד 8 אנשים</div>
                    <div className="container-selected_names">
                        {this.state.deregMelove && this.state.deregMelove.map((name, i) =>
                            <div  className="selected-input">{name}<TiDelete onClick={(e) => { this.setState(this.state.deregMelove.splice(i,1)); }}/>
                            </div> )
                        }    
                    </div>
                    
                    <button 
                        className="login-button"
                        disabled={this.state.deregMelove.length === 0}
                    >
                    התחלת התהליך
                    </button>
                    </div>
                </div>
            </div>
        )
    }
}


