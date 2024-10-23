export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#2C3E50",
        color: "#ECF0F1",
      }}
    >
      <div style={{ textAlign: "center", padding: "0.1px 0" }}>
        <p>Copyright &copy; {new Date().getFullYear()} Muhammad Ahmed Khurram. All Rights Reserved.</p>
        <p>
          Empowering the future with technology, innovation, and creativity.
        </p>
      </div>
    </footer>
  );
}
