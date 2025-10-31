"use client"

import CTAButton from "@/components/CTAButton/CTAButton"
import { Droplets, Shield, Settings, Sparkles } from "lucide-react"
import { useI18n } from "@/i18n/I18nContext"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

function Hero() {
  const { messages } = useI18n()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  if (!messages || !messages.Hero) return <section className="bg-background" />

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section className="w-full flex flex-col gap-2 mt-4">
      {/* Верхній блок */}
      <motion.div
        className="flex flex-col lg:flex-row gap-2 h-auto lg:h-[59vh]"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.div
          className="bg-white rounded-[24px] w-full lg:w-1/2 p-[36px] mt-[4vh] lg:mt-[9.5vh] tracking-tighter leading-[0.9]"
          {...(!isMobile && {
            whileHover: { scale: 1.02 },
            transition: { type: "spring", stiffness: 200 },
          })}
        >
          <span className="block text-[40px] sm:text-[52px] lg:text-[64px] font-bold">
            {messages?.Hero.Title}
          </span>
        </motion.div>

        <motion.div
          className="bg-white rounded-[24px] w-full lg:w-1/2 h-[40vh] lg:h-auto"
          style={{
            backgroundImage: `url("/hero-img.png")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center 80%",
          }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </motion.div>

      {/* Нижній блок */}
      <motion.div
        className="flex flex-col lg:flex-row gap-2 h-auto lg:h-[40vh]"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ delay: 0.2 }}
      >
        {/* Текст та кнопки */}
        <motion.div
          className="bg-white rounded-[24px] flex flex-col justify-between p-[36px] w-full lg:w-1/2"
          {...(!isMobile && {
            whileHover: { scale: 1.01 },
            transition: { type: "spring", stiffness: 200 },
          })}
        >
          <p className="text-[20px] sm:text-[26px] lg:text-[32px] font-medium tracking-tight leading-[1.2] mb-6 lg:mb-0">
            {messages?.Hero.Subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-[16px] lg:gap-[24px]">
            <motion.div {...(!isMobile && { whileHover: { scale: 1.05 } })}>
              <a href="#Constructor">
                <CTAButton variant="filled">
                  {messages?.Hero.PrimaryButtonText}
                </CTAButton>
              </a>
            </motion.div>
            <motion.div {...(!isMobile && { whileHover: { scale: 1.05 } })}>
              <a href="https://wa.me/380960823440">
                <CTAButton variant="outline">
                  {messages?.Hero.SecondaryButtonText}
                </CTAButton>
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Іконки-бенефіти */}
        <div className="w-full lg:w-1/2 flex flex-col gap-2">
          <div className="flex flex-col sm:flex-row gap-2 h-auto lg:h-1/2">
            {[
              { Icon: Droplets, text: messages?.Hero.Benefits.Benefit1.Title },
              { Icon: Shield, text: messages?.Hero.Benefits.Benefit2.Title },
            ].map(({ Icon, text }, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-[24px] bg-white p-[36px] flex flex-col justify-between"
                {...(!isMobile && {
                  whileHover: { scale: 1.05, y: -4 },
                  transition: { type: "spring", stiffness: 200 },
                })}
              >
                <Icon className="w-[28px] sm:w-[36px] lg:w-[40px] h-[28px] sm:h-[36px] lg:h-[40px]" />
                <span className="text-[22px] sm:text-[28px] lg:text-[32px] font-medium">
                  {text}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-2 h-auto lg:h-1/2">
            {[
              { Icon: Settings, text: messages?.Hero.Benefits.Benefit3.Title },
              { Icon: Sparkles, text: messages?.Hero.Benefits.Benefit4.Title },
            ].map(({ Icon, text }, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-[24px] bg-white p-[36px] flex flex-col justify-between"
                {...(!isMobile && {
                  whileHover: { scale: 1.05, y: -4 },
                  transition: { type: "spring", stiffness: 200 },
                })}
              >
                <Icon className="w-[28px] sm:w-[36px] lg:w-[40px] h-[28px] sm:h-[36px] lg:h-[40px]" />
                <span className="text-[22px] sm:text-[28px] lg:text-[32px] font-medium">
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
