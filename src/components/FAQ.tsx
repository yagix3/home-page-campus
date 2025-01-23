import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

function FAQ() {
  return (
    <>
    <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold tracking-tight mb-16">
            Preguntas <span className="text-[#21376D]">Frecuentes</span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>¿Por qué no puedo entrar a la plataforma?</AccordionTrigger>
                <AccordionContent>
                  Asegúrate de que tus credenciales sean correctas y que tu cuenta esté activa. Si persiste el problema, contacta a soporte técnico.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>¿Qué puedo hacer si olvidé salvar una tarea?</AccordionTrigger>
                <AccordionContent>
                  La plataforma guarda automáticamente tu progreso cada 5 minutos. Puedes revisar las versiones anteriores en la sección de borradores.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section></>
  )
}

export default FAQ