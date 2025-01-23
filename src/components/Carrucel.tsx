import { useRef } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
// import { type CarouselApi } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"


import img1 from "../assets/img/imagen1.webp"
import img2 from "../assets/img/imagen2.webp"
import img3 from "../assets/img/imagen3.webp" 
import img4 from "../assets/img/imagen4.webp" 
import img5 from "../assets/img/imagen5.webp" 
import img6 from "../assets/img/imagen6.webp" 
import img7 from "../assets/img/imagen7.webp" 


function Carrucel() {
  const images = [img1, img2, img3, img4, img5, img6, img7];
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  return (
    <>
      <section className="relative bg-[#21376D]">
        <div className="container mx-auto px-4 py-12 relative z-10">
          <Carousel className="max-w-5xl mx-auto" opts={{ loop: true}} plugins={[plugin.current]}>
            <CarouselContent>
              {images.map((img, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-[200px] sm:h-[300px] md:h-[500px] w-full overflow-hidden rounded-xl">
                    <img
                      src={img}
                      alt={`Slide ${index + 1}`}
                      className="object-cover w-full h-full max-w-[2500px] max-h-[1313px]"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
        <div className="absolute inset-0 bg-grid-white/10" />
      </section>
    </>
  )
}

export default Carrucel