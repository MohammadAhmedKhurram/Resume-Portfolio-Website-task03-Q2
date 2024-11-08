"use client";
import { Poppins } from "@next/font/google";
import { GenButton } from "../../types/propsType";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "500", "700"],
});

export default function GeneralButton(props: GenButton) {
  const buttonStyle = {
    fontSize: "0.68vw",
    backgroundColor: "#E74C3C",
    color: "#ECF0F1",
    border: "0.10vw solid #E74C3C",
    paddingTop: "0.93vh ",
    paddingBottom: "0.93vh ",
    paddingRight: "1.04vw",
    paddingLeft: "1.04vw",
    borderRadius: "10px",
    fontWeight: "bolder",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    letterSpacing: "0.05vw",
    transition: "background-color 0.8s, color 0.8s, borderColor 0.8s" 
  };


  return (
    <>
      <button
        className={poppins.className}
        style={buttonStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#ECF0F1";
          e.currentTarget.style.color = "black";
          e.currentTarget.style.borderColor = "#E74C3C";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#E74C3C";
          e.currentTarget.style.color = "#ECF0F1";
          e.currentTarget.style.borderColor = "#E74C3C";
        }}
      >
        {props.title}
      </button>
    </>
  );
}
