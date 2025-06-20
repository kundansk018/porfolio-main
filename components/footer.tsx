"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Code2, Github, Linkedin, Mail, ArrowUp, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/kundansk018",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/kundan-savale-1bb72a19b",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:kundansavale018@gmail.com",
      label: "Email",
    },
  ]

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold gradient-text">Kundan Savale</span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Java Full Stack Developer passionate about creating scalable web applications and contributing to
              innovative projects.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button key={index} variant="ghost" size="icon" asChild className="hover:text-primary">
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>kundansavale07@gmail.com</p>
              <p>+91 7721058453</p>
              <p>Nashik, Maharashtra</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>© {currentYear} Kundan Savale. Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>using Next.js & Tailwind CSS</span>
          </div>
          <p className="text-muted-foreground text-sm mt-2 sm:mt-0">Built for performance and accessibility</p>
        </div>
      </div>

      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 rounded-full shadow-lg z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
      )}
    </footer>
  )
}
