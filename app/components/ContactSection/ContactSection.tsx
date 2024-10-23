import Image from "next/image";
import ContactForm from "./ContactForm";
import Styles from "@/app/components/Styles/Icon.module.css";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#FFFFFF",
          color: "#2C3E50",
          paddingTop: "40px",
          height: "70vh",
        }}
      >
        <div
          style={{
            padding: "0 50px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* Left Section with Contact Info */}
          <div style={{ flex: 1, paddingRight: "20px" }}>
            <h1
              style={{
                fontSize: "36px",
                color: "#E74C3C",
                margin: "0px 0px 0px 0px",
              }}
            >
              Contact Me
            </h1>
            <p
              style={{
                fontSize: "15px",
                color: "#2C3E50",
                margin: "0px 0px 0px 0px",
              }}
            >
              I&apos;m here to help you!
            </p>

            <div
              style={{
                paddingTop: "60px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image
                src="/contactform.pngs/email.jpg"
                alt="email"
                width={76}
                height={76}
              />
              <div style={{ marginLeft: "20px" }}>
                <h3 style={{ margin: "0px" }}>E-Mail</h3>
                <p style={{ margin: "5px 0px" }}>ahmedkhurram1000@gmail.com</p>
              </div>
            </div>

            <div
              style={{
                paddingTop: "60px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image
                src="/contactform.pngs/phone.jpg"
                alt="phone"
                width={76}
                height={76}
              />
              <div style={{ margin: "0 20px" }}>
                <h3 style={{ margin: "0px" }}>Phone</h3>
                <p style={{ margin: "5px 0px" }}>+92 314 2028044</p>
              </div>
            </div>

            {/* Get Connected Section */}
            <div style={{ paddingTop: "60px" }}>
              <h2 style={{ margin: "0px", color: "#E74C3C" }}>Get Connected</h2>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingTop: "10px",
                }}
              >
                <Link href="https://www.linkedin.com/in/muhammad-ahmed-1581a0279/" target="_blank">
                  <Image
                    className={Styles.rotate}
                    src="/icons8-linkedin.svg"
                    alt="LinkedIn"
                    width={50}
                    height={50}
                  />
                </Link>
                <Link href="https://github.com/MohammadAhmedKhurram" target="_blank">
                  <Image
                    className={Styles.rotate}
                    src="/icons8-github2.svg"
                    alt="GitHub"
                    width={50}
                    height={50}
                    style={{ marginLeft: "10px" }}
                  />
                </Link>
                <Link href="https://www.npmjs.com/~ahmedkhurram" target="_blank">
                  <Image
                    className={Styles.rotate}
                    src="/icons8-npm.svg"
                    alt="NPM"
                    width={50}
                    height={50}
                    style={{ marginLeft: "10px" }}
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section with Contact Form */}
          <div style={{ flex: 1, paddingTop: "24px" }}>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
