"use client";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "500", "700"],
});

export default function MainButton() {
  const buttonStyle = {
    backgroundColor: "#ECF0F1 ",
    color: "black",
    border: "none",
    paddingTop: "10px ",
    paddingBottom: "10px ",
    paddingRight: "20px",
    paddingLeft: "20px",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2px",
    letterSpacing: "1px",
    transition: "background-color 0.8s, color 0.8s",
  };

  const dotContainerStyle = {
    display: "flex",
    marginLeft: "8px",
    alignItems: "center",
  };

  const dotStyle = (delay: string) => ({
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    backgroundColor: "#F1C40F",
    margin: "0 2px",
    animation: `dot-blink 1.5s steps(1, end) infinite`,
    animationDelay: delay,
  });

  const keyframes = `
    @keyframes dot-blink {
      0%, 20% { opacity: 0; }
      40% { opacity: 1; }
      100% { opacity: 0; }
    }
  `;
  return (
    <>
      <style>{keyframes}</style>
      <button
        className={poppins.className}
        style={buttonStyle}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#E74C3C";
          e.currentTarget.style.color = "#ECF0F1 ";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#ECF0F1 ";
          e.currentTarget.style.color = "black";
        }}
      >
        Hire Me
        <span style={dotContainerStyle}>
          <span style={dotStyle("0s")} />
          <span style={dotStyle("0.3s")} />
          <span style={dotStyle("0.6s")} />
        </span>
      </button>
    </>
  );
}
