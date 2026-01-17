// src/components/sections/Testimonials/TestimonialsGlow.tsx
import { TestimonialsClientWrapper } from "./TestimonialsClientWrapper";

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export default function TestimonialsGlow() {
  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Sarah Jenkins",
      role: "Parent of Grade 4 Student",
      quote:
        "The way FutureSchool integrates AI into daily learning has transformed my daughter's curiosity into actual skill.",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
    },
    {
      id: "2",
      name: "David Chen",
      role: "Tech Entrepreneur",
      quote:
        "Finally, a school that doesn't just teach technology but teaches how to think with it. Simply brilliant.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
    },
    {
      id: "3",
      name: "Dr. Elena Rossi",
      role: "Education Researcher",
      quote:
        "The personalized learning paths here are a benchmark for the industry. A true 'Future' school.",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200",
    },
  ];

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center md:text-left">
        <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary/40">
          Voices of FutureSchool
        </h2>
        <p className="mt-4 text-5xl font-black tracking-tighter text-primary">
          Trusted by <span className="text-accent">Visionaries</span>
        </p>
      </div>

      {/* Swipeable Client Layer */}
      <TestimonialsClientWrapper testimonials={testimonials} />
    </section>
  );
}
