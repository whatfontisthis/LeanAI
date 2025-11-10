"use client";

export function AnimatedHeadline() {
  return (
    <h1 className="mb-6 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
      반복 업무는{" "}
      <span className="relative inline-block text-accent">
        AI에게
        <span className="absolute bottom-0 left-0 h-2 w-full bg-accent-soft" />
      </span>
      ,<br />
      중요한 결정은 당신의 것으로
    </h1>
  );
}

