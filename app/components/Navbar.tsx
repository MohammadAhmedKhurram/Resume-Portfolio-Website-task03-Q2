import MainButton from "./Buttons/ButtonMain";

export default function Navbar() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#2C3E50",
          height: "8vh",
          width: "100%",
          position: "fixed",
          zIndex: "999",
        }}
      >
        <h1
          style={{
            color: "#F1C40F",
            display: "flex",
            alignItems: "center",
            paddingLeft: "180px",
            fontSize: "42px",
            textDecorationLine: "none",
            textDecoration: "none",
          }}
        >
          <a href="#hero" style={{ color: "inherit", textDecoration: "none" }}>
            <span
              style={{
                color: "#F1C40F",
                textDecorationLine: "none",
                textDecoration: "none",
              }}
            >
              {"{"}
            </span>
            M
            <span style={{ color: "#E74C3C", textDecorationLine: "none" }}>
              {"<A/>"}
            </span>
            <span style={{ color: "#ECF0F1" }}>{"K}"}</span>
          </a>
        </h1>
        <ul
          style={{
            textDecoration: "none",
            color: "white",
            listStyleType: "none",
            display: "flex",
            gap: "50px",
            alignItems: "center",
            paddingRight: "180px",
          }}
        >
          <li style={{ color: "#ECF0F1" }}>
            <a
              href="#skills"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Skills
            </a>
          </li>
          <li style={{ color: "#ECF0F1" }}>
            <a
              href="#education"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Education
            </a>
          </li>
          <li style={{ color: "#ECF0F1" }}>
            <a
              href="#projects"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Projects
            </a>
          </li>
          <li style={{ color: "#ECF0F1" }}>
            <a
              href="#contact"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Contact
            </a>
          </li>
          <span>
            <a
              href="#contact"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <MainButton />
            </a>
          </span>
        </ul>
      </div>
    </>
  );
}