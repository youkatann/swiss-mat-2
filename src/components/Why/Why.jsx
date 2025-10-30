'use client'
import { useI18n } from "../../i18n/I18nContext"
import { motion } from "framer-motion"

function Why() {
  const { messages } = useI18n()
  if (!messages || !messages.Why)
    return <section className="px-[80px] py-[80px] bg-background" />

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
  }

  return (
    <motion.section
      id="Benefits"
      className="mt-36 flex gap-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="p-[36px] bg-white rounded-[24px] min-w-[40%]"
        variants={fadeIn}
        custom={0}
      >
        <h3 className="text-[64px] font-bold tracking-tighter leading-[0.9]">
          {messages?.Why.Title}
        </h3>
      </motion.div>

      <div className="flex gap-2">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="flex flex-col justify-between p-[36px] bg-white rounded-[24px]"
            variants={fadeIn}
            custom={i}
            whileHover={{ y: -4 }}
          >
            <span className="text-[32px] font-medium tracking-tighter leading-[0.9]">
              {messages?.Why.Benefits[`Benefit${i}`].Title}
            </span>
            <p className="text-[16px] font-medium tracking-tighter leading-[1.2]">
              {messages?.Why.Benefits[`Benefit${i}`].Description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Why
