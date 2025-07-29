import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Diagnóstico",
    description: "Análise completa da sua situação fiscal para identificar oportunidades de otimização.",
    date: "Fase I",
  },
  {
    step: "02",
    title: "Planejamento",
    description: "Desenvolvimento de um plano tributário personalizado e estratégico.",
    date: "Fase II",
  },
  {
    step: "03",
    title: "Implementação",
    description: "Suporte na aplicação das estratégias definidas com acompanhamento.",
    date: "Fase III",
  },
  {
    step: "04",
    title: "Acompanhamento",
    description: "Monitoramento contínuo dos resultados e ajustes necessários.",
    date: "Fase IV",
  },
];

export const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="howItWorks" className="container py-24 text-center sm:py-32">
      <h2 className="text-3xl font-bold md:text-4xl">Como Trabalhamos</h2>
      <p className="mx-auto mt-4 max-w-2xl text-xl text-muted-foreground">
        Nosso processo é transparente, eficiente e focado em resultados.
      </p>

      <div className="mx-auto mt-12 max-w-6xl">
        {/* Timeline Progress Line */}
        <div className="relative mb-12">
          <div className="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 bg-muted rounded-full"></div>
          <motion.div
            className="absolute left-0 top-1/2 h-1 -translate-y-1/2 bg-primary rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
          
          {/* Timeline Points */}
          <div className="relative flex justify-between">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex h-12 w-12 items-center justify-center rounded-full border-2 bg-background text-sm font-bold transition-all duration-500 ${
                  index <= activeStep
                    ? "border-primary text-primary"
                    : "border-muted text-muted-foreground"
                }`}
              >
                {step.step}
              </div>
            ))}
          </div>
        </div>

        {/* All Phases Displayed Horizontally */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`flex flex-col items-center text-center transition-all duration-500 ${
                index <= activeStep ? "opacity-100" : "opacity-40"
              }`}
              initial={{ opacity: 0.4 }}
              animate={{ 
                opacity: index <= activeStep ? 1 : 0.4,
                scale: index === activeStep ? 1.05 : 1
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-2 text-sm font-medium text-primary">
                {step.date}
              </div>
              <h3 className="mb-4 text-xl font-bold">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
