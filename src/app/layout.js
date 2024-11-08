import HeaderChange from "@/modules/headerchange";
import Footer from "@/modules/footer";
import "@/styles/globals.css";

export const metadata = {
  title: "Petcher",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <HeaderChange/>
        {children}
        <Footer />
      </body>
    </html>
  );
}

