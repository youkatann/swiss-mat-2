'use client'
import { useI18n } from "@/i18n/I18nContext"
import { motion } from "framer-motion"

function Gallery() {
  const { messages } = useI18n()
  if (!messages || !messages.Gallery)
    return <section className="px-[80px] py-[80px] bg-background" />

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6 },
    }),
  }

  const bgStyle = (url) => ({
    backgroundImage: `url("${url}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  })

  return (
    <motion.section
      className="flex gap-2 h-screen mt-36"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex flex-col w-1/2 gap-2">
        <motion.div
          className="bg-white p-[36px] rounded-[24px]"
          variants={fadeIn}
          custom={0}
        >
          <h3 className="text-[64px] font-bold tracking-tighter leading-[0.9]">
            {messages.Gallery.Title}
          </h3>
        </motion.div>

        {["/photos/images-1.png", "/photos/images-3.png"].map((src, i) => (
          <motion.div
            key={src}
            className="h-full rounded-[24px]"
            style={bgStyle(src)}
            variants={fadeIn}
            custom={i + 1}
            whileHover={{ opacity: 0.95 }}
          />
        ))}
      </div>

      <div className="flex flex-col w-1/2 gap-2">
        {["/photos/images-4.tiff", "/photos/images-2.jpg"].map((src, i) => (
          <motion.div
            key={src}
            className="h-full rounded-[24px]"
            style={bgStyle(src)}
            variants={fadeIn}
            custom={i + 3}
            whileHover={{ opacity: 0.95 }}
          />
        ))}
      </div>
    </motion.section>
  )
}

export default Gallery
