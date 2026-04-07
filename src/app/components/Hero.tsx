import { motion } from "motion/react";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Larissa Paulina
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              Fullstack Developer & Problem Solver
            </p>
            <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
              I craft elegant solutions to complex problems, building scalable
              web applications with modern technologies. Passionate about clean
              code and exceptional user experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900"
            >
              Get In Touch
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center gap-6"
          >
            <a
              href="https://github.com/larissahutauruk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/larissa-hutauruk/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:larissa.hutauruk01@gmail.com"
              className="hover:text-blue-400 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-6 h-6 text-slate-400" />
      </motion.div>
    </section>
  );
}
