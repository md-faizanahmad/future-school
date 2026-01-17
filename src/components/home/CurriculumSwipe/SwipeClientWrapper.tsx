// src/components/sections/SwipeClientWrapper.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Subject } from "./CurriculumSwipe";

interface SwipeProps {
  subjects: Subject[];
}

export function SwipeClientWrapper({ subjects }: SwipeProps) {
  return (
    <div className="space-y-32 relative">
      {/* Visual Vertical Line (Connecting the Story) */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-100 -translate-x-1/2 hidden md:block" />

      {subjects.map((subject, index) => {
        const isEven = index % 2 === 0;

        return (
          <motion.article
            key={subject.id}
            initial={{ opacity: 0, x: isEven ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-12`}
          >
            {/* 1. Image Card with proper 'fill' and 'sizes' */}
            <div className="relative w-full md:w-1/2 h-100 rounded-[2.5rem] overflow-hidden shadow-2xl group">
              <Image
                src={subject.image}
                alt={subject.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority={index < 2}
              />
              <div
                className={`absolute inset-0 ${subject.color} mix-blend-multiply`}
              />

              {/* Card Indicator Dot (Client requirement) */}
              <div className="absolute top-6 right-6 h-3 w-3 rounded-full bg-accent animate-pulse" />
            </div>

            {/* 2. Content Block */}
            <div
              className={`w-full md:w-1/2 ${isEven ? "text-left" : "text-right"}`}
            >
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-accent font-bold text-6xl opacity-20 block mb-4"
              >
                0{index + 1}
              </motion.span>
              <h3 className="text-4xl font-black text-primary tracking-tighter mb-4">
                {subject.title}
              </h3>
              <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-md ml-auto mr-0">
                {subject.desc}
              </p>

              {/* Swipe/Scroll Progress Dots */}
              <div
                className={`flex gap-2 mt-8 ${isEven ? "justify-start" : "justify-end"}`}
              >
                {subjects.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? "w-8 bg-accent" : "w-2 bg-slate-200"}`}
                  />
                ))}
              </div>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
