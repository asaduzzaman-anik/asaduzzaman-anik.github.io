"use client";

import { useEffect, useId, useRef, useState } from "react";
import { navLinks, siteConfig } from "@/data/portfolio";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !menuRef.current) return;

      const focusable = menuRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    const firstLink = menuRef.current?.querySelector<HTMLElement>("a[href]");
    firstLink?.focus();

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      id="header"
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-slate-200/80 bg-slate-50 shadow-sm dark:border-slate-800 dark:bg-slate-950"
          : "border-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"
        aria-label="Primary navigation"
      >
        <a
          href="#home"
          className="group inline-flex items-center gap-3"
          aria-label={`${siteConfig.name} portfolio home`}
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-950 text-sm font-extrabold text-white shadow-lg shadow-slate-950/15 transition-transform group-hover:-rotate-3 dark:bg-white dark:text-slate-950">
            AN
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight text-slate-950 dark:text-white">
            {siteConfig.name}
            <span className="text-indigo-600">.</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <a
            href={siteConfig.resume}
            download="Anik-Resume.pdf"
            className="hidden rounded-xl border border-slate-300 bg-white/80 px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:text-slate-950 sm:inline-flex dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:text-white"
          >
            Resume
          </a>

          <a
            href="#contact"
            className="hidden rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-slate-800 sm:inline-flex dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
          >
            Let&apos;s talk
          </a>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white/80 text-slate-700 shadow-sm lg:hidden dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls={menuId}
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path d="M6 6l12 12M18 6 6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          id={menuId}
          ref={menuRef}
          className="mx-4 mb-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-[var(--shadow-soft)] lg:hidden dark:border-slate-800 dark:bg-slate-900"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="block rounded-xl px-4 py-3 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {link.label}
            </a>
          ))}
          <a
            href={siteConfig.resume}
            download="Anik-Resume.pdf"
            onClick={closeMenu}
            className="block rounded-xl px-4 py-3 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Resume
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-1 block rounded-xl bg-slate-950 px-4 py-3 text-center text-sm font-semibold text-white dark:bg-white dark:text-slate-950"
          >
            Let&apos;s talk
          </a>
        </div>
      )}
    </header>
  );
}
