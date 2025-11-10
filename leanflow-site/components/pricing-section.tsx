"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function PricingSection() {
  const plans = [
    {
      name: "스타터",
      price: "문의",
      features: ["프로세스 진단", "기본 리포트"],
    },
    {
      name: "프로페셔널",
      price: "문의",
      features: ["프로세스 진단", "AI 솔루션 설계", "팀 교육"],
    },
    {
      name: "엔터프라이즈",
      price: "문의",
      features: ["전체 서비스", "맞춤형 솔루션", "지속 지원"],
    },
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
          가격
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <Card key={index} className="p-6">
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                {plan.name}
              </h3>
              <div className="mb-4 text-2xl font-bold text-accent">{plan.price}</div>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-muted">
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full">문의하기</Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

