import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const techStack = [
  {
    category: "프레임워크",
    items: ["Next.js 16", "React 19", "TypeScript"],
  },
  {
    category: "스타일링",
    items: ["TailwindCSS v4", "ShadcnUI base-nova", "tw-animate-css"],
  },
  {
    category: "상태 관리",
    items: ["TanStack Query", "React Hook Form", "Zod"],
  },
  {
    category: "유틸리티",
    items: ["date-fns", "lucide-react", "next-themes", "sonner"],
  },
];

export const metadata = {
  title: "소개 — Next Startkit",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-3">스타터킷 소개</h1>
        <p className="text-muted-foreground text-lg">
          이 스타터킷은 Next.js 기반 프로젝트를 즉시 시작할 수 있도록 구성된
          견고한 기반을 제공합니다. 바퀴를 재발명하지 않고 검증된 라이브러리를
          조합했습니다.
        </p>
      </div>

      <Separator className="my-8" />

      <section>
        <h2 className="text-xl font-semibold mb-6">기술 스택</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {techStack.map((stack) => (
            <Card key={stack.category}>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">{stack.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item) => (
                    <Badge key={item} variant="secondary">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-8" />

      <section>
        <h2 className="text-xl font-semibold mb-4">설계 원칙</h2>
        <div className="space-y-4 text-muted-foreground">
          <div>
            <h3 className="text-foreground font-medium mb-1">바퀴를 재발명하지 말라</h3>
            <p>
              직접 구현하는 코드는 최소화하고, 검증된 라이브러리와 ShadcnUI
              컴포넌트를 최대한 활용합니다.
            </p>
          </div>
          <div>
            <h3 className="text-foreground font-medium mb-1">타입 안전성 우선</h3>
            <p>
              TypeScript와 Zod를 활용해 컴파일 타임부터 런타임까지 안전한 타입을
              보장합니다.
            </p>
          </div>
          <div>
            <h3 className="text-foreground font-medium mb-1">성능과 DX 균형</h3>
            <p>
              App Router와 Server Components로 성능을 높이면서 개발 경험도
              희생하지 않습니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
