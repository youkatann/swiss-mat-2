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
        className="text-foreground appearance-none bg-transparent px-3 py-1 font-medium focus:outline-none cursor-pointer pr-6 hover:text-accent/70 text-sm sm:text-base"
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
    <header className="fixed top-0 left-0 z-[40] w-full p-2 flex justify-between items-center">
      {/* Десктопний блок */}
      <div className="hidden md:flex bg-white p-[36px] rounded-[24px] w-[49vw] justify-between items-center">
        <img className="h-[40px]" src="/logo.png" alt="Logo" />
        <div className="flex text-[16px] font-medium gap-[24px]">
          <a href="#Constructor" className="hover:text-accent transition">Catalogue</a>
          <a href="#Benefits" className="hover:text-accent transition">Avantages</a>
          <a href="#Faq" className="hover:text-accent transition">FAQ</a>
          <a href="#Footer" className="hover:text-accent transition">Contacts</a>
        </div>
        <LanguageSwitcher />
      </div>

      {/* CTA (десктоп) */}
      <a href="#Constructor" className="hidden md:block cursor-pointer">
        <CTAButton>Demander un devis</CTAButton>
      </a>

      {/* Бургер (мобільний) */}
      <div className="flex md:hidden justify-between w-full items-center">
        <img src="/logo.png" alt="Logo" className="h-[36px]" />
        <button onClick={() => setOpen(!open)} className="p-2 text-accent">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Мобільне меню */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
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
