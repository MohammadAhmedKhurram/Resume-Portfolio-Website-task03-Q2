import Image from "next/image";
import styles from "@/app/components/Styles/Icon.module.css"; 

export default function Skills() {
  return (
    <>         
      <div
        id="skills"
        style={{
          height: "65vh",
          color: " #2C3E50",
          backgroundColor: "#F5F5F5",
          paddingTop: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h1 style={{ fontSize: "36px", color: "#E74C3C " }}>
            Skills and Expertise
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            paddingLeft: "70px",
            paddingRight: "70px",
            paddingTop: "50px",
            textAlign: "left",
            fontSize: "20px",
          }}
        >
          I am passionately committed to pioneering advancements in technology,
          driven by a desire to innovate and create meaningful solutions. In
          today’s rapidly evolving digital landscape, I am honing essential
          skills that will empower industries and transform challenges into
          opportunities. Here are the key competencies I am developing to shape
          the future of technology and drive impactful change.
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))", 
            gap: "20px", 
            alignItems: "flex-end",
            justifyItems: "center", 
            paddingTop: "150px",
          }}
        >
          <Image
            className={styles.icon}
            src="/icons8-html5.svg"
            alt="HTML Icon"
            width={100}
            height={100}
          />
          <Image
            className={styles.icon}
            src="/icons8-css3.svg"
            alt="CSS Icon"
            width={100}
            height={100}
          />
          <Image
            className={styles.icon}
            src="/icons8-javascript.svg"
            alt="JavaScript Icon"
            width={100}
            height={100}
          />
          <Image
            className={styles.icon}
            src="/icons8-typescript.svg"
            alt="TypeScript Icon"
            width={100}
            height={100}
          />
          <Image
            className={styles.icon}
            src="/icons8-nodejs.svg"
            alt="Node.js Icon"
            width={100}
            height={100}
          />
          <Image
            className={styles.icon}
            src="/icons8-git.svg"
            alt="Git Icon"
            width={100}
            height={100}
          />
          <Image
            className={styles.icon}
            src="/icons8-nodejs (1).svg"
            alt="Node.js Icon 2"
            width={100}
            height={100}
          />
          <Image
            className={styles.icon}
            src="/icons8-github.svg"
            alt="GitHub Icon"
            width={100}
            height={100}
          />
          <Image
            className={styles.icon}
            src="/icons8-npm.svg"
            alt="NPM Icon"
            width={100}
            height={100}
          />
        </div>
      </div>
    </>
  );
}
