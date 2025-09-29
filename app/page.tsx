"use client"

import type { ReactNode } from "react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, useAnimation, useInView } from "framer-motion"
import AnimatedSpecialties from "@/components/AnimatedSpecialties"
import Perfil from "../public/app/img/perfil.png"
import ToggleTheme from "@/components/toggle-theme"
import { Github, Globe, Menu } from "lucide-react"
import ContactForm from "@/components/ContactForm"
import { skills } from "@/app/typescript/skills"
import { BsFacebook, BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import DownloadButton from "@/components/downloadButton"

const fadeVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

function AnimatedSection({ children }: { children: ReactNode }) {
  const controls = useAnimation()
  const ref = useRef(null)
  // Detecta si el ancho es menor a 768px (modo celular)
  const [isMobile, setIsMobile] = useState(false)
  const isInView = useInView(ref, { amount: 0.3, once: isMobile })

useEffect(() => {
  const checkScreenSize = () => {
    setIsMobile(window.innerWidth < 768) // Ajusta según el breakpoint que uses
  }

  checkScreenSize() // Ejecutar al cargar la página
  window.addEventListener("resize", checkScreenSize) // Escuchar cambios de tamaño

  return () => window.removeEventListener("resize", checkScreenSize) // Cleanup
}, [])

useEffect(() => {
  if (isInView) {
    controls.start("visible")
  } else if (!isMobile) {
    controls.start("hidden")
  }
}, [controls, isInView, isMobile])

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={fadeVariants} transition={{ duration: 0.8 }}>
      {children}
    </motion.div>
  )
}

