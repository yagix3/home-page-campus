
function Footer() {
  return (
    <>
    <footer className="bg-[#21376D] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="font-semibold text-white mb-4">Síguenos</h3>
              <div className="space-y-2">
                <a href="https://www.facebook.com/istred.ec" className="block hover:text-gray-300">Facebook</a>
                <a href="https://www.instagram.com/istred.ec/#" className="block hover:text-gray-300">Instagram</a>
                <a href="https://www.youtube.com/@istred_ec" className="block hover:text-gray-300">YouTube</a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Plataformas</h3>
              <div className="space-y-2">
                <a href="https://itred.edu.ec" className="block hover:text-gray-300">Web</a>
                <a href="https://sig.itred.edu.ec" className="block hover:text-gray-300">SIG</a>
                <a href="https://bolsadeempleo.itred.edu.ec/" className="block hover:text-gray-300">Bolsa de Empleo</a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Comunidad</h3>
              <div className="space-y-2">
                <a href="https://www.youtube.com/@istred_ec" className="block hover:text-gray-300">YouTube</a>
                <a href="https://x.com/istred_ec" className="block hover:text-gray-300">X</a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-12 pt-8 text-center text-sm">
            © 2024 INSTITUTO SUPERIOR TECNOLÓGICO REY DAVID
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer