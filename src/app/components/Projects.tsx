import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

const projects = [
  {
    title: "Good Life",
    description:
      "A website that provides information about healthy lifestyles, including nutrition, exercise, mental health and wellness tips.",
    image: "/projects/good life.png",
    tags: ["React", "Node.js", "PHP", "MySQL", "TailwindCSS"],
    github: "https://github.com/larissahutauruk/goodlife-ai-buddy-156e1f59",
    demo: "https://goodlife-ai-buddy.lovable.app",
  },
  {
    title: "Own Notion",
    description: "Personal notes to take notes, save, edit and delete notes.",
    image: "/projects/own note.png",
    tags: ["React", "Node.js", "PHP", "MySQL", "TailwindCSS"],
    github: "https://github.com/larissahutauruk/notes",
    demo: "https://notes-7urkob6tl-larissahutauruk01-1229s-projects.vercel.app/",
  },
  {
    title: "Porsche 911 GT3 RS",
    description:
      "This graphic design details a vehicle from the Porsche 911 GT3 RS.",
    image: "/projects/porsche.png",
    tags: ["Figma"],
    github:
      "https://www.figma.com/design/9ilhKEZenpTOBm1JwW2evF/Untitled?node-id=8-51&t=k1GqHZ4r58hlfBif-1",
  },
  {
    title: "An Automatic Roof",
    description:
      "Automatic roof that can be monitored via a website based on the weather conditions in the user's home environment.",
    image: "/projects/automatic roof.png",
    tags: ["C++", "Laravel", "OpenAI", "Python", "MySQL", "TailwindCSS"],
    github: "https://github.com/Garangan-Karnival/ambalabu",
  },
  {
    title: "Cooking Tutorial",
    description:
      "A website with AI-based cooking recipes that can be used to generate recipes according to the ingredients available to the user.",
    image: "/projects/masak kreatif.png",
    tags: ["Laravel", "PHP", "OpenAI", "MySQL", "TailwindCSS"],
    github: "https://github.com/larissahutauruk/masak-kreatif",
    demo: "https://example.com",
  },
  {
    title: "Skotrash",
    description:
      "This website is a third-party application tasked with transferring Skomda waste to collectors.",
    image: "/projects/bank sampah.png",
    tags: ["Laravel", "PHP", "MySQL"],
    github: "https://github.com/larissahutauruk/skotrash",
    demo: "https://skotrash-skotrash.vercel.app/",
  },
  {
    title: "TechSphere",
    description:
      "A trusted platform that provides complete, accurate and up-to-date information about communication tools such as smartphones, laptops, PCs and tablets.",
    image: "/projects/techsphere.png",
    tags: ["Laravel", "PHP", "MySQL", "Figma"],
    github: "https://github.com/larissahutauruk/Techsphere-Laravel",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Recent Projects</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            A selection of my recent work showcasing various technologies and
            solutions
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto overflow-x-auto">
          <div className="flex gap-8 w-max pb-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="min-w-[320px] max-w-[320px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl mb-3">{project.title}</h3>
                    <p className="text-slate-600 mb-4 flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        asChild
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" className="flex-1" asChild>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
