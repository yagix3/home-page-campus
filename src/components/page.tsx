import Campus from "@/components/Campus"
import About from "../components/About";
import Footer from "./Footer";
import Rotating from "@/components/Rotating";
import { SiteHeader } from "@/components/header"
import Carrucel from "@/components/Carrucel"
import FAQ from "@/components/FAQ"
export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <Carrucel />

      <Rotating />
      
      <Campus />

      <About />

      <FAQ />

      <Footer />
    </div>
  )
}

