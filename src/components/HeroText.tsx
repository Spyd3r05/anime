import { motion } from "motion/react";

const HeroText = () => {
  return (
<div className="relative z-20 pointer-events-none text-center">
<motion.h1 
    initial={{ scale: 0 }}
    animate={{ scale: 1, transition:{ duration: 0.25, ease: "easeInOut", delay: 0.5 }}}
    whileHover={{ scale: 1.05, transition: { duration: 0.25, ease: "easeInOut", delay: 0.5 } }}
    className="text-[5rem] font-black leading-[0.85] tracking-tightest mb-4 opacity-90 mix-blend-multiply">
                Love Anime,<br/>Live Anime
            </motion.h1>
<motion.p 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1}}
    transition={{ duration: 0.25, ease: "easeInOut", delay: 0.75 }}
    className="text-label-md uppercase tracking-[0.4em] text-[#5f5e5e] font-medium">Curated Exhibition Vol. I</motion.p>
</div>
  )
}

export default HeroText