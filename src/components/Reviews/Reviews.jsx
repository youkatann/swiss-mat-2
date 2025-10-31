'use client'
import { useI18n } from '../../i18n/I18nContext'
import { motion } from 'framer-motion'

function Reviews() {
  const { messages } = useI18n()
  if (!messages || !messages.Reviews) return <section className="bg-background" />

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
      id="Reviews"
      className="mt-16 lg:mt-36 flex flex-col lg:flex-row gap-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Ліва колонка з заголовком */}
      <motion.div
        className="p-[24px] md:p-[36px] bg-white rounded-[24px] w-full lg:w-[55%]"
        variants={fadeIn}
        custom={0}
      >
        <h3 className="text-[36px] md:text-[48px] xl:text-[64px] font-bold tracking-tighter leading-[0.9]">
          {messages?.Reviews.Title}
        </h3>
      </motion.div>

      {/* Блок відгуків */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-2 w-full">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="flex flex-col justify-between p-[24px] md:p-[36px] bg-white rounded-[24px] w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.5rem)]"
            variants={fadeIn}
            custom={i}
            whileHover={{ y: -4 }}
          >
            <span className="text-[20px] md:text-[24px] xl:text-[32px] font-medium tracking-tighter leading-[1.1] mb-2">
              {messages?.Reviews.Reviews[`Review${i}`].Author}
            </span>
            <p className="text-[14px] md:text-[16px] font-medium tracking-tight leading-[1.3]">
              {messages?.Reviews.Reviews[`Review${i}`].Text}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Reviews
