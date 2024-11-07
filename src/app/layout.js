import HeaderAuth from "@/modules/header2";
import Footer from "@/modules/footer";
import "@/styles/globals.css";

export const metadata = {
  title: "Petcher",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <HeaderAuth/>
        {children}
        <Footer />
      </body>
    </html>
  );
}

