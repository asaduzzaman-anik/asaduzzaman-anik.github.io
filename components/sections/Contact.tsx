"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/data/portfolio";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status !== "idle") setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    setErrorMessage("");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setStatus("error");
      setErrorMessage(
        "Contact form is not configured. Please add your Web3Forms access key.",
      );
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          from_name: "Portfolio Contact",
          replyto: form.email,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setForm(initialForm);
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Failed to send message. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:placeholder:text-slate-600 dark:focus:border-indigo-400 dark:focus:ring-indigo-400/10";

  return (
    <section id="contact" className="pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="overflow-hidden rounded-[2.25rem] border border-slate-200 bg-white px-6 py-12 shadow-[var(--shadow-soft)] sm:px-10 sm:py-16 lg:px-16 dark:border-slate-800 dark:bg-slate-950 dark:shadow-[var(--shadow-glow)]">
          <div className="grid gap-14 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">
                Let&apos;s build something useful
              </p>
              <h2 className="mt-4 max-w-xl font-display text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
                Have a project, role, or collaboration in mind?
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-400">
                Tell me what you are working on, what problem you need to solve,
                and where I can contribute.
              </p>

              <div className="mt-9 space-y-4">
                <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-100 dark:bg-white/5">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M4 4h16v16H4z" />
                      <path d="m4 6 8 6 8-6" />
                    </svg>
                  </span>
                  {siteConfig.email}
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-100 dark:bg-white/5">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M12 21s6-5.5 6-11a6 6 0 1 0-12 0c0 5.5 6 11 6 11Z" />
                      <circle cx="12" cy="10" r="2" />
                    </svg>
                  </span>
                  {siteConfig.location}
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="grid gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:grid-cols-2 sm:p-7 dark:border-white/10 dark:bg-white/[0.04]"
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="subject"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="How can I help?"
                  value={form.subject}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
                >
                  {loading ? "Sending..." : "Send message"}
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="m22 2-7 20-4-9-9-4Z" />
                    <path d="M22 2 11 13" />
                  </svg>
                </button>
              </div>

              {status === "success" && (
                <p className="sm:col-span-2 text-center text-sm text-emerald-600 dark:text-emerald-400">
                  Message sent successfully! I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="sm:col-span-2 text-center text-sm text-rose-600 dark:text-rose-400">
                  {errorMessage}
                </p>
              )}
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
