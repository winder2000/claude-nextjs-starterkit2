# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

Next.js 16 (App Router) + TypeScript + TailwindCSS v4 + @base-ui/react 기반 스타터킷.
새 프로젝트의 베이스로 사용하기 위해 설계됨.

## 명령어

```bash
npm run dev      # 개발 서버 (Turbopack)
npm run build    # 프로덕션 빌드 — cross-env NODE_ENV=production 포함
npm run lint     # ESLint
```

테스트 스크립트 없음. 타입 검사: `node_modules/.bin/tsc --noEmit`

## 빌드 필수 주의사항

**`npm run build`는 반드시 `cross-env NODE_ENV=production`과 함께 실행해야 한다.**
Claude Code 환경에서는 `.claude/settings.json`에 `NODE_ENV=development`가 주입되어, 그대로 빌드하면 React 19 + Turbopack + RSC 조합에서 `TypeError: Cannot read properties of null (reading 'useContext')` 발생.
`package.json`의 `build` 스크립트에 이미 포함되어 있으므로 직접 `next build`를 호출하지 말 것.

## UI 컴포넌트 규칙

- **모든 UI 컴포넌트는 `@base-ui/react` 기반**으로 작성한다. Radix UI나 shadcn 기본 컴포넌트를 직접 import하지 말 것.
- **신규 컴포넌트는 `shadcn add`로만 추가**한다: `npx shadcn@latest add <컴포넌트명>`
  - `components.json` style: `base-nova`, 자동으로 `@base-ui/react` 기반 파일이 생성됨
- `asChild` prop 없음 — `render` prop 또는 `useRender` 훅을 사용한다 (base-ui 패턴).
- `cn` 유틸리티: `import { cn } from "cn"` (clsx/tailwind-merge 대신)

## TailwindCSS v4

- `tailwind.config.ts` 없음 — CSS import 방식: `@import "tailwindcss"`
- 개발 서버에서는 `@tailwindcss/turbopack`, 빌드에서는 `@tailwindcss/postcss` 자동 사용
- 커스텀 토큰은 `app/globals.css`의 `@theme inline` 블록에 추가

## 컴포넌트/페이지 패턴

- **Server Component 우선**: `"use client"`는 상태/이벤트가 필요한 경우에만 추가
- **ClientProviders 패턴**: providers, Header, Footer, Toaster는 모두 `components/providers/client-providers.tsx` 한 곳에서 관리
- 새 페이지: `app/<route>/page.tsx` (Server) + 필요 시 `app/<route>/<route>-client.tsx` (Client)

## 코딩 규칙

- 주석은 **한국어**로 작성
- Git 커밋 메시지는 **한국어**로 작성
- 변수명/함수명은 **영어** (코드 표준 준수)
- 타입은 `type` 키워드 우선 (`interface` 대신)

## Next.js 버전 주의

Next.js 16은 훈련 데이터와 다를 수 있다. 코드 작성 전 `node_modules/next/dist/docs/`에서 관련 가이드를 먼저 확인할 것. (`AGENTS.md` 참조)
