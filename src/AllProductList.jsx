import React, { useState, useEffect } from "react";
import axios from "axios";
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
import { BrowserRouter as Router } from "react-router-dom";
import Product from "./Product";
const AllProductList = ({ token }) => {
  const [allProducts, setAllProducts] = useState("");
 console.log(allProducts,"this is data")
  useEffect(() => {
    let token = localStorage.getItem("token")
    var config = {
      method: "get",
      url: "http://testingservers.ddns.net:4000/mahalaxmiKiranaApp/ProductDetailListAPI/",
      headers: {
        Authorization:token,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        setAllProducts(response.data.result);
      })
      .catch(function (error) {
        console.log(error);
      });
  },[]);
  return (
      <MDBListGroup>
        {allProducts &&
          allProducts.map((product) => {
            return (
              <Product
                key={product.id}
                productId={product.id}
                packSizeId={product.packDetail[0].pkgId}
                image={product.image[0].url}
                brand={product.brandName}
              />
            );
          })}
      </MDBListGroup>
  );
};

export default AllProductList;
