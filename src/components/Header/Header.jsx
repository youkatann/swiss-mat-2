import CTAButton from "@/components/CTAButton/CTAButton"
import { useI18n } from "@/i18n/I18nContext";
import { ChevronDown } from "lucide-react";

function LanguageSwitcher() {
  const { locale, changeLocale } = useI18n();

  const handleChange = (event) => {
    changeLocale(event.target.value);
  };

  return (
  <div className="relative inline-flex items-center">
      <select
        value={locale}
        onChange={handleChange}
        className="text-foreground appearance-none bg-transparent px-4 py-2 font-medium focus:outline-none focus:text-accent/80 transition-all cursor-pointer pr-8 hover:text-accent/70"
      >
        <option value="fr">FR</option>
        <option value="de">DE</option>
      </select>
      <ChevronDown
        className="absolute right-2 top-1/2 -translate-y-1/2 text-accent opacity-80 transition-transform duration-200 pointer-events-none group-hover:translate-y-[1px]"
        size={18}
      />
    </div>
  );
}

function Header() {
  return (
    <header className='fixed top-0 left-0 z-[40] w-full p-2 flex justify-between items-center'>
        <div className='bg-white p-[36px] rounded-[24px] flex w-[49vw] justify-between items-center'>
            <img className='h-[40px]' src='/logo.png'/>
            <div className='flex text-[16px] font-medium gap-[24px]'>
                <a href="#Constructor">Catalogue</a>
                <a href="#Benefits">Avantages</a>
                <a href="#Faq">FAQ</a>
                <a href="#Footer">Contacts</a>
            </div>
            <div><LanguageSwitcher/></div>
        </div>
        <a href="#Constructor" className="cursor-pointer">
        <CTAButton>Demander un devis</CTAButton>
        </a>
    </header>
  )
}

export default Header