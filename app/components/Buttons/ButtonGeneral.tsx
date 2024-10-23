"use client";
import { Poppins } from "@next/font/google";
import { GenButton } from "../../types/propsType";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "500", "700"],
});

export default function GeneralButton(props: GenButton) {
  const buttonStyle = {
    backgroundColor: "#E74C3C",
    color: "#ECF0F1",
    border: "2px solid #E74C3C",
    paddingTop: "10px ",
    paddingBottom: "10px ",
    paddingRight: "20px",
    paddingLeft: "20px",
    borderRadius: "10px",
    fontWeight: "bolder",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    letterSpacing: "1px",
    transition: "background-color 0.8s, color 0.8s, borderColor 0.8s",
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
