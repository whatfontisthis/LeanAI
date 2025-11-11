"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function MarqueeTestimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set(marqueeRef.current, {
        opacity: 0,
      });

      // Animate marquee container
      gsap.to(marqueeRef.current, {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const testimonials = [
    "LeanFlow와 함께한 변환이 정말 인상적이었습니다.",
    "AI 도입 과정이 체계적이고 전문적이었습니다.",
    "팀 교육이 실무에 바로 적용 가능했습니다.",
  ];

  return (
    <section ref={sectionRef} className="bg-surface-strong py-12">
      <div className="overflow-hidden">
        <div ref={marqueeRef} className="flex animate-marquee-left gap-8">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 whitespace-nowrap rounded-sm border border-border bg-background px-6 py-4 text-lg text-foreground shadow-sm"
            >
              {testimonial}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

