import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function Home() {
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
        height: "100%",
        justifyContent: "center",
      }}
    >
      <style jsx="true">
        {`
          .heading-home {
            font-size: 10em;
            font-weight: 900;
            line-height: 0.93em;
            letter-spacing: 5px;
            text-shadow: 10px 10px black;
          }
          .para-heading {
            letter-spacing: 7px;
            margin-bottom: 0.81em;
            font-weight: 300;
          }
          @media only screen and (max-width: 770px) {
            .heading-home {
              font-size: 7.7em !important;
            }
          }
        `}
      </style>
      <div
        className="maincnt-home"
        style={{
          color: "#f9f9f9",
          textAlign: "right",
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
          WEB
        </motion.h1>
        <motion.p
          initial={{
            transform: "translateY(70px)",
          }}
          animate={{
            transform: "translateY(0px)",
            transition: { delay: 0.2 },
          }}
          className="para-heading"
        >
          WEBSITE DEVELOPER
        </motion.p>
        <Link to="/contact">
          <motion.button
            initial={{
              transform: "translateY(-30px)",
            }}
            animate={{
              transform: "translateY(0px)",
              transition: { delay: 0.1 },
            }}
            className="hire-btn"
          >
            HIRE
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}
