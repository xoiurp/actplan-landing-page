import { motion } from "framer-motion";
import { LogoActplan } from "./LogoActplan";

export const Hero = () => {
  return (
    <section className="relative flex h-screen flex-col items-center justify-center overflow-hidden bg-hero-pattern bg-cover bg-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl font-extrabold text-primary md:text-4xl"
      >
        Qual é o seu plano para sobreviver?
      </motion.h1>
    </section>
  );
};
