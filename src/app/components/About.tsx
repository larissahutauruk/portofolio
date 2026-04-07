import { motion } from "motion/react";
import { Code2, Database, Globe, Zap } from "lucide-react";
import profileImg from "@/assets/profile.png";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

const highlights = [
  {
    icon: Code2,
    title: "Frontend Excellence",
    description: "Expert in React, TypeScript, and modern UI frameworks",
  },
  {
    icon: Database,
    title: "Backend Mastery",
    description: "Proficient with Node.js, databases, and API design",
  },
  {
    icon: Globe,
    title: "Full Stack Solutions",
    description: "End-to-end development from concept to deployment",
  },
  {
    icon: Zap,
    title: "Performance Focused",
    description: "Optimized, scalable applications that users love",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">About Me</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Passionate developer with 5+ years of experience building modern web
            applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <ImageWithFallback
              src={profileImg}
              alt="Larissa Paulina"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-slate-700 mb-6 text-lg leading-relaxed">
              Larissa Paulina Christmas Hutauruk. Fullstack Engineer.
            </p>
            <p className="text-slate-700 mb-6 text-lg leading-relaxed">
              I am a student at SMK Telkom Sidoarjo majoring in Network
              Information Systems and Applications (SIJA). I ​​also participated
              in the Digital Talent Program (DTP) with a major in Cloud
              Computing. I am passionate about web application development and
              fullstack technologies.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed">
              When I'm free, I usually explore app design based on existing
              ideas and references. I believe that by trying all types of
              programming, I can create professional websites and apps.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed">
              My goal is to create digital experiences that not only meet
              business objectives but also delight users and are long-lasting.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 text-blue-600 mb-4">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
