import Image from "next/image";
import { Card } from "../../types/propsType";

export default function ProjectCard(props: Card) {
  return (
    <div
    id="projects"
      style={{
        backgroundColor: "#F3F6FF",
        color: "#2C3E50 ",
        padding: "0",
        width: "550px", // Card width
        textAlign: "left",
        margin: "10px", // Margin to create space between cards
      }}
    >
      <div
        style={{
          width: "100%", // Full width of the parent
          margin: "0",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          overflow: "hidden",
        }}
      >
        <Image
          src={props.image}
          alt={props.title}
          layout="responsive" // Use intrinsic layout for explicit sizing
          width={200} // Keep the width the same
          height={12.5} // Halved height (12.5px)
          objectFit="contain" // Ensure the entire image is visible
        />
      </div>
      <div style={{ padding: "5px" }}>
        <h3 style={{ fontSize: "20px", marginBottom: "4px" }}>
          {props.title}
        </h3>
        <p style={{ fontSize: "15px"}}>
          {props.description}
        </p>
      </div>
    </div>
  );
}
