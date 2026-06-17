"use client";

import { useEffect, useRef, useState } from "react";

type ProjectVideo = { type: "local"; src: string } | { type: "bilibili"; src: string } | null;

const projects: { title: string; description: string; tags: string[]; color: string; icon: string; link: string; video: ProjectVideo }[] = [
  {
    title: "实时目标检测与避障系统",
    description: "基于YOLOv8改进模型实现50FPS实时视频推理，结合D435i深度相机点云数据处理，实现机器人空间感知与精准全局定位避障功能。",
    tags: ["YOLOv8", "RKNN", "D435i", "点云"],
    color: "from-indigo-500 to-purple-500",
    icon: "🎯",
    link: "https://github.com/huanghany",
    video: null,
  },
  {
    title: "人体动作识别系统",
    description: "融合OpenPose骨骼点检测与ST-GCN时空图卷积网络，实现站立、坐下、走路等多种身体动作的精准识别与分类。",
    tags: ["OpenPose", "ST-GCN", "PyTorch"],
    color: "from-cyan-500 to-blue-500",
    icon: "🏃",
    link: "https://github.com/huanghany",
    video: null,
  },
  {
    title: "RoboCup仿真足球机器人",
    description: "参与RoboCup机器人世界杯仿真组比赛，负责视觉算法模块开发，获国一等奖（3D组）和国二等奖（2D组）。",
    tags: ["RoboCup", "仿真", "机器人"],
    color: "from-emerald-500 to-teal-500",
    icon: "⚽",
    link: "https://github.com/huanghany",
    video: null,
  },
  {
    title: "Roban虚拟仿真机器人",
    description: "第十五届中国机器人及人工智能大赛Roban虚拟仿真赛道，获国一等奖；基于红外激光测距的自主装配项目获国二等奖。",
    tags: ["仿真", "激光测距", "自主装配"],
    color: "from-orange-500 to-red-500",
    icon: "🤖",
    link: "https://github.com/huanghany",
    video: null,
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [videoModal, setVideoModal] = useState<{ open: boolean; project: typeof projects[0] | null }>({ open: false, project: null });

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

  // 关闭模态框时阻止背景滚动
  useEffect(() => {
    if (videoModal.open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [videoModal.open]);

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-16 ${visible ? "animate-fade-in-up" : "opacity-0"}`}>
          项目 <span className="gradient-text">展示</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative bg-[#1e293b] rounded-xl overflow-hidden border border-slate-700/50 card-hover ${
                visible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {/* 顶部渐变条 */}
              <div className={`h-1 bg-gradient-to-r ${project.color}`} />

              <div className="p-6">
                {/* 图标和标题 */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{project.icon}</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* 标签 */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-slate-700/50 text-slate-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 操作按钮 */}
                <div
                  className={`mt-4 flex items-center gap-4 transition-all duration-300 ${
                    hoveredIndex === i ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                  }`}
                >
                  {/* 查看详情 - 跳转外部链接 */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-indigo-400 text-sm hover:text-indigo-300 transition-colors"
                  >
                    <span>查看详情</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>

                  {/* 查看视频 - 打开模态框 */}
                  {project.video && (
                    <button
                      onClick={() => setVideoModal({ open: true, project })}
                      className="flex items-center text-cyan-400 text-sm hover:text-cyan-300 transition-colors"
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>查看视频</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 视频模态框 */}
      {videoModal.open && videoModal.project && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setVideoModal({ open: false, project: null })}
        >
          <div
            className="relative w-full max-w-4xl mx-4 bg-[#1e293b] rounded-xl overflow-hidden border border-slate-700/50"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 模态框头部 */}
            <div className="flex items-center justify-between p-4 border-b border-slate-700/50">
              <h3 className="text-lg font-bold text-white">{videoModal.project.title}</h3>
              <button
                onClick={() => setVideoModal({ open: false, project: null })}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* 视频播放区 */}
            <div className="aspect-video bg-black">
              {videoModal.project.video?.type === "local" ? (
                <video
                  controls
                  autoPlay
                  className="w-full h-full"
                  src={videoModal.project.video.src}
                >
                  您的浏览器不支持视频播放
                </video>
              ) : videoModal.project.video?.type === "bilibili" ? (
                <iframe
                  src={videoModal.project.video.src}
                  className="w-full h-full"
                  allowFullScreen
                  allow="autoplay; fullscreen"
                />
              ) : null}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
