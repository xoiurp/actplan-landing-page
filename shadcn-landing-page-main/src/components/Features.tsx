import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Economia Tributária",
    description:
      "Redução significativa na carga tributária através de estratégias legais e personalizadas para o seu negócio.",
    image: image4,
  },
  {
    title: "Segurança Jurídica",
    description:
      "Todas as nossas estratégias são baseadas na legislação vigente, garantindo total conformidade legal para sua empresa.",
    image: image3,
  },
  {
    title: "Monitoramento Contínuo",
    description:
      "Acompanhamento constante das mudanças na legislação tributária para adaptar as estratégias quando necessário.",
    image: image,
  },
];

const featureList: string[] = [
  "Economia média de 20%",
  "Redução de riscos fiscais",
  "Monitoramento contínuo",
  "Treinamento e orientação",
  "Prevenção de inadimplência",
  "Conformidade legal",
  "Estratégias personalizadas",
  "Suporte especializado",
  "Atendimento ágil",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Economia real{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          com taxas reduzidas
        </span>
      </h2>

      <p className="text-xl text-muted-foreground text-center md:w-3/4 mx-auto">
        Diga adeus às taxas ocultas e às alíquotas imprevisíveis. Com a ACTPlan, você terá a garantia de que suas transações tributárias são conduzidas com eficiência e transparência.
      </p>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              className="text-sm"
              style={{ backgroundColor: "#2F2E44", color: "white" }}
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title} className="bg-muted/10 flex flex-col">
            <CardHeader className="p-0">
              <img
                src={image}
                alt={`Benefício: ${title}`}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            
            <div className="p-6 flex flex-col flex-grow">
              <CardTitle className="mb-2">{title}</CardTitle>
              <CardContent className="p-0 flex-grow">
                <p className="text-muted-foreground">{description}</p>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
