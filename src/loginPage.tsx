import "./loginPage.css";
function LoginPage() {
  return (
    <div className="login-wrapper">
      <img src="images/logo.png" alt="" className="logo" />

      <div className="login-container">
        <p className="page-title">Login</p>
        <div className="input-container">
          <p className="title">Email</p>
          <input type="text" className="email-input inputBox" />
        </div>
        <div className="input-container">
          <p className="title">Password</p>
          <input type="text" className="password-input inputBox" />
        </div>
        <button className="login-button">Login</button>
        <button className="signup-button">Sign Up</button>
      </div>
    </div>
  );
}
export default LoginPage;
