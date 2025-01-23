import { BookOpen, Database, Navigation2, Shield } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
  href: string;
}

const features: FeatureProps[] = [
  {
    icon:  <BookOpen className="h-5 w-5 text-[#21376D]" />,
    title: "CONTABILIDAD Y ADMINISTRACIÓN TRIIBUTARIA",
    description:
      "Formación integral y actualizada en finanzas y fiscalidad.",
      href: 'https://campus-cat.itred.edu.ec'
  },
  {
    icon: <Database className="h-5 w-5 text-[#21376D]" />,
    title: "GESTIÓN DE BASE DE DATOS",
    description:
      "Especialización en diseño y gestión de bases de datos, con enfoque en seguridad y oportunidades laborales.",
    href: 'https://campus-gbd.itred.edu.ec'
  },
  {
    icon: <Navigation2 className="h-5 w-5 text-[#21376D]" />,
    title: "PLANIFICACIÓN DEL TRÁNSITO",
    description:
      "Ideal para quienes quieren innovar en movilidad urbana.",
    href: 'https://campus-pdt.itred.edu.ec'

  },
  {
    icon: <Shield className="h-5 w-5 text-[#21376D]" />,
    title: "SEGURIDAD Y PREVENCIÓN DE RIESGOS LABORALES",
    description:
      "Oportunidad de convertirte en un profesional altamente demandado.",
    href: 'https://campus-sprl.itred.edu.ec'

  },
];

function Campus() {
  return (
    <>
    {/* Campus Virtuales Section */}
    <section className="py-24 bg-gray-50" id="campus-virtuales">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold tracking-tight mb-16">
            Campus <span className="text-[#21376D]">Virtuales</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" id="howItWorks">
        {features.map(({ icon, title, description, href }: FeatureProps) => (
          <Card 
            key={title}
            className="bg-muted/50 cursor-pointer hover:bg-muted/70 transition-colors"
            onClick={() => window.open(href, '_blank')}
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center text-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center text-sm">{description}</CardContent>
          </Card>
        ))}
      </div>
        </div>
      </section></>
  )
}

export default Campus