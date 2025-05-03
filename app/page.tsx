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
    title: "Store Gamer",
    description: "Personal internship for gamer store. You can enter with the user: admin@admin.com and password: admin123456, to enter the dashboard (add, edit and delete products).",
    image: "/app/img/store-gamer.png",
    technologies: ["React.js", "Tailwind CSS", "JavaScript", "Firebase"],
    githubLink: "https://github.com/JoseSanchez90/ProyectoFinal-Curso-Frontend",
    liveLink: "https://kazali-store-blue.vercel.app/",
  },
  {
    title: "Furniture Trade",
    description: "Trade in furniture, chairs and all interior decoration.",
    image: "/app/img/forniture.png",
    technologies: ["React.js", "Tailwind CSS", "JavaScript"],
    githubLink: "https://github.com/JoseSanchez90/Ecommerce-Furniro",
    liveLink: "https://furniro-ashy.vercel.app/",
  },
  {
    title: "Eufrosine Company",
    description: "Website created for a small table water company called Eufrosine.",
    image: "/app/img/eufrosine.png",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Shadcn/ui", "React Icons", "Lottie", "Motion.dev"],
    githubLink: "https://github.com/JoseSanchez90/frontend-eufrosine-web",
    liveLink: "https://eufrosine.vercel.app/",
  },
  {
    title: "IntelliPOS company v1.0",
    description: "Sales system for restaurants, retail and wineries.",
    image: "/app/img/intellipos.png",
    technologies: ["React.js", "Tailwind CSS", "JavaScript", "SweetAlert2"],
    githubLink: "https://github.com/JoseSanchez90/Web-Intellipos",
    liveLink: "https://intellipos.vercel.app/",
  },
  {
    title: "IntelliPOS company v2.0",
    description: "Sales system for restaurants, retail and wineries.",
    image: "/app/img/intelli2.png",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Shadcn/ui", "Lucide Icons", "Lottie", "Magic UI"],
    githubLink: "https://github.com/JoseSanchez90/intellipos-web-2025",
    liveLink: "https://intelliposperu.vercel.app/",
  },
  {
    title: "Task List",
    description: "Personal practice for a to-do list.",
    image: "/app/img/todolist.png",
    technologies: ["Vue.js", "CSS", "JavaScript"],
    githubLink: "https://github.com/JoseSanchez90/To-Do-List",
    liveLink: "https://to-do-list-josesanchez.vercel.app/",
  },
  {
    title: "Password Generator",
    description: "Personal practice to make a password generator.",
    image: "/app/img/password.png",
    technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/JoseSanchez90/passwordgenerator",
    liveLink: "https://passwordgenerator.up.railway.app/",
  },
  {
    title: "Dashboard Eufrosine",
    description: "Sales panel project for a small table water company (this project is for my portfolio use). Please use it in moderation.",
    image: "/app/img/eufrosine-image.png",
    technologies: ["Next.js", "TypeScript", "HTML", "CSS", "Tailwdincss", "Shadcn/ui", "React Icons", "Lucide Icons", "PostgreSQL", "Prisma", "NextAuth.js", "Console Neon", "FullStack"],
    // githubLink: "https://github.com/JoseSanchez90/eufrosine-dashboard.git",
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

              {/* Facebook */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="https://www.facebook.com/angel.sanchez.tr/" target="_blank" rel="noreferrer">
                    <BsFacebook className="h-5 w-5 lg:hover:scale-125 lg:transition-all lg:duration-200" />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="top">Facebook</TooltipContent>
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
          <section id="home" className="flex flex-col lg:flex lg:flex-row sm:grid sm:grid-rows-2 w-full py-20 gap-8 md:gap-16 lg:py-48 lg:gap-40 items-center justify-center">
            <div className="relative w-48 h-48 md:w-80 md:h-80 mx-auto">
              <Image src={Perfil} alt="Jose" fill className="rounded-full border-2 border-gray-200 shadow-xs shadow-gray-400 object-cover"/>
            </div>
            <div className="max-w-lg text-center lg:text-left">
              <h1 className="flex flex-col lg:flex-row lg:gap-3 text-3xl md:text-4xl font-bold mb-4">
                My name is<span className="text-green-600 dark:text-green-400">Jose Sanchez</span>
              </h1>
              <AnimatedSpecialties />
              <p className="text-sm md:text-base text-black dark:text-white foreground mb-6">
                My experience is based on constant practice and carrying out projects using technologies such as HTML5,
                CSS3, JavaScript and ReactJS, libraries as well as Bootstrap and Tailwind. I create quality experiences
                and I am always looking for new challenges to learn and grow professionally.
              </p>
              <div className="space-x-4">
                <Button asChild className="border-2 border-black hover:bg-white hover:text-black dark:border-white dark:hover:bg-gray-900 dark:hover:text-white">
                  <a href="#projects">View Projects</a>
                </Button>
                <Button asChild className="bg-white hover:bg-gray-900 hover:text-white text-black border-2 border-black dark:border-white dark:bg-gray-950 dark:text-white dark:hover:bg-white dark:hover:text-black">
                  <a href="#contact">Contact Me</a>
                </Button>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* PROYECTOS */}
        {isMobile ? (
          <section id="projects" className="py-16">
            <h2 className="text-2xl md:text-3xl font-bold my-6">My Projects</h2>
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
                    <CardDescription className="h-20">{project.description}</CardDescription>
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
                          <Globe className="mr-2 h-4 w-4" /> Live Demo
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
                <h2 className="text-2xl md:text-3xl font-bold my-6">My Projects</h2>
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
                              <Globe className="mr-2 h-4 w-4" /> Live Demo
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
            <h2 className="text-2xl md:text-3xl font-bold my-6">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <Card key={index} className="flex flex-col items-center p-4">
                  <CardHeader className="flex flex-col items-center">
                    <div className="w-12 h-12 mb-2 lg:hover:scale-150 transition-all duration-300">
                      <Image src={skill.icon} alt={skill.name} width={48} height={48} />
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
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Work Experience</h2>
            <div className="relative max-w-4xl mx-auto">
              {/* Vertical line - visible on larger screens */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200 hidden lg:block"></div>

              {[
                {
                  title: "Software Support",
                  company: "IntelliPOS",
                  period: "June 2024 - Present",
                  description: "Work as software support for the Aloha system for retail stores and restaurants.",
                },
                {
                  title: "IT Support Assistant",
                  company: "Golden Investment",
                  period: "October 2023 - November 2023",
                  description: "Help Desk support level 1 and level 2, software and hardware.",
                },
                {
                  title: "Help Desk Support Specialist",
                  company: "Canvia",
                  period: "September 2022 - September 2023",
                  description:
                    "Technical Support Specialist level 1 and level 2, configuration of Lan/Wan networks and printers.",
                },
              ].map((exp, index) => (
                <AnimatedSection key={index}>
                  <div
                    className={`mb-8 lg:mb-0 flex flex-col lg:flex-row items-center ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}
                  >
                    <div className={`w-full lg:w-1/2 mb-4 lg:mb-0 ${index % 2 === 0 ? "lg:pl-8" : "lg:pr-8"}`}>
                      <div className="bg-card p-6 rounded-lg shadow-md">
                        <h3 className="font-bold text-lg">{exp.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {exp.company} | {exp.period}
                        </p>
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
        © {new Date().getFullYear()} Jose Sanchez. All rights reserved. | Perú, Lima
      </footer>
    </div>
    </>
  )
}