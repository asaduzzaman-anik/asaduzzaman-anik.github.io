"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { navLinks, siteConfig } from "@/data/portfolio";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { CloseIcon, MenuIcon } from "@/components/icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState(navLinks[0]?.href ?? "");
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
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0),
          );

        if (visible[0]?.target?.id) {
          setActiveHref(`#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
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

  const linkClass = (href: string, mobile = false) => {
    const isActive = activeHref === href;
    if (mobile) {
      return isActive
        ? "block rounded-full bg-slate-950 px-4 py-3 text-sm font-medium text-white dark:bg-white dark:text-slate-950"
        : "block rounded-full px-4 py-3 text-sm font-medium text-slate-600 transition hover:text-slate-950 dark:text-slate-400 dark:hover:text-white";
    }
    return isActive
      ? "rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white transition-colors dark:bg-white dark:text-slate-950"
      : "rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-950 dark:text-slate-400 dark:hover:text-white";
  };

  return (
    <header
      id="header"
      className={`fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-slate-50 transition-all duration-300 dark:border-slate-800 dark:bg-slate-950 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10"
        aria-label="Primary navigation"
      >
        <a
          href="#home"
          className="group inline-flex shrink-0 items-center gap-3"
          aria-label={`${siteConfig.name} portfolio home`}
        >
          <Image
            src="/logo.png"
            alt=""
            width={40}
            height={40}
            priority
            className="h-10 w-10 rounded-lg object-contain transition-transform group-hover:-rotate-3"
          />
          <span className="font-display text-lg font-extrabold tracking-tight text-slate-950 dark:text-white">
            {siteConfig.name}
            <span className="text-indigo-600">.</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-slate-200 p-1 lg:flex dark:border-slate-700">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={linkClass(link.href)}
              aria-current={activeHref === link.href ? "page" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white/80 text-slate-700 shadow-sm lg:hidden dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls={menuId}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          id={menuId}
          ref={menuRef}
          className="mx-4 mb-3 rounded-3xl border border-slate-200 bg-slate-50 p-1.5 shadow-[var(--shadow-soft)] lg:hidden dark:border-slate-800 dark:bg-slate-950"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={linkClass(link.href, true)}
              aria-current={activeHref === link.href ? "page" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
