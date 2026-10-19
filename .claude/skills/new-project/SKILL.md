---
name: new-project
description: 이 스타터킷을 베이스로 새 프로젝트를 시작할 때 실행하는 체크리스트. 프로젝트 메타 수정, 예시 페이지 정리, 초기 구조 확인을 순서대로 안내한다.
disable-model-invocation: true
---

사용자가 `/new-project $ARGUMENTS` 를 실행했다. `$ARGUMENTS`에 새 프로젝트 이름이 있으면 사용하고, 없으면 먼저 물어봐라.

## 수행 순서

### 1단계 — 프로젝트 메타 수정
다음 파일들을 수정한다:

- `package.json` → `name` 필드를 새 프로젝트 이름으로 변경
- `app/layout.tsx` → `metadata.title`, `metadata.description`을 새 프로젝트에 맞게 수정
- `components/layout/header.tsx` → 로고 텍스트("Next Startkit") 변경
- `components/layout/footer.tsx` → 저작권 텍스트 변경
- `README.md` → 새 프로젝트 설명으로 교체

### 2단계 — 예시 페이지 정리
다음 중 유지할 것과 삭제할 것을 사용자에게 확인한다:

- `app/about/` — 기술 스택 소개 페이지 (삭제 또는 대체)
- `app/dashboard/` — 컴포넌트 예시 대시보드 (삭제 또는 유지)
- `app/page.tsx` — 홈 Hero 섹션 (새 프로젝트 내용으로 교체)

사용자 답변에 따라 파일을 삭제하거나 빈 껍데기로 교체한다.

### 3단계 — 네비게이션 정리
`components/layout/header.tsx`의 `navLinks` 배열을 실제 페이지 구조에 맞게 수정한다.

### 4단계 — 환경 변수 파일 준비
프로젝트에 필요한 환경 변수가 있다면:
- `.env.local.example` 파일 생성 (변수 목록만, 값 없이)
- `.gitignore`에 `.env.local` 추가 여부 확인

### 5단계 — 완료 확인
- `node_modules/.bin/tsc --noEmit` 실행하여 타입 에러 없는지 확인
- 준비된 파일 목록과 다음 작업 제안을 한국어로 요약
