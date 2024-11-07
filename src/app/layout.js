
import Header from "@/modules/header1";
import Footer from "@/modules/footer";
import "@/styles/globals.css";

export const metadata = {
  title: "Petcher",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

