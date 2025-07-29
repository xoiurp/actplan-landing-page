3,3,
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  position: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://i.pravatar.cc/150?img=32",
    name: "Carlos Silva",
    position: "Diretor Financeiro",
    comment: "A consultoria da ACTPlan nos ajudou a economizar mais de 30% em impostos no último ano, tudo dentro da legalidade. Recomendo fortemente.",
  },
  {
    image: "https://i.pravatar.cc/150?img=26",
    name: "Marina Costa",
    position: "Proprietária de Empresa",
    comment: "A equipe da ACTPlan é extremamente profissional. Resolveram questões tributárias complexas que estavam nos trazendo problemas há anos.",
  },
  {
    image: "https://i.pravatar.cc/150?img=65",
    name: "Ricardo Oliveira",
    position: "Contador Corporativo",
    comment: "Como contador, posso afirmar que o trabalho da ACTPlan é impecável. Suas estratégias são criativas, mas sempre dentro da conformidade legal.",
  },
  {
    image: "https://i.pravatar.cc/150?img=12",
    name: "Fernanda Mendes",
    position: "CEO",
    comment: "Graças à ACTPlan, conseguimos reduzir significativamente nossa carga tributária e investir mais no crescimento da empresa. Parceria de valor inestimável.",
  },
  {
    image: "https://i.pravatar.cc/150?img=42",
    name: "Paulo Rodrigues",
    position: "Diretor Administrativo",
    comment: "A assessoria da ACTPlan trouxe clareza para nossas operações fiscais e nos ajudou a evitar problemas que nem sabíamos que existiam.",
  },
  {
    image: "https://i.pravatar.cc/150?img=18",
    name: "Luciana Almeida",
    position: "Empresária",
    comment: "Trabalhar com a ACTPlan transformou completamente nossa visão sobre planejamento tributário. Resultados reais e atendimento excepcional.",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        O que
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          nossos clientes{" "}
        </span>
        dizem
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8 md:text-center text-left">
        Conheça a experiência de quem já conta com nossa assessoria tributária especializada
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, position, comment }: TestimonialProps) => (
            <Card
              key={name + position}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt={`Foto de ${name}`}
                    src={image}
                  />
                  <AvatarFallback>{name.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{position}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
