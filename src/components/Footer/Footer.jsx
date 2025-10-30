'use client'

import { useI18n } from "@/i18n/I18nContext"
import { motion } from "framer-motion"
import { PhoneIcon, MailIcon, MapPinIcon, InstagramIcon } from "lucide-react"

const linkItem = {
  rest: { y: 0 },
  hover: {
    y: -4,
    transition: { type: "spring", stiffness: 400, damping: 15 },
  },
}

const underline = {
  rest: { scaleX: 0 },
  hover: {
    scaleX: 1,
    transition: { type: "spring", stiffness: 400, damping: 30 },
  },
}

function LinkItem({ href, children, className = "" }) {
  return (
    <motion.a
      href={href}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className={`relative w-fit inline-flex items-center gap-1 ${className}`}
    >
      <motion.div variants={linkItem} className="flex items-center gap-1">
        {children}
      </motion.div>
      <motion.span
        variants={underline}
        className="absolute -bottom-0.5 left-0 h-[1px] w-full origin-left"
        style={{ backgroundColor: "currentColor" }}
      />
    </motion.a>
  )
}

function Footer() {
  const { messages } = useI18n()
  if (!messages || !messages.Footer)
    return <section className="px-[80px] py-[80px] bg-background" />

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  }

  return (
    <motion.section
      id="Footer"
      className="flex gap-2 mt-36 w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // <- анімації лише коли в полі зору
    >
      {/* Logo + About */}
      <motion.div
        className="flex flex-col gap-[24px] w-1/2 p-[36px] bg-muted rounded-[24px]"
        variants={fadeIn}
        custom={0}
      >
        <motion.img
          src="/logo.png"
          alt="SwissMat Logo"
          className="w-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
        <div className="flex flex-col gap-4">
          <span className="text-[24px] font-medium tracking-tighter">
            {messages?.Footer.Title}
          </span>
          <p className="text-[16px] font-medium tracking-tighter">
            {messages?.Footer.Subtitle}
          </p>
        </div>
      </motion.div>

      {/* Contact + Quick Links */}
      <div className="flex gap-2 w-1/2">
        <motion.div
          className="flex flex-col gap-[24px] w-1/2 p-[36px] bg-muted rounded-[24px]"
          variants={fadeIn}
          custom={1}
        >
          <span className="text-[32px] font-medium tracking-tighter leading-[0.9]">
            {messages?.Footer.Contact}
          </span>
          <div className="flex flex-col gap-[8px]">
            <LinkItem href="tel:+41795497825" className="text-foreground">
              <PhoneIcon className="w-4 h-4" /> +41 79 549 78 25
            </LinkItem>
            <LinkItem
              href="mailto:swissmat.info@gmail.com"
              className="text-foreground"
            >
              <MailIcon className="w-4 h-4" /> swissmat.info@gmail.com
            </LinkItem>
            <motion.div
              className="flex gap-1 items-center"
              whileHover={{ x: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <MapPinIcon className="w-4 h-4" />
              <span>{messages?.Footer.Address}</span>
            </motion.div>
            <LinkItem
              href="https://www.instagram.com/SwissMat.ch/"
              className="text-foreground"
            >
              <InstagramIcon className="w-4 h-4" /> @SwissMat.ch
            </LinkItem>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col gap-[24px] w-1/2 p-[36px] bg-muted rounded-[24px]"
          variants={fadeIn}
          custom={2}
        >
          <span className="text-[32px] font-medium tracking-tighter leading-[0.9]">
            {messages?.Footer.QuickLinks}
          </span>
          <div className="flex flex-col gap-[8px]">
            <LinkItem href="#Faq" className="text-foreground">
              FAQ
            </LinkItem>
            <LinkItem href="#" className="text-foreground">
              {messages?.Footer.AGB}
            </LinkItem>
            <LinkItem href="#" className="text-foreground">
              {messages?.Footer.PrivacyPolicy}
            </LinkItem>
            <LinkItem href="#" className="text-foreground">
              {messages?.Footer.ReturnPolicy}
            </LinkItem>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Footer
