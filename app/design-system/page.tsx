import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowRight, Check, Star, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Дизайн-система — YappiX",
  description: "Документация дизайн-системы YappiX: цвета, типографика, компоненты, отступы.",
}

export default function DesignSystemPage() {
  return (
    <>
      <Header />
      <main className="pt-20 sm:pt-24">
        {/* Hero */}
        <section className="section-padding-sm border-b border-border">
          <div className="container mx-auto">
            <Badge variant="outline" className="mb-4">
              Design System
            </Badge>
            <h1 className="text-display text-foreground mb-4 sm:mb-6">Дизайн-система</h1>
            <p className="text-body-lg max-w-2xl">
              Единый источник истины для всех интерфейсов YappiX. Цвета, типографика, компоненты и паттерны.
            </p>
          </div>
        </section>

        {/* Colors */}
        <section className="section-padding border-b border-border">
          <div className="container mx-auto">
            <h2 className="text-headline text-foreground mb-8 sm:mb-12">Цветовая палитра</h2>

            <div className="space-y-8 sm:space-y-12">
              {/* Primary */}
              <div>
                <h3 className="text-title text-foreground mb-4 sm:mb-6">Primary</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div>
                    <div className="h-20 sm:h-24 rounded-lg bg-primary mb-3" />
                    <p className="text-sm font-medium text-foreground">Primary</p>
                    <p className="text-caption font-mono">oklch(0.6 0.22 340)</p>
                  </div>
                  <div>
                    <div className="h-20 sm:h-24 rounded-lg bg-primary/80 mb-3" />
                    <p className="text-sm font-medium text-foreground">Primary/80</p>
                    <p className="text-caption font-mono">80% opacity</p>
                  </div>
                  <div>
                    <div className="h-20 sm:h-24 rounded-lg bg-primary/50 mb-3" />
                    <p className="text-sm font-medium text-foreground">Primary/50</p>
                    <p className="text-caption font-mono">50% opacity</p>
                  </div>
                  <div>
                    <div className="h-20 sm:h-24 rounded-lg bg-primary/20 mb-3" />
                    <p className="text-sm font-medium text-foreground">Primary/20</p>
                    <p className="text-caption font-mono">20% opacity</p>
                  </div>
                </div>
              </div>

              {/* Neutrals */}
              <div>
                <h3 className="text-title text-foreground mb-4 sm:mb-6">Neutrals</h3>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                  <div>
                    <div className="h-20 sm:h-24 rounded-lg bg-background border border-border mb-3" />
                    <p className="text-sm font-medium text-foreground">Background</p>
                    <p className="text-caption font-mono">oklch(0.098 0.005 285)</p>
                  </div>
                  <div>
                    <div className="h-20 sm:h-24 rounded-lg bg-card border border-border mb-3" />
                    <p className="text-sm font-medium text-foreground">Card</p>
                    <p className="text-caption font-mono">oklch(0.13 0.005 285)</p>
                  </div>
                  <div>
                    <div className="h-20 sm:h-24 rounded-lg bg-secondary mb-3" />
                    <p className="text-sm font-medium text-foreground">Secondary</p>
                    <p className="text-caption font-mono">oklch(0.18 0.005 285)</p>
                  </div>
                  <div>
                    <div className="h-20 sm:h-24 rounded-lg bg-muted mb-3" />
                    <p className="text-sm font-medium text-foreground">Muted</p>
                    <p className="text-caption font-mono">oklch(0.2 0.005 285)</p>
                  </div>
                  <div>
                    <div className="h-20 sm:h-24 rounded-lg bg-border mb-3" />
                    <p className="text-sm font-medium text-foreground">Border</p>
                    <p className="text-caption font-mono">oklch(0.25 0.01 285)</p>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div>
                <h3 className="text-title text-foreground mb-4 sm:mb-6">Text Colors</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="p-4 sm:p-6 bg-card rounded-lg border border-border">
                    <p className="text-lg font-medium text-foreground mb-2">Foreground</p>
                    <p className="text-caption font-mono">oklch(0.98 0 0)</p>
                  </div>
                  <div className="p-4 sm:p-6 bg-card rounded-lg border border-border">
                    <p className="text-lg font-medium text-muted-foreground mb-2">Muted Foreground</p>
                    <p className="text-caption font-mono">oklch(0.65 0 0)</p>
                  </div>
                  <div className="p-4 sm:p-6 bg-card rounded-lg border border-border">
                    <p className="text-lg font-medium text-primary mb-2">Primary</p>
                    <p className="text-caption font-mono">oklch(0.6 0.22 340)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="section-padding border-b border-border">
          <div className="container mx-auto">
            <h2 className="text-headline text-foreground mb-8 sm:mb-12">Типографика</h2>

            <div className="mb-8 sm:mb-12 p-4 sm:p-6 bg-card rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-2">Font Family</p>
              <p className="text-2xl sm:text-3xl font-semibold text-foreground">Onest</p>
              <p className="text-caption mt-2 font-mono">--font-sans: &quot;Onest&quot;, system-ui, sans-serif</p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="p-4 sm:p-6 bg-card rounded-lg border border-border">
                <p className="text-caption mb-3">.text-display</p>
                <p className="text-display text-foreground">Display Text</p>
                <p className="text-caption mt-3 font-mono">
                  text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl / font-bold / tracking-tighter
                </p>
              </div>

              <div className="p-4 sm:p-6 bg-card rounded-lg border border-border">
                <p className="text-caption mb-3">.text-headline</p>
                <p className="text-headline text-foreground">Headline Text</p>
                <p className="text-caption mt-3 font-mono">
                  text-2xl sm:text-3xl md:text-4xl lg:text-5xl / font-bold / tracking-tight
                </p>
              </div>

              <div className="p-4 sm:p-6 bg-card rounded-lg border border-border">
                <p className="text-caption mb-3">.text-title</p>
                <p className="text-title text-foreground">Title Text</p>
                <p className="text-caption mt-3 font-mono">
                  text-xl sm:text-2xl md:text-3xl / font-semibold / tracking-tight
                </p>
              </div>

              <div className="p-4 sm:p-6 bg-card rounded-lg border border-border">
                <p className="text-caption mb-3">.text-subtitle</p>
                <p className="text-subtitle text-foreground">Subtitle Text</p>
                <p className="text-caption mt-3 font-mono">text-lg sm:text-xl / font-medium</p>
              </div>

              <div className="p-4 sm:p-6 bg-card rounded-lg border border-border">
                <p className="text-caption mb-3">.text-body-lg</p>
                <p className="text-body-lg">
                  Large body text for introductions and important paragraphs. Uses muted foreground color.
                </p>
                <p className="text-caption mt-3 font-mono">text-base sm:text-lg md:text-xl / text-muted-foreground</p>
              </div>

              <div className="p-4 sm:p-6 bg-card rounded-lg border border-border">
                <p className="text-caption mb-3">.text-body</p>
                <p className="text-body">Regular body text for general content. Comfortable reading size.</p>
                <p className="text-caption mt-3 font-mono">text-sm sm:text-base / text-muted-foreground</p>
              </div>

              <div className="p-4 sm:p-6 bg-card rounded-lg border border-border">
                <p className="text-caption mb-3">.text-caption</p>
                <p className="text-caption">Caption text for labels, metadata, and secondary information.</p>
                <p className="text-caption mt-3 font-mono">text-xs sm:text-sm / text-muted-foreground</p>
              </div>
            </div>
          </div>
        </section>

        {/* Spacing */}
        <section className="section-padding border-b border-border">
          <div className="container mx-auto">
            <h2 className="text-headline text-foreground mb-8 sm:mb-12">Отступы</h2>

            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>.section-padding</CardTitle>
                  <CardDescription>Стандартные отступы для секций</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-caption font-mono">py-16 sm:py-20 md:py-24 lg:py-32</p>
                  <div className="mt-4 h-32 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-caption">Пример секции</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>.section-padding-sm</CardTitle>
                  <CardDescription>Компактные отступы для секций</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-caption font-mono">py-12 sm:py-16 md:py-20</p>
                  <div className="mt-4 h-24 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-caption">Компактная секция</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>.container</CardTitle>
                  <CardDescription>Контейнер с адаптивными отступами</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-caption font-mono">px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Gap Scale</CardTitle>
                  <CardDescription>Масштаб промежутков между элементами</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-caption font-mono">
                    <p>gap-4 sm:gap-5 — карточки</p>
                    <p>gap-6 sm:gap-8 — секции</p>
                    <p>gap-2 sm:gap-3 — списки</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Components */}
        <section className="section-padding border-b border-border">
          <div className="container mx-auto">
            <h2 className="text-headline text-foreground mb-8 sm:mb-12">Компоненты</h2>

            <div className="space-y-8 sm:space-y-12">
              {/* Buttons */}
              <div>
                <h3 className="text-title text-foreground mb-4 sm:mb-6">Buttons</h3>
                <div className="p-6 sm:p-8 bg-card rounded-lg border border-border">
                  <div className="flex flex-wrap gap-3 sm:gap-4 mb-6">
                    <Button>Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="destructive">Destructive</Button>
                  </div>
                  <div className="flex flex-wrap gap-3 sm:gap-4 mb-6">
                    <Button size="sm">Small</Button>
                    <Button size="default">Default</Button>
                    <Button size="lg">Large</Button>
                  </div>
                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    <Button>
                      С иконкой
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button variant="outline">
                      <Zap className="w-4 h-4 mr-2" />
                      Иконка слева
                    </Button>
                  </div>
                </div>
              </div>

              {/* Badges */}
              <div>
                <h3 className="text-title text-foreground mb-4 sm:mb-6">Badges</h3>
                <div className="p-6 sm:p-8 bg-card rounded-lg border border-border">
                  <div className="flex flex-wrap gap-3 sm:gap-4">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                    <Badge className="bg-primary/10 text-primary border-primary/20">Custom</Badge>
                  </div>
                </div>
              </div>

              {/* Cards */}
              <div>
                <h3 className="text-title text-foreground mb-4 sm:mb-6">Cards</h3>
                <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
                  <Card className="bg-card border-border">
                    <CardHeader>
                      <CardTitle>Default Card</CardTitle>
                      <CardDescription>Описание карточки</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-body">Контент карточки</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-card border-primary/50">
                    <CardHeader>
                      <CardTitle>Highlighted Card</CardTitle>
                      <CardDescription>С акцентной границей</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-body">Контент карточки</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-primary/5 border-primary/20">
                    <CardHeader>
                      <CardTitle>Accent Card</CardTitle>
                      <CardDescription>С фоном primary</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-body">Контент карточки</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Inputs */}
              <div>
                <h3 className="text-title text-foreground mb-4 sm:mb-6">Inputs</h3>
                <div className="p-6 sm:p-8 bg-card rounded-lg border border-border">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Default Input</label>
                      <Input placeholder="Введите текст..." />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Disabled Input</label>
                      <Input placeholder="Недоступно" disabled />
                    </div>
                  </div>
                </div>
              </div>

              {/* Lists */}
              <div>
                <h3 className="text-title text-foreground mb-4 sm:mb-6">Lists</h3>
                <div className="p-6 sm:p-8 bg-card rounded-lg border border-border">
                  <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <p className="text-sm font-medium text-foreground mb-4">Check List</p>
                      <ul className="space-y-2.5">
                        <li className="flex items-center gap-3">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-body">Первый пункт</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-body">Второй пункт</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-body">Третий пункт</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-4">Star List</p>
                      <ul className="space-y-2.5">
                        <li className="flex items-center gap-3">
                          <Star className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-body">Первый пункт</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <Star className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-body">Второй пункт</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <Star className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-body">Третий пункт</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Breakpoints */}
        <section className="section-padding">
          <div className="container mx-auto">
            <h2 className="text-headline text-foreground mb-8 sm:mb-12">Брейкпоинты</h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-medium text-foreground">Prefix</th>
                    <th className="text-left py-3 pr-4 font-medium text-foreground">Min-width</th>
                    <th className="text-left py-3 font-medium text-foreground">Устройства</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4 font-mono text-foreground">-</td>
                    <td className="py-3 pr-4">0px</td>
                    <td className="py-3">Mobile (default)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4 font-mono text-foreground">sm:</td>
                    <td className="py-3 pr-4">640px</td>
                    <td className="py-3">Large phones, small tablets</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4 font-mono text-foreground">md:</td>
                    <td className="py-3 pr-4">768px</td>
                    <td className="py-3">Tablets</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4 font-mono text-foreground">lg:</td>
                    <td className="py-3 pr-4">1024px</td>
                    <td className="py-3">Laptops, small desktops</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 pr-4 font-mono text-foreground">xl:</td>
                    <td className="py-3 pr-4">1280px</td>
                    <td className="py-3">Desktops</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-mono text-foreground">2xl:</td>
                    <td className="py-3 pr-4">1536px</td>
                    <td className="py-3">Large desktops</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
