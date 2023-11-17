import "./loginPage.css";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../utils/firebase";
import { useRef, useState } from "react";
function LoginPage() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [blankEmail, updateBlankEmail] = useState(false);
  const [blankPassword, updateBlankPassword] = useState(false);
  const [invalidCredentials, updateInvalidCredentials] = useState(false);
  const navigate = useNavigate();

  async function handleSignin() {
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
        try {
          await loginUser(currEmail, currPassword);
          navigate("/");
        } catch (error) {
          // invalid credentials
          updateInvalidCredentials(true);
        }
      }
    }
  }
  return (
    <div className="login-wrapper">
      <img src="images/logo.png" alt="" className="logo" />

      <div className="login-form">
        <p className="page-title">Login</p>
        <input
          type="text"
          placeholder="Email"
          className={"email-input inputBox " + (blankEmail ? "errorInput" : "")}
          ref={emailRef}
          onKeyDown={(e) => {
            if (e.key === "Enter") e.preventDefault();
            updateBlankEmail(false);
            updateInvalidCredentials(false);
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
            updateInvalidCredentials(false);
          }}
        />
        {invalidCredentials ? (
          <p className="login-error">Invalid username or password</p>
        ) : null}
        <button className="login-button" onClick={handleSignin}>
          Login
        </button>
        <p>
          Don't have an account yet?{" "}
          <a
            href="#"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Create one
          </a>
        </p>
      </div>
    </div>
  );
}
export default LoginPage;
