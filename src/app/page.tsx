// src/app/page.tsx

import BentoStats from "@/components/home/BentoStats/BentoStats";
import CurriculumSwipe from "@/components/home/CurriculumSwipe/CurriculumSwipe";
import GlobalReach from "@/components/home/GlobalReach/GlobalReach";
import StorytellingScroll from "@/components/home/StorytellingScroll/StorytellingScroll";
import TestimonialsGlow from "@/components/home/Testimonials/TestimonialsGlow";
import Hero from "@/components/layouts/hero/Hero";
import EnrollmentCTA from "@/shared/EnrollmentCTA";
import QuickLinks from "@/shared/QuickLink/QuickLink";

export default function Home() {
  return (
    <main className="relative bg-background">
      {/* SCENE 1: The Vision */}
      <Hero />
      <QuickLinks />
      <BentoStats />
      <CurriculumSwipe />
      <StorytellingScroll />
      <TestimonialsGlow />
      <EnrollmentCTA />
      <GlobalReach />
    </main>
  );
}
