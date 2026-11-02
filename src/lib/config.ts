// ═══════════════════════════════════════════════════════════════════════════════
// CENTRAL CONFIGURATION — Edit all links and personal info here
// ═══════════════════════════════════════════════════════════════════════════════

export const config = {
  personal: {
    name: "Kishan Patel",
    title: "Software Developer",
    tagline:
      "Building intelligent systems through AI, and scalable software solutions.",
    email: "kpatel.tech.mca@gmail.com",
    location: "Ahmedabad, Gujarat, India",
    resumePath: "/resume/kishan_Resume.pdf",
    profileImage: "/images/profile.jpg",
  },

  socials: {
    github: "https://github.com/kishan90909",
    linkedin: "https://www.linkedin.com/in/kishan-patel-597792329/",
  },

  // Formspree endpoint for contact form
  // Sign up at https://formspree.io and create a form to get your endpoint
  formspree: {
    endpoint: "https://formspree.io/f/xlgvqode",
  },

  // Typing animation strings
typingStrings: [
  "Software Developer",
  "MERN Stack Developer",
  "Full-Stack Developer",
  "Tech Enthusiast",
  "Quick Learner",
  "Creative Thinker",
  "Problem Solver",
],
} as const;
