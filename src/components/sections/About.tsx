"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { STATS } from "@/lib/constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function About() {
  return (
    <>
      <section id="about" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            title="About Me"
            subtitle="Passionate about coding, building cool web apps, and growing as a Software Developer."
          />

          <div className="grid gap-16 lg:grid-cols-2">
            {/* Story */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-base leading-relaxed text-fg-secondary">
                I&apos;m a MCA graduate from{" "}
                <span className="font-medium text-foreground">
                  Parul University{" "}
                </span>
                with a strong passion for{" "}
                <span className="font-medium text-foreground">
                  software development{" "}
                </span>
                and building efficient, scalable, and user-friendly
                applications.
              </p>
              <p className="text-base leading-relaxed text-fg-secondary">
                I have professional internship experience as a{" "}
                <span className="font-medium text-foreground">
                  MERN Stack Developer Intern at Excelsior Technology,{" "}
                </span>
                where I gained practical exposure to web development using
                React.js, Node.js, Express.js and MongoDB.
              </p>
              <p className="text-base leading-relaxed text-fg-secondary">
                Beyond work, I&apos;m an active participant in hackathons and a
                continuous learner with certifications spanning Data Science
                Using Python, Java. also complate{" "}
                <span className="font-medium text-foreground">
                  Software Engineering Job Simulation from JP Morgan Chase & Co.
                </span>
              </p>
              <p className="text-base leading-relaxed text-fg-secondary">
                My interests span{" "}
                <span className="font-medium text-foreground">
                  Software Development, Full-Stack Development, Mern Stack
                  Development.{" "}
                </span>
                I am always exploring new technologies and improving my coding
                skills to build scalable, efficient, and user-friendly
                applications that solve real-world problems.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-2 gap-4"
            >
              {STATS.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group rounded-2xl border border-border bg-surface p-6 transition-shadow hover:shadow-lg"
                >
                  <p className="text-3xl font-light tracking-tight text-foreground">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-fg-secondary">
                    {stat.suffix ? `${stat.suffix} ` : ""}
                    {stat.label}
                  </p>
                  <div
                    className="mt-3 h-px w-8 bg-accent transition-all group-hover:w-12"
                    aria-hidden="true"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
