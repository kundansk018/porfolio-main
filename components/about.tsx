import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Users, Target } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Experienced in both frontend and backend technologies",
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Proficient in SQL and NoSQL database design",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Strong communication and teamwork skills",
    },
    {
      icon: Target,
      title: "Problem Solving",
      description: "Analytical approach to complex technical challenges",
    },
  ]

  const values = [
    "Clean Code",
    "Best Practices",
    "Continuous Learning",
    "User Experience",
    "Team Collaboration",
    "Innovation",
    "Quality Assurance",
    "Agile Development",
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            About Me
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Passionate About <span className="gradient-text">Creating Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a dedicated Java Full Stack Developer who loves turning ideas into reality through code. My journey in
            software development has been driven by curiosity and continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <Card key={index} className="text-center p-6 card-hover">
              <CardContent className="pt-6">
                <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Started my programming journey during college and quickly fell in love with Java development. My{" "}
                <span className="font-semibold text-primary">7-month trainee program</span> at SoftCrowd Technologies
                gave me hands-on experience with real-world applications.
              </p>
              <p>
                Currently working as a <span className="font-semibold text-primary">Java Developer</span> at Ampcus Tech
                Pvt Ltd, where I've been contributing to enterprise applications and growing my skills in modern
                development practices for the past <span className="font-semibold text-primary">2 years 4 months</span>.
              </p>
              <p>
                With <span className="font-semibold text-primary">nearly 3 years</span> of combined experience, I
                believe in writing clean, maintainable code and staying updated with the latest technologies and
                industry best practices.
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Core Values</h4>
            <div className="flex flex-wrap gap-2">
              {values.map((value) => (
                <Badge
                  key={value}
                  variant="secondary"
                  className="hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {value}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
