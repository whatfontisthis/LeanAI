# 📚 LeanAI 프로젝트 가이드

이 문서는 프로젝트의 기술 스택과 폴더 구조를 초보자가 이해하기 쉽게 설명합니다.

---

## 🛠️ 기술 스택 (Tech Stack)

### 핵심 프레임워크

#### 1. **Next.js 15** (넥스트 제이에스)
- **역할**: React 기반 웹 애플리케이션 프레임워크
- **왜 사용하나요?**
  - 서버 사이드 렌더링(SSR) 지원으로 빠른 페이지 로딩
  - 자동 코드 분할로 성능 최적화
  - 파일 기반 라우팅 (폴더 구조가 곧 URL 경로)
- **예시**: `app/page.tsx` 파일이 자동으로 홈페이지(`/`)가 됩니다

#### 2. **React 19** (리액트)
- **역할**: 사용자 인터페이스(UI)를 만들기 위한 JavaScript 라이브러리
- **핵심 개념**: 컴포넌트 기반 개발
  - 작은 부품(컴포넌트)들을 조립해서 웹사이트를 만듭니다
  - 예: 버튼, 카드, 네비게이션 바 등이 각각 컴포넌트입니다

#### 3. **TypeScript** (타입스크립트)
- **역할**: JavaScript에 타입(자료형)을 추가한 언어
- **왜 사용하나요?**
  - 코드 작성 중 오류를 미리 발견할 수 있습니다
  - 코드 자동완성이 더 정확해집니다
  - 큰 프로젝트에서 유지보수가 쉬워집니다
- **확장자**: `.ts` 또는 `.tsx` (React 컴포넌트는 `.tsx`)

### 스타일링

#### 4. **Tailwind CSS v4** (테일윈드)
- **역할**: 유틸리티 기반 CSS 프레임워크
- **특징**:
  - HTML 클래스에 직접 스타일을 작성합니다
  - 예: `<div className="bg-blue-500 text-white p-4">` 
    - `bg-blue-500`: 파란 배경
    - `text-white`: 흰색 텍스트
    - `p-4`: 패딩 4단위
- **장점**: 빠르게 스타일링 가능, 일관된 디자인

#### 5. **shadcn/ui**
- **역할**: 재사용 가능한 UI 컴포넌트 라이브러리
- **위치**: `components/ui/` 폴더
- **포함된 컴포넌트**:
  - `button.tsx`: 버튼
  - `card.tsx`: 카드
  - `accordion.tsx`: 아코디언 (접었다 펼쳤다 하는 메뉴)
  - `badge.tsx`: 뱃지 (작은 라벨)
  - 등등...

### 애니메이션

#### 6. **GSAP** (GreenSock Animation Platform)
- **역할**: 고급 애니메이션 라이브러리
- **사용처**: 
  - 스크롤 애니메이션
  - 로딩 화면 애니메이션
  - 요소가 화면에 나타날 때 페이드인 효과
- **위치**: `lib/gsap.ts`에서 설정

### 아이콘

#### 7. **Lucide React**
- **역할**: 아이콘 라이브러리
- **사용법**: `<Search />`, `<User />` 같은 컴포넌트로 아이콘 표시

### 유틸리티 라이브러리

#### 8. **Radix UI**
- **역할**: 접근성(Accessibility)이 좋은 UI 프리미티브
- **사용처**: shadcn/ui의 기반이 되는 라이브러리

#### 9. **class-variance-authority (CVA)**
- **역할**: 컴포넌트의 다양한 스타일 변형을 관리
- **예시**: 버튼의 크기(small, medium, large)나 색상 변형 관리

#### 10. **clsx & tailwind-merge**
- **역할**: CSS 클래스를 동적으로 조합하는 유틸리티
- **위치**: `lib/utils.ts`의 `cn()` 함수

---

## 📁 폴더 구조 설명

