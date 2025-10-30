"use client"

import CTAButton from "@/components/CTAButton/CTAButton"
import { Droplets, Shield, Settings, Sparkles } from "lucide-react"
import { useI18n } from "@/i18n/I18nContext"
import { motion } from "framer-motion"

function Hero() {
  const { messages } = useI18n()
  if (!messages || !messages.Hero)
    return <section className="px-[80px] py-[80px] bg-background" />

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section className="w-full h-full flex flex-col gap-2">
      {/* Верхній блок */}
      <motion.div
        className="flex gap-2 h-[59vh]"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.div
          className="bg-white rounded-[24px] w-1/2 p-[36px] mt-[9.5vh] tracking-tighter leading-[0.9]"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <span className="text-[64px] font-bold">
            {messages?.Hero.Title}
          </span>
        </motion.div>

        <motion.div
          className="bg-white rounded-[24px] w-1/2"
          style={{
            backgroundImage: `url("/hero-img.png")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </motion.div>

      {/* Нижній блок */}
      <motion.div
        className="flex gap-2 h-[40vh]"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ delay: 0.2 }}
      >
        {/* Текст та кнопки */}
        <motion.div
          className="bg-white rounded-[24px] flex flex-col justify-between p-[36px] w-1/2"
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <p className="text-[32px] font-medium tracking-tight leading-[1.2]">
            {messages?.Hero.Subtitle}
          </p>
          <div className="flex gap-[24px]">
            <motion.div whileHover={{ scale: 1.05 }}>
            <a href="#Constructor">
              <CTAButton variant="filled">
                {messages?.Hero.PrimaryButtonText}
              </CTAButton>
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
                <a href="https://wa.me/380960823440">
              <CTAButton variant="outline">
                {messages?.Hero.SecondaryButtonText}
              </CTAButton>
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Іконки-бенефіти */}
        <div className="w-1/2 flex flex-col gap-2">
          <div className="flex gap-2 h-1/2">
            {[
              { Icon: Droplets, text: messages?.Hero.Benefits.Benefit1.Title },
              { Icon: Shield, text: messages?.Hero.Benefits.Benefit2.Title },
            ].map(({ Icon, text }, i) => (
              <motion.div
                key={i}
                className="w-1/2 rounded-[24px] bg-white p-[36px] flex flex-col justify-between"
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Icon />
                <span className="text-[32px] font-medium">{text}</span>
              </motion.div>
            ))}
          </div>
          <div className="flex gap-2 h-1/2">
            {[
              { Icon: Settings, text: messages?.Hero.Benefits.Benefit3.Title },
              { Icon: Sparkles, text: messages?.Hero.Benefits.Benefit4.Title },
            ].map(({ Icon, text }, i) => (
              <motion.div
                key={i}
                className="w-1/2 rounded-[24px] bg-white p-[36px] flex flex-col justify-between"
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Icon />
                <span className="text-[32px] font-medium">{text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
