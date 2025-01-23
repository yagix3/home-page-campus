import { Menu } from 'lucide-react'
import { Button } from "./ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"

import logo from "../assets/logo-azul.svg"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white px-2">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <img
            src={logo}
            alt="ISTRED Logo"
            className="h-10 w-auto"
          />
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#campus-virtuales"
            className="text-sm font-medium text-[#21376D] transition-colors hover:text-[#21376D]/80"
          >
            CAMPUS
          </a>
          <a
            href="https://itred.edu.ec"
            className="text-sm font-medium text-[#21376D] transition-colors hover:text-[#21376D]/80"
          >
            WEB INSTITUCIONAL
          </a>
          <a
            href="https://sig.itred.edu.ec"
            className="text-sm font-medium text-[#21376D] transition-colors hover:text-[#21376D]/80"
          >
            SIG
          </a>
          <a
            href="https://bolsadeempleo.itred.edu.ec/"
            className="text-sm font-medium text-[#21376D] transition-colors hover:text-[#21376D]/80"
          >
            BOLSA DE EMPLEO
          </a>
          <a
            href="http://141.98.152.133/~moodleold/"
            className="text-sm font-medium text-[#21376D] transition-colors hover:text-[#21376D]/80"
          >
            HISTÓRICO 2024-2025 CI
          </a>
        </nav>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-[#21376D]">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[350px] p-0">
            <SheetHeader className="p-6 border-b">
              <SheetTitle className="text-[#21376D] font-bold">ISTRED</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col p-6">
              <a
                href="#campus-virtuales"
                className="text-[#21376D] py-3 text-sm font-medium hover:text-[#21376D]/80"
              >
                CAMPUS
              </a>
              <a
                href="https://itred.edu.ec"
                className="text-[#21376D] py-3 text-sm font-medium hover:text-[#21376D]/80"
              >
                WEB INSTITUCIONAL
              </a>
              <a
                href="https://sig.itred.edu.ec"
                className="text-[#21376D] py-3 text-sm font-medium hover:text-[#21376D]/80"
              >
                SIG
              </a>
              <a
                href="/bolsa-de-empleo"
                className="text-[#21376D] py-3 text-sm font-medium hover:text-[#21376D]/80"
              >
                BOLSA DE EMPLEO
              </a>
              <a
                href="http://141.98.152.133/~moodleold/"
                className="text-[#21376D] py-3 text-sm font-medium hover:text-[#21376D]/80"
              >
                HISTÓRICO 2024-2025 CI
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

