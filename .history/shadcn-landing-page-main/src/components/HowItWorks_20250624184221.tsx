import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Reunião de Apresentação",
    description:
      "A primeira fase consiste na apresentação formal dos envolvidos no levantamento das informações e análise final montada. A presença dos administradores é essencial.",
  },
  {
    icon: <MapIcon />,
    title: "Envio de Documentos",
    description:
      "São enviadas informações, documentos e designação de responsáveis pelo cliente para a realização de levantamento e reconhecimento contábil/jurídico pela nossa equipe.",
  },
  {
    icon: <PlaneIcon />,
    title: "Apresentação da Análise",
    description:
      "Nessa fase, é marcada uma reunião para apresentação das estratégias financeira e contábil, levantamento das opções encontradas, prazos, impactos e informações sobre o plano desenvolvido.",
  },
  {
    icon: <GiftIcon />,
    title: "Fechamento",
    description:
      "Na fase final é assinada o contrato de prestação de serviços e começam a correr os prazos para execução das medidas aprovadas em fase anterior.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        Como{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Funciona{" "}
        </span>
        Nossa Consultoria
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground md:text-center text-left">
        Nosso processo de trabalho é estruturado em quatro etapas principais para garantir eficiência e resultados.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
