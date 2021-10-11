import React, { useState, useEffect } from "react";

import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
const Login = (props) => {
  const [mobileNo, setMobileNo] = useState("");
  const [password, setPassord] = useState("");
  const loginHandle = (e) => {
    e.preventDefault();

    var axios = require("axios");
    var data = JSON.stringify({
      mobileNo: mobileNo,
      password: password,
    });

    var config = {
      method: "post",
      url: "http://testingservers.ddns.net:4000/mahalaxmiKiranaApp/LoginAPI/",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        //setToken(response.data.result.token)
        if (localStorage.getItem("token")) {
          localStorage.removeItem("token");
        }
        localStorage.setItem("token", response.data.result.token);
        alert(response.data.result.message);
        props.history.push("/dashboard")
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <div>
            <form onSubmit={loginHandle}>
            <p className="h4 text-center mb-4">Login</p>
              <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                Mobile Number
              </label>
              <input
                type="number"
                id="mobileNo"
                name="mobileNo"
                className="form-control"
                value={mobileNo}
                onChange={(e) => setMobileNo(e.target.value)}
              />
              <br />
              <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                Your password
              </label>
              <input
                type="password"
                id="defaultFormLoginPasswordEx"
                className="form-control"
                value={password}
                onChange={(e) => setPassord(e.target.value)}
              />
              <div className="text-center mt-4">
                <MDBBtn color="indigo" type="submit">
                  Login
                </MDBBtn>
              </div>
            </form>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;
