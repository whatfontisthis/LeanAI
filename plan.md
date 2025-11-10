# LeanFlow Landing Page - Project Plan

## Project Overview

LeanFlow is a landing page for an AI automation and process transformation service. The website promotes AX (Automation Experience) transformation services, focusing on process diagnosis, strategic AI implementation, team training, and organizational change management.

**Goal**: Rebuild the website with a simplistic white and Navy(#0A1172) color scheme while maintaining all existing functionality and structure.

## Tech Stack

### Core Framework
- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Node.js 18+**

### UI & Styling
- **Tailwind CSS v4**
- **shadcn/ui** components (Radix UI primitives)
- **Lucide React** (icons)

### Animation & Interactions
- **GSAP (GreenSock)** for animations
- **GSAP ScrollTrigger** for scroll-triggered animations

### Utilities
- **class-variance-authority** for component variants
- **clsx** & **tailwind-merge** for className utilities
- **next-themes** (currently used for theme switching - can be removed for simpler white/Navy(#0A1172) design)

## Project Structure

```
LeanFlow-landing-page/
├── app/
│   ├── globals.css        # Global styles & CSS variables
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page (renders PageWrapper)
├── components/
│   ├── ui/               # shadcn/ui components
│   │   ├── accordion.tsx
│   │   ├── avatar.tsx
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── navigation-menu.tsx
│   │   ├── separator.tsx
│   │   ├── switch.tsx
│   │   └── tabs.tsx
│   ├── animated-headline.tsx
│   ├── faq-section.tsx
│   ├── features-section.tsx
│   ├── footer.tsx
│   ├── hero-section.tsx
│   ├── loading-screen.tsx
│   ├── marquee-testimonials.tsx
│   ├── mobile-menu.tsx
│   ├── navbar.tsx
│   ├── page-wrapper.tsx
│   ├── pricing-section.tsx
│   ├── scroll-animated-testimonials.tsx
│   ├── theme-provider.tsx
│   ├── theme-toggle.tsx
│   └── unicorn-studio-background.tsx
├── lib/
│   └── utils.ts          # Class name utility (cn function)
├── public/
│   └── avatars/          # Testimonial avatar images
├── components.json       # shadcn/ui configuration
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Core Features & Functionality

### 1. Loading Screen
- **Purpose**: Initial page load animation
- **Functionality**:
  - Progress bar animation (0-100%)
  - Logo display
  - Fade out animation on completion
  - Triggers main content visibility

### 2. Navigation Bar
- **Position**: Fixed at top
- **Functionality**:
  - Logo with link to home
  - Navigation menu items (desktop):
    - 서비스 (Services)
    - 가격 (Pricing)
    - 프로세스 (Process)
    - 사례연구 (Case Studies)
    - 회사소개 (About)
  - CTA buttons: 로그인 (Login), 가입하기 (Sign Up)
  - Mobile menu (hamburger menu)
  - Smooth scroll to sections

### 3. Hero Section
- **Content**:
  - Badge: "AX 변혁 파트너"
  - Main headline: "AI 자동화, 제대로 하세요" (with animated highlight on "제대로")
  - Subtitle: "프로세스를 진단하고, AI를 전략적으로 도입하며, 팀의 변혁을 이끕니다."
  - Two CTA buttons:
    - "무료 진단받기" (Free Consultation)
    - "성과 보기" (View Results)
  - Statistics display (3 metrics):
    - 95% 프로세스 효율성 향상
    - 50+ 변혁한 기업
    - 6개월 평균 ROI 달성
- **Background**: Interactive background element (Unicorn Studio integration)
- **Animations**: Scroll-triggered fade-in animations for each element

### 4. Testimonials Section
- **Content**: 20 customer testimonials
- **Display**: Two rows of scrolling marquees
  - Top row: Scrolls left (testimonials 1-10)
  - Bottom row: Scrolls right (testimonials 11-20)
- **Testimonial Card Includes**:
  - 5-star rating display
  - Customer quote
  - Customer name
  - Company name
  - Avatar image
- **Animations**: Scroll-triggered animations for cards

### 5. Features Section
- **Header**:
  - Badge: "서비스"
  - Title: "완전한 AX 변혁"
  - Description
- **Features Grid**: 8 feature cards
  1. 프로세스 진단 (Process Diagnosis) - Badge: "1단계"
  2. AI 도입 (AI Implementation) - Badge: "2단계"
  3. 팀 교육 (Team Training) - Badge: "3단계"
  4. AX 문화 변화 (AX Culture Change) - Badge: "4단계"
  5. 워크플로우 최적화 (Workflow Optimization) - Badge: "핵심 서비스"
  6. ROI 측정 (ROI Measurement) - Badge: "결과"
  7. 전략적 계획 (Strategic Planning) - Badge: "전략"
  8. 변화 관리 (Change Management) - Badge: "성공"
- **Each Feature Card**:
  - Icon (Lucide React)
  - Title
  - Description
  - Badge
- **CTA Section**: Two buttons at bottom
  - "무료 프로세스 진단받기"
  - "상담 예약하기"
- **Animations**: Staggered scroll-triggered animations

### 6. Pricing Section
- **Header**:
  - Badge: "가격"
  - Title: "유연한 참여 방식"
  - Description
  - Toggle switch: "프로젝트 기반" / "유지보수"
- **Pricing Cards**: 3 plans
  1. **프로세스 진단** (Free)
     - Price: $0
     - Features: 6 included, 2 limitations
     - CTA: "무료 진단받기"
  2. **변혁 프로젝트** (Most Popular)
     - Price: $15,000 (project) / $150,000 (yearly)
     - Features: 8 included, 2 limitations
     - CTA: "프로젝트 시작"
  3. **지속적 파트너십**
     - Price: $5,000 (monthly) / $50,000 (yearly)
     - Features: 8 included, 0 limitations
     - CTA: "상담 예약하기"
- **Pricing Card Features**:
  - Check marks for included features
  - X marks for limitations
  - Popular badge for featured plan
  - Price display (changes based on toggle)
- **FAQ Link**: Button to view FAQ section
- **Animations**: Scroll-triggered animations

### 7. FAQ Section
- **Header**:
  - Badge: "자주 묻는 질문"
  - Title: "자주 묻는 질문들"
  - Description with contact link
- **FAQ Items**: 10 questions in accordion format
  1. 린플로우가 다른 AI 자동화 회사와 다른 점은 무엇인가요?
  2. 무료 프로세스 진단은 어떻게 진행되나요?
  3. 조직 이론이 AX 변혁에 왜 중요한가요?
  4. 일반적인 변혁 프로젝트는 얼마나 걸리나요?
  5. 팀이 변화를 거부한다면 어떻게 하나요?
  6. 변혁의 ROI는 어떻게 측정하나요?
  7. 특정 업계나 회사 규모에만 일하시나요?
  8. 변혁 프로젝트 완료 후에는 어떻게 되나요?
  9. AI 도입이 윤리적이고 책임감 있게 이루어지는지 어떻게 보장하나요?
  10. 잘 작동하지 않는 기존 AI 도입을 도와주실 수 있나요?
- **Accordion Functionality**: Single item expandable (collapsible)
- **CTA Section**: Contact support buttons
- **Animations**: Scroll-triggered animations

### 8. Footer
- **Brand Section**:
  - Logo
  - Company description
  - Newsletter signup (email input + submit button)
  - Subscriber count: "10,000명 이상의 구독자"
- **Link Sections** (4 columns):
  - 서비스 (5 links)
  - 회사 (5 links)
  - 리소스 (5 links)
  - 법적 (5 links)
- **Bottom Section**:
  - Copyright: "© 2024 린플로우. 모든 권리 보유."
  - Location badge: "서울, 대한민국"
  - Phone badge: "+82 2-1234-5678"
  - Social links: Twitter, LinkedIn, GitHub
- **Animations**: Scroll-triggered animations

## Animation Requirements

### GSAP Animations
- **ScrollTrigger**: Used throughout for scroll-based animations
- **Animation Types**:
  - Fade in (opacity: 0 → 1)
  - Slide up (y: 50-60 → 0)
  - Scale effects (scale: 0.98 → 1)
  - Stagger animations for multiple elements
- **Trigger Points**: Elements animate when scrolled into view (typically 70-80% from top)

### Loading Screen
- Progress bar animation (0-100%)
- Logo scale and fade animation
- Fade out animation on completion

### Marquee Animations
- Continuous horizontal scrolling
- Two rows (left and right directions)
- Seamless loop (duplicated content)

### Animated Headline
- Text animation with highlighted word
- Word-by-word or character animation

## Content Data

### Navigation Items
```typescript
[
  { name: "서비스", href: "#services" },
  { name: "가격", href: "#pricing" },
  { name: "프로세스", href: "#process" },
  { name: "사례연구", href: "#case-studies" },
  { name: "회사소개", href: "#about" }
]
```

### Features (8 items)
- Each with icon, title, description, and badge
- Icons: Search, Brain, Users, BookOpen, Settings, TrendingUp, Target, CheckCircle

### Pricing Plans (3 plans)
- Each with name, description, price (monthly/yearly), features array, limitations array, popularity flag, CTA text

### Testimonials (20 items)
- Each with name, company, avatar path, quote, rating (5 stars)

### FAQ Items (10 items)
- Each with question and answer

### Footer Links
- 4 categories with 5 links each
- Social media links (3 platforms)

## Responsive Design Requirements

### Breakpoints
- Mobile: < 640px (sm)
- Tablet: 640px - 1024px (md, lg)
- Desktop: > 1024px (xl, 2xl)

### Responsive Features
- Mobile menu for navigation (hidden on desktop)
- Responsive grid layouts (1 column → 2 columns → 3-4 columns)
- Responsive typography (text size scaling)
- Responsive spacing (padding/margin adjustments)
- Responsive button layouts (stack on mobile, row on desktop)
- Container max-width with padding

## Component Dependencies

### shadcn/ui Components Used
- `Button` - CTA buttons, links
- `Card` - Feature cards, pricing cards, testimonial cards
- `Badge` - Status indicators, labels
- `Accordion` - FAQ section
- `Avatar` - Testimonial avatars
- `NavigationMenu` - Main navigation
- `Separator` - Visual dividers
- `Switch` - Pricing toggle

### Custom Components
- `PageWrapper` - Main container with loading screen
- `LoadingScreen` - Initial load animation
- `Navbar` - Top navigation
- `MobileMenu` - Mobile navigation menu
- `HeroSection` - Hero area
- `AnimatedHeadline` - Animated headline text
- `FeaturesSection` - Features grid
- `PricingSection` - Pricing cards
- `FAQSection` - FAQ accordion
- `ScrollAnimatedTestimonials` - Testimonials with scroll animation
- `MarqueeTestimonials` - Scrolling testimonials
- `Footer` - Site footer
- `ThemeProvider` - Theme context (can be removed for simple white/Navy(#0A1172))
- `ThemeToggle` - Theme switcher (can be removed)
- `UnicornStudioBackground` - Interactive background

## Implementation Notes

### Styling Approach (New)
- **Color Scheme**: White and Navy(#0A1172)
- **Simplicity**: Clean, minimal design
- **Remove**: Dark/light theme system
- **Maintain**: All functionality, animations, and interactions
- **Update**: Color variables in `globals.css` to white/Navy(#0A1172) palette
- **Simplify**: Remove theme toggle, theme provider (if not needed)

### Key Functionality to Preserve
1. Loading screen with progress
2. Smooth scroll navigation
3. Scroll-triggered animations
4. Marquee testimonials
5. Pricing toggle (project/maintenance)
6. FAQ accordion
7. Newsletter signup
8. Mobile menu
9. Responsive layouts
10. All content and text

### Files to Modify
1. `app/globals.css` - Update color variables to white/Navy(#0A1172)
2. `app/layout.tsx` - Remove theme provider (if simplifying)
3. `components/navbar.tsx` - Remove theme toggle, update styling
4. `components/theme-toggle.tsx` - Remove or simplify
5. `components/theme-provider.tsx` - Remove or simplify
6. All component files - Update styling to white/Navy(#0A1172) scheme
7. `tailwind.config.js` - Update color configuration

### Files to Keep As-Is (Functionality)
- Component logic and structure
- Animation implementations
- Content data
- Component props and interfaces
- Event handlers
- State management

## Deployment

### Build Commands
```bash
npm run build    # Build for production
npm start        # Start production server
npm run dev      # Development server
npm run lint     # Lint code
```

### Deployment Platforms
- Vercel (recommended for Next.js)
- Netlify
- Railway
- DigitalOcean App Platform

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Next Steps for Rebuild

1. **Setup**: Install dependencies, verify project structure
2. **Color System**: Define white/Navy(#0A1172) color palette in Tailwind config
3. **Remove Theme System**: Remove theme toggle and provider (if not needed)
4. **Update Styles**: Replace all color classes with white/Navy(#0A1172) equivalents
5. **Simplify Design**: Remove complex styling, focus on clean white/Navy(#0A1172) design
6. **Test Animations**: Ensure all animations work with new styling
7. **Test Responsive**: Verify responsive behavior on all breakpoints
8. **Content Review**: Verify all Korean content is accurate
9. **Performance**: Optimize images and animations
10. **Deploy**: Deploy to production platform

