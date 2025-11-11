"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedHeadline } from "./animated-headline";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center pt-16">
      <div className="container mx-auto px-4 py-20 text-center">
        <Badge className="mb-6">AX 변환 파트너</Badge>
        <AnimatedHeadline />
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted">
          LeanAI는 당신의 팀이 정말 해야 할 일에 집중할 수 있도록, 프로세스 분석부터 AI 자동화, 그리고 조직 문화까지 함께 만들어갑니다.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg">무료 진단 예약하기</Button>
          <Button size="lg" variant="outline">
            성과 보기
          </Button>
        </div>
        <p className="mx-auto mt-4 max-w-xl text-sm text-muted">
          30분 상담으로 당신의 자동화 기회를 찾아보세요. 진단 후 효과가 없으면 우리의 무료 자동화 도구를 제공해드립니다.
        </p>
      </div>
    </section>
  );
}