```
LeanAI/
├── app/                    # Next.js App Router (페이지와 레이아웃)
│   ├── globals.css        # 전역 CSS 스타일
│   ├── layout.tsx         # 전체 페이지 레이아웃 (공통 헤더/푸터 등)
│   └── page.tsx           # 홈페이지 (/) - 메인 페이지
│
├── components/            # React 컴포넌트들
│   ├── ui/               # 재사용 가능한 UI 컴포넌트 (shadcn/ui)
│   │   ├── button.tsx    # 버튼 컴포넌트
│   │   ├── card.tsx      # 카드 컴포넌트
│   │   └── ...           # 기타 UI 컴포넌트들
│   │
│   ├── navbar.tsx        # 상단 네비게이션 바
│   ├── hero-section.tsx  # 히어로 섹션 (메인 배너)
│   ├── features-section.tsx  # 기능 소개 섹션
│   ├── pricing-section.tsx   # 가격표 섹션
│   ├── faq-section.tsx       # 자주 묻는 질문 섹션
│   └── ...               # 기타 페이지 섹션 컴포넌트들
│
├── lib/                   # 유틸리티 함수와 설정
│   ├── utils.ts          # 공통 유틸리티 함수 (cn 함수 등)
│   └── gsap.ts           # GSAP 애니메이션 설정
│
├── data/                  # 데이터 파일
│   └── content.ts        # 페이지에 표시할 텍스트 데이터
│
├── public/                # 정적 파일 (이미지, 아이콘 등)
│   └── avatars/          # 아바타 이미지들
│
├── package.json          # 프로젝트 의존성과 스크립트
├── tsconfig.json         # TypeScript 설정
├── postcss.config.mjs    # PostCSS 설정 (Tailwind CSS용)
├── eslint.config.mjs    # ESLint 설정 (코드 검사 도구)
└── README.md             # 프로젝트 설명서
```

---

## 📂 각 폴더 상세 설명

### 1. `app/` 폴더
**Next.js App Router의 핵심 폴더**

- **`page.tsx`**: 실제 페이지 내용
  - 이 파일이 홈페이지(`/`)를 렌더링합니다
  - 다른 컴포넌트들을 조합해서 페이지를 만듭니다

- **`layout.tsx`**: 모든 페이지에 공통으로 적용되는 레이아웃
  - HTML의 `<html>`, `<body>` 태그 역할
  - 전역 스타일, 폰트 등을 설정합니다

- **`globals.css`**: 전역 CSS 스타일
  - 모든 페이지에 적용되는 기본 스타일
  - Tailwind CSS 설정도 여기에 포함됩니다

### 2. `components/` 폴더
**재사용 가능한 React 컴포넌트들**

#### `components/ui/` (기본 UI 컴포넌트)
- 버튼, 카드, 배지 등 가장 기본이 되는 컴포넌트
- 다른 컴포넌트에서 재사용됩니다
- shadcn/ui 라이브러리에서 가져온 컴포넌트들

#### 페이지 섹션 컴포넌트들
- **`navbar.tsx`**: 상단 네비게이션 바
- **`hero-section.tsx`**: 메인 배너 영역 (첫 화면)
- **`features-section.tsx`**: 서비스 기능 소개
- **`pricing-section.tsx`**: 가격표
- **`faq-section.tsx`**: 자주 묻는 질문
- **`footer.tsx`**: 하단 푸터

**컴포넌트 사용 예시:**
```tsx
// page.tsx에서
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <main>
      <HeroSection />  {/* 히어로 섹션 컴포넌트 사용 */}
    </main>
  );
}
```

### 3. `lib/` 폴더
**유틸리티 함수와 라이브러리 설정**

- **`utils.ts`**: 
  - `cn()` 함수: CSS 클래스를 안전하게 합치는 함수
  - 예: `cn("text-red-500", "bg-blue-500")` → "text-red-500 bg-blue-500"

- **`gsap.ts`**: GSAP 애니메이션 라이브러리 설정

### 4. `data/` 폴더
**페이지에 표시할 데이터**

