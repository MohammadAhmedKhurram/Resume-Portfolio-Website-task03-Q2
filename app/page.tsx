import MainSection from "./components/HeroSection/HeroSection"
import Skills from "./components/SkillsSection/SkillsSection"
import Education from "./components/EducationSection/EducationSection"
import Projects from "./components/ProjectsSection/ProjectsSection"
import Contact from "./components/ContactSection/ContactSection"
import Footer from "./components/FooterSection/FooterSection"

export default function Main () {
  return (
    <>
    <MainSection/>
    <Skills/>
    <Education/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}