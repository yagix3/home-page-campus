import Campus from "@/components/Campus"
import About from "../components/About";
import Footer from "./Footer";

import { SiteHeader } from "@/components/header"
import Carrucel from "@/components/Carrucel"
import FAQ from "@/components/FAQ"
export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      
      <Carrucel />

      <Campus />

      <About />

      <FAQ />

      <Footer />
    </div>
  )
}

