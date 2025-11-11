"use client";

import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
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
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const cases = [
    {
      company: "콘텐츠 제작 회사",
      result: "동영상 콘텐츠 원고 작성부터 영상 생성까지, 전부 자동화하다",
      description:
        "월 30개 콘텐츠 제작에 소요되던 시간을 90% 단축하고, 생성형 AI 기반 원고 작성과 n8n 자동화 워크플로우로 품질을 일관되게 유지하면서도 제작 속도를 3배 올렸습니다. 팀은 창의적인 기획과 감수에만 집중할 수 있게 되었습니다.",
    },
  ];

  return (
    <section ref={sectionRef} id="case-studies" className="py-20">
      <div className="container mx-auto px-4">
        <h2 ref={titleRef} className="mb-12 text-center text-3xl font-bold text-foreground">
          사례연구
        </h2>
        <div ref={cardsRef} className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-1">
          {cases.map((caseStudy, index) => (
            <Card key={index} className="p-8">
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                {caseStudy.company}
              </h3>
              <p className="mb-4 text-lg font-semibold text-accent">
                {caseStudy.result}
              </p>
              <p className="text-muted leading-relaxed">{caseStudy.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

