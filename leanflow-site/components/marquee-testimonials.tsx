"use client";

export function MarqueeTestimonials() {
  const testimonials = [
    "LeanFlow와 함께한 변혁이 정말 인상적이었습니다.",
    "AI 도입 과정이 체계적이고 전문적이었습니다.",
    "팀 교육이 실무에 바로 적용 가능했습니다.",
  ];

  return (
    <section className="bg-surface-strong py-12">
      <div className="overflow-hidden">
        <div className="flex animate-marquee-left gap-8">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 whitespace-nowrap text-lg text-foreground"
            >
              {testimonial}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

