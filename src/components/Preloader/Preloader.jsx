import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader({ children }) {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoaded(true), 300); // завершення завантаження
          return 100;
        }
        return p + 2;
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AnimatePresence
        mode="wait"
        onExitComplete={() => setShowPreloader(false)} // анмаунт лише після exit-анімації
      >
        {!isLoaded && showPreloader && (
          <motion.div
            key="preloader"
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white text-black"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -60 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.div
              className="text-2xl uppercase tracking-widest font-light mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Loading
            </motion.div>

            <div className="relative w-2/3 h-[2px] bg-black/10 overflow-hidden mb-4">
              <motion.div
                className="absolute left-0 top-0 h-full bg-black"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>

            <motion.span
              key={progress}
              className="text-sm font-mono"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              {progress}%
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Контент рендериться лише коли прелоадер повністю зник */}
      {!showPreloader && children}
    </>
  );
}