const projects = [
  {
    title: "Tienda Gamer",
    description: "Práctica personal para una tienda gamer. Puedes ingresar con el usuario: admin@admin.com y la contraseña: admin123456, para acceder al panel (agregar, editar y eliminar productos).",
    image: "/app/img/store-gamer.png",
    technologies: ["React.js", "Tailwind CSS", "JavaScript", "Firebase"],
    githubLink: "https://github.com/JoseSanchez90/ProyectoFinal-Curso-Frontend",
    liveLink: "https://kazali-store-blue.vercel.app/",
  },
  {
    title: "Comercio de Muebles",
    description: "Comercio de muebles, sillas y toda la decoración de interiores.",
    image: "/app/img/forniture.png",
    technologies: ["React.js", "Tailwind CSS", "JavaScript"],
    githubLink: "https://github.com/JoseSanchez90/Ecommerce-Furniro",
    liveLink: "https://furniro-ashy.vercel.app/",
  },
  {
    title: "Empresa Eufrosine",
    description: "Sitio web creado para una pequeña empresa de agua de mesa llamada Eufrosine.",
    image: "/app/img/eufrosine.png",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Shadcn/ui", "React Icons", "Lottie", "Motion.dev"],
    githubLink: "https://github.com/JoseSanchez90/frontend-eufrosine-web",
    liveLink: "https://eufrosine.vercel.app/",
  },
  {
    title: "IntelliPOS v1.0",
    description: "Sistema de ventas para restaurantes, retail y bodegas.",
    image: "/app/img/intellipos.png",
    technologies: ["React.js", "Tailwind CSS", "JavaScript", "SweetAlert2"],
    githubLink: "https://github.com/JoseSanchez90/Web-Intellipos",
    liveLink: "https://intellipos.vercel.app/",
  },
  {
    title: "IntelliPOS v2.0",
    description: "Sistema de ventas para restaurantes, retail y bodegas.",
    image: "/app/img/intelli2.png",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Shadcn/ui", "Lucide Icons", "Lottie", "Magic UI"],
    githubLink: "https://github.com/JoseSanchez90/intellipos-web-2025",
    liveLink: "https://intelliposperu.vercel.app/",
  },
  {
    title: "Lista de Tareas",
    description: "Práctica personal para una lista de tareas.",
    image: "/app/img/todolist.png",
    technologies: ["Vue.js", "CSS", "JavaScript"],
    githubLink: "https://github.com/JoseSanchez90/To-Do-List",
    liveLink: "https://to-do-list-josesanchez.vercel.app/",
  },
  {
    title: "Web para un Arquitecto",
    description: "Un sitio web de demostración diseñado para un arquitecto.",
    image: "/app/img/arquitectura-web.png",
    technologies: ["Next.js", "TypeScript", "HTML", "Tailwdincss", "Shadcn/ui"],
    githubLink: "https://github.com/JoseSanchez90/proyecto-aquitectura",
    liveLink: "https://mwtrazo.vercel.app/",
  },
  {
    title: "Panel Eufrosine",
    description: "Panel de ventas para una micro empresa de agua de mesa (Demo para portafolio). Correo: administrador@empresa.com | Contraseña: Admin$1234",
    image: "/app/img/eufrosine-image.png",
    technologies: ["Next.js", "TypeScript", "HTML", "CSS", "Tailwdincss", "Shadcn/ui", "React Icons", "Lucide Icons", "PostgreSQL", "Prisma", "NextAuth.js", "Console Neon", "FullStack"],
    githubLink: "https://github.com/JoseSanchez90/eufrosine-dashboard.git",
    liveLink: "https://eufrosinepanel.vercel.app/login",
  },
]

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
    <div className="background">
        <span className="bkg"></span>
        <span className="bkg"></span>
        <span className="bkg"></span>
        <span className="bkg"></span>
        <span className="bkg"></span>
        <span className="bkg"></span>
        <span className="bkg"></span>
        <span className="bkg"></span>
        <span className="bkg"></span>
        <span className="bkg"></span>
        <span className="bkg"></span>
        <span className="bkg"></span>
        <span className="bkg"></span>
        <span className="bkg"></span>
        <span className="bkg"></span>
        <span className="bkg"></span>
        <span className="bkg"></span>
        <span className="bkg"></span>
        <span className="bkg"></span>
        <span className="bkg"></span>
        <span className="bkg"></span>
        <span className="bkg"></span>
        <span className="bkg"></span>
        <span className="bkg"></span>
        <span className="bkg"></span>
      </div>
    <div className="flex flex-col items-center justify-center min-h-screen relative">

      {/* NAVBAR */}
      <header className="w-screen bg-background/80 backdrop-blur-sm fixed top-0 z-50 py-2">
        <nav className="container flex flex-row justify-between items-center mx-auto px-4 sm:px-10 xl:px-40">
          <TooltipProvider>
            <div className="flex flex-row justify-center gap-5">
              {/* GitHub */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="https://github.com/JoseSanchez90" target="_blank" rel="noreferrer">
                    <BsGithub className="h-5 w-5 lg:hover:scale-125 lg:transition-all lg:duration-200" />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="top">GitHub</TooltipContent>
              </Tooltip>

              {/* LinkedIn */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="https://www.linkedin.com/in/josesanchez90/" target="_blank" rel="noreferrer">
                    <BsLinkedin className="h-5 w-5 lg:hover:scale-125 lg:transition-all lg:duration-200" />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="top">LinkedIn</TooltipContent>
              </Tooltip>

              {/* WhatsApp */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="https://api.whatsapp.com/send?phone=51960041583" target="_blank" rel="noreferrer">
                    <BsWhatsapp className="h-5 w-5 lg:hover:scale-125 lg:transition-all lg:duration-200" />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="top">WhatsApp</TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
          <ul
            className={`${menuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row absolute md:relative top-full left-0 right-0 bg-background md:bg-transparent p-4 md:p-0 gap-4 md:gap-5`}>
            {["Home", "Projects", "Skills", "Experience", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-sm font-medium hover:text-primary" onClick={() => setMenuOpen(false)}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <ToggleTheme />
        </nav>
      </header>

      <main className="container mx-auto px-10 md:px-8 lg:px-16 xl:px-20 2xl:px-40 space-y-16 md:space-y-32">

        {/* PERFIL */}
        <AnimatedSection>
          <section id="home" className="flex flex-col xl:flex xl:flex-row sm:grid sm:grid-rows-2 w-full py-20 gap-8 md:gap-16 lg:py-48 lg:gap-40 items-center justify-center">
            <div className="relative w-48 h-48 md:w-80 md:h-80 mx-auto">
              <Image src={Perfil} alt="Jose" fill className="rounded-full border-2 dark:border-gray-200 border-gray-700 shadow-xs shadow-gray-400 object-cover"/>
            </div>
            <div className="max-w-lg text-center lg:text-left">
              <h1 className="flex flex-col lg:flex-row lg:gap-3 text-3xl md:text-4xl font-bold mb-4">
                Hola, soy<span className="text-green-600 dark:text-green-400">Jose Sanchez</span>
              </h1>
              <AnimatedSpecialties />
              <p className="text-sm md:text-base text-black dark:text-white foreground mb-6">
               Cuento con experiencia desarrollando proyectos web mediante tecnologías modernas como HTML5, CSS3, JavaScript, ReactJS y NextJS, complementadas con librerías como Bootstrap y Tailwind. Me apasiona crear interfaces de calidad que brinden valor al usuario y siempre busco nuevos desafíos que me permitan seguir aprendiendo y creciendo profesionalmente.
              </p>
              <div className="space-x-4">
                {/* <Button asChild className="border-2 border-black hover:bg-white hover:text-black dark:border-white dark:hover:bg-gray-900 dark:hover:text-white">
                  <a href="#projects">View Projects</a>
                </Button> */}
                <DownloadButton />
                <Button asChild className="bg-white hover:bg-gray-900 hover:text-white text-black border-2 border-black dark:border-white dark:bg-gray-950 dark:text-white dark:hover:bg-black">
                  <a href="#contact">Contactame</a>
                </Button>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* PROYECTOS */}
        {isMobile ? (
          <section id="projects" className="py-16">
            <h2 className="text-2xl md:text-3xl font-bold my-6">Mis Proyectos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
              {projects.map((project, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <div className="relative w-full h-48 mb-4">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover rounded-t-lg hover:scale-105 transition-all duration-150"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4">
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription className="h-28 md:h-20">{project.description}</CardDescription>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <div className="flex justify-between w-full">
                      <Button asChild className="bg-white hover:bg-gray-900 hover:text-white text-black border-2 border-black dark:border-white dark:bg-gray-950 dark:text-white dark:hover:bg-white dark:hover:text-black" size="sm">
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" /> GitHub
                        </a>
                      </Button>
                      <Button asChild className="border-2 border-black hover:bg-white hover:text-black dark:border-white dark:hover:bg-gray-900 dark:hover:text-white" size="sm">
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <Globe className="mr-2 h-4 w-4" /> Demo
                        </a>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
          ) : (
            <AnimatedSection>
              <section id="projects" className="py-16">
                <h2 className="text-2xl md:text-3xl font-bold my-6 text-center">Mis Proyectos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
                  {projects.map((project, index) => (
                    <Card key={index} className="flex flex-col">
                      <CardHeader>
                        <div className="relative w-full h-48 mb-4 overflow-hidden rounded-t-lg">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                          />
                        </div>
                      </CardHeader>
                      <CardContent className="flex flex-col gap-4">
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription className="h-16">{project.description}</CardDescription>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.technologies.map((tech, i) => (
                            <span key={i} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="mt-auto">
                        <div className="flex justify-between w-full">
                          <Button asChild className="bg-white hover:bg-gray-900 hover:text-white text-black border-2 border-black dark:border-white dark:bg-gray-950 dark:text-white dark:hover:bg-white dark:hover:text-black" size="sm">
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" /> GitHub
                            </a>
                          </Button>
                          <Button asChild className="border-2 border-black hover:bg-white hover:text-black dark:border-white dark:hover:bg-gray-900 dark:hover:text-white" size="sm">
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                              <Globe className="mr-2 h-4 w-4" /> Demo
                            </a>
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </section>
            </AnimatedSection>
          )}

        {/* HABILIDADES */}
        <AnimatedSection>
          <section id="skills" className="py-16">
            <h2 className="text-2xl md:text-3xl font-bold my-6 text-center">Habilidades</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <Card key={index} className="flex flex-col items-center pt-6">
                  <CardHeader className="flex flex-col items-center">
                    <div className="w-12 h-12 lg:hover:scale-150 transition-all duration-300">
                      <Image src={skill.icon} alt={skill.name} width={38} height={38} />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-center">{skill.name}</CardTitle>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </AnimatedSection>


        {/* EXPERIENCIA LABORAL */}
        <AnimatedSection>
          <section id="experience" className="py-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Experiencia Laboral</h2>
            <div className="relative max-w-4xl mx-auto">
              {/* Vertical line - visible on larger screens */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200 hidden lg:block"></div>
              {[
                {
                  title: "Soporte de Software",
                  company: "IntelliPOS",
                  period: "Junio 2024 - Junio 2025",
                  description: "Trabaje como soporte de software para el sistema Aloha en tiendas retail y restaurantes.",
                },
                {
                  title: "Asistente de Soporte TI",
                  company: "Golden Investment",
                  period: "Octubre 2023 - Noviembre 2023",
                  description: "Soporte Help Desk nivel 1 y nivel 2, en software y hardware.",
                },
                {
                  title: "Especialista de Soporte Help Desk",
                  company: "Canvia",
                  period: "Setiembre 2022 - Setiembre 2023",
                  description: "Especialista en soporte técnico nivel 1 y nivel 2, configuración de redes Lan/Wan e impresoras.",
                },
              ].map((exp, index) => (
                <AnimatedSection key={index}>
                  <div
                    className={`mb-8 lg:mb-0 flex flex-col lg:flex-row items-center ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}
                  >
                    <div className={`w-full lg:w-1/2 mb-4 lg:mb-0 ${index % 2 === 0 ? "lg:pl-8" : "lg:pr-8"}`}>
                      <div className="bg-card p-6 rounded-lg shadow-md">
                        <h3 className="font-bold text-lg">{exp.title}</h3>
                        <p className="text-yellow-500 font-semibold">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.period}</p>
                        <p className="mt-2">{exp.description}</p>
                      </div>
                    </div>
                    <div className="w-6 h-6 bg-background flex items-center justify-center rounded-full border-2 border-primary z-10 lg:mx-4">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                    </div>
                    <div className="w-full lg:w-1/2 hidden lg:block"></div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* CONTACTO */}
        <AnimatedSection>
          <ContactForm/>
        </AnimatedSection>
      </main>
      
      {/* PIE DE PAGINA */}
      <footer className="w-full border-t py-2 mt-32 lg:mt-10 text-center text-sm bg-background/80 backdrop-blur-sm text-muted-foreground">
        © 2024 Jose Sanchez. Todos los derechos reservados. | Perú, Lima
      </footer>
    </div>
    </>
  )
}