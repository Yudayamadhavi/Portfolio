import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="relative h-14 w-14">
              <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-[var(--brand)] border-r-[var(--brand-2)]" />
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[var(--brand)] to-[var(--brand-2)] opacity-80 blur-sm" />
            </div>
            <span className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Loading
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
