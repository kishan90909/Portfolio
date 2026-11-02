"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { ExternalLink, X, Code2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PROJECTS, type Project } from "@/lib/constants";

const FILTERS = ["All", "Full-Stack", "Front-end", "Back-end"];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [maxScroll, setMaxScroll] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return PROJECTS;

    return PROJECTS.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  // Enable horizontal scrolling only when there are more than 3 projects.
  const shouldScroll = filteredProjects.length > 3;

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
  }, [filteredProjects.length, shouldScroll]);

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -maxScroll]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative bg-surface-alt"
      style={{ height: shouldScroll ? `calc(100vh + ${maxScroll}px)` : "auto" }}
    >
      <div
        className={
          shouldScroll
            ? "sticky top-0 flex h-screen items-center overflow-hidden"
            : "flex items-center"
        }
      >
        <div
          className={`mx-auto flex w-full max-w-7xl flex-col px-6 ${
            shouldScroll ? "py-4" : "pt-16 pb-20"
          }`}
        >
          {/* Section heading */}
          <SectionHeading
            title="Projects"
            subtitle="A collection of my work in software engineering."
            className="mb-8"
          />

          {/* Category filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-2 mt-0 flex flex-wrap justify-center gap-2"
            role="group"
            aria-label="Project category filters"
          >
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  activeFilter === filter
                    ? "bg-accent text-accent-fg"
                    : "border border-border bg-surface text-fg-secondary hover:text-foreground"
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          {/* Project cards viewport */}
          <div
            ref={viewportRef}
            className={`w-full ${
              shouldScroll ? "overflow-hidden" : "overflow-visible"
            }`}
          >
            <motion.div
              ref={trackRef}
              style={{ x: shouldScroll ? x : 0 }}
              className={`flex items-stretch gap-6 py-4 ${
                shouldScroll ? "" : "flex-wrap"
              }`}
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 16 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -3 }}
                    onClick={() => setSelectedProject(project)}
                    className={`shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-border bg-surface transition-shadow hover:shadow-lg ${
                      shouldScroll
                        ? "w-[80%] min-w-[80%] sm:w-[calc((100%-24px)/2)] sm:min-w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] lg:min-w-[calc((100%-48px)/3)]"
                        : "w-full sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)]"
                    }`}
                    role="button"
                    tabIndex={0}
                    aria-label={`View ${project.title} details`}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setSelectedProject(project);
                      }
                    }}
                  >
                    {/* Project image */}
                    <div className="relative flex h-32 items-center justify-center overflow-hidden bg-gradient-to-br from-background to-surface">
                      <Code2 className="h-10 w-10 text-fg-muted" />

                      {project.featured && (
                        <div className="absolute right-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-fg">
                          Featured
                        </div>
                      )}
                    </div>

                    {/* Project content */}
                    <div className="min-h-[180px] px-5 pb-8 pt-5">
                      <h3 className="text-base font-medium text-foreground">
                        {project.title}
                      </h3>

                      {/* Description with improved spacing */}
                      <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-fg-secondary">
                        {project.description}
                      </p>

                      {/* Technology skills with improved spacing */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-border bg-background px-2.5 py-0.5 text-xs text-fg-secondary"
                          >
                            {tech}
                          </span>
                        ))}

                        {project.technologies.length > 3 && (
                          <span className="rounded-full border border-border bg-background px-2.5 py-0.5 text-xs text-fg-secondary">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Project details modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedProject.title} details`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-surface p-8"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-fg-secondary transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Close dialog"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="mb-6 flex h-40 items-center justify-center rounded-xl bg-gradient-to-br from-background to-surface">
                <Code2 className="h-14 w-14 text-fg-muted" />
              </div>

              <h3 className="text-2xl font-medium text-foreground">
                {selectedProject.title}
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs text-fg-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-sm leading-relaxed text-fg-secondary">
                {selectedProject.longDescription}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {selectedProject.githubUrl ? (
                  <Button
                    variant="primary"
                    size="sm"
                    href={selectedProject.githubUrl}
                    target="_blank"
                    icon={<GithubIcon className="h-4 w-4" />}
                  >
                    GitHub
                  </Button>
                ) : (
                  <div className="group relative">
                    <Button
                      variant="primary"
                      size="sm"
                      disabled
                      icon={<GithubIcon className="h-4 w-4" />}
                    >
                      GitHub
                    </Button>
                    <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-foreground px-2 py-1 text-xs text-background opacity-0 transition-opacity group-hover:opacity-100">
                      Coming Soon
                    </span>
                  </div>
                )}

                {selectedProject.liveUrl ? (
                  <Button
                    variant="secondary"
                    size="sm"
                    href={selectedProject.liveUrl}
                    target="_blank"
                    icon={<ExternalLink className="h-4 w-4" />}
                  >
                    Live Demo
                  </Button>
                ) : (
                  <div className="group relative">
                    <Button
                      variant="secondary"
                      size="sm"
                      disabled
                      icon={<ExternalLink className="h-4 w-4" />}
                    >
                      Live Demo
                    </Button>
                    <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-foreground px-2 py-1 text-xs text-background opacity-0 transition-opacity group-hover:opacity-100">
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}