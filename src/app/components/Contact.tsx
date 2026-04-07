import { motion } from "motion/react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Card } from "@/app/components/ui/card";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "larissa.hutauruk01@gmail.com",
    href: "mailto:larissa.hutauruk01@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+62 85785614715",
    href: "tel:+6285785614715",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Surabaya, East Java, Indonesia",
    href: null,
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (mock for now)
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Get In Touch</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Have a project in mind? Let's discuss how we can work together
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl mb-6">Contact Information</h3>
            <p className="text-slate-600 mb-8">
              Feel free to reach out through any of these channels. I'm always
              open to discussing new projects, creative ideas, or opportunities
              to be part of your vision.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex-shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-slate-900 hover:text-blue-600 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-slate-900">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm mb-2 text-slate-700"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm mb-2 text-slate-700"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm mb-2 text-slate-700"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
