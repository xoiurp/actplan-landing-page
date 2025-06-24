import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { FileText, Calculator, Scale, FileCheck, BarChart4, FileSearch } from "lucide-react";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Planejamento Tributário",
    description:
      "Estratégias personalizadas para minimizar o pagamento de impostos de forma legal e segura. Análise detalhada da situação fiscal atual e oportunidades de otimização.",
    icon: <FileText className="h-6 w-6 text-primary" />,
  },
  {
    title: "Recuperação de Créditos",
    description:
      "Identificação e recuperação de créditos tributários pagos indevidamente ou a maior. Análise de documentos fiscais e processos de restituição.",
    icon: <FileCheck className="h-6 w-6 text-primary" />,
  },
  {
    title: "Análise Fiscal",
    description:
      "Avaliação detalhada da situação fiscal da empresa para identificar oportunidades de economia e prevenir riscos tributários.",
    icon: <Calculator className="h-6 w-6 text-primary" />,
  },
  {
    title: "Consultoria Tributária",
    description:
      "Orientação especializada sobre questões tributárias complexas e mudanças na legislação que impactam o seu negócio.",
    icon: <BarChart4 className="h-6 w-6 text-primary" />,
  },
  {
    title: "Due Diligence Tributária",
    description:
      "Análise aprofundada dos riscos e passivos tributários em processos de fusão e aquisição ou reestruturação empresarial.",
    icon: <FileSearch className="h-6 w-6 text-primary" />,
  },
  {
    title: "Contencioso Tributário",
    description:
      "Defesa dos interesses da empresa em processos administrativos e judiciais tributários, com foco na redução de contingências.",
    icon: <Scale className="h-6 w-6 text-primary" />,
  },
];

export const Services = () => {
  return (
    <section id="services" className="container py-24 sm:py-32 bg-gradient-to-b from-white to-muted/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          Nossos Serviços
        </h2>

        <p className="text-muted-foreground text-xl mt-4 max-w-3xl mx-auto">
          A ACTPlan tem ênfase na prestação de serviços de assessoria e consultoria tributária, prezando pelo enquadramento individual de cada empresa dentro do seu contexto contábil/financeiro.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {serviceList.map(({ icon, title, description }: ServiceProps) => (
          <Card key={title} className="bg-white border-muted/50 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-muted/30 rounded-md">
                  {icon}
                </div>
                <CardTitle className="text-lg font-semibold">{title}</CardTitle>
              </div>
              <CardDescription className="text-sm text-muted-foreground">
                {description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};
