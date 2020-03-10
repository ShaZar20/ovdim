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

const Header = () => {
    const [name,setName] = useState('')
    useEffect(()=>{
        let x1 = JSON.parse(localStorage.getItem("userdata"))
        console.log(x1)
        if(x1!= null){

            setName(x1.name + " " + x1.lastname)
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
          <DropdownItem style={{fontSize:"1.5rem",textAlign:"left"}} onClick={
              ()=>{
                  localStorage.removeItem("isuser")
                  localStorage.removeItem("userdata")
                  localStorage.removeItem("about")
                  window.location.href = "/"
              }
          }>התנתק</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    }
    </div>)
};

export default Header;