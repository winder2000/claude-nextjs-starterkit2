import Link from "next/link";
import { Zap, Shield, Layers, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Zap,
    title: "빠른 성능",
    description:
      "Next.js 16 App Router와 React Server Components로 최적화된 성능을 제공합니다.",
  },
  {
    icon: Shield,
    title: "타입 안전성",
    description:
      "TypeScript + Zod로 런타임까지 안전한 타입을 보장합니다.",
  },
  {
    icon: Layers,
    title: "풍부한 UI",
    description:
      "ShadcnUI + TailwindCSS v4로 일관되고 접근성 높은 컴포넌트를 사용할 수 있습니다.",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero 섹션 */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-24 gap-6">
        <Badge variant="secondary">Next.js 16 · TypeScript · TailwindCSS v4</Badge>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight max-w-2xl">
          모던 웹 개발을 위한
          <br />
          <span className="text-muted-foreground">스타터킷</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl">
          검증된 라이브러리와 ShadcnUI로 구성된 프로덕션 레디 스타터킷입니다.
          바퀴를 재발명하지 말고 바로 시작하세요.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 h-9 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/80 transition-colors"
          >
            대시보드 보기 <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center h-9 px-4 rounded-lg border border-border bg-background text-sm font-medium hover:bg-muted transition-colors"
          >
            기술 스택 확인
          </Link>
        </div>
      </section>

      {/* Feature Cards 섹션 */}
      <section className="px-4 py-16 max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-2">핵심 기능</h2>
          <p className="text-muted-foreground">
            이 스타터킷에 포함된 주요 기술과 기능을 확인하세요.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <feature.icon className="h-8 w-8 mb-2 text-primary" />
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="px-4 py-16 bg-muted/40">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="text-2xl font-semibold">지금 바로 시작하세요</h2>
          <p className="text-muted-foreground">
            이 스타터킷을 포크하거나 클론해서 여러분의 프로젝트를 시작하세요.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 h-9 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/80 transition-colors"
          >
            더 알아보기 <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
