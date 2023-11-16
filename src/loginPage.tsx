import "./loginPage.css";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  return (
    <div className="login-wrapper">
      <img src="images/logo.png" alt="" className="logo" />

      <div className="login-container">
        <p className="page-title">Login</p>
        <input
          type="text"
          placeholder="Email"
          className="email-input inputBox"
        />
        <input
          type="text"
          placeholder="Password"
          className="password-input inputBox"
        />
        <button className="login-button">Login</button>
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
