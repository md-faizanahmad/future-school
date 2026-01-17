// src/components/sections/CurriculumSwipe.tsx
import { SwipeClientWrapper } from "./SwipeClientWrapper";
export interface Subject {
  id: string;
  title: string;
  desc: string;
  image: string;
  color: string;
}
export default function CurriculumSwipe() {
  const subjects: Subject[] = [
    {
      id: "science",
      title: "Science & Robotics",
      desc: "Exploring AI, physics, and the mechanics of the future.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
      color: "bg-blue-600/10",
    },
    {
      id: "arts",
      title: "Digital Arts",
      desc: "Where traditional creativity meets modern digital expression.",
      image: "https://images.unsplash.com/photo-1599252441131-5aafffcf7740?",
      color: "bg-purple-600/10",
    },
    {
      id: "humanity",
      title: "Global Leadership",
      desc: "Developing empathy and strategy for tomorrow's world.",
      image: "https://images.unsplash.com/photo-1642406415849-a410b5d01a94",
      color: "bg-emerald-600/10",
    },
    {
      id: "sports",
      title: "Elite Athletics",
      desc: "Physical excellence and teamwork in modern sports.",
      image: "https://images.unsplash.com/photo-1646743934958-ae9d951e5dc4",
      color: "bg-orange-600/10",
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <header className="mb-20 text-center">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary/50">
            Pathways
          </h2>
          <p className="mt-4 text-5xl font-black tracking-tighter text-primary">
            The <span className="text-accent">Curriculum</span>
          </p>
        </header>

        <SwipeClientWrapper subjects={subjects} />
      </div>
    </section>
  );
}
