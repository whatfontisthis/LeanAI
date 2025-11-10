"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  return (
    <nav className="fixed top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold text-accent">
          LeanAI
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          <Link href="#services" className="text-sm text-foreground hover:text-accent">
            서비스
          </Link>
          <Link href="#pricing" className="text-sm text-foreground hover:text-accent">
            가격
          </Link>
          <Link href="#process" className="text-sm text-foreground hover:text-accent">
            프로세스
          </Link>
          <Link href="#case-studies" className="text-sm text-foreground hover:text-accent">
            사례연구
          </Link>
          <Link href="#about" className="text-sm text-foreground hover:text-accent">
            회사소개
          </Link>
        </div>
        <div className="hidden items-center gap-4 md:flex">
          <Button variant="ghost" size="sm">
            로그인
          </Button>
          <Button size="sm">가입하기</Button>
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
}

