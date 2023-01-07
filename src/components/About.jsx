import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function About() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: { duration: 1 },
      }}
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-evenly",
      }}
    >
      <style jsx="true">
        {`
          .heading-home {
            font-size: 7em;
            font-weight: 900;
            line-height: 0.93em;
            letter-spacing: 5px;
            text-shadow: 10px 10px black;
          }
          .skill-bar {
            color: white;
            align-items: left !important;
            margin-top: 20px;
            font-weight: 200;
            font-size: 0.8em;
            position: relative;
            left: 0;
          }
          .progress-div {
            width: 60%;
          }

          .main-progress {
            width: 100%;
            height: 7px;
            background-color: rgb(240, 240, 240, 1);
            margin-inline: auto;
            border-radius: 100px;
          }
          .child-progress {
            width: 90%;
            border-radius: 100px;
            height: 100%;
            background-color: #4d4d4d;
          }
          .para-heading {
            // letter-spacing: 7px;
            margin-inline: auto;
            // margin-bottom: 0.81em;
            margin-top: 2em;
            margin-bottom: 2em;
            width: 70%;
            font-weight: 200;
          }
          @media only screen and (max-width: 770px) {
            .heading-home {
              font-size: 5.1em !important;
            }
            .para-heading {
              width: 90%;
              // text-align: left !important;
              font-size: 0.9em;
            }
            .main-progress {
              width: 100%;
            }
            .progress-div {
              width: 90%;
            }
          }
        `}
      </style>
      <div
        className="maincnt-home"
        style={{
          color: "#f9f9f9",
          //   display: "flex",
          //   flexDirection: "column",
          textAlign: "center",
        }}
      >
        <motion.h1
          initial={{
            transform: "translateY(70px)",
          }}
          animate={{
            transform: "translateY(0px)",
            transition: { delay: 0.1 },
          }}
          className="heading-home"
        >
          ABOUT
        </motion.h1>
        <motion.p
          initial={{
            transform: "translateY(70px)",
          }}
          animate={{
            transform: "translateY(0px)",
            transition: { delay: 0.15 },
          }}
          className="para-heading"
        >
          Hello <br />
          My name is Hammad Ahmed. I am a frontend website developer with 6
          months of experience using React.js. I specialize in the development
          of visually appealing and interactive websites and web applications.
        </motion.p>
        <Link to="/contact">
          <motion.button
            initial={{
              transform: "translateY(-60px)",
            }}
            animate={{
              transform: "translateY(0px)",
              transition: { delay: 0.2 },
            }}
            className="hire-btn"
          >
            HIRE
          </motion.button>
        </Link>
      </div>
      <motion.div
        initial={{
          transform: "translateY(40px)",
        }}
        animate={{
          transform: "translateY(0px)",
          transition: { delay: 0.18 },
        }}
        className="progress-div"
        style={{
          display: "flex",
          flexDirection: "column",
          // alignItems: "center",
          justifyContent: "center",
          // width: "95%",
          position: "relative",
          marginInline: "auto",
        }}
      >
        {/* <div> */}
        <p className="skill-bar">HTML</p>
        <div className="main-progress">
          <div className="child-progress"></div>
        </div>
        <p className="skill-bar">CSS</p>
        <div className="main-progress">
          <div
            className="child-progress"
            style={{
              width: "90%",
            }}
          ></div>
        </div>
        <p className="skill-bar">Javascript</p>
        <div className="main-progress">
          <div
            className="child-progress"
            style={{
              width: "85%",
            }}
          ></div>
        </div>
        <p className="skill-bar">React.js</p>
        <div className="main-progress">
          <div
            className="child-progress"
            style={{
              width: "80%",
            }}
          ></div>
        </div>
        <p className="skill-bar">Next.js</p>
        <div className="main-progress">
          <div
            className="child-progress"
            style={{
              width: "70%",
            }}
          ></div>
        </div>
      </motion.div>
    </motion.div>
  );
}
