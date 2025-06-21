"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Download, ChevronDown, MessageCircle, Facebook, Instagram, Phone } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleResumeDownload = () => {
    const link = document.createElement("a")
    link.href = "/resume/Java_React.pdf"
    link.download = "Kundan_Savale_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/kundansk018",
      label: "GitHub",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/kundan-savale-1bb72a19b",
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
    {
      icon: MessageCircle,
      href: "https://t.me/Kundan_savale",
      label: "Telegram",
      color: "hover:text-blue-500",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/kundan.savale.75",
      label: "Facebook",
      color: "hover:text-blue-700",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/savale_kundan?igsh=MXBteG83b2JqanZkeg==",
      label: "Instagram",
      color: "hover:text-pink-600",
    },
    {
      icon: Phone,
      href: "https://wa.me/qr/QM2R4JOG7SQYJ1",
      label: "WhatsApp",
      color: "hover:text-green-600",
    },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`space-y-8 ${isVisible ? "animate-slide-in" : "opacity-0"}`}>
            <Badge variant="secondary" className="w-fit">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse-custom"></span>
              Available for Opportunities
            </Badge>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm <span className="gradient-text">Kundan Savale</span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-muted-foreground">Java Full Stack Developer</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Passionate developer with <span className="font-semibold text-primary">nearly 3 years</span> of
                experience building scalable web applications using Java, Spring Boot, and React.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="group"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" className="group" onClick={handleResumeDownload}>
                <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Download Resume
              </Button>
            </div>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className={`transition-colors ${social.color}`}
                  onClick={() => window.open(social.href, "_blank")}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className={`flex justify-center lg:justify-end ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            <div className="relative group">
              <div className="w-80 h-80 rounded-2xl overflow-hidden card-hover">
                <Image
                  src={"profile.jpg"}
                  alt="Kundan Savale - Java Full Stack Developer"
                  width={320}
                  height={320}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Floating Badge - Top Right */}
              <div className="absolute -top-4 -right-4 glass rounded-xl p-3 animate-float">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  💼 Full Stack Dev
                </Badge>
              </div>

              {/* Floating Badge - Bottom Left */}
              <div
                className="absolute -bottom-4 -left-4 glass rounded-xl p-3 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-green-500/20">
                  🚀 3 Years Exp
                </Badge>
              </div>

              {/* Floating Badge - Middle Right */}
              <div
                className="absolute top-1/2 -right-6 transform -translate-y-1/2 glass rounded-xl p-2 animate-float"
                style={{ animationDelay: "2s" }}
              >
                <Badge variant="secondary" className="bg-blue-500/10 text-blue-600 border-blue-500/20 text-xs">
                  ☕ Java Expert
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
        onClick={scrollToAbout}
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
      </div>
    </section>
  )
}
