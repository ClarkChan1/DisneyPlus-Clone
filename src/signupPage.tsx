import "./signupPage.css";
import { useRef, useState } from "react";
import { createNewUser } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [blankEmail, updateBlankEmail] = useState(false);
  const [blankPassword, updateBlankPassword] = useState(false);
  const navigate = useNavigate();
  async function handleSignup() {
    let currEmail = emailRef.current?.value;
    let currPassword = passwordRef.current?.value;
    console.log(currEmail, currPassword);
    if (currEmail == "") {
      updateBlankEmail(true);
    }
    if (currPassword == "") {
      updateBlankPassword(true);
    }
    if (currEmail != "" && currPassword != "") {
      if (currEmail && currPassword) {
        await createNewUser(currEmail, currPassword);
        navigate("/");
      }
    }
  }
  return (
    <div className="signup-wrapper">
      <img src="images/logo.png" alt="" className="logo" />

      <div className="signup-form">
        <p className="page-title">Sign Up</p>
        <input
          type="text"
          placeholder="Email"
          className={"email-input inputBox " + (blankEmail ? "errorInput" : "")}
          ref={emailRef}
          onKeyDown={(e) => {
            if (e.key === "Enter") e.preventDefault();
            updateBlankEmail(false);
          }}
        />
        <input
          type="text"
          placeholder="Password"
          className={
            "password-input inputBox " + (blankPassword ? "errorInput" : "")
          }
          ref={passwordRef}
          onKeyDown={(e) => {
            if (e.key === "Enter") e.preventDefault();
            updateBlankPassword(false);
          }}
        />
        <button className="signup-button" onClick={handleSignup}>
          Sign Up
        </button>
      </div>
    </div>
  );
}
export default SignupPage;
