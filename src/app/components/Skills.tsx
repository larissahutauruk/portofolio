import { motion } from "motion/react";
import { Badge } from "@/app/components/ui/badge";

const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "JavaScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
    color: "bg-blue-100 text-blue-700",
  },
  {
    category: "Backend",
    skills: ["MySQL", "PHP", "Python", "Laravel", "REST APIs"],
    color: "bg-green-100 text-green-700",
  },
  {
    category: "Others",
    skills: [
      "Git",
      "Linux",
      "C++",
      "UI/UX Design",
      "Canva",
      "Figma",
      "A1 English",
    ],
    color: "bg-purple-100 text-purple-700",
  },
  {
    category: "Soft Skills",
    skills: [
      "Initiative",
      "Good Time Management",
      "Good Teamwork",
      "Adaptability",
      "Problem Solving",
      "Creativity",
    ],
    color: "bg-orange-100 text-orange-700",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Skills & Technologies</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit for building modern web applications
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl mb-6 pb-4 border-b border-slate-200">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                  >
                    <Badge
                      variant="secondary"
                      className={`${category.color} px-4 py-2 text-sm`}
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
