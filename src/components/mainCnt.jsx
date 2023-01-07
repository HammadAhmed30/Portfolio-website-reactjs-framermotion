import React, { useState } from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import Loading from "./Loading";
import { AnimatePresence } from "framer-motion";
import About from "./About";
import { Route, Routes, useLocation } from "react-router-dom";
import Contact from "./Contact";
import Services from "./Services";
export default function MainCnt() {
  const [isNav, setNav] = useState(false);
  const [isloading, setLoading] = useState(true);
  const location = useLocation();

  return (
    <div
      onLoad={() => {
        setLoading(false);
      }}
      style={{
        width: "100%",
        height: "100%",
        background: "#0A0A0A",
        overflow: "hidden",
      }}
    >
      {isloading && <Loading />}

      <style jsx="true">{`
        .gray-floating-ball {
          height: 20vw;
          width: 20vw;
          background-color: rgba(200, 200, 200, 0.1);
          position: absolute;
          top: 10px;
          left: 100%;
          //   filter: blur(40px);
          border-radius: 50%;
          //   backdrop-filter: blur(10);
          -webkit-filter: blur(2vw);
          animation-name: animationBlurBall;
          animation-iteration-count: infinite;
          animation-duration: 14s;
          //   z-index: -1;
        }
        .gray-floating-ball-2 {
          height: 20vw;
          width: 20vw;
          background-color: rgba(200, 200, 200, 0.1);
          position: absolute;
          top: 10px;
          left: 100%;
          //   filter: blur(40px);
          border-radius: 50%;
          //   backdrop-filter: blur(10);
          -webkit-filter: blur(1vw);
          animation-name: animationBlurBall;
          animation-iteration-count: infinite;
          animation-duration: 24s;
          //   z-index: -1;
        }
        .gray-floating-ball-1 {
          height: 20vw;
          width: 20vw;
          background-color: rgba(200, 200, 200, 0.1);
          position: absolute;
          top: 10px;
          left: 100%;
          //   filter: blur(40px);
          border-radius: 50%;
          //   backdrop-filter: blur(10);
          -webkit-filter: blur(1vw);

          animation-direction: reverse;
          animation-name: animationBlurBall;
          animation-iteration-count: infinite;
          animation-duration: 10s;
          //   z-index: -1;
        }
        .blur-screen {
          width: 100%;
          position: absolute;
          height: 100%;
          background: rgba(255, 255, 255, 0);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(120.4px);

          // z-index: 1;
        }
        .up {
          transform: rotate(180deg);
        }
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          height: 100%;
          z-index: 11;
          transition: all 300ms ease;
        }
        .transitional {
          transition: all 300ms ease;
        }
        .section-div {
          position: relative;
          z-index: 10;
        }
        .navToglBtn {
          position: fixed;
          top: 0;
          left: calc(50% - 40px);
          color: white;
          display: none;
          z-index: 111;
          background: #121212;
          //   padding: 10px;
          width: 80px;

          border-bottom-right-radius: 100px;
          border-bottom-left-radius: 100px;
          text-align: center;
          //   height: 50px;
          //   display: flex;
          //   justify-content: center;
          //   align-items: center;
        }

        @media only screen and (max-width: 770px) {
          .navToglBtn {
            display: block;
          }
          .nav {
            top: ${isNav ? "0%" : "-100%"};
          }
          .gray-floating-ball {
            width: 20vh;
            height: 20vh;
          }
          .gray-floating-ball-1 {
            width: 20vh;
            height: 20vh;
          }
          .gray-floating-ball-2 {
            width: 20vh;
            height: 20vh;
          }
        }
        @keyframes animationBlurBall {
          0% {
            top: 10px;
            left: 30%;
          }
          20% {
            top: 40%;
            left: calc(100% - 20vw);
          }
          50% {
            top: calc(100% - 20vw);
            left: calc(50% - 10vw);
          }
          60% {
            top: calc(50% - 10vw);
            left: calc(50% - 10vw);
          }
          80% {
            top: 10%;
            left: 0;
          }
          100% {
            top: 10px;
            left: 30%;
          }
        }
      `}</style>
      <div
        className="navToglBtn"
        onClick={() => {
          setNav(!isNav);
        }}
      >
        <span
          className={`material-symbols-outlined transitional ${
            isNav ? "up" : "down"
          }`}
        >
          expand_more
        </span>
      </div>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <div className="gray-floating-ball"></div>
        <div className="gray-floating-ball-1"></div>
        <div className="gray-floating-ball-2"></div>
      </div>
      {/* <div className="blur-screen"></div> */}
      <div className={`nav`}>
        <Navbar setNav={setNav} />
      </div>
      <div
        className="section-div"
        style={{
          width: "100%",
          height: "100%",
          //   overflow: "hidden",
        }}
      >
        <AnimatePresence>
          <Routes location={location} path={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}
