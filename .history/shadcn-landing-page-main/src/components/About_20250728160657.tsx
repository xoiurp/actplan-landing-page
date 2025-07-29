import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const principles = [
  {
    title: "Missão",
    description:
      "Maximizar a eficiência tributária das empresas, garantindo conformidade legal e promovendo economia inteligente através de soluções inovadoras e personalizadas.",
  },
  {
    title: "Visão",
    description:
      "Ser referência em assessoria tributária, transformando o cenário empresarial com estratégias que garantam crescimento sustentável, segurança e competitividade.",
  },
  {
    title: "Valores",
    description:
      "Transparência, excelência e compromisso são os pilares que guiam nosso trabalho, sempre com foco total no sucesso e na satisfação dos nossos clientes.",
  },
];

export const About = () => {
  return (
    <section id="about" className="bg-muted/50">
      <div className="container py-24 sm:py-32">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Quem Somos</h2>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-muted-foreground">
            A ACTPlan é uma empresa nacional especializada na prestação de
            serviços de assessoria tributária. Com sedes em Campinas/SP e Mogi
            Mirim/SP, nossa equipe qualificada atua nas áreas tributária,
            contábil, administrativa e jurídica para oferecer as melhores
            soluções para o seu negócio.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle) => (
            <Card
              key={principle.title}
              className="rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg"
            >
              <CardHeader>
                <CardTitle>{principle.title}</CardTitle>
              </CardHeader>
              <CardContent>
      
                <CardDescription>{principle.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
