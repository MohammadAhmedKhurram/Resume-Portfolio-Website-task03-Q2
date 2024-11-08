import GeneralButton from "../Buttons/ButtonGeneral";
import Image from "next/image";
import Navbar from "../Navbar";
import TypingEffect from "../TypingEffect";


export default function MainSection() {
  return (
    <>
      <Navbar />
      <div
              id="hero"
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#2C3E50",
          height: "100vh",
        }}
      >
        <span style={{ paddingTop: "11.46vw", paddingLeft: "5.21vw" }}>
          <TypingEffect />
          <p style={{ paddingTop: "2.60vw", fontSize: "1.04vw", color: "#ECF0F1" }}>
            Hey there! I’m Muhammad Ahmed Khurram, a 16-year-old
            <br /> engineer, problem-solver, and innovator. I’m on a mission to
            <br /> lead and reshape the future of technology by creating
            impactful
            <br />
            solutions, especially in the realm of Artificial Intelligence. With
            <br /> a passion for Full-Stack Engineering and AI, I strive to
            drive global
            <br /> advancements and empower industries with smarter solutions.
          </p>
          <p style={{ paddingTop: "0px", fontSize: "1.04vw", color: "#ECF0F1" }}>
            Let’s connect and build the next big thing together!
          </p>
          <p  style={{ paddingTop: "2.60vw" }}>
            <a href="#contact" style={{ color: "inherit", textDecoration: 'none' }}>
            <GeneralButton title="Request Help" />
            </a>
          </p>
        </span>
        <Image
          src="/coder.png"
          alt="An Image"
          width={650}
          height={650}
          style={{ paddingRight: "10.42vw", paddingTop: "7.82vw" }}
        />
      </div>
      <div id="skills"></div>

    </>
  );
}





