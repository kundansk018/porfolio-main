"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-featured online shopping platform with user authentication, product management, shopping cart, and payment integration.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "Stripe API", "Docker"],
      features: [
        "User registration and authentication with JWT",
        "Product catalog with search and filtering",
        "Shopping cart and checkout functionality",
        "Payment processing with Stripe integration",
        "Admin dashboard for inventory management",
      ],
      date: "2023",
      status: "Completed",
      category: "Full Stack",
    },
    {
      title: "Task Management System",
      description:
        "Collaborative project management tool with real-time updates, team collaboration features, and comprehensive reporting.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Java", "Spring Boot", "React", "MySQL", "WebSocket", "AWS"],
      features: [
        "Real-time task updates using WebSocket",
        "Team collaboration and assignment features",
        "Project timeline and milestone tracking",
        "File upload and document management",
        "Advanced reporting and analytics",
      ],
      date: "2023",
      status: "Completed",
      category: "Full Stack",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/10 text-green-600"
      case "In Progress":
        return "bg-blue-500/10 text-blue-600"
      default:
        return "bg-gray-500/10 text-gray-600"
    }
  }

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Featured Projects
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent projects demonstrating my skills in full-stack development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden card-hover group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className={`${getStatusColor(project.status)}`}>{project.status}</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 text-white text-sm glass rounded-full px-3 py-1">
                    <Calendar className="w-3 h-3" />
                    {project.date}
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                <p className="text-muted-foreground">{project.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button size="sm" className="flex-1 group">
                    <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 group">
                    <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Source Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">More Projects Coming Soon!</h3>
            <p className="text-muted-foreground mb-6">
              I'm constantly working on new projects and learning new technologies. Check back soon for more exciting
              developments!
            </p>
            <Button
              variant="outline"
              onClick={() => window.open("https://github.com/kundansk018", "_blank")}
              className="group"
            >
              <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              View All on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
