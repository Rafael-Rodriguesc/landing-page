"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./logo";

const links = [
  ["MODELOS", "#modelos"],
  ["DESEMPENHO", "#desempenho"],
  ["TECNOLOGIA", "#tecnologia"],
  ["HISTÓRIA", "#historia"],
  ["CONTATO", "#contato"],
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`nav-wrap ${scrolled ? "nav-wrap--scrolled" : ""}`}>
      <nav className="nav" aria-label="Navegacao principal">
        <Logo />
        <div className="nav__links">
          {links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
        </div>
        <a className="nav__sound" href="#configurador">CONFIGURE O SEU</a>
        <button className="nav__menu" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={21} /> : <Menu size={23} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu" initial={reduceMotion ? false : { opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}>
            {links.map(([label, href]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>)}
            <a href="#configurador" onClick={() => setOpen(false)}>CONFIGURE O SEU</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
