"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Subject } from "./CurriculumSwipe";
import { useRef, useEffect, useState } from "react";

interface SwipeProps {
  subjects: Subject[];
}

export function SwipeClientWrapper({ subjects }: SwipeProps) {
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (carouselRef.current) {
        setConstraints(
          carouselRef.current.scrollWidth - carouselRef.current.offsetWidth,
        );
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // MOBILE VIEW: Horizontal Swipe
  if (isMobile) {
    return (
      <div className="relative">
        <motion.div
          ref={carouselRef}
          className="flex gap-4 cursor-grab active:cursor-grabbing px-6"
          drag="x"
          dragConstraints={{ right: 0, left: -constraints }}
        >
          {subjects.map((subject, index) => (
            <motion.article
              key={subject.id}
              className="min-w-[85vw] h-[500px] relative rounded-[2rem] overflow-hidden border border-slate-100 shadow-xl shrink-0"
            >
              <Image
                src={subject.image}
                alt={subject.title}
                fill
                sizes="85vw"
                className="object-cover"
              />
              <div
                className={`absolute inset-0 ${subject.color} mix-blend-multiply opacity-60`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />

              <div className="relative h-full p-8 flex flex-col justify-end z-10">
                <span className="text-accent font-bold text-4xl opacity-30">
                  0{index + 1}
                </span>
                <h3 className="text-2xl font-black text-primary uppercase">
                  {subject.title}
                </h3>
                <p className="text-sm text-slate-600 font-medium mt-2">
                  {subject.desc}
                </p>
                <div className="mt-4 h-1 w-12 bg-accent rounded-full" />
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Mobile Swipe Hint */}
        <div className="flex justify-center gap-2 mt-8">
          {subjects.map((_, i) => (
            <div key={i} className="h-1.5 w-1.5 rounded-full bg-slate-200" />
          ))}
        </div>
      </div>
    );
  }

  // DESKTOP VIEW: Staggered Scroll (Original Architecture)
  return (
    <div className="space-y-32 relative">
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-100 -translate-x-1/2" />
      {subjects.map((subject, index) => {
        const isEven = index % 2 === 0;
        return (
          <motion.article
            key={subject.id}
            initial={{ opacity: 0, x: isEven ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`flex flex-row ${isEven ? "" : "flex-row-reverse"} items-center gap-12`}
          >
            <div className="relative w-1/2 h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl group">
              <Image
                src={subject.image}
                alt={subject.title}
                fill
                sizes="50vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div
                className={`absolute inset-0 ${subject.color} mix-blend-multiply`}
              />
            </div>
            <div className={`w-1/2 ${isEven ? "text-left" : "text-right"}`}>
              <span className="text-accent font-bold text-6xl opacity-20 block mb-4">
                0{index + 1}
              </span>
              <h3 className="text-4xl font-black text-primary tracking-tighter mb-4">
                {subject.title}
              </h3>
              <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-md ml-auto mr-0">
                {subject.desc}
              </p>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
