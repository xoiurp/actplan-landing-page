import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: string;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Consultoria Básica",
    popular: 0,
    price: "Sob consulta",
    description:
      "Ideal para pequenas empresas que buscam otimizar sua carga tributária.",
    buttonText: "Solicitar Orçamento",
    benefitList: [
      "Análise tributária inicial",
      "Identificação de oportunidades",
      "Relatório de recomendações",
      "1 reunião de apresentação",
      "Suporte por 30 dias"
    ],
  },
  {
    title: "Consultoria Completa",
    popular: 1,
    price: "Sob consulta",
    description:
      "Solução abrangente para empresas de médio porte com necessidades tributárias complexas.",
    buttonText: "Agendar Consultoria",
    benefitList: [
      "Análise tributária detalhada",
      "Planejamento tributário personalizado",
      "Implementação de estratégias",
      "3 reuniões de acompanhamento",
      "Suporte prioritário por 90 dias"
    ],
  },
  {
    title: "Consultoria Empresarial",
    popular: 0,
    price: "Sob consulta",
    description:
      "Solução completa para grandes empresas com operações complexas e múltiplas unidades.",
    buttonText: "Contato Personalizado",
    benefitList: [
      "Análise tributária abrangente",
      "Planejamento tributário estratégico",
      "Implementação e monitoramento",
      "Reuniões mensais de acompanhamento",
      "Suporte dedicado contínuo"
    ],
  },
];

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Nossos
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Planos de{" "}
        </span>
        Consultoria
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Oferecemos soluções personalizadas para atender às necessidades específicas do seu negócio.
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge
                    variant="secondary"
                    className="text-sm"
                    style={{ backgroundColor: "#2F2E44", color: "white" }}
                  >
                    Mais popular
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className="text-2xl font-bold">{pricing.price}</span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full">{pricing.buttonText}</Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span
                    key={benefit}
                    className="flex"
                  >
                    <Check className="text-primary" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
