import istred_logo from "../assets/itred.edu.ec.png"
function About() {
  return (
    <>
    <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-16 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Sobre <span className="text-[#21376D]">Nosotros</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
              En el ISTRED contamos con 29 años de experiencia dedicados a la formación técnica y tecnológica de calidad. Nuestro enfoque es simplificar la educación virtual e híbrida, proporcionando métodos efectivos para empoderar a nuestros estudiantes y prepararlos para el mercado laboral global.
              </p>
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#21376D] mb-2">1.9k+</div>
                  <div className="text-sm text-muted-foreground">Estudiantes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#21376D] mb-2">25</div>
                  <div className="text-sm text-muted-foreground">Docentes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#21376D] mb-2">41</div>
                  <div className="text-sm text-muted-foreground">Convenios</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#21376D] mb-2">333</div>
                  <div className="text-sm text-muted-foreground">Libros</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-72 h-72">
                <div className="absolute inset-0 bg-[#21376D]/10 rounded-full" />
                <img
                  alt="ISTRED Logo"
                  className="relative z-10 w-full h-full object-contain p-8"
                  src={istred_logo}
                  width={288}
                  height={288}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About 