'use client'
import { useI18n } from "../../i18n/I18nContext"
import { motion } from "framer-motion"

function Why() {
  const { messages } = useI18n()
  if (!messages || !messages.Why) return <section className="bg-background" />

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
      className="mt-20 md:mt-36 flex flex-col lg:flex-row gap-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Заголовок */}
      <motion.div
        className="p-[24px] md:p-[36px] bg-white rounded-[24px] w-full lg:w-[55%]"
        variants={fadeIn}
        custom={0}
      >
        <h3 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold tracking-tighter leading-[1]">
          {messages?.Why.Title}
        </h3>
      </motion.div>

      {/* Блоки з перевагами */}
      <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row gap-2 w-full">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="flex flex-col justify-between p-[24px] md:p-[32px] bg-white rounded-[24px] flex-1"
            variants={fadeIn}
            custom={i}
            whileHover={{ y: -4 }}
          >
            <span className="text-[24px] sm:text-[28px] md:text-[32px] font-medium tracking-tighter leading-[1]">
              {messages?.Why.Benefits[`Benefit${i}`].Title}
            </span>
            <p className="text-[14px] sm:text-[15px] md:text-[16px] font-medium tracking-tight leading-[1.3] mt-2">
              {messages?.Why.Benefits[`Benefit${i}`].Description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Why
