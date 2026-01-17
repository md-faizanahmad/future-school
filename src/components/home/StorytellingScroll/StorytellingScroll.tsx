// src/components/sections/StorytellingScroll.tsx
import { StorytellingClientWrapper } from "./StorytellingClientWrapper";

export interface JourneyStep {
  id: string;
  time: string;
  iconType: "sun" | "clock" | "moon";
  title: string;
  content: string;
  image: string;
}

export default function StorytellingScroll() {
  const journey: JourneyStep[] = [
    {
      id: "morning",
      time: "08:30 AM",
      iconType: "sun",
      title: "The Morning Spark",
      content:
        "Students arrive at our tech-enabled hubs to set their daily goals using AI-driven planners.",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800",
    },
    {
      id: "midday",
      time: "12:00 PM",
      iconType: "clock",
      title: "Collaborative Labs",
      content:
        "Working in cross-disciplinary teams to solve real-world problems through robotics and design.",
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800",
    },
    {
      id: "afternoon",
      time: "03:30 PM",
      iconType: "moon",
      title: "Creative Reflection",
      content:
        "Closing the day with peer reviews and personal growth journaling in our green campus zones.",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800",
    },
  ];

  return (
    <section className="relative bg-white" id="storytelling-container">
      {/* 1. SECTION HEADING */}
      <div className="container mx-auto px-6 pt-24 pb-12 text-center md:text-left">
        <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary/50">
          Experience
        </h2>
        <p className="mt-4 text-5xl font-black tracking-tighter text-primary">
          A Day in the <span className="text-accent">Life</span>
        </p>
      </div>

      {/* 2. BACKGROUND CLIENT LAYER (GSAP) */}
      <StorytellingClientWrapper journey={journey} />

      {/* 3. CONTENT LAYERS */}
      <div className="relative z-10">
        {journey.map((step, index) => (
          <article
            key={step.id}
            className="h-screen flex items-center justify-center snap-start px-6"
            id={`step-${index}`}
          >
            <div className="max-w-xl md:ml-auto md:mr-24 mt-45 bg-white/90 backdrop-blur-xl p-10 rounded-[2.5rem] border border-slate-100 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                {/* Visual indicator handled in client for animation, but placeholder here */}
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  {step.time}
                </div>
              </div>
              <h3 className="text-4xl font-black text-primary mb-6 tracking-tighter italic">
                {step.title}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                {step.content}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
