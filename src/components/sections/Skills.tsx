"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SKILL_CATEGORIES } from "@/lib/constants";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export function Skills() {
  const [maxScroll, setMaxScroll] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Show four cards at a time on desktop. Use page-scroll-driven horizontal
  // movement only when there are more than four skill categories.
  const shouldScroll = SKILL_CATEGORIES.length > 4;

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
      id="skills"
      ref={sectionRef}
      className="relative bg-surface-alt"
      style={{ height: shouldScroll ? `calc(100vh + ${maxScroll}px)` : "auto" }}
    >
      <div
        className={
          shouldScroll
            ? "sticky top-0 flex h-screen items-center overflow-hidden"
            : "flex items-center py-20"
        }
      >
        <div className="mx-auto w-full max-w-7xl px-6 py-5">
          <SectionHeading
            title="Skills & Technologies"
            subtitle="The tools and technologies I use to bring ideas to life."
            className="mb-8"
          />

          {/* Horizontal skill cards */}
          <div
            ref={viewportRef}
            className={shouldScroll ? "overflow-hidden" : "overflow-visible"}
          >
            <motion.div
              ref={trackRef}
              style={{ x: shouldScroll ? x : 0 }}
              className={`flex items-stretch gap-6 py-4 ${
                shouldScroll ? "" : "flex-wrap"
              }`}
            >
              {SKILL_CATEGORIES.map((category) => {
                const Icon = category.icon;

                return (
                  <motion.div
                    key={category.title}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ y: -4 }}
                    className={`group shrink-0 rounded-2xl border border-border bg-surface p-5 transition-shadow hover:shadow-lg ${
                      shouldScroll
                        ? "w-[85%] min-w-[85%] sm:w-[calc((100%_-_24px)/2)] sm:min-w-[calc((100%_-_24px)/2)] lg:w-[calc((100%_-_72px)/4)] lg:min-w-[calc((100%_-_72px)/4)]"
                        : "w-full sm:w-[calc((100%_-_24px)/2)] lg:w-[calc((100%_-_72px)/4)]"
                    }`}
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-fg">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mb-4 text-sm font-medium uppercase tracking-wide text-foreground">
                      {category.title}
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <motion.span
                          key={skill}
                          whileHover={{ scale: 1.05 }}
                          className="rounded-full border border-border bg-background px-3 py-1 text-xs text-fg-secondary transition-colors hover:border-accent/30 hover:text-foreground"
                        >
                          {skill}
                        </motion.span>
                      ))}
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
