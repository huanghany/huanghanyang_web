"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 背景粒子效果 */}
      <div className="absolute inset-0">
        {mounted &&
          Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-indigo-500/20"
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 4 + 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
      </div>

      {/* 渐变光晕 */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className={`relative z-10 text-center px-6 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        {/* 头像 */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 p-[3px] animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-[#0f172a] flex items-center justify-center overflow-hidden">
                <img src="/avatar.png" alt="黄瀚扬" className="w-full h-full object-cover rounded-full" />
              </div>
            </div>
            {/* 在线状态指示 */}
            <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-[#0f172a] animate-pulse" />
          </div>
        </div>

        {/* 名称 */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="gradient-text">黄瀚扬</span>
        </h1>

        {/* 打字效果标语 */}
        <TypingText />

        {/* CTA 按钮 */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-full text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5"
          >
            查看项目
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-slate-600 hover:border-indigo-400 rounded-full text-slate-300 hover:text-indigo-300 font-medium transition-all duration-300 hover:-translate-y-0.5"
          >
            联系我
          </a>
        </div>

        {/* 向下滚动提示 */}
        <div className="mt-16 animate-bounce">
          <svg className="w-6 h-6 mx-auto text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}

function TypingText() {
  const phrases = ["视觉算法工程师", "机器人竞赛选手", "深度学习实践者", "从0到1的创造者"];
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[currentPhrase];
    const timeout = isDeleting ? 50 : 100;

    if (!isDeleting && currentChar === phrase.length) {
      setTimeout(() => setIsDeleting(true), 1500);
      return;
    }

    if (isDeleting && currentChar === 0) {
      setIsDeleting(false);
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timer = setTimeout(() => {
      setCurrentChar((prev) => (isDeleting ? prev - 1 : prev + 1));
    }, timeout);

    return () => clearTimeout(timer);
  }, [currentChar, isDeleting, currentPhrase]);

  return (
    <p className="text-xl md:text-2xl text-slate-400 h-8">
      {phrases[currentPhrase].slice(0, currentChar)}
      <span className="animate-pulse text-indigo-400">|</span>
    </p>
  );
}
