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
      <Hero
        videoSrc="School_Children_Using_Technology_Video.mp4"
        titleTop="Today's Kids,"
        titleAccent="World's Future Bright"
        description="An immersive learning environment where technology meets empathy to shape the leaders of tomorrow."
        primaryBtnText="Explore Campus"
        secondaryBtnText="Watch Our Story"
      />
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
