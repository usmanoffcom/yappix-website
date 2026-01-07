"use client"

import { Badge } from "@/components/ui/badge"

const techCategories = [
  {
    title: "Frontend",
    techs: ["Next.js", "React", "Vue.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    techs: ["Node.js", "Python", "Go", "Rust", "GraphQL", "REST API"],
  },
  {
    title: "Mobile",
    techs: ["React Native", "Flutter", "Swift", "Kotlin", "Expo"],
  },
  {
    title: "AI / ML",
    techs: ["OpenAI GPT", "Claude", "LangChain", "Pinecone", "TensorFlow", "PyTorch"],
  },
  {
    title: "Базы данных",
    techs: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Prisma", "Elasticsearch"],
  },
  {
    title: "DevOps & Cloud",
    techs: ["Docker", "Kubernetes", "AWS", "GCP", "Vercel", "Terraform"],
  },
]

export function TechStack() {
  return (
    <section id="tech" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Технологии
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Современный стек технологий
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Используем проверенные решения и новейшие технологии для создания быстрых, масштабируемых и безопасных
            продуктов
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <div key={index}
              
              
              
              
              className="p-6 rounded-2xl bg-card border border-border animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h3 className="text-lg font-semibold text-foreground mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.techs.map((tech, tIndex) => (
                  <Badge
                    key={tIndex}
                    variant="secondary"
                    className="bg-secondary hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
