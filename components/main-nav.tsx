import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/habilidades", label: "Habilidades" },
  { href: "/experiencia", label: "Experiencia Laboral" },
  { href: "/contacto", label: "Contacto" },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center py-4">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`text-sm font-medium transition-colors hover:text-primary ${
            pathname === item.href ? "text-primary" : "text-muted-foreground"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}

