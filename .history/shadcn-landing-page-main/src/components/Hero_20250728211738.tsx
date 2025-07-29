import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://cspnmypytthuaaneqafq.supabase.co/storage/v1/object/public/pub//bg-perfect.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <section
        id="hero"
        className="container grid h-full grid-cols-1 items-center md:grid-cols-2"
      >
        <div className="col-span-1"></div>
        <div className="relative z-10 col-span-1 max-w-4xl px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-bold text-white md:text-5xl lg:text-6xl"
          >
            Assessoria tributária que transforma passivos em oportunidades.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-4 text-lg font-normal text-white md:text-xl"
          >
            Em um cenário de alta carga tributária no Brasil, conte com nossa
            assessoria especializada para maximizar a eficiência tributária da sua
            empresa, garantindo conformidade legal e economia inteligente.
          </motion.p>
        </div>
      </section>
    </div>
  );
};
