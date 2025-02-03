import RotatingText from "./ui/rotatingText";       


function Rotating() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-3 sm:mt-5 px-4">
        <span className="text-[#21376D] font-bold">TU TÍTULO:</span>
        <RotatingText
          texts={['EN 1 AÑO', 'DESDE CASA', '100% ONLINE', 'SIN HORARIOS']}
          mainClassName="bg-[#21376D] text-white px-2 sm:px-4 py-1 rounded-lg"
        />
    </div>
  )
}

export default Rotating;
