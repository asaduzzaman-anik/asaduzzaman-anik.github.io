"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      // Replace with your API route later
      await new Promise((res) => setTimeout(res, 1000));

      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Contact Me</h2>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-white/5 dark:border dark:border-white/10 shadow-md rounded-2xl p-6 space-y-5 backdrop-blur-sm"
      >
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border dark:border-white/10 dark:bg-white/5 dark:text-white rounded-xl p-3 outline-none focus:ring-2 focus:ring-black dark:focus:ring-cyan-400"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border dark:border-white/10 dark:bg-white/5 dark:text-white rounded-xl p-3 outline-none focus:ring-2 focus:ring-black dark:focus:ring-cyan-400"
        />

        {/* Message */}
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full border dark:border-white/10 dark:bg-white/5 dark:text-white rounded-xl p-3 outline-none focus:ring-2 focus:ring-black dark:focus:ring-cyan-400"
        />

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black dark:bg-cyan-500 text-white dark:text-black font-semibold py-3 rounded-xl hover:bg-gray-800 dark:hover:bg-cyan-400 transition"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {/* Success Message */}
        {success && (
          <p className="text-green-600 text-sm text-center">
            Message sent successfully!
          </p>
        )}
      </motion.form>
    </section>
  );
}
