import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, Briefcase, GraduationCap } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Java Developer",
      company: "Ampcus Tech Pvt Ltd",
      location: "Nashik, Maharashtra",
      period: "March 2023 - Present",
      duration: "2 years 4 months",
      type: "Full-time",
      description:
        "Developing and maintaining enterprise applications focused on procurement document processing and financial services. Working with microservices architecture and implementing modern development practices.",
      achievements: [
        "Developed services for parsing and processing various procurement-related documents",
        "Implemented quality check mechanisms to ensure error-free delivery",
        "Enabled clients to track updated versions of documents across financial services, ensuring timely and high-quality delivery",
        "Improved project efficiency by 10% through code optimization and regular maintenance",
        "Developed and enhanced RESTful APIs using Spring Boot to improve backend functionality",
        "Collaborated with cross-functional teams throughout the Software Development Life Cycle (SDLC)",
        "Participated in daily Scrum meetings, sharing progress and discussing blockers as part of Agile methodology",
      ],
      technologies: ["Java", "Spring Boot", "Spring Batch", "Microservices", "REST APIs", "OOP", "Java Collections"],
      icon: Briefcase,
    },
    {
      title: "Trainee",
      company: "SoftCrowd Technologies",
      location: "Nashik, Maharashtra",
      period: "January 2022 - July 2022",
      duration: "7 months",
      type: "Trainee",
      description:
        "Gained hands-on experience in full-stack development, working on real-world e-commerce and college web applications while learning industry best practices under senior developer mentorship.",
      achievements: [
        "Developed backend services and REST APIs using Spring Boot for e-commerce and college web applications",
        "Implemented full-stack CRUD operations using React.js (frontend), Java, Spring Boot (backend), and MySQL (database)",
        "Learned and applied key concepts of RESTful API design, data persistence, and API integration with frontend components",
        "Built responsive web applications with seamless frontend-backend integration",
        "Gained practical experience in database design and optimization using MySQL",
      ],
      technologies: ["Java", "Spring Boot", "React.js", "MySQL", "REST APIs", "HTML/CSS", "JavaScript"],
      icon: GraduationCap,
    },
  ]

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Professional Experience
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nearly 3 years of experience in full stack development, from trainee to Java developer.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <exp.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                        <span className="font-semibold text-primary text-lg">{exp.company}</span>
                        <Badge variant="secondary" className="w-fit">
                          {exp.type}
                        </Badge>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground mt-2">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <CalendarDays className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline">{exp.duration}</Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground">{exp.description}</p>

                <div>
                  <h4 className="font-semibold mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
