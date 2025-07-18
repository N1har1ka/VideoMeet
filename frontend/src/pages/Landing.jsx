import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
const LandingPage = () => {
  const router = useNavigate();
  return (
    <div className="landingPageContainer">
      <nav>
        <div className="navHeader">
          <h2>Vedio Call</h2>
        </div>
        <div className="navList">
          <p onClick={() => router("/787")}>Join as Guest</p>
          <div role="button">
            {" "}
            <p onClick={() => router("/auth")}>Register</p>
          </div>
          <div role="button">
            {" "}
            <p onClick={() => router("/auth")}>Login</p>
          </div>
        </div>
      </nav>
      <div className="landingMainContainer">
        <div>
          <h1>
            <span style={{ color: "#ff9839" }}>Connect</span> with your loved
            ones
          </h1>
          <p>Cover a distance by connecting through vedio call</p>
          <div role="button">
            <Link to={"/auth"}>Get started</Link>
          </div>
        </div>
        <div>
          <img src="/mobile.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
