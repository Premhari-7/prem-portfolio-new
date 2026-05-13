const names = [
  "Prem Hari S",
  "Prem Hari Portfolio",
  "Prem Hari Developer",
  "Prem Hari MERN Developer",
  "Prem Hari Coimbatore",
];

const roles = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Web Developer",
  "UI UX Designer",
  "Student Developer"
];

const skills = [
  "React.js",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Bootstrap",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "PHP",
  "Git",
  "GitHub"
];

const projects = [
  "Scent Bite Perfume Shop Management",
  "Smart Parking System",
  "Plant Disease Analyzer AI",
  "GUVI Login Register Profile System",
  "Portfolio Website"
];

const locations = [
  "India",
  "Tamil Nadu",
  "Coimbatore",
  "Remote"
];

const longTail = [
  "MERN Stack Developer Portfolio",
  "Full Stack Developer Portfolio India",
  "React Developer Portfolio",
  "Node.js Developer India",
  "Web Developer Coimbatore",
  "Hire MERN Stack Developer",
  "Student Developer Portfolio",
  "Frontend Backend Developer Projects"
];

export const Keywords = [
  ...names,
  ...roles,
  ...skills,
  ...projects,
  ...locations,
  ...longTail,

  ...roles.flatMap((role) => locations.map((loc) => `${role} in ${loc}`)),
  ...skills.map((skill) => `${skill} Developer`),
  ...skills.map((skill) => `${skill} Expert`),
  ...skills.map((skill) => `Hire ${skill} Developer`),
];