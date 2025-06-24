import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../assets/cube-leg.png";

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
    icon: <ChartIcon />,
  },
  {
    title: "Regularização Tributária",
    description:
      "Soluções eficientes para regularizar pendências fiscais e evitar multas e penalidades. Identificação de inconsistências em obrigações tributárias passadas.",
    icon: <WalletIcon />,
  },
  {
    title: "Defesa em Processos Tributários",
    description:
      "Representação judicial especializada para garantir seus direitos em litígios fiscais. Análise técnica de autos de infração e processos tributários.",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Nossos{" "}
            </span>
            Serviços
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            A ACTPlan tem ênfase na prestação de serviços de assessoria e consultoria tributária, prezando pelo enquadramento individual de cada empresa dentro do seu contexto contábil/financeiro e suas obrigações tributárias.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="Serviços de consultoria tributária"
        />
      </div>
    </section>
  );
};
