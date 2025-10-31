'use client'
import { CircleCheckBigIcon, ClockIcon, PackageIcon, TruckIcon } from "lucide-react"
import { useI18n } from "@/i18n/I18nContext"
import { motion } from "framer-motion"

function Process() {
  const { messages } = useI18n()
  if (!messages || !messages.Process)
    return <section className="py-[40px] bg-background" />

  const fadeIn = {
    hidden: { opacity: 0, y: 25 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
  }

  const steps = [
    { Icon: CircleCheckBigIcon, step: 1 },
    { Icon: ClockIcon, step: 2 },
    { Icon: PackageIcon, step: 3 },
    { Icon: TruckIcon, step: 4 },
  ]

  return (
    <motion.section
      className="flex flex-col gap-2 mt-16 md:mt-36"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Заголовок */}
      <motion.div
        className="p-[24px] sm:p-[36px] bg-white rounded-[24px] w-full md:w-1/2"
        variants={fadeIn}
        custom={0}
      >
        <h3 className="text-[36px] sm:text-[48px] md:text-[64px] font-bold tracking-tighter leading-[1]">
          {messages?.Process.Title}
        </h3>
      </motion.div>

      {/* Кроки */}
      <div className="flex flex-col gap-2">
        {[0, 1].map((row) => (
          <div
            key={row}
            className="flex flex-col sm:flex-row gap-2"
          >
            {steps.slice(row * 2, row * 2 + 2).map(({ Icon, step }, i) => (
              <motion.div
                key={step}
                className="flex flex-col justify-between bg-white rounded-[24px] p-[24px] sm:p-[36px] w-full sm:w-1/2 h-auto sm:h-[30vh]"
                variants={fadeIn}
                custom={i + row * 2 + 1}
                whileHover={{ y: -4 }}
              >
                <Icon className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px]" />
                <div className="flex flex-col gap-2 sm:gap-6 mt-4 sm:mt-0">
                  <span className="text-[24px] sm:text-[28px] md:text-[32px] font-medium tracking-tighter leading-[1]">
                    {messages?.Process.Steps[`Step${step}`].Title}
                  </span>
                  <p className="text-[14px] sm:text-[16px] font-medium leading-[1.3]">
                    {messages?.Process.Steps[`Step${step}`].Description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </motion.section>
  )
}

export default Process
