"use client";

import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "Python / C++", level: 90 },
  { name: "PyTorch / TensorFlow", level: 85 },
  { name: "目标检测与分割", level: 85 },
  { name: "ROS / Linux", level: 80 },
  { name: "边缘计算部署", level: 80 },
  { name: "模型轻量化", level: 75 },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-16 ${visible ? "animate-fade-in-up" : "opacity-0"}`}>
          关于 <span className="gradient-text">我</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* 个人介绍 */}
          <div className={`space-y-6 ${visible ? "animate-slide-in-left" : "opacity-0"}`}>
            <p className="text-slate-300 leading-relaxed text-lg">
              你好！我是<span className="text-indigo-400 font-medium">黄瀚扬</span>，一名视觉算法工程师。
              多年机器人竞赛经历，专注于目标检测、语义分割、动作识别等视觉算法的研究与落地部署。
            </p>
            <p className="text-slate-400 leading-relaxed">
              性格外向，擅长沟通与协调，享受项目从0到落地的完结过程。工作严谨，注重文档和工程规范，
              对机器人行业抱有热情，喜欢见到技术真正落地效果的成就感。
            </p>

            {/* 快速信息 */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: "位置", value: "中国" },
                { label: "学历", value: "本科 · 宁波工程学院" },
                { label: "专业", value: "人工智能" },
                { label: "状态", value: "开放机会" },
              ].map((info) => (
                <div key={info.label} className="bg-[#1e293b] rounded-lg p-3 border border-slate-700/50">
                  <span className="text-xs text-slate-500 uppercase tracking-wider">{info.label}</span>
                  <p className="text-slate-300 font-medium mt-1">{info.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 技能条 */}
          <div className={`space-y-5 ${visible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            <h3 className="text-lg font-semibold text-slate-200 mb-6">技术栈</h3>
            {skills.map((skill, i) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-slate-300">{skill.name}</span>
                  <span className="text-sm text-indigo-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-1000 ease-out"
                    style={{
                      width: visible ? `${skill.level}%` : "0%",
                      transitionDelay: `${i * 150}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
