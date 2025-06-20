"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, Facebook, Instagram } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kundansavale018@gmail.com",
      href: "mailto:kundansavale018@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7721058453",
      href: "tel:+917721058453",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nashik, Maharashtra",
      href: "#",
    },
  ]

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
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Get In Touch
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      <a href={info.href} className="text-muted-foreground hover:text-primary transition-colors">
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Connect on Social</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className={`flex flex-col items-center gap-2 h-auto p-4 transition-colors ${social.color}`}
                      onClick={() => window.open(social.href, "_blank")}
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                      <span className="text-xs">{social.label}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="glass rounded-lg p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-custom"></div>
                Current Availability
              </h3>
              <p className="text-muted-foreground mb-4">
                I'm currently <span className="text-primary font-semibold">open to new opportunities</span> and
                freelance projects. Response time is typically within 24 hours.
              </p>
              <Badge variant="secondary">Available for Projects</Badge>
            </div>
          </div>

          <Card className="card-hover">
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
