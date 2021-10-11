import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import axios from "axios";
import VeryfyOtp from "./VeryfyOtp";
const SignUp = (props) => {
  const [firstName, setFistName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassord] = useState("");
  const [token, setToken] = useState("");
  const handleSignUp = (e) => {
    e.preventDefault();
    var data = JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      email: email,
      mobileNo: mobileNo,
      address: address,
      password: password,
    });

    var config = {
      method: "post",
      url: "http://testingservers.ddns.net:4000/mahalaxmiKiranaApp/SignUpAddAPI/",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        setToken(response.data.result.token);
        alert(response.data.result.message)
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <MDBContainer>
      {token === "" ? (
        <MDBRow>
          <MDBCol md="6">
            <form onSubmit={handleSignUp}>
              <p className="h4 text-center mb-4">Sign Up</p>
              <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                Fist Name
              </label>
              <input
                type="text"
                id="fistname"
                name="fistname"
                className="form-control"
                value={firstName}
                onChange={(e) => setFistName(e.target.value)}
              />
              <br />

              <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                name="lastame"
                className="form-control"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <br />
              <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                Your email
              </label>
              <input
                type="email"
                id="defaultFormLoginEmailEx"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
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

              <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="form-control"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
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
                  SignUp
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      ) : (
        <VeryfyOtp token={token} propsData={props} />
      )}
    </MDBContainer>
  );
};

export default SignUp;
