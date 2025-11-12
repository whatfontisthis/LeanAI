"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function CaseStudies() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, ...(cardsRef.current?.children || [])], {
        opacity: 0,
        y: 40,
      });

      // Animate title
      gsap.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });

      // Animate cards
      gsap.to(cardsRef.current?.children || [], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const cases = [
    {
      company: "콘텐츠 제작",
      metric: "50%",
      metricLabel: "제작 시간 단축",
      result: "동영상 콘텐츠 원고 작성부터 영상 생성까지",
      description:
        "콘텐츠 제작 시간을 50% 이상 단축하고, 제작 속도를 2배 올렸습니다. 팀은 창의적인 기획과 검수에만 집중할 수 있게 되었습니다.",
    },
    {
      company: "프로젝트 관리",
      metric: "90%",
      metricLabel: "회의록 작성 절감",
      result: "회의록을 자동으로 작성해서 노션에 저장",
      description:
        "주간 회의록 작성 시간을 90% 이상 절감했습니다. AI가 회의 음성을 전사하고 핵심 내용을 요약하여 노션에 자동 저장합니다.",
    },
    {
      company: "문서 작성",
      metric: "70%",
      metricLabel: "작성 시간 단축",
      result: "기획서, 결과보고서 등 자주 작성하는 폼에 AI를 도입하여 작성 시간 단축",
      description:
        "기획서와 결과보고서 작성 시간을 70% 이상 단축했습니다. AI가 템플릿과 데이터를 분석하여 초안을 자동 생성하고, 팀원들은 검토와 수정에만 집중합니다.",
    },
    {
      company: "조직 변화",
      metric: "100%",
      metricLabel: "팀 전환",
      result: "LeanAI 교육 프로그램을 통해 AI 중심 프로세스로 전환",
      description:
        "자체 AI 교육 시도가 실패했던 조직이 LeanAI의 맞춤형 교육 프로그램을 통해 실무 중심의 AI 활용법을 학습하고, 팀 전체가 AI 중심 업무 방식으로 전환하기 시작했습니다.",
    },
  ];

  return (
    <section ref={sectionRef} id="case-studies" className="py-20 bg-gradient-to-b from-background to-surface">
      <div className="container mx-auto px-4">
        <h2 ref={titleRef} className="mb-16 text-center text-3xl font-bold text-foreground">
          성공사례
        </h2>
        <div ref={cardsRef} className="grid grid-cols-1 gap-12 md:grid-cols-2 max-w-6xl mx-auto">
          {cases.map((caseStudy, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Metric circle - large and bold */}
              <div className="absolute -left-4 top-0 flex flex-col items-center justify-center w-24 h-24 rounded-full bg-accent text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold leading-none">{caseStudy.metric}</div>
                <div className="text-xs mt-1 text-center px-2 leading-tight opacity-90">{caseStudy.metricLabel}</div>
              </div>

              {/* Content area with left padding for metric */}
              <div className="pl-24 pt-2">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {caseStudy.company}
                </h3>

                {/* Result with accent bar */}
                <div className="relative pl-4 mb-4 border-l-4 border-accent">
                  <p className="text-sm font-medium text-accent leading-relaxed">
                    {caseStudy.result}
                  </p>
                </div>

                {/* Description */}
                <p className="text-muted leading-relaxed">
                  {caseStudy.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

