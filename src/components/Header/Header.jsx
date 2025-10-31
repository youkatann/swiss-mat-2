"use client";
import { useState } from "react";
import CTAButton from "@/components/CTAButton/CTAButton";
import { useI18n } from "@/i18n/I18nContext";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function LanguageSwitcher() {
  const { locale, changeLocale } = useI18n();

  return (
    <div className="relative inline-flex items-center">
      <select
        value={locale}
        onChange={(e) => changeLocale(e.target.value)}
        className="text-foreground bg-transparent appearance-none px-3 py-1 font-medium focus:outline-none pr-6 cursor-pointer text-sm sm:text-base"
      >
        <option value="fr">FR</option>
        <option value="de">DE</option>
      </select>
      <ChevronDown
        className="absolute right-1 top-1/2 -translate-y-1/2 text-accent opacity-80 pointer-events-none"
        size={16}
      />
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full py-2 px-4 flex items-center justify-between">
      {/* Логотип */}
      <img src="/logo.png" alt="Logo" className="h-[32px] sm:h-[40px]" />

      {/* Навігація (десктоп) */}
      <nav className="hidden md:flex items-center gap-6 font-medium text-[15px]">
        <a href="#Constructor" className="hover:text-accent">Catalogue</a>
        <a href="#Benefits" className="hover:text-accent">Avantages</a>
        <a href="#Faq" className="hover:text-accent">FAQ</a>
        <a href="#Footer" className="hover:text-accent">Contacts</a>
      </nav>

      {/* Мова + CTA (десктоп) */}
      <div className="hidden md:flex items-center gap-4">
        <LanguageSwitcher />
        <CTAButton>Demander un devis</CTAButton>
      </div>

      {/* Іконка меню (мобільна) */}
      <button
        className="md:hidden text-accent"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        {open ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Мобільне меню */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full left-0 w-full bg-white flex flex-col items-center gap-5 py-6 shadow-md border-t border-foreground/10 md:hidden"
          >
            <a href="#Constructor" onClick={() => setOpen(false)} className="hover:text-accent">Catalogue</a>
            <a href="#Benefits" onClick={() => setOpen(false)} className="hover:text-accent">Avantages</a>
            <a href="#Faq" onClick={() => setOpen(false)} className="hover:text-accent">FAQ</a>
            <a href="#Footer" onClick={() => setOpen(false)} className="hover:text-accent">Contacts</a>
            <LanguageSwitcher />
            <CTAButton>Demander un devis</CTAButton>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
