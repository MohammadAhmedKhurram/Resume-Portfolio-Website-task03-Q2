"use client";
import styles from "@/app/components/Styles/TypingEffect.module.css";
import { useEffect, useState } from "react";
import TypeIt from "typeit";

export default function TypingEffect() {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (isAnimated) {
      new TypeIt("#element", {
        lifeLike: false,
        speed: 0,
      })
        .type("F")
        .pause(150)
        .type("u")
        .pause(150)
        .type("t")
        .pause(150)
        .type("u")
        .pause(150)
        .type("r")
        .pause(150)
        .type("e")
        .pause(150)
        .type(" ")
        .pause(150)
        .type('<span style="color: #E74C3C;">F</span>')
        .pause(150)
        .type('<span style="color: #E74C3C;">u</span>')
        .pause(150)
        .type('<span style="color: #E74C3C;">l</span>')
        .pause(150)
        .type('<span style="color: #E74C3C;">l</span>')
        .pause(150)
        .type('<span style="color: #E74C3C;">-</span>')
        .pause(150)
        .type('<span style="color: #E74C3C;">S</span>')
        .pause(150)
        .type('<span style="color: #E74C3C;">t</span>')
        .pause(150)
        .type('<span style="color: #E74C3C;">a</span>')
        .pause(150)
        .type('<span style="color: #E74C3C;">c</span>')
        .pause(150)
        .type('<span style="color: #E74C3C;">k</span>')
        .pause(150)
        .type(" ")
        .pause(150)
        .type('<span style="color: #E74C3C;">E</span>')
        .pause(150)
        .type('<span style="color: #E74C3C;">n</span>')
        .pause(150)
        .type('<span style="color: #E74C3C;">g</span>')
        .pause(150)
        .type('<span style="color: #E74C3C;">i</span>')
        .pause(150)
        .type('<span style="color: #E74C3C;">n</span>')
        .pause(150)
        .type('<span style="color: #E74C3C;">e</span>')
        .pause(150)
        .type('<span style="color: #E74C3C;">e</span>')
        .pause(150)
        .type('<span style="color: #E74C3C;">r</span>')
        .pause(150)
        .type(" ")
        .pause(150)
        .type("a")
        .pause(150)
        .type("n")
        .pause(150)
        .type("d")
        .pause(150)
        .type(" ")
        .pause(150)
        .type('<span style="color: #F1C40F;">A</span>')
        .pause(150)
        .type('<span style="color: #F1C40F;">I</span>')
        .pause(150)
        .type(" ")
        .pause(150)
        .type('<span style="color: #F1C40F;">P</span>')
        .pause(150)
        .type('<span style="color: #F1C40F;">i</span>')
        .pause(150)
        .type('<span style="color: #F1C40F;">o</span>')
        .pause(150)
        .type('<span style="color: #F1C40F;">n</span>')
        .pause(150)
        .type('<span style="color: #F1C40F;">e</span>')
        .pause(150)
        .type('<span style="color: #F1C40F;">e</span>')
        .pause(150)
        .type('<span style="color: #F1C40F;">r</span>')
        .pause(150)
        .type("!")
        .go();
    }
  }, [isAnimated]);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <>
      <div
        id="element"
        style={{ fontSize: "1.875vw", fontWeight: "bold", color: "#ECF0F1" }} // Adjusted font size
      ></div>
    </>
  );
}
