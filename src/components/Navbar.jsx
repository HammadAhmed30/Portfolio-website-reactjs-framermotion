import React from "react";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <div
      style={{
        // padding: "20px 10px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "#121212",
        justifyContent: "space-between",
      }}
    >
      <style jsx="true">
        {`
          img {
            width: 20px;
          }
          .link {
            margin: 10px;
            margin-left: 20px;
            margin-right: 20px;
          }
        `}
      </style>
      <div
        className="pages-link"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Link
          onClick={() => {
            props.setNav(false);
          }}
          className="link"
          to="/"
        >
          <img
            style={{
              width: "25px",
            }}
            src="home.png"
            alt=""
          />
        </Link>
        <Link
          onClick={() => {
            props.setNav(false);
          }}
          className="link"
          to="/about"
        >
          <img
            style={{
              width: "25px",
            }}
            src="user.png"
            alt=""
          />
        </Link>
        <Link
          onClick={() => {
            props.setNav(false);
          }}
          className="link"
          to="/contact"
        >
          <img
            style={{
              width: "25px",
            }}
            src="call.png"
            alt=""
          />
        </Link>
      </div>
      <div
        className="contant-link"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <a
          className="link"
          href="https://www.linkedin.com/in/hammad-saghir-a7a368231/"
        >
          <img src="linkedin.png" alt="" />
        </a>
        <a className="link" href="https://www.instagram.com/hammadsaghir._/">
          <img src="instagram.png" alt="" />
        </a>
      </div>
    </div>
  );
}
