import React, { useEffect, useState } from "react";
import MainCnt from "./components/mainCnt";
export default function App() {
  const [widHeight, setWidheight] = useState("");
  useEffect(() => {
    setWidheight(window.innerHeight);
  }, []);
  return (
    <>
      <style jsx="true">
        {`
          .main-height-changer {
            height: 100vh;
          }
          @media only screen and (max-width: 770px) {
            .main-height-changer {
              // height: 110vh;
              height: ${widHeight}px;
            }
          }
        `}
      </style>
      <div className="main-height-changer">
        <MainCnt />
      </div>
    </>
  );
}