- **`content.ts`**: 
  - 텍스트 내용, 메뉴 항목, FAQ 질문/답변 등을 저장
  - 컴포넌트와 데이터를 분리해서 관리하기 쉽게 합니다

### 5. `public/` 폴더
**정적 파일 (이미지, 아이콘 등)**

- 브라우저에서 직접 접근 가능한 파일들
- 예: `/avatars/user1.jpg` → `public/avatars/user1.jpg`

---

## 🔧 설정 파일 설명

### `package.json`
프로젝트의 "설명서" 같은 파일
- **의존성(dependencies)**: 프로젝트가 사용하는 라이브러리 목록
- **스크립트(scripts)**: 
  - `npm run dev`: 개발 서버 실행
  - `npm run build`: 프로덕션 빌드
  - `npm start`: 프로덕션 서버 실행

### `tsconfig.json`
TypeScript 컴파일러 설정
- TypeScript가 코드를 어떻게 해석할지 설정
- `"@/*": ["./*"]`: `@/` 경로가 프로젝트 루트를 가리킴
  - 예: `@/components/button` → `components/button`

### `postcss.config.mjs`
PostCSS 설정 (Tailwind CSS용)
- Tailwind CSS를 사용하기 위한 설정

### `eslint.config.mjs`
ESLint 설정 (코드 검사 도구)
- 코드 스타일과 오류를 자동으로 검사

---

## 🚀 프로젝트 실행 흐름

1. **`npm install`**: `package.json`에 있는 라이브러리들을 설치
2. **`npm run dev`**: 개발 서버 시작
3. **브라우저에서 `localhost:3000` 접속**
4. **Next.js가 `app/page.tsx`를 읽어서 페이지 생성**
5. **`page.tsx`가 여러 컴포넌트들을 조합**
6. **각 컴포넌트가 자신의 역할 수행 (스타일, 애니메이션 등)**

---

## 💡 초보자를 위한 팁

### 1. 컴포넌트는 작은 부품
- 큰 페이지를 작은 컴포넌트로 나눕니다
- 예: 버튼 → 버튼 컴포넌트, 카드 → 카드 컴포넌트

### 2. 폴더 구조는 논리적으로
- 관련된 파일들을 같은 폴더에 모읍니다
- `components/`에는 컴포넌트, `lib/`에는 유틸리티 함수

### 3. TypeScript는 도우미
- 타입 오류가 나면 컴파일러가 알려줍니다
- 처음엔 어려울 수 있지만, 시간이 지나면 도움이 됩니다

### 4. Tailwind CSS는 빠른 스타일링
- CSS 파일을 따로 만들지 않고 클래스로 스타일링
- 예: `className="text-center bg-blue-500 p-4"`

### 5. Next.js는 자동화
- 파일 구조가 곧 라우팅 (URL 경로)
- `app/about/page.tsx` → `/about` 페이지

---

## 📖 다음 단계

1. **컴포넌트 수정하기**: `components/hero-section.tsx`를 열어서 내용 변경해보기
2. **스타일 변경하기**: Tailwind CSS 클래스 수정해보기
3. **새 컴포넌트 만들기**: `components/`에 새 파일 추가하기
4. **데이터 수정하기**: `data/content.ts`에서 텍스트 변경해보기

---

## ❓ 자주 묻는 질문

**Q: 컴포넌트를 어디에 만들어야 하나요?**
A: 페이지 섹션은 `components/`, 재사용 가능한 UI는 `components/ui/`에 만드세요.

**Q: 스타일은 어떻게 수정하나요?**
A: 컴포넌트 파일에서 `className` 속성의 Tailwind CSS 클래스를 수정하세요.

**Q: 새 페이지를 만들고 싶어요**
A: `app/` 폴더에 새 폴더를 만들고 그 안에 `page.tsx`를 만드세요.
   예: `app/about/page.tsx` → `/about` 페이지

**Q: 이미지는 어디에 넣나요?**
A: `public/` 폴더에 넣고, `/이미지이름.jpg`로 접근하세요.

---

이 가이드가 도움이 되길 바랍니다! 🎉

