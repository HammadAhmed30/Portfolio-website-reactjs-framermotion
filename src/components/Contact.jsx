import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: { duration: 0.5 },
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
          form {
            display: flex;
            width: 100%;
            flex-direction: column;
          }
          input {
            width: calc(100% - 25px);
            // height:;
            padding: 15px 10px;
            border: none;
            outline: none;
            color: white;
            background-color: #2e2e2e;
            border-left: 5px solid white;
            margin-top: 5px;
          }
          textarea {
            border: none;
            border-left: 5px solid white;
            color: white;
            outline: none;
            width: calc(100% - 25px);
            background-color: #2e2e2e;
            padding: 10px;
            height: 80px;
            // margin-inline: auto;
            margin-top: 5px;
          }
          .maincnt-contact {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            align-items: center;
            justify-content: space-evenly;
          }
          .heading-home {
            font-size: 6.2em;
            font-weight: 900;
            line-height: 0.93em;
            letter-spacing: 5px;
            text-shadow: 10px 10px black;
          }
          .media-links a {
            margin-left: 15px;
            margin-right: 15px;
          }
          .media-links {
            margin-inline: auto;
            diaplay: flex;
            align-items: center;
          }
          .para-heading {
            letter-spacing: 7px;
            margin-bottom: 0.81em;
            font-weight: 300;
          }
          @media only screen and (max-width: 770px) {
            .heading-home {
              font-size: 3.7em !important;
            }
          }
        `}
      </style>
      <div
        className="maincnt-contact"
        style={{
          color: "#f9f9f9",
          textAlign: "right",
        }}
      >
        <motion.h1
          initial={{
            transform: "translateY(100px)",
          }}
          animate={{
            transform: "translateY(0px)",
            // transition: { duration: 0.21 },
          }}
          className="heading-home"
        >
          CONTACT
        </motion.h1>
        <motion.div
          initial={{
            transform: "translateY(70px)",
          }}
          animate={{
            transform: "translateY(0px)",
            transition: { delay: 0.1 },
          }}
          className="form"
          style={{
            width: "min(100% - 20px,500px)",
          }}
        >
          <form action="" className="form-main">
            <input type="text" placeholder="Name i.e Ibrahim" />
            <input type="text" placeholder="E-mail i.e example@abc.com" />
            <textarea placeholder="Message..."></textarea>
            <button
              style={{
                width: "170px",
                marginTop: "5px",
              }}
              className="hire-btn"
            >
              SEND
            </button>
          </form>
        </motion.div>
        <motion.div
          initial={{
            transform: "translateY(-70px)",
          }}
          animate={{
            transform: "translateY(0px)",
            transition: { delay: 0.13 },
          }}
          className="media-links"
        >
          <a href="https://www.linkedin.com/in/hammad-saghir-a7a368231/">
            <img
              style={{
                width: "20px",
              }}
              src="linkedin.png"
              alt=""
            />
          </a>
          <a href="mailto:30lazers@gmail.com">
            <img
              style={{
                width: "20px",
              }}
              src="gmail.png"
              alt=""
            />
          </a>
          <a href="https://www.instagram.com/hammadsaghir._/">
            <img
              style={{
                width: "20px",
              }}
              src="instagram.png"
              alt=""
            />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}
