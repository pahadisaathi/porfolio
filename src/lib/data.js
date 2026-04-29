import { Mail, Phone, Linkedin } from "lucide-react";

export const siteConfig = {
  name: "Mohit Rawat",
  monogram: "MR",
  tagline: "Full Stack Developer",
  description:
    "Portfolio of Mohit Rawat, a production-ready Full Stack Developer specialising in Next.js, React.js, Node.js and Express.js.",
};

export const navItems = [
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  headline: "Building scalable web products with real business impact.",
  subtext:
    "I'm Mohit Rawat, a Full Stack Developer with 3+ years of experience building production-ready applications across customer-facing platforms, admin panels, vendor systems, and CRM workflows with strong focus on performance, scalability, and responsive UI.",
  cta: { label: "View Projects", href: "#projects" },
  ctaSecondary: { label: "Email Me", href: "mailto:rawat009111@gmail.com" },
  meta: ["Next.js", "React.js", "Node.js", "Express.js"],
  highlights: [
    { label: "Phone", value: "+91-7015317899", href: "tel:+917015317899" },
    { label: "Email", value: "rawat009111@gmail.com", href: "mailto:rawat009111@gmail.com" },
    {
      label: "LinkedIn",
      value: "LinkedIn",
      href: "https://linkedin.com/in/mohit-rawat-323133229",
    },
  ],
};

// Experience data is merged into Journey milestones

export const journey = {
  headline: "From computer science fundamentals to production-ready web products.",
  intro:
    "My journey has been shaped by building practical systems, learning through real product work, and steadily moving from foundation-level frontend implementation to full product ownership across customer and admin workflows.",
  milestones: [
    {
      year: "Jan 2024 - Present",
      title: "Full Stack Developer",
      company: "Devsthan Expert Pvt. Ltd.",
      description:
        "At Devsthan Expert, expanded into production-grade frontend systems, admin panels, vendor workflows, payments, notifications, and backend APIs.",
      bullets: [
        "Built the Tour Booking Platform frontend from scratch in Next.js using custom CSS.",
        "Developed a React.js admin panel for tours, vendors, bookings, pricing, content, and CRM workflows.",
        "Built a vendor panel for hotel and transport listings and booking operations.",
        "Integrated Razorpay, Gmail OTP, WhatsApp automation, and notification workflows.",
        "Built Node.js and Express.js REST APIs with role-based access control.",
      ],
      tags: ["Next.js", "React.js", "Express.js", "Node.js", "Razorpay", "WhatsApp API", "RBAC"],
    },
    {
      year: "Feb 2023 - Oct 2023",
      title: "Frontend Developer Intern",
      company: "Bukalo India Pvt. Ltd.",
      description:
        "Worked on Gogxn, sharpening my frontend, responsive UI, API integration, and collaboration skills in a live e-commerce environment.",
      bullets: [
        "Developed the Gogxn Gym Supplement Store frontend using Next.js and custom CSS.",
        "Integrated REST APIs for products, authentication, cart, and checkout.",
        "Improved UI/UX and responsiveness, contributing to ~30% online sales growth.",
        "Collaborated closely with backend developers and designers.",
      ],
      tags: ["Next.js", "JavaScript", "Responsive Design", "REST APIs", "E-commerce"],
    },
    {
      year: "2018 - 2022",
      title: "B.Tech in Computer Science",
      description:
        "Built my core foundation in software development, web technologies, and problem solving at M.D.U, Rohtak.",
      bullets: [
        "Learned core CS concepts, data structures, and practical software fundamentals.",
        "Built confidence with web technologies and end-to-end project thinking.",
        "Developed the problem-solving mindset that later shaped real product work.",
      ],
      tags: ["Data Structures", "Web Fundamentals", "C++", "Java", "DSA"],
    },
  ],
};

