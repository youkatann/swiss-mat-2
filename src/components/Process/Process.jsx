'use client'
import { CircleCheckBigIcon, ClockIcon, PackageIcon, TruckIcon } from "lucide-react"
import { useI18n } from "@/i18n/I18nContext"
import { motion } from "framer-motion"

function Process() {
  const { messages } = useI18n()
  if (!messages || !messages.Process)
    return <section className="px-[80px] py-[80px] bg-background" />

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
      className="flex flex-col gap-2 mt-36"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="p-[36px] bg-white rounded-[24px] w-1/2"
        variants={fadeIn}
        custom={0}
      >
        <h3 className="text-[64px] font-bold tracking-tighter leading-[0.9]">
          {messages?.Process.Title}
        </h3>
      </motion.div>

      <div className="flex flex-col gap-2">
        {[0, 1].map((row) => (
          <div key={row} className="flex gap-2">
            {steps.slice(row * 2, row * 2 + 2).map(({ Icon, step }, i) => (
              <motion.div
                key={step}
                className="flex flex-col justify-between bg-white rounded-[24px] p-[36px] w-1/2 h-[30vh]"
                variants={fadeIn}
                custom={i + row * 2 + 1}
                whileHover={{ y: -4 }}
              >
                <Icon className="w-[48px] h-[48px]" />
                <div className="flex flex-col gap-6">
                  <span className="text-[32px] font-medium tracking-tighter leading-[0.9]">
                    {messages?.Process.Steps[`Step${step}`].Title}
                  </span>
                  <p className="text-[16px] font-medium tracking-tighter leading-[1.2]">
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
