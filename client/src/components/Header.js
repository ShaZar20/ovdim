import React, { useEffect, useState } from 'react';
import logo from '../images/Zofim-logo.png';
import {
    Collapse,
    Container,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.css';
import {MdAccountCircle} from 'react-icons/md'

const master =[
    302600424,200043263,39806823,301724761,39211024,300329331,305065021,301023651,28073047,34233122,300168507,1112
    // ,206324592
]

const Header = () => {
    const [name,setName] = useState('')
    const [tell,setTell] = useState(false)
    useEffect(()=>{
        let x1 = JSON.parse(localStorage.getItem("userdata"))
        console.log(x1)
        if(x1!= null){

            setName(x1.name + " " + x1.lastname)
            if(x1.role == "מרכז/ת הנהגה" || x1.role == "מנהל/ת מחלקה /יחידה" ){
            setTell(true)
            }
            if(master.includes(x1.id)){
                setTell(true)
            }
        }


        console.log(window.location.href)
    },[])

    return(
    <div className="header">
        <div style={{display:"flex"}}>
            <img src={logo} alt="Logo" className="logo"/>
            <h1>תהליך הערכת עובדים</h1>
        </div>
        {window.location.href == "https://ovdim.robins.app/" || window.location.href == "https://www.ovdim.robins.app/" || window.location.href == "http://localhost:3000/"  
        ?
    undefined
        :
    <UncontrolledDropdown>
        <DropdownToggle style={{color:"#4f4f4f", fontSize:"1.5rem"}} nav caret>
          {/* <UserAvatar user={"props.user"}/> */}
          <MdAccountCircle/> {name}
        </DropdownToggle>
        <DropdownMenu right>
            {tell &&
            <DropdownItem style={{fontSize:"1.5rem",textAlign:"center"}} onClick={
              ()=>{
                  window.location.href = "/stats"
                }
            }>דוחות</DropdownItem>
            }
          <DropdownItem style={{fontSize:"1.5rem",textAlign:"center"}} onClick={
              ()=>{
                  localStorage.removeItem("isuser")
                  localStorage.removeItem("userdata")
                //   localStorage.removeItem("about")
                  window.location.href = "/"
              }
          }>התנתקות</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    }
    </div>)
};

export default Header;