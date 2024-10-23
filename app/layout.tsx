import { Poppins } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "500", "700"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className} style={{margin: "0px", padding: "0px", border: "0px", boxSizing: "border-box"}}>
        {children}
      </body>
    </html>
  );
}
