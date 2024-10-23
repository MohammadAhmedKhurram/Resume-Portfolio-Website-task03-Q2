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
        width: "550px", 
        textAlign: "left",
        margin: "10px", 
      }}
    >
      <div
        style={{
          width: "100%", 
          margin: "0",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          overflow: "hidden",
        }}
      >
        <Image
          src={props.image}
          alt={props.title}
          layout="responsive" 
          width={200} 
          height={12.5} 
          objectFit="contain" 
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
