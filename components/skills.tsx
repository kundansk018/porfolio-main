"use client"

import { useEffect, useState, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Settings } from "lucide-react"
import Image from "next/image"

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const skillCategories = [
    {
      title: "Backend Development",
      icon: Code,
      color: "from-blue-500/20 to-indigo-500/20",
      skills: [
        { name: "Java", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Spring Boot", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        {
          name: "Spring Security",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        },
        { name: "RESTful APIs", image: "https://img.icons8.com/color/96/api-settings.png" },
        { name: "Microservices", image: "https://img.icons8.com/color/96/microservices.png" },
        {
          name: "JPA/Hibernate",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg",
        },
      ],
    },
    {
      title: "Frontend Development",
      icon: Globe,
      color: "from-cyan-500/20 to-blue-500/20",
      skills: [
        { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        {
          name: "JavaScript",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "TypeScript",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        { name: "HTML5", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        {
          name: "Tailwind CSS",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        },
        {
          name: "Bootstrap",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        },
      ],
    },
    {
      title: "Database & Storage",
      icon: Database,
      color: "from-green-500/20 to-emerald-500/20",
      skills: [
        {
          name: "PostgreSQL",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        { name: "MySQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Redis", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
        { name: "SQL", image: "https://img.icons8.com/color/96/sql.png" },
      ],
    },
    {
      title: "Tools & DevOps",
      icon: Settings,
      color: "from-purple-500/20 to-pink-500/20",
      skills: [
        { name: "Git", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Docker", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        {
          name: "AWS",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
        },
        { name: "Maven", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg" },
        { name: "Jenkins", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
        { name: "Postman", image: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
      ],
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-gradient-to-r from-primary/10 to-blue-500/10 border-primary/20">
            <Code className="w-4 h-4 mr-2" />
            Skills & Technologies
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to build modern, scalable applications.
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`${isVisible ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <Card className="card-hover border-2 border-transparent hover:border-primary/20 transition-all duration-300">
                <CardHeader className="text-center pb-6">
                  <div
                    className={`mx-auto w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-4`}
                  >
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-7 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill.name}
                        className="group flex flex-col items-center p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all duration-300 hover:scale-105 cursor-pointer border border-transparent hover:border-primary/20"
                      >
                        <div className="w-16 h-16 mb-3 rounded-lg overflow-hidden bg-white/80 dark:bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 p-2">
                          <Image
                            src={skill.image || "/placeholder.svg"}
                            alt={`${skill.name} logo`}
                            width={48}
                            height={48}
                            className="object-contain w-full h-full"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement
                              target.src = "/placeholder.svg?height=48&width=48"
                            }}
                          />
                        </div>
                        <span className="text-sm font-medium text-center group-hover:text-primary transition-colors leading-tight">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <Card className="glass border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-3 text-xl">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-lg">🚀</span>
                </div>
                Currently Learning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    name: "Next.js",
                    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
                  },
                  {
                    name: "Kubernetes",
                    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
                  },
                  {
                    name: "GraphQL",
                    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
                  },
                  { name: "System Design", image: "https://img.icons8.com/color/96/system-information.png" },
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group cursor-pointer border border-transparent hover:border-primary/20"
                  >
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-white/80 dark:bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 p-2">
                      <Image
                        src={skill.image || "/placeholder.svg"}
                        alt={`${skill.name} logo`}
                        width={40}
                        height={40}
                        className="object-contain w-full h-full"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = "/placeholder.svg?height=40&width=40"
                        }}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm group-hover:text-primary transition-colors">{skill.name}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-muted-foreground">In Progress</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
