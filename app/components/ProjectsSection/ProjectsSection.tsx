import GeneralButton from "../Buttons/ButtonGeneral";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

export default function ProjectsSection() {
  return (
    <div
      style={{
        backgroundColor: "#F3F6FF",
        color: "#2C3E50 ",
        paddingTop: "40px",
        height: "138vh",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        <h1 style={{ fontSize: "36px", color: "#E74C3C" }}>
          Projects I&apos;ve Built
        </h1>
        <p style={{ fontSize: "20px", color: "#2C3E50" }}>
          I’m dedicated to driving innovation through technology. Below are some
          of my key projects that demonstrate my growing proficiency in
          Full-Stack Engineering.
        </p>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)", // Three projects per row
          gap: "30px",
          paddingLeft: "70px",
          paddingRight: "70px",
        }}
      >
        <Link href={"https://www.npmjs.com/package/monster-maze-adventure?activeTab=readme"} target="_blank" style={{ textDecoration: "none" }}>
        <ProjectCard
          image="/projectSec.pngs/monster (1).png"
          title="Monster Maze Adventure Game"
          description="A CLI game using TypeScript, Node.js, and Inquirer. Navigate a maze, face enemies, and make strategic combat decisions."
        />
        </Link>
        

        <Link href={"https://www.npmjs.com/package/student-manager-ts"} target="_blank" style={{ textDecoration: "none" }}>
        <ProjectCard
          image="/projectSec.pngs/std.png"
          title="Student Management System"
          description="A TypeScript CLI tool built with Node.js and Inquirer for managing students and courses, with persistent JSON storage."
        />
        </Link>

        <Link href={"https://www.npmjs.com/package/cli-cashmaster"} target="_blank" style={{ textDecoration: "none" }}>
        <ProjectCard
          image="/projectSec.pngs/atm.png"
          title="ATM Simulator"
          description="An ATM simulator using TypeScript, Node.js, and Inquirer. Users can log in, check balances, and withdraw cash."
        />
        </Link>

        <Link href={"https://www.npmjs.com/package/quiz_maestro"} target="_blank" style={{ textDecoration: "none" }}>
        <ProjectCard
          image="/projectSec.pngs/Quiz.jpg"
          title=" Quiz System"
          description="A TypeScript quiz system built with Node.js and Inquirer, offering interactive multiple-choice questions."
        />
        </Link>

        <Link href={"https://www.npmjs.com/package/elementary_calculator"} target="_blank" style={{ textDecoration: "none" }}>
        <ProjectCard
          image="/projectSec.pngs/calculator.jpg"
          title="Calculator"
          description="A simple TypeScript CLI calculator using Node.js and Inquirer for basic operations like addition, subtraction, multiplication, and division."
        />
        </Link>

        <Link href={"https://www.npmjs.com/package/smart_currency_converter"} target="_blank" style={{ textDecoration: "none" }}>
        <ProjectCard
          image="/projectSec.pngs/currencyconverter.jpg"
          title="Currency Converter"
          description="A TypeScript CLI app using Node.js, Axios, and Inquirer to convert currencies with live exchange rates."
        />
        </Link>
      </div>
      <div style={{display: "flex", justifyContent: "center", paddingBottom: "50px", paddingTop: "40px"}}>
      <Link href={"https://github.com/MohammadAhmedKhurram"} target="_blank" style={{ textDecoration: "none" }}>
      <GeneralButton title="Explore More"/>
      </Link>
      </div>
    </div>
  );
}
