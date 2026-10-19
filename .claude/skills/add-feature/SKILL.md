---
name: add-feature
description: 새 기능(페이지, 폼, 데이터 패칭)을 추가할 때 이 스타터킷의 패턴에 맞게 구현을 안내한다. Server Component 우선, @base-ui/react 컴포넌트, react-hook-form + zod 폼 패턴을 따른다.
---

사용자가 `/add-feature $ARGUMENTS` 를 실행했다. `$ARGUMENTS`에 기능 설명이 있으면 그것을 기반으로, 없으면 어떤 기능을 추가할지 먼저 물어봐라.

## 기능 추가 패턴

### 페이지 구조 결정
기능의 성격에 따라 구조를 선택한다:

**A. 데이터 표시만 (정적/서버 패칭)**
```
app/<route>/page.tsx   ← Server Component, async 가능
```

**B. 상호작용 있음 (클릭, 상태, 이벤트)**
```
app/<route>/page.tsx          ← Server Component (메타데이터, 초기 데이터)
app/<route>/<route>-client.tsx ← "use client" Client Component
```

**C. 폼이 포함됨**
```
app/<route>/page.tsx
app/<route>/<route>-client.tsx  ← react-hook-form + zod
```

### 폼 구현 패턴 (react-hook-form + zod)
```tsx
"use client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const schema = z.object({ ... })
type FormValues = z.infer<typeof schema>

export function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })
  // ...
}
```

### 서버 데이터 패칭 패턴 (@tanstack/react-query)
클라이언트 사이드 패칭이 필요하면 QueryProvider가 이미 설정되어 있다:
```tsx
"use client"
import { useQuery } from "@tanstack/react-query"

export function MyList() {
  const { data, isLoading } = useQuery({
    queryKey: ["items"],
    queryFn: () => fetch("/api/items").then(r => r.json()),
  })
  if (isLoading) return <Skeleton ... />
  // ...
}
```

### 신규 UI 컴포넌트 필요 시
직접 만들지 말고 shadcn add를 사용한다:
```bash
npx shadcn@latest add <컴포넌트명>
```
기존에 없는 컴포넌트라면 추가 전에 사용자에게 확인한다.

### Toast 알림
```tsx
import { toast } from "sonner"
toast.success("완료됐습니다")
toast.error("오류가 발생했습니다")
```

## 구현 후 확인
1. `node_modules/.bin/tsc --noEmit` — 타입 에러 확인
2. 새 페이지가 있으면 `components/layout/header.tsx`의 `navLinks`에 추가 여부 사용자에게 확인
