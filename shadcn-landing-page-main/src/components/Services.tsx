import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { 
  Calculator, 
  Shield, 
  TrendingUp, 
  FileText, 
  Scale, 
  Users 
} from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Planejamento Tributário",
    description: "Estratégias personalizadas para minimizar a carga tributária da sua empresa de forma legal e eficiente.",
  },
  {
    icon: TrendingUp,
    title: "Recuperação de Créditos",
    description: "Identificação e recuperação de créditos tributários pagos indevidamente ou não aproveitados.",
  },
  {
    icon: FileText,
    title: "Consultoria Fiscal",
    description: "Orientação especializada sobre questões tributárias complexas e adequação à legislação vigente.",
  },
  {
    icon: Scale,
    title: "Defesa Tributária",
    description: "Representação em processos administrativos e judiciais tributários com foco na resolução eficaz.",
  },
  {
    icon: Shield,
    title: "Compliance Tributário",
    description: "Garantia de conformidade com todas as obrigações fiscais e acessórias da sua empresa.",
  },
  {
    icon: Users,
    title: "Consultoria Empresarial",
    description: "Suporte estratégico para tomada de decisões tributárias que impactem o crescimento do negócio.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <div className="text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Nossos Serviços</h2>
        <p className="mx-auto mt-4 max-w-3xl text-xl text-muted-foreground">
          Oferecemos um portfólio completo de soluções tributárias para 
          maximizar a eficiência fiscal da sua empresa e garantir total 
          conformidade legal.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Card
            key={index}
            className="group relative overflow-hidden border-0 bg-card/50 transition-all duration-300 hover:bg-card/80 hover:shadow-lg"
          >
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm leading-relaxed">
                {service.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
