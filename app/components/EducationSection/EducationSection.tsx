export default function Education() {
  return (
    <>
      <div
              id="education"
        style={{
          padding: "40px",
          backgroundColor: "#E0F7FA",
          textAlign: "center",
          height: "65vh",
        }}
      >
        <h2 style={{ fontSize: "36px", color: "#2C3E50",  }}>Education</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: "50px",
            position: "relative",
            color: "#2C3E50 ",
            paddingTop: "75px"
          }}
        >
          {/* Horizontal Line for the timeline */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "0",
              width: "100%",
              height: "3px",
              backgroundColor: "#2C3E50 ",
            }}
          ></div>

          {/* Matric Box */}
          <div
            style={{
              position: "relative",
              backgroundColor: "#fff",
              padding: "20px",
              width: "250px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              zIndex: 1,
              height: "250px",

            }}
          >
            <h3 >Matriculation in Computer Science</h3>
            <p>Grade: A</p>
            <p>Excellence Model School</p>
            <p>Completed: 2024</p>
          </div>

          {/* IT Initiative Box */}
          <div
            style={{
              position: "relative",
              backgroundColor: "#fff",
              padding: "20px",
              width: "250px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              zIndex: 1,
              height: "250px",

            }}
          >
            <h3 >Governor Sindh IT Initiative</h3>
            <p>GenAI, Web3.0 & Metaverse</p>
            <p>Selected from 500,000+ students</p>
            <p>Current Quarter: Full-Stack Development</p>
          </div>

          {/* Intermediate Box */}
          <div
            style={{
              position: "relative",
              backgroundColor: "#fff",
              padding: "20px",
              width: "250px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              zIndex: 1,
              height: "250px",
            }}
          >
            <h3 >Intermediate in Computer Science</h3>
            <p>Government Degree Boys College - KMC Store</p>
            <p>Currently Enrolled</p>
            <p>2024 - Present</p>
          </div>
        </div>
      </div>
    </>
  );
}
