import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { faqData } from '../../data/gymData';

const EASE = [0.16, 1, 0.3, 1];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: reduceMotion => reduceMotion
    ? { opacity: 1, transform: 'translate3d(0, 0px, 0)' }
    : { opacity: 0, transform: 'translate3d(0, 16px, 0)' },
  visible: {
    opacity: 1,
    transform: 'translate3d(0, 0px, 0)',
    transition: { duration: 0.25, ease: EASE },
  },
};

function FAQItem({ item, isOpen, onToggle, reduceMotion }) {
  const panelId = `faq-panel-${item.id}`;
  const buttonId = `faq-button-${item.id}`;

  return (
    <motion.div
      variants={itemVariants}
      custom={reduceMotion}
      className="border-t border-white/[0.06]"
    >
      <button
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 sm:py-6 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gym-accent focus-visible:ring-offset-2 focus-visible:ring-offset-gym-dark rounded-md"
      >
        <div className="flex items-center gap-4 min-w-0">
          <span className="text-gym-accent font-mono text-sm font-bold shrink-0 tabular-nums">
            {String(item.id).padStart(2, '0')}
          </span>
          <span className="text-white font-bold text-base sm:text-lg group-hover:text-gym-accent transition-colors duration-200">
            {item.question}
          </span>
        </div>
        <motion.span
          animate={reduceMotion ? { rotate: 0 } : { rotate: isOpen ? 45 : 0 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.2, ease: EASE }}
          className="shrink-0"
        >
          <Plus className={`w-5 h-5 transition-colors duration-200 ${isOpen ? 'text-gym-accent' : 'text-zinc-400 group-hover:text-zinc-200'}`} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={reduceMotion ? { height: 'auto', opacity: 1 } : { height: 'auto', opacity: 1 }}
            exit={reduceMotion ? { height: 0, opacity: 0 } : { height: 0, opacity: 0 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.25, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed pb-5 sm:pb-6 pl-9 sm:pl-10">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  const [openId, setOpenId] = useState(null);
  const reduceMotion = useReducedMotion();

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 sm:py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05, margin: '0px 0px -50px 0px' }}
        >
          {/* Left Column — Editorial content */}
          <motion.div
            variants={itemVariants}
            custom={reduceMotion}
            className="lg:col-span-2 lg:sticky lg:top-28"
          >
            <p className="text-gym-accent font-bold text-xs sm:text-sm tracking-widest uppercase mb-3">
              FAQ
            </p>
            <h2 className="text-white font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight leading-[0.95] mb-4">
              Common
              <br />
              Questions.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-md">
              Everything you need to know before starting your journey with us. Can&apos;t find what you&apos;re looking for? Reach out at the front desk or message us anytime.
            </p>
          </motion.div>

          {/* Right Column — Accordion */}
          <div className="lg:col-span-3">
            {faqData.map((item) => (
              <FAQItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onToggle={() => handleToggle(item.id)}
                reduceMotion={reduceMotion}
              />
            ))}
            <div className="border-t border-white/[0.06]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