export const projects = [
  {
    id: "devsthan-expert",
    title: "Tour Booking Platform",
    category: "Featured Project",
    year: "Live Project",
    description:
      "Built the customer-facing frontend in Next.js with responsive UI, smooth booking flows, and production-ready performance.",
    tags: [
      "Next.js",
      "Custom CSS",
      "Responsive UI",
      "Razorpay",
    ],
    image:
      "https://res.cloudinary.com/dmyzudtut/image/upload/v1773675226/Screenshot_2026-03-16_at_9.01.19_PM_gbe67f.png",
    color: "#0f766e",
    href: "https://www.devsthanexpert.com",
    linkLabel: "Explore details",
  },
  {
    id: "gogxn-store",
    title: "Gogxn Gym Supplement Store",
    category: "Featured Project",
    year: "Live Project",
    description:
      "Developed the complete frontend for a gym supplement e-commerce store with product listings, cart, checkout, and REST API integration - contributing to ~30% online sales growth.",
    tags: [
      "Next.js",
      "Custom CSS",
      "REST APIs",
      "Vercel",
    ],
    image:
      "https://res.cloudinary.com/dmyzudtut/image/upload/v1773675225/Screenshot_2026-03-16_at_9.03.21_PM_p5raw5.png",
    color: "#2563eb",
    href: "https://www.gogxn.com",
    linkLabel: "Explore details",
  },
  {
    id: "pahadi-saathi",
    title: "Pahadi Saathi",
    category: "Featured Project",
    year: "Live Project",
    description:
      "Developed a matrimonial platform for the Pahadi community with profile management, matchmaking preferences, responsive design, and Vercel deployment.",
    tags: [
      "Next.js",
      "React.js",
      "Vercel",
    ],
    image:
      "https://res.cloudinary.com/dmyzudtut/image/upload/v1773675224/Screenshot_2026-03-16_at_9.02.11_PM_l8geu7.png",
    color: "#ca8a04",
    href: "https://pahadi-saathi-frontend-d6c6.vercel.app/",
    linkLabel: "Explore details",
  },
];

export const about = {
  headline: "Performance-driven development with practical product experience.",
  description:
    "I build scalable web applications with attention to clean UI, responsive design, maintainable architecture, and smooth user journeys. My experience spans public-facing websites, admin systems, vendor workflows, CRM modules, payments, and automation-driven communication flows.",
  philosophy:
    "Experience building live customer-facing applications and internal systems, with a strong focus on responsive delivery, practical engineering, and collaboration across distributed teams.",
  stats: [
    { value: "3+", label: "Years of experience" },
    { value: "5+", label: "Production systems" },
    { value: "30%", label: "Gogxn sales growth" },
  ],
  chips: ["Responsive UI", "Scalable Workflows", "Admin Panels", "REST APIs"],
  education: {
    degree: "Bachelor of Technology",
    field: "Computer Science, M.D.U, Rohtak",
    period: "2018 - 2022",
    points: [
      "Production-ready experience building live customer-facing applications and internal systems.",
      "Worked across distributed teams with designers and backend developers.",
    ],
  },
};

export const services = [
  {
    number: "01",
    title: "Frontend",
    description: "Building production-grade user interfaces with modern frameworks and CSS architectures.",
    tags: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
  },
  {
    number: "02",
    title: "Backend",
    description: "Architecting scalable server-side systems, REST APIs, and asynchronous workflows.",
    tags: ["Node.js", "Express.js", "Python", "REST APIs", "RBAC", "Authentication", "Validation"],
  },
  {
    number: "03",
    title: "Tools & Database",
    description: "Managing data integrity and streamlining development with industry-standard tooling.",
    tags: ["MongoDB", "Postman", "Git", "GitHub", "VS Code", "pnpm", "npm"],
  },
  {
    number: "04",
    title: "Cloud & Integrations",
    description: "Deploying and integrating third-party services to enhance product capabilities.",
    tags: ["AWS EC2", "AWS S3", "Vercel", "Razorpay", "WhatsApp API", "Gmail OTP", "Webhooks"],
  },
];

export const contact = {
  headline: "Let's build something impactful.",
  subtext:
    "Available for web development roles, freelance projects, and product-focused frontend work.",
  primaryCta: {
    label: "Email Me",
    href: "mailto:rawat009111@gmail.com",
  },
  secondaryCta: {
    label: "Call directly",
    href: "tel:+917015317899",
  },
  items: [
    {
      label: "Email",
      value: "rawat009111@gmail.com",
      href: "mailto:rawat009111@gmail.com",
      icon: Mail,
    },
    {
      label: "Phone",
      value: "+91-7015317899",
      href: "tel:+917015317899",
      icon: Phone,
    },
    {
      label: "LinkedIn",
      value: "mohit-rawat-323133229",
      href: "https://linkedin.com/in/mohit-rawat-323133229",
      icon: Linkedin,
    },
  ],
};

export const footer = {
  links: [
    { label: "Email", href: "mailto:rawat009111@gmail.com", icon: Mail },
    { label: "Phone", href: "tel:+917015317899", icon: Phone },
    { label: "LinkedIn", href: "https://linkedin.com/in/mohit-rawat-323133229", icon: Linkedin },
  ],
};
