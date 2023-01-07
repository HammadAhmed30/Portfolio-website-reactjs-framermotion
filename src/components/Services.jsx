import React from "react";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <style jsx="true">{`
        .main-cnt-services {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: space-evenly;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .services-h1 {
          font-size: 6.2em;
          font-weight: 900;
          line-height: 0.93em;
          color: white;
          letter-spacing: 5px;
          text-shadow: 10px 10px black;
        }
        .main-width-services {
          position: relative;
          padding: 2em 0;
          justify-content: center;
          display: flex;
          flex-direction: column;
          align-items: center;

          width: min(100% - 10px, 700px);
          height: 300px;
          //   background-color: yellow;
        }
        .service1 {
          display: flex;
          cursor: context-menu;
          transform: translate(-30px, 0);
          align-items: center;
          margin: 15px 0px;
          //   flex-direction: column;
          //   width: 100%;
          transition: all 100ms ease;
        }
        .service2 {
          transform: translate(30px, 0);
          //   padding-right: -140px;
          // margin-right: 200px;
          //   float: right;
          //   align-content: right;
          display: flex;
          //   position: relative;
          //   right: 20px;
          align-items: center;
          //   width: 100%;
          margin: 15px 0px;
          //   flex-direction: column;
          transition: all 100ms ease;
          cursor: context-menu;
        }
        .service1:hover {
          transform: scale(1.1) translate(-30px, 0);
        }
        .service2:hover {
          transform: scale(1.1) translate(30px, 0);
        }
        .name-service {
          padding: 9px;
          padding-left: 20px;
          padding-right: 20px;
          margin-left: -10px;
          font-weight: 200;
          color: white;
          border-top-right-radius: 100px;
          border-bottom-right-radius: 100px;
          background-color: #121212;
        }
        .name-service2 {
          border-top-left-radius: 100px;
          font-weight: 200;
          color: white;
          border-bottom-left-radius: 100px;
          padding: 9px;
          padding-left: 20px;
          padding-right: 20px;
          margin-right: -10px;
          background-color: #121212;
        }
        @media only screen and (max-width: 770px) {
          .services-h1 {
            font-size: 3.7em !important;
          }
        }
      `}</style>
      <div className="main-cnt-services">
        <motion.h1
          initial={{
            transform: "translateY(-40px)",
          }}
          animate={{
            transform: "translateY(0px)",
            transition: { delay: 0.07 },
          }}
          className="services-h1"
        >
          SER<span className="blueMake">VI</span>CES
        </motion.h1>
        <motion.div
          initial={{
            transform: "translateY(-40px)",
          }}
          animate={{
            transform: "translateY(0px)",
            transition: { delay: 0.1, duration: 0.3 },
          }}
          className="main-width-services"
        >
          <div className="service1">
            <img
              style={{
                width: "50px",
                padding: "10px",
                backgroundColor: "#121212",
                borderRadius: "10px",
              }}
              src="website.png"
              alt=""
            />
            <p className="name-service blueMake">Website Development</p>
          </div>
          <div className="service2">
            <p className="name-service2 blueMake">UI / UX Designing</p>
            <img
              style={{
                width: "50px",
                padding: "10px",
                backgroundColor: "#121212",
                borderRadius: "10px",
              }}
              src="uiux.png"
              alt=""
            />
          </div>
          <div className="service1">
            <img
              style={{
                width: "50px",
                padding: "10px",
                backgroundColor: "#121212",
                borderRadius: "10px",
              }}
              src="redesign.png"
              alt=""
            />
            <p className="name-service blueMake">Website Redesigning</p>
          </div>
          <div className="service2">
            <p className="name-service2 blueMake">Template Designing</p>
            <img
              style={{
                width: "50px",
                padding: "10px",
                backgroundColor: "#121212",
                borderRadius: "10px",
              }}
              src="template.png"
              alt=""
            />
          </div>
        </motion.div>
        <motion.div
          initial={{
            transform: "translateY(40px)",
          }}
          animate={{
            transform: "translateY(0px)",
            transition: { delay: 0.1 },
          }}
          className="project-main-section"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontSize: "1em",
              fontWeight: "300",
              color: "white",
            }}
          >
            Projects on github &ensp;:{"   "}&ensp;
          </h1>
          <a href="https://github.com/HammadAhmed30">
            <img
              style={{
                width: "30px",
              }}
              src="github.png"
              alt=""
            />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}
