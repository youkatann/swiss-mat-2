'use client'
import { useI18n } from '@/i18n/I18nContext'
import { useState } from 'react'
import CTAButton from '@/components/CTAButton/CTAButton'
import { motion } from 'framer-motion'

export default function CarMatCustomizer() {
  const { messages } = useI18n()

  const [form, setForm] = useState({
    brand: '',
    model: '',
    baseColor: 'black',
    borderColor: 'red',
    kit: 'standard',
    name: '',
    email: '',
    phone: '',
    comment: '',
    privacy: false,
    customBrand: false,
    customText: '',
  })

  if (!messages || !messages.Constructor)
    return <section className="bg-background" />

  const carData = {
    Audi: ['A1', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q2', 'Q3', 'Q5', 'Q7', 'Q8', 'e-tron'],
    BMW: ['Series 1', 'Series 2', 'Series 3', 'Series 4', 'Series 5', 'Series 6', 'Series 7', 'X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7', 'i3', 'i4', 'iX'],
    Ford: ['Fiesta', 'Focus', 'Kuga', 'Mondeo', 'Mustang', 'Puma'],
    'Mercedes-Benz': ['Class A', 'Class B', 'Class C', 'Class E', 'Class S', 'EQA', 'EQC', 'EQS', 'GLA', 'GLB', 'GLC', 'GLE', 'GLS'],
    Opel: ['Astra', 'Costra', 'Crossland', 'Grandland', 'Insignia', 'Mokka'],
    Tesla: ['Model 3', 'Model S', 'Model X', 'Model Y'],
    Toyota: ['CR-H', 'Camry', 'Corolla', 'Prius', 'Highlander', 'RAV4', 'Yaris'],
    Volkswagen: ['Golf', 'ID.3', 'ID.4', 'Jetta', 'Passat', 'Polo', 'T-Cross', 'T-Roc', 'Tiguan', 'Touareg'],
    'Škoda': ['Fabia', 'Kamiq', 'Karoq', 'Kodiaq', 'Octavia', 'Superb'],
  }

  const baseImages = {
    rhombus: {
      black: '/rhombus/RB.png',
      grey: '/rhombus/RG.png',
      cream: '/rhombus/RC.png',
      beige: '/rhombus/RI.png',
      khaki: '/rhombus/RK.png',
      lightblue: '/rhombus/RL.png',
      blue: '/rhombus/RN.png',
      red: '/rhombus/RR.png',
      yellow: '/rhombus/RY.png',
      bordeaux: '/rhombus/RW.png',
      brown: '/rhombus/RZ.png',
    },
  }

  const borderImages = {
    black: '/borders/B.png',
    grey: '/borders/G.png',
    beige: '/borders/I.png',
    brown: '/borders/E.png',
    red: '/borders/R.png',
    blue: '/borders/N.png',
    yellow: '/borders/Y.png',
    lightblue: '/borders/L.png',
    orange: '/borders/O.png',
    bordeaux: '/borders/V.png',
    cyan: '/borders/Z.png',
  }

  const materialColors = {
    black: '#000000',
    grey: '#434148',
    cream: '#D5C999',
    beige: '#DFC57E',
    khaki: '#56674F',
    lightblue: '#568DF9',
    blue: '#324582',
    red: '#D30202',
    yellow: '#FDD743',
    bordeaux: '#8A4050',
    brown: '#71584F',
  }

  const borderColors = {
    black: '#000000',
    grey: '#434148',
    beige: '#DFC57E',
    brown: '#71584F',
    red: '#D30202',
    blue: '#324582',
    yellow: '#FDD743',
    lightblue: '#568DF9',
    orange: '#F59908',
    bordeaux: '#8A4050',
    cyan: '#049F8A',
  }

  const handleChange = (name, value) => setForm((p) => ({ ...p, [name]: value }))

  const baseImg = baseImages.rhombus[form.baseColor]
  const borderImg = borderImages[form.borderColor]

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    if (!form.privacy) {
      alert('You must agree with the privacy policy.')
      return
    }

    const carInfo = form.customBrand ? form.customText : `${form.brand} ${form.model}`
    const subject = encodeURIComponent(`Car Mat Order: ${carInfo}`)
    const body = encodeURIComponent(
      `Make & Model: ${carInfo}\nBase color: ${form.baseColor}\nEdge color: ${form.borderColor}\nKit: ${form.kit}\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nComment: ${form.comment}`
    )
    window.location.href = `mailto:ilyataypole@gmail.com?subject=${subject}&body=${body}`
  }

  const handleWhatsappSubmit = (e) => {
    e.stopPropagation()
    e.preventDefault()
    if (!form.privacy) {
      alert('You must agree with the privacy policy.')
      return
    }

    const carInfo = form.customBrand ? form.customText : `${form.brand} ${form.model}`
    const message = `*Car Mat Order*\n\n` +
      `*Model:* ${carInfo}\n` +
      `*Base color:* ${form.baseColor}\n` +
      `*Edge color:* ${form.borderColor}\n` +
      `*Kit:* ${form.kit}\n` +
      `*Name:* ${form.name}\n` +
      `*Email:* ${form.email}\n` +
      `*Phone:* ${form.phone}\n` +
      `*Message:* ${form.comment || '—'}`

    const phoneNumber = '380960823440'
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  const inputClass =
    'appearance-none border border-foreground rounded-full px-4 sm:px-6 py-3 sm:py-4 w-full text-sm focus:outline-none focus:ring-2 focus:ring-black transition bg-white'

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
    }),
  }

  return (
    <motion.div
      className="flex flex-col lg:flex-row gap-2 w-full mt-16"
      initial="hidden"
      animate="visible"
    >
      {/* LEFT SIDE */}
      <motion.form
        id="Constructor"
        onSubmit={handleEmailSubmit}
        className="flex-1 flex flex-col justify-center bg-white p-6 sm:p-8 lg:p-[36px] rounded-[24px]"
        variants={fadeIn}
        custom={0}
      >
        <motion.h3
          className="text-[36px] sm:text-[48px] lg:text-[64px] font-bold tracking-tighter leading-[1]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {messages?.Constructor.Title}
        </motion.h3>
        <motion.div
          className="relative z-[1] h-[50vh] sm:h-[60vh] lg:h-[80vh] mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={baseImg} alt="Base" className="absolute inset-0 w-full h-full object-contain" />
          <img src={borderImg} alt="Border" className="absolute inset-0 w-full h-full object-contain" />
        </motion.div>
      </motion.form>

      {/* RIGHT SIDE */}
      <motion.div
        className="flex-1 flex flex-col bg-white p-6 sm:p-8 lg:p-[36px] rounded-[24px] gap-3"
        variants={fadeIn}
        custom={1}
      >
        {!form.customBrand && (
          <select
            value={form.brand}
            onChange={(e) => {
              handleChange('brand', e.target.value)
              handleChange('model', '')
            }}
            className={inputClass}
          >
            <option value="">{messages?.Constructor.MakePlaceholder}</option>
            {Object.keys(carData).map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        )}

        {!form.customBrand && form.brand && (
          <select
            value={form.model}
            onChange={(e) => handleChange('model', e.target.value)}
            className={inputClass}
          >
            <option value="">{messages?.Constructor.ModelPlaceholder}</option>
            {carData[form.brand].map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        )}

        <label className="flex items-center gap-2 text-xs mt-1">
          <input
            type="checkbox"
            checked={form.customBrand}
            onChange={(e) => handleChange('customBrand', e.target.checked)}
            className="accent-black w-4 h-4"
          />
          {messages.Constructor.MakeAbsPlaceholder}
        </label>

        {form.customBrand && (
          <textarea
            value={form.customText}
            onChange={(e) => handleChange('customText', e.target.value)}
            className={`${inputClass} h-16 resize-none`}
            placeholder={messages.Constructor.MakeCustomText}
          />
        )}

        <ColorPicker
          label={messages?.Constructor.BaseColor}
          colors={materialColors}
          value={form.baseColor}
          onPick={(c) => handleChange('baseColor', c)}
        />
        <ColorPicker
          label={messages?.Constructor.EdgeColor}
          colors={borderColors}
          value={form.borderColor}
          onPick={(c) => handleChange('borderColor', c)}
        />

        <KitPicker
          label={messages?.Constructor.Kit}
          options={{
            standard: messages?.Constructor.KitOption1,
            full: messages?.Constructor.KitOption2,
          }}
          value={form.kit}
          onPick={(v) => handleChange('kit', v)}
        />

        <input
          value={form.name}
          onChange={(e) => handleChange('name', e.target.value)}
          placeholder={messages?.Constructor.NamePlaceholder}
          className={inputClass}
        />
        <input
          value={form.email}
          onChange={(e) => handleChange('email', e.target.value)}
          placeholder={messages?.Constructor.EmailPlaceholder}
          className={inputClass}
        />
        <input
          value={form.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          placeholder={messages?.Constructor.PhonePlaceholder}
          className={inputClass}
        />
        <textarea
          value={form.comment}
          onChange={(e) => handleChange('comment', e.target.value)}
          placeholder={messages?.Constructor.CommentPlaceholder}
          className={`${inputClass} h-16 resize-none`}
        />

        <label className="flex items-center gap-2 text-xs">
          <input
            type="checkbox"
            checked={form.privacy}
            onChange={(e) => handleChange('privacy', e.target.checked)}
            className="accent-black w-4 h-4"
          />
          {messages?.Constructor.PrivacyCheckbox}{' '}
          <a href="/privacy-policy" target="_blank" className="text-blue-600 underline">
            {messages?.Constructor.PrivacyCheckbox1}
          </a>
        </label>

        <div className="flex flex-col sm:flex-row gap-2 mt-4">
          <motion.div whileHover={{ scale: 1.05 }} className="flex-1">
            <CTAButton type="submit" variant="filled" className="w-full transition">
              {messages?.Constructor.SubmitEmail}
            </CTAButton>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="flex-1">
            <CTAButton
              title={messages?.Constructor.SubmitWhatsapp}
              type="button"
              variant="outline"
              onClick={handleWhatsappSubmit}
              className="w-full transition"
            >
              {messages?.Constructor.SubmitWhatsapp}
            </CTAButton>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function ColorPicker({ label, colors, value, onPick }) {
  return (
    <div>
      <span className="text-xs font-medium">{label}</span>
      <div className="flex flex-wrap gap-2 mt-1">
        {Object.entries(colors).map(([key, hex]) => (
          <motion.button
            key={key}
            type="button"
            onClick={() => onPick(key)}
            className={`w-7 h-7 rounded-full border ${
              value === key ? 'border-black scale-105' : 'border-gray-300'
            } transition-transform`}
            style={{ backgroundColor: hex }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          />
        ))}
      </div>
    </div>
  )
}

function KitPicker({ label, options, value, onPick }) {
  return (
    <div>
      <span className="text-xs font-medium">{label}</span>
      <div className="flex gap-2 mt-1 flex-wrap">
        {Object.entries(options).map(([key, text]) => (
          <motion.button
            key={key}
            type="button"
            onClick={() => onPick(key)}
            className={`px-3 py-2 rounded-full border text-xs ${
              value === key ? 'border-black bg-gray-100' : 'border-gray-300'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            {text}
          </motion.button>
        ))}
      </div>
    </div>
  )
}
