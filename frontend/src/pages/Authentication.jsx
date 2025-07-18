import React from "react";
import "./Auth.css"; // Import the CSS file for styling
import { AuthContext } from "../contexts/AuthContext";
import Snackbar from "@mui/material/Snackbar";
const Authentication = () => {
  const [name, setName] = React.useState();
  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();
  const [error, setError] = React.useState();
  const [message, setMessage] = React.useState();
  const [formState, setFormState] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const { handleRegister, handleLogin } = React.useContext(AuthContext);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  let handleAuth = async (event) => {
    event.preventDefault();
    try {
      if (formState === 0) {
        let result = await handleLogin(username, password);
        // console.log(result);
      }

      if (formState === 1) {
        let result = await handleRegister(name, username, password);
        // console.log(result);
        setUsername("");
        setMessage(result);
        setOpen(true);
        setError("");
        setFormState(0);
        setPassword("");
      }
    } catch (error) {
      //   console.error(error);
      setError(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <div className="container">
        <div className="left-panel"></div>

        <div className="right-panel">
          <div className="form-toggle">
            <label
              style={{
                backgroundColor: formState === 0 ? "blue" : "transparent",
              }}
              onClick={() => setFormState(0)}
              className="login-tab"
            >
              Sign In
            </label>
            <label
              style={{
                backgroundColor: formState === 1 ? "blue" : "transparent",
              }}
              onClick={() => setFormState(1)}
              className="signup-tab"
            >
              Sign Up
            </label>
          </div>

          <div className="form-container">
            <form className="signup-form">
              {formState === 1 ? (
                <input
                  type="text"
                  value={name}
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  required
                />
              ) : (
                <></>
              )}
              <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
              />
              <input
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <p style={{ color: "red" }}>{error}</p>
              <button onClick={handleAuth}>
                {formState == 0 ? "LogIn" : "Register"}
              </button>
            </form>
          </div>
        </div>
        <Snackbar
          open={open}
          autoHideDuration={4000}
          message={message}
          onClose={handleClose}
        />
      </div>
    </>
  );
};

export default Authentication;
