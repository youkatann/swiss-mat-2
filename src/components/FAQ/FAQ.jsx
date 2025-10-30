'use client'
import { useState } from "react"
import { useI18n } from "@/i18n/I18nContext"
import { motion, AnimatePresence } from "framer-motion"

export default function FAQ() {
  const [activeId, setActiveId] = useState(1)
  const { messages } = useI18n()
  if (!messages || !messages.FAQ)
    return <section className="px-[80px] py-[80px] bg-background" />

  const faqs = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    question: messages?.FAQ?.Questions[`Question${i + 1}`]?.Question,
    answer: messages?.FAQ?.Questions[`Question${i + 1}`]?.Answer,
  }))

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  }

  return (
    <motion.section
      id="Faq"
      className="w-full flex flex-col lg:flex-row overflow-hidden mt-36"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="w-full lg:w-1/2 flex flex-col divide-y divide-white mr-2">
        <motion.div className="p-[36px] bg-white rounded-[24px]" variants={fadeIn} custom={0}>
          <h3 className="text-[64px] font-bold tracking-tighter leading-[0.9]">
            {messages?.FAQ.Title}
          </h3>
        </motion.div>

        <div className="flex flex-col gap-2 mt-2">
          {faqs.map((faq, i) => (
            <motion.button
              key={faq.id}
              onClick={() => setActiveId(faq.id)}
              variants={fadeIn}
              custom={i + 1}
              whileHover={{ scale: 1.02 }}
              className={`flex justify-between items-center text-left p-[36px] rounded-[24px] ${
                activeId === faq.id
                  ? "bg-[#c5342b] text-white"
                  : "bg-white text-[#0d1b2a] hover:bg-[#f0f0f0]"
              }`}
            >
              <span className="text-[32px] font-bold tracking-tighter leading-[0.9]">
                {faq.question}
              </span>
              <span>{String(faq.id).padStart(2, "0")}</span>
            </motion.button>
          ))}
        </div>
      </div>

      <motion.div
        className="w-full lg:w-1/2 bg-white p-6 lg:p-10 flex flex-col justify-between items-start rounded-[24px]"
        variants={fadeIn}
        custom={7}
      >
        <AnimatePresence mode="wait">
          <motion.p
            key={activeId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="text-[32px] font-medium leading-[1.2]"
          >
            {faqs.find((f) => f.id === activeId)?.answer}
          </motion.p>
        </AnimatePresence>
      </motion.div>
    </motion.section>
  )
}
