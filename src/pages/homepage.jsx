import Navbar from "../componenets/Navbar";
import Footer from "../componenets/footer";

import { Outlet } from "react-router-dom";

export default function HomePage() {
  return (
    <section>
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
}
