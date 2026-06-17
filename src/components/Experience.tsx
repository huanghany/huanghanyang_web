"use client";

import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    period: "2023 - 2024",
    title: "机器人视觉算法总负责人",
    company: "机器人创新实验室",
    description: "负责实验室机器视觉项目的整体规划与开发。利用yolov8改进模型进行实时视频推理，达到50FPS性能；利用D435i双目深度摄像头的深度图点云进行算法降噪处理，实现空间感知与避障功能，完成精准全局定位。主导全局分割模型优化及改进、rknn模型转换与量化、深度图点云数据处理工作。",
    tags: ["YOLOv8", "RKNN", "D435i", "点云处理"],
  },
  {
    period: "2023 - 2024",
    title: "人体姿态识别与动作分类 · 技术总负责人",
    company: "骨骼点人体动作识别项目",
    description: "参与开发基于骨骼点的人体姿态识别及动作分类系统。通过部署Openpose算法实现精准的骨骼点检测并提取关键骨骼点数据，随后利用时空图卷积网络ST-GCN构建高效的动作行为分类模型，实现站立、坐下、走路、正坐下等不同身体动作的识别与分类。最终将骨骼点检测与动作分类两个模块融合，完成完整高性能的人体动作识别系统。",
    tags: ["OpenPose", "ST-GCN", "动作识别", "PyTorch"],
  },
  {
    period: "2021 - 2025",
    title: "人工智能 · 本科",
    company: "宁波工程学院",
    description: "3年国家奖学金，GPA专业前3%，优秀毕业论文、优秀毕业生。在校期间积极参与多项机器人竞赛，获得十余项国家级省级奖项，取得软件著作权两项、发明专利一项。",
    tags: ["国家奖学金", "GPA前3%", "优秀毕业生"],
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-24 px-6 bg-[#0b1120]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-16 ${visible ? "animate-fade-in-up" : "opacity-0"}`}>
          经历与 <span className="gradient-text">教育</span>
        </h2>

        <div className="relative">
          {/* 时间线 */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-cyan-400 to-indigo-500 transform md:-translate-x-1/2" />

          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`relative flex flex-col md:flex-row items-start mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } ${visible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 200}ms` }}
            >
              {/* 时间节点 */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-indigo-500 rounded-full border-4 border-[#0b1120] transform -translate-x-[7px] md:-translate-x-2 z-10 shadow-lg shadow-indigo-500/30" />

              {/* 内容卡片 */}
              <div className={`ml-8 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="bg-[#1e293b] rounded-xl p-6 border border-slate-700/50 card-hover">
                  <span className="text-xs font-medium text-cyan-400 tracking-wider uppercase">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2">{exp.title}</h3>
                  <p className="text-indigo-400 text-sm mt-1">{exp.company}</p>
                  <p className="text-slate-400 mt-3 text-sm leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs bg-indigo-500/10 text-indigo-300 rounded-full border border-indigo-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
