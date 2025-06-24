import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Como a ACTPlan pode ajudar minha empresa?",
    answer: "A ACTPlan oferece soluções personalizadas para otimizar a carga tributária de sua empresa, identificando oportunidades de economia fiscal dentro da legislação vigente, regularizando pendências e oferecendo representação em processos tributários.",
    value: "item-1",
  },
  {
    question: "Qual é o processo de trabalho da ACTPlan?",
    answer: "Nosso processo envolve quatro etapas principais: reunião inicial de apresentação, coleta de documentos para análise, apresentação das estratégias e soluções identificadas, e implementação das medidas aprovadas.",
    value: "item-2",
  },
  {
    question: "As estratégias de economia fiscal são legais?",
    answer: "Sim, todas as nossas estratégias são baseadas na legislação vigente. Trabalhamos exclusivamente com planejamento tributário lícito, utilizando benefícios fiscais e estruturações permitidas por lei.",
    value: "item-3",
  },
  {
    question: "Quanto minha empresa pode economizar?",
    answer: "A economia varia de acordo com o porte e setor da empresa, situação fiscal atual e oportunidades identificadas. Em média, nossos clientes conseguem uma redução de 15% a 30% em sua carga tributária.",
    value: "item-4",
  },
  {
    question: "Vocês atendem empresas de qual porte ou segmento?",
    answer: "Atendemos empresas de todos os portes e segmentos, com soluções personalizadas para cada realidade empresarial.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Perguntas{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Frequentes
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Ainda tem dúvidas?{" "}
        <a
          rel="noreferrer noopener"
          href="#footer"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Entre em contato
        </a>
      </h3>
    </section>
  );
};
