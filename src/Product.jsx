import React from "react";
import { MDBListGroupItem, MDBBtn } from "mdbreact";
import Avatar from "react-avatar";
import axios from "axios";
const Product = ({ productId, packSizeId, image, brand }) => {
  let token = localStorage.getItem("token");
  const addToCard = () => {
    var data = JSON.stringify({
      productId: productId,
      packSizeId: packSizeId,
      userId: "",
      qty: "1",
    });

    var config = {
      method: "post",
      url: "http://testingservers.ddns.net:4000/mahalaxmiKiranaApp/CartAddAPI/",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        alert(response.data.result.message);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <MDBListGroupItem>
      <Avatar skypeId="sitebase" size="200">
        {" "}
        <img src={image} alt="" />
      </Avatar>
      <MDBBtn color="mdb-color" onClick={addToCard}>
        Add To Cart
      </MDBBtn>
      <h3>{brand}</h3>
    </MDBListGroupItem>
  );
};

export default Product;
