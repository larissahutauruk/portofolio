import { motion } from "motion/react";
import { Award, ExternalLink } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";

const certifications = [
  {
    title: "DigiUp: Laravel Web Programming",
    issuer: "YPS Telkom Schools",
    date: "22 Desember 2025",
    image: "/certificates/Digiup.png",
    credentialUrl:
      "https://www.scrum.org/assessments/professional-scrum-master-i-certification",
    skills: ["Laravel", "SQL", "PHP"],
  },
  {
    title: "Data Analyst Industrial Class",
    issuer: "WPC x Be Data",
    date: "15 November 2025",
    image: "/certificates/Be Data.png",
    credentialUrl:
      "https://www.scrum.org/assessments/professional-scrum-master-i-certification",
    skills: ["Data Analysis", "Numpy", "SQL"],
  },
  {
    title: "INCEPTION 2025: Web Developer",
    issuer: "Universitas Trisakti",
    date: "1 November 2025",
    image: "/certificates/Inception.png",
    credentialUrl:
      "https://www.scrum.org/assessments/professional-scrum-master-i-certification",
    skills: ["Laravel", "PHP", "Copywriting"],
  },
  {
    title: "Microsoft Certified: Preparation for Azure AI Fundamentals",
    issuer: "Microsoft Azure",
    date: "20 September 2025",
    image: "/certificates/Microsoft Azzure.png",
    credentialUrl:
      "https://www.scrum.org/assessments/professional-scrum-master-i-certification",
    skills: ["Cloud Architecture", "AWS", "DevOps"],
  },
  {
    title: "Bussiness Modal Canvas",
    issuer: "Ikut Lomba",
    date: "Oktober 2025",
    image: "/certificates/BMC.png",
    credentialUrl:
      "https://www.scrum.org/assessments/professional-scrum-master-i-certification",
    skills: ["business model canvas", "copywriting"],
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Certifications</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Professional certifications and achievements that validate my
            expertise
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-x-auto pb-8 scrollbar-hide">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex gap-6 px-6 md:px-12"
              style={{ minWidth: "min-content" }}
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex-shrink-0 w-80"
                >
                  <Card className="overflow-hidden h-full flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="relative h-44 overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="object-cover opacity-30 mix-blend-overlay"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Award className="w-16 h-16 text-white" />
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl mb-2">{cert.title}</h3>
                      <p className="text-slate-600 mb-2">{cert.issuer}</p>
                      <p className="text-sm text-slate-500 mb-4">{cert.date}</p>
                      <div className="flex flex-wrap gap-2 mb-4 flex-1">
                        {cert.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        View Credential
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute right-0 top-0 bottom-8 w-24 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none hidden md:block" />
        </div>

        {/* Mobile scroll hint */}
        <p className="text-center text-sm text-slate-500 mt-4 md:hidden">
          Swipe to see more →
        </p>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
