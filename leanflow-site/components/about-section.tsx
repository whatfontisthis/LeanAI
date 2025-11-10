"use client";

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
          회사소개
        </h2>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-lg text-muted leading-relaxed">
            LeanAI는 개발자와 조직 전문가가 함께 만든 AI 자동화 파트너입니다. 우리는 단순히 'AI 도구'를 판매하지 않습니다. 당신의 팀이 정말 중요한 일에 집중할 수 있도록, 프로세스 분석부터 기술 구현, 그리고 조직 문화 변화까지 함께합니다.
          </p>
          <p className="mb-4 text-muted leading-relaxed">
            사람이 잘하는 것은 사람이 하고, AI가 개입할 수 있는 부분을 우리가 선별해 자동화합니다. 이것이 LeanAI의 철학입니다.
          </p>
          <p className="text-muted leading-relaxed">
            우리의 초기 성공 사례는 곧 당신의 성공 사례가 될 것입니다.
          </p>
        </div>
      </div>
    </section>
  );
}

