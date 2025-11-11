"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, ...(stepsRef.current?.children || [])], {
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
        },
      });

      // Animate steps with stagger
      gsap.to(stepsRef.current?.children || [], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      number: "01",
      title: "진단",
      description:
        "현재 업무 프로세스를 상세히 분석하고, 자동화할 수 있는 기회와 조직이 받아들일 준비 수준을 평가합니다.",
    },
    {
      number: "02",
      title: "설계",
      description:
        "비즈니스 목표와 팀의 특성에 맞는 AI 솔루션을 설계합니다. 생성형 AI, 자동화 플랫폼, 통합 시스템까지 최적의 조합을 찾습니다.",
    },
    {
      number: "03",
      title: "구현",
      description:
        "파일럿으로 시작해 실제 효과를 검증한 후, 단계적으로 전면 확장합니다. 실제 도입 데이터는 우리의 포트폴리오가 됩니다.",
    },
    {
      number: "04",
      title: "성장",
      description:
        "도입 후 지속적인 모니터링과 최적화로 ROI를 극대화합니다. 팀의 피드백을 반영해 계속 개선해갑니다.",
    },
  ];

  return (
    <section ref={sectionRef} id="process" className="bg-surface py-20">
      <div className="container mx-auto px-4">
        <h2 ref={titleRef} className="mb-12 text-center text-3xl font-bold text-foreground">
          프로세스
        </h2>
        <div ref={stepsRef} className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 text-4xl font-bold text-accent">{step.number}</div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-muted leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

