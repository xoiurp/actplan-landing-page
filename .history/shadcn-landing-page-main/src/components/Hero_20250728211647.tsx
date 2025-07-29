import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="container grid h-screen grid-cols-1 items-center md:grid-cols-2"
    >
      <div className="col-span-1"></div>
      <div className="relative z-10 col-span-1 max-w-4xl px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-bold md:text-5xl lg:text-6xl"
          style={{ color: "#2E2D42" }}
        >
          Assessoria tributária que transforma passivos em oportunidades.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-4 text-lg font-normal md:text-xl"
          style={{ color: "#2E2D42" }}
        >
          Em um cenário de alta carga tributária no Brasil, conte com nossa
          assessoria especializada para maximizar a eficiência tributária da sua
          empresa, garantindo conformidade legal e economia inteligente.
        </motion.p>
      </div>
    </section>
  );
};
