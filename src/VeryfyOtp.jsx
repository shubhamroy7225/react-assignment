import React,{useState} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
const VeryfyOtp = ({ token,propsData },props) => {

  const [mobileNo, setMobileNo] = useState("");
  const [otp, setOtp] = useState("");
  const VeryfyOtpHandle = (e) => {
      e.preventDefault();
    var axios = require("axios");
    var data = JSON.stringify({
      mobileNo: mobileNo,
      otp: otp,
    });

    var config = {
      method: "post",
      url: "http://testingservers.ddns.net:4000/mahalaxmiKiranaApp/VerifyotpAPI/",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        alert(response.data.result.message)
        propsData.history.push("/login")
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
            <form onSubmit={VeryfyOtpHandle}>
            <p className="h4 text-center mb-4">Veryfy Otp</p>
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
                Otp
              </label>
              <input
                type="number"
                id="otp"
                name="otp"
                className="form-control"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <br />
              <div className="text-center mt-4">
                <MDBBtn color="indigo" type="submit">
                  Veryfy
                </MDBBtn>
              </div>
            </form>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default VeryfyOtp;
