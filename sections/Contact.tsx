"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, FileText, Send, CheckCircle2, ArrowRight } from "lucide-react";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" rx="1" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending progress
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSent(true);
    setFormState({ name: "", email: "", message: "" });

    // Reset success banner after some time
    setTimeout(() => setIsSent(false), 5000);
  };

  const socialLinks = [
    {
      label: "Email",
      value: "developer@example.com",
      href: "mailto:developer@example.com",
      icon: Mail,
      color: "hover:text-cyan-400 hover:border-cyan-400/40",
      glow: "shadow-cyan-400/10",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/developer",
      href: "https://linkedin.com",
      icon: LinkedinIcon,
      color: "hover:text-blue-500 hover:border-blue-500/40",
      glow: "shadow-blue-500/10",
    },
    {
      label: "GitHub",
      value: "github.com/developer",
      href: "https://github.com",
      icon: GithubIcon,
      color: "hover:text-purple-500 hover:border-purple-500/40",
      glow: "shadow-purple-500/10",
    },
  ];

  return (
    <section id="contact" className="relative min-h-screen py-24 flex items-center justify-center">
      <div className="w-full max-w-5xl px-6 md:px-12 space-y-16">
        {/* Section Title */}
        <div className="text-center space-y-2">
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-bold"
          >
            Get In Touch
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black tracking-tight"
          >
            Start A{" "}
            <span className="text-reveal bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 font-extrabold">
              Conversation
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact info & Resume */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8 text-left"
          >
            <div className="space-y-4">
              <h4 className="text-xl font-bold tracking-tight text-foreground">Let&apos;s Build Together</h4>
              <p className="text-sm md:text-base text-foreground/60 leading-relaxed font-sans">
                I am open to job positions, contract opportunities, hackathon partnerships, and collaborative software projects. Submit the contact form or connect via my social profiles.
              </p>
            </div>

            {/* Social grid */}
            <div className="space-y-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-2xl glass border border-card-border transition-all duration-300 ${social.color} hover:${social.glow} hover:scale-[1.01] group`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 transition-transform group-hover:scale-105" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold tracking-widest text-foreground/40 font-mono">
                        {social.label}
                      </div>
                      <div className="text-sm font-semibold truncate max-w-[200px] sm:max-w-xs">
                        {social.value}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Resume download Button */}
            <div className="pt-2">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Resume download initiated! (Mock File download)");
                }}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-cyan-400/25 bg-cyan-400/5 hover:bg-cyan-500/10 text-cyan-400 font-semibold tracking-wide text-sm transition-all duration-300 hover:scale-[1.02]"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume / CV</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="glass p-8 rounded-3xl border border-card-border shadow-2xl relative space-y-6"
            >
              {/* Form input fields */}
              <div className="space-y-1.5 text-left">
                <label htmlFor="name" className="text-xs font-mono font-bold tracking-wider text-foreground/60">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-2xl bg-slate-900/40 dark:bg-black/30 border border-card-border/80 text-foreground text-sm placeholder-foreground/30 focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/40 transition-all font-sans"
                />
              </div>

              <div className="space-y-1.5 text-left">
                <label htmlFor="email" className="text-xs font-mono font-bold tracking-wider text-foreground/60">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-2xl bg-slate-900/40 dark:bg-black/30 border border-card-border/80 text-foreground text-sm placeholder-foreground/30 focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/40 transition-all font-sans"
                />
              </div>

              <div className="space-y-1.5 text-left">
                <label htmlFor="message" className="text-xs font-mono font-bold tracking-wider text-foreground/60">
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-2xl bg-slate-900/40 dark:bg-black/30 border border-card-border/80 text-foreground text-sm placeholder-foreground/30 focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/40 transition-all resize-none font-sans"
                />
              </div>

              {/* Submit Button & feedback states */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting || isSent}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-cyan-500/15 disabled:opacity-50 hover:scale-[1.01]"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                  ) : isSent ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-white" />
                      <span>Message Sent Successfully!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
