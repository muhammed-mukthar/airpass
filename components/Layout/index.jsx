import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

import { Poppins } from "next/font/google";

const font = Poppins({ subsets: ["latin"], weight: ["400"] });

function Index(props) {
  return (
    <main className={font.className}>
      <Header />
      <Nav />
      {props.children}
      <Footer />
    </main>
  );
}

export default Index;
