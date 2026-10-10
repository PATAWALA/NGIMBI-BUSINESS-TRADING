"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

/**
 * Bouton flottant "Retour en haut".
 *
 * - Apparaît après 600px de scroll
 * - Animation d'entrée/sortie via AnimatePresence
 * - Micro-interactions (hover / tap)
 * - Scroll fluide vers le top au clic
 * - Accessible (aria-label, focus ring)
 */
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  /* ----- Détection du scroll ----- */
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll(); // état initial
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ----- Action ----- */
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Revenir en haut de la page"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.94 }}
          className="fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full border border-amber-500/30 bg-gradient-to-br from-amber-600 to-amber-800 text-amber-50 shadow-glow backdrop-blur-sm transition-colors hover:from-amber-500 hover:to-amber-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}