import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl mb-4">Larissa Paulina</h3>
              <p className="text-slate-400">
                Fullstack Developer crafting exceptional digital experiences
              </p>
            </div>

            <div>
              <h4 className="mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="hover:text-white transition-colors"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="hover:text-white transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4">Connect</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/larissahutauruk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/larissa-hutauruk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:larissa.hutauruk01@gmail.com"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p className="flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500 fill-current" />{" "}
              by Larissa Paulina © {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
