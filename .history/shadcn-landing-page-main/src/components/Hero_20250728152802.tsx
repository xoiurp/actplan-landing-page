import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section
      className="relative flex h-screen flex-col items-center justify-center overflow-hidden bg-cover bg-center text-center text-white"
      style={{
        backgroundImage:
          "url('https://cspnmypytthuaaneqafq.supabase.co/storage/v1/object/public/pub//bg-perfect.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 max-w-4xl px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-extrabold md:text-5xl lg:text-6xl"
        >
          Assessoria tributária que transforma passivos em oportunidades.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-4 text-lg md:text-xl"
        >
          Em um cenário de alta carga tributária no Brasil, conte com nossa
          assessoria especializada para maximizar a eficiência tributária da sua
          empresa, garantindo conformidade legal e economia inteligente.
        </motion.p>
      </div>
    </section>
  );
};
