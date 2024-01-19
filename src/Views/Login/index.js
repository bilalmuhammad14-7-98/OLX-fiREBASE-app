import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../../Config/firebase";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const signIn = async () => {
    await login({ email, password });
    navigate("/ ");
  };

  return (
    <div className="form-v5">
      <div className="page-content">
        <div className="form-v5-content">
          <div className="form-detail">
            <h2>Login</h2>
            {/* <div className="form-row">
              <label for="full-name">User Name:</label>
              <input
                type="text"
                name="full-name"
                id="full-name"
                className="input-text"
                placeholder="Full Name"
                required
              />
            </div> */}

            <div className="form-row">
              <label for="your-email">Email:</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                name="your-email"
                id="your-email"
                className="input-text"
                placeholder="Email"
                required
                pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
              />
            </div>
            <br />
            <div className="form-row">
              <label for="password">Password:</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
                className="input-text"
                placeholder="Password"
                required
              />
            </div>
            <br />
            <div className="last-line">
              <p>
                Don't have an account?{" "}
                <span onClick={() => navigate("/Register")}>Register</span>{" "}
              </p>
            </div>
            <div className="signup-btn">
              <button onClick={signIn} className="reg">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
