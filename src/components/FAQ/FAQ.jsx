'use client'
import { useState } from "react"
import { useI18n } from "@/i18n/I18nContext"
import { motion, AnimatePresence } from "framer-motion"

export default function FAQ() {
  const [activeId, setActiveId] = useState(null)
  const { messages } = useI18n()
  if (!messages || !messages.FAQ)
    return <section className="px-4 py-12 bg-background" />

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
      className="w-full flex flex-col lg:flex-row overflow-hidden mt-20 lg:mt-36 gap-4 px-4 sm:px-8 lg:px-[80px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Ліва колонка з питаннями */}
      <div className="w-full lg:w-1/2 flex flex-col gap-2">
        <motion.div
          className="p-6 sm:p-8 bg-white rounded-[24px]"
          variants={fadeIn}
          custom={0}
        >
          <h3 className="text-[36px] sm:text-[48px] lg:text-[64px] font-bold tracking-tighter leading-[0.9]">
            {messages?.FAQ.Title}
          </h3>
        </motion.div>

        <div className="flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <motion.div key={faq.id} variants={fadeIn} custom={i + 1}>
              <button
                onClick={() => setActiveId(activeId === faq.id ? null : faq.id)}
                whilehover="hover"
                className={`w-full flex justify-between items-center text-left p-4 sm:p-6 rounded-[24px] transition-colors ${
                  activeId === faq.id
                    ? "bg-[#c5342b] text-white"
                    : "bg-white text-[#0d1b2a] hover:bg-[#f0f0f0]"
                }`}
              >
                <span className="text-lg sm:text-2xl lg:text-[32px] font-bold tracking-tighter leading-[1.1]">
                  {faq.question}
                </span>
                <span className="text-sm sm:text-base lg:text-lg font-medium">
                  {String(faq.id).padStart(2, "0")}
                </span>
              </button>

              {/* Мобільна відповідь прямо під питанням */}
              <AnimatePresence>
                {activeId === faq.id && (
                  <motion.div
                    key={`answer-${faq.id}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="lg:hidden overflow-hidden"
                  >
                    <div className="bg-white p-4 sm:p-6 rounded-[24px] mt-2 text-base sm:text-lg font-medium leading-[1.4]">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Права колонка — тільки для великих екранів */}
      <motion.div
        className="hidden lg:flex w-full lg:w-1/2 bg-white p-8 lg:p-10 flex-col justify-between items-start rounded-[24px] min-h-[320px]"
        variants={fadeIn}
        custom={7}
      >
        <AnimatePresence mode="wait">
          {activeId && (
            <motion.p
              key={activeId}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-[24px] xl:text-[32px] font-medium leading-[1.4]"
            >
              {faqs.find((f) => f.id === activeId)?.answer}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  )
}
