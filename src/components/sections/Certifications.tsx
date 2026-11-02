
"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CERTIFICATIONS } from "@/lib/constants";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Certifications() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxScroll, setMaxScroll] = useState(0);
  const shouldScroll = CERTIFICATIONS.length > 4;

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
      id="certifications"
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
            title="Certifications"
            subtitle="Professional certifications validating my expertise and knowledge."
            className="mb-8"
          />

          <div
            ref={viewportRef}
            className={shouldScroll ? "overflow-hidden" : "overflow-visible"}
          >
            <motion.div
              ref={trackRef}
              style={{ x }}
              className={`flex items-stretch gap-6 py-4 ${
                shouldScroll ? "" : "flex-wrap"
              }`}
            >
              {CERTIFICATIONS.map((cert) => (
                <motion.div
                  key={cert.title}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className={`group shrink-0 rounded-2xl border border-border bg-surface p-5 transition-shadow hover:shadow-lg ${
                    shouldScroll
                      ? "w-[85%] min-w-[85%] sm:w-[calc((100%-24px)/2)] sm:min-w-[calc((100%-24px)/2)] lg:w-[calc((100%-72px)/4)] lg:min-w-[calc((100%-72px)/4)]"
                      : "w-full sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-72px)/4)]"
                  }`}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-fg">
                    <Award className="h-6 w-6" />
                  </div>

                  <h3 className="text-base font-medium text-foreground">
                    {cert.title}
                  </h3>

                  <p className="mt-1 text-sm text-accent">
                    {cert.issuer}
                  </p>

                  <p className="mt-1 text-xs text-fg-muted">
                    {cert.date}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-fg-secondary">
                    {cert.description}
                  </p>

                  {cert.verifyUrl && (
                    <motion.a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 2 }}
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-accent transition-colors hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      Verify
                      <ExternalLink className="h-3 w-3" />
                    </motion.a>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
