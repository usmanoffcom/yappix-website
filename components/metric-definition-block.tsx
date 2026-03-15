import { Card, CardContent } from "@/components/ui/card"
import type { MetricDefinition } from "@/lib/evidence-pages-content"

export function MetricDefinitionBlock({
  metric,
  locale,
}: {
  metric: MetricDefinition
  locale: "ru" | "en"
}) {
  return (
    <Card className="bg-card border-border">
      <CardContent className="pt-6 space-y-3">
        <h3 className="text-lg font-semibold text-foreground">{metric.metric}</h3>
        <p className="text-sm text-muted-foreground">{metric.definition}</p>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          <p>
            <span className="font-medium text-foreground">{locale === "ru" ? "Источник:" : "Source:"}</span>{" "}
            <span className="text-muted-foreground">{metric.source}</span>
          </p>
          <p>
            <span className="font-medium text-foreground">{locale === "ru" ? "Период:" : "Period:"}</span>{" "}
            <span className="text-muted-foreground">{metric.period}</span>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

