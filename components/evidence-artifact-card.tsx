import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { EvidenceArtifact } from "@/lib/evidence-pages-content"

export function EvidenceArtifactCard({ artifact, locale }: { artifact: EvidenceArtifact; locale: "ru" | "en" }) {
  const isPublished = artifact.status === "published"
  const statusText = isPublished
    ? locale === "ru"
      ? "Опубликовано"
      : "Published"
    : locale === "ru"
      ? "В процессе"
      : "In progress"

  return (
    <Card className="bg-card border-border overflow-hidden">
      <div className="relative w-full aspect-[16/9] border-b border-border">
        <img
          src={artifact.image}
          alt={artifact.imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <CardHeader className="space-y-3">
        <div className="flex items-center gap-2 flex-wrap">
          <Badge variant={isPublished ? "default" : "secondary"}>{statusText}</Badge>
          <span className="text-xs text-muted-foreground">
            {locale === "ru" ? "Обновлено:" : "Updated:"} {artifact.updatedAt}
          </span>
        </div>
        <CardTitle className="text-xl">{artifact.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{artifact.description}</p>
        <ul className="space-y-2">
          {artifact.bullets.map((bullet) => (
            <li key={bullet} className="text-sm text-foreground/90">
              - {bullet}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

