import Navbar from "../componenets/Navbar";
import Footer from "../componenets/footer";

import { Outlet } from "react-router-dom";

export default function HomePage() {
  return (
    <section className="w-full min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </section>
  );
}
