import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "react-bootstrap/Button";
import "./index.scss";
import { useHistory } from "react-router-dom";
import { Toast } from "service/toast";

function SigninEl() {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [customerID, setCustomerID] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitData = () => {
    if (email !== "" && customerID !== "" && password !== "") {
      Toast({ type: "success", message: "Login successfully" });
      history.push(`/live/livestreampage`);
    } else {
      Toast({ type: "error", message: "please enter all values" });
    }
  };

  return (
    <div className="login-el">
      <h1 className="login-heading">Hello, Again!</h1>
      <p className="login-text">
        Lorem Ipsum is simply dummy text of the printing and <br />{" "}
        <span>typesetting industry.</span>
      </p>
      <div>
        <FormControl
          sx={{
            width: "320px",
            outline: "none",
            background: "#fafafa",
            m: 1,
            borderRadius: "8px",
          }}
          variant="outlined"
          onChange={(e) => {
            setCustomerID(e.target.value);
          }}
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Customer ID
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={"text"}
            endAdornment={<InputAdornment position="end"></InputAdornment>}
            label="Cusomer ID"
          />
        </FormControl>
      </div>
      <div>
        <FormControl
          sx={{
            width: "320px",
            background: "#fafafa",
            m: 1,
            borderRadius: "8px",
          }}
          variant="outlined"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        >
          <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={"email"}
            endAdornment={<InputAdornment position="end"></InputAdornment>}
            label="Password"
          />
        </FormControl>
      </div>
      <div>
        <FormControl
          sx={{
            width: "320px",
            outline: "none",
            background: "#fafafa",
            m: 1,
            borderRadius: "8px",
          }}
          variant="outlined"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment
                position="end"
                onChange={(e) => {
                  console.log("hi");
                }}
              >
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </div>
      <p className="forgot-password">Forgot Password?</p>
      <Button className="signIn-button" onClick={submitData}>
        Sign In
      </Button>
      <p className="register-el">
        Don’t have an account?{" "}
        <span style={{ color: "#25a0da" }}>Register</span>
      </p>
    </div>
  );
}

export default SigninEl;
