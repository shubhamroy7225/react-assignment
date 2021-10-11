import React, { useState } from "react";
import AllProductList from "./AllProductList";
import BottomNav from "./BottomNav";
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
} from "mdbreact";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Cards from "./Cards";
const Home = ({ token }) => {
  const [allProductOpen, setAllProductOpen] = useState(true);
  const [cardOpen, setCradOPen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  const openAllProduct=()=>{
    setAllProductOpen(true)
    setIsOpen(false)
  }
  return (
    <div>
      <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
          <MDBNavbarNav center>
            <MDBNavItem active>
              <Link to="/dashboard" onClick={openAllProduct}>MY PLACES</Link>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      <main>
        {allProductOpen && <AllProductList />}
        {cardOpen && <Cards />}
      </main>

      <BottomNav
        setAllProductOpen={setAllProductOpen}
        setCradOPen={setCradOPen}
      />
    </div>
  );
};

export default Home;
