import React, { useState, useEffect } from "react";
import axios from "axios";
import { MDBListGroup, MDBListGroupItem } from "mdbreact";
const Cards = () => {
  const [card, setCard] = useState("");
  useEffect(() => {
    let token = localStorage.getItem("token");
    var config = {
      method: "get",
      url: "http://testingservers.ddns.net:4000/mahalaxmiKiranaApp/CartListAPI/",
      headers: {
        Authorization: token,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setCard(response.data.result.result);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <MDBListGroup>
        this is list
      {card &&
        card.map((card) => {
          <MDBListGroupItem>
            {/* <Avatar skypeId="sitebase" size="200">
              {" "}
              <img src={image} alt="" />
            </Avatar>
            <MDBBtn color="mdb-color" onClick={addToCard}>
              Add To Crad
            </MDBBtn>
            <h3>{brand}</h3> */}
          </MDBListGroupItem>;
        })}
    </MDBListGroup>
  );
};

export default Cards;
