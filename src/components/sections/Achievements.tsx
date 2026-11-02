"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Trophy, Briefcase, Award, GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ACHIEVEMENTS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  trophy: Trophy,
  briefcase: Briefcase,
  award: Award,
  "graduation-cap": GraduationCap,
  graduation: GraduationCap,
};

export function Achievements() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxScroll, setMaxScroll] = useState(0);
  const shouldScroll = ACHIEVEMENTS.length > 3;

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!viewport || !track) return;

    const updateScrollDistance = () => {
      const distance = Math.max(0, track.scrollWidth - viewport.clientWidth);
      setMaxScroll(shouldScroll ? distance : 0);
    };

    updateScrollDistance();
    const observer = new ResizeObserver(updateScrollDistance);
    observer.observe(viewport);
    observer.observe(track);
    window.addEventListener("resize", updateScrollDistance);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateScrollDistance);
    };
  }, [shouldScroll]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -maxScroll]);

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="relative bg-surface-alt"
      style={{ height: shouldScroll ? `calc(100vh + ${maxScroll}px)` : "auto" }}
    >
      <div
        className={
          shouldScroll
            ? "sticky top-0 flex h-screen items-center overflow-hidden"
            : "flex items-center py-16"
        }
      >
        <div className="mx-auto w-full max-w-7xl px-6 py-4">
          <SectionHeading
            title="Achievements"
            subtitle="Milestones and recognitions along my journey."
            className="mb-8"
          />

          <div
            ref={viewportRef}
            className={shouldScroll ? "overflow-hidden" : "overflow-visible"}
          >
            <motion.div
              ref={trackRef}
              style={{ x: shouldScroll ? x : 0 }}
              className={`flex items-stretch gap-6 py-4 ${shouldScroll ? "" : "flex-wrap"}`}
            >
              {ACHIEVEMENTS.map((achievement) => {
                const Icon = iconMap[achievement.icon] || Trophy;
                return (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.5 }}
                    className={`group flex shrink-0 gap-5 rounded-2xl border border-border bg-surface p-6 transition-shadow hover:shadow-lg ${
                      shouldScroll
                        ? "w-[85%] min-w-[85%] sm:w-[60%] sm:min-w-[60%] lg:w-[calc((100%-24px)/2)] lg:min-w-[calc((100%-24px)/2)]"
                        : "w-full sm:w-[calc((100%-24px)/2)]"
                    }`}
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-fg">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-foreground">
                        {achievement.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-fg-secondary">
                        {achievement.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
