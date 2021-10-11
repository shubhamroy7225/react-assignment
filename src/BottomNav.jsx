import React,{useState} from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBListGroup,
  MDBListGroupItem,
  MDBIcon
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
const BottomNav = ({setAllProductOpen,setCradOPen}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  const openAllProduct = (()=>{
    setAllProductOpen(true)
    setCradOPen(false)
  })
  const openCrad = (()=>{
    setAllProductOpen(false)
    setCradOPen(true)
  })
  return (
    <div>
      <Router>
        <MDBNavbar color="indigo" dark expand="md">
          <MDBNavbarToggler onClick={toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
            <MDBNavbarNav center>
              <MDBNavItem active>
                <MDBNavLink to="/dashboard" onClick={openAllProduct}><MDBIcon icon="map-marker" />MY PLACES</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem >
                 
                <MDBNavLink to="/dashboard" onClick={openCrad}><MDBIcon icon="sd-card" />CARDS</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem active>
                <MDBNavLink to="/dashboard"><MDBIcon icon="user-alt" />PROFILE</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </Router>
    </div>
  );
};

export default BottomNav;
