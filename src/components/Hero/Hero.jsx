"use client"

import CTAButton from "@/components/CTAButton/CTAButton"
import { Droplets, Shield, Settings, Sparkles } from "lucide-react"
import { useI18n } from "@/i18n/I18nContext"
import { motion } from "framer-motion"

function Hero() {
  const { messages } = useI18n()
  if (!messages || !messages.Hero)
    return <section className="px-[24px] py-[64px] bg-background" />

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section className="w-full flex flex-col gap-4 px-[16px] sm:px-[32px] lg:px-[80px] py-[40px] lg:py-[80px]">
      {/* Верхній блок */}
      <motion.div
        className="flex flex-col lg:flex-row gap-4 lg:gap-2 min-h-[60vh]"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {/* Текст */}
        <motion.div
          className="bg-white rounded-[24px] w-full lg:w-1/2 p-[24px] lg:p-[36px] mt-4 lg:mt-[9.5vh] tracking-tighter leading-[0.9]"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <span className="text-[36px] sm:text-[48px] lg:text-[64px] font-bold block">
            {messages?.Hero.Title}
          </span>
        </motion.div>

        {/* Зображення */}
        <motion.div
          className="bg-white rounded-[24px] w-full lg:w-1/2 h-[40vh] lg:h-auto"
          style={{
            backgroundImage: `url("/hero-img.png")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center 80%"
          }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </motion.div>

      {/* Нижній блок */}
      <motion.div
        className="flex flex-col lg:flex-row gap-4 lg:gap-2 min-h-[40vh]"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ delay: 0.2 }}
      >
        {/* Текст та кнопки */}
        <motion.div
          className="bg-white rounded-[24px] flex flex-col justify-between p-[24px] lg:p-[36px] w-full lg:w-1/2"
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <p className="text-[20px] sm:text-[24px] lg:text-[32px] font-medium tracking-tight leading-[1.2] mb-6 lg:mb-0">
            {messages?.Hero.Subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-[16px] sm:gap-[24px]">
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
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-4 h-auto sm:h-1/2">
            {[
              { Icon: Droplets, text: messages?.Hero.Benefits.Benefit1.Title },
              { Icon: Shield, text: messages?.Hero.Benefits.Benefit2.Title },
            ].map(({ Icon, text }, i) => (
              <motion.div
                key={i}
                className="w-full sm:w-1/2 rounded-[24px] bg-white p-[24px] lg:p-[36px] flex flex-col justify-between"
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Icon className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]" />
                <span className="text-[20px] sm:text-[24px] lg:text-[32px] font-medium mt-2">
                  {text}
                </span>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 h-auto sm:h-1/2">
            {[
              { Icon: Settings, text: messages?.Hero.Benefits.Benefit3.Title },
              { Icon: Sparkles, text: messages?.Hero.Benefits.Benefit4.Title },
            ].map(({ Icon, text }, i) => (
              <motion.div
                key={i}
                className="w-full sm:w-1/2 rounded-[24px] bg-white p-[24px] lg:p-[36px] flex flex-col justify-between"
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Icon className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]" />
                <span className="text-[20px] sm:text-[24px] lg:text-[32px] font-medium mt-2">
                  {text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
