import React from "react";

export default function Loading() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#121212",
        position: "absolute",
        top: "0",
        zIndex: "1000",
        left: "0",
      }}
    >
      <img
        style={{
          width: "50px",
        }}
        src="loading.gif"
        alt=""
      />
    </div>
  );
}
