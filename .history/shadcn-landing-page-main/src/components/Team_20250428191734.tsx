import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Linkedin } from "lucide-react";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  description: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "https://i.pravatar.cc/150?img=35",
    name: "Olivia Tazawa",
    position: "Diretora Executiva",
    description: "Especialista em planejamento tributário com mais de 15 anos de experiência no setor financeiro.",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/",
      }
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=60",
    name: "Marcos Almeida",
    position: "Consultor Tributário Sênior",
    description: "Contador com especialização em direito tributário e vasta experiência em consultoria para empresas de médio e grande porte.",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/",
      }
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=36",
    name: "Carla Mendes",
    position: "Advogada Tributarista",
    description: "Especialista em contencioso tributário e planejamento fiscal para empresas de diversos segmentos.",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/",
      }
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=17",
    name: "Roberto Santos",
    position: "Analista Fiscal",
    description: "Profissional com ampla experiência em análise de documentos fiscais e identificação de oportunidades de economia tributária.",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/",
      }
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;
      default:
        return null;
    }
  };

  return (
    <section
      id="team"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Nossa Equipe{" "}
        </span>
        Especializada
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">
        Conheça os profissionais dedicados que trabalham para garantir a melhor assessoria tributária para o seu negócio.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
        {teamList.map(
          ({ imageUrl, name, position, description, socialNetworks }: TeamProps) => (
            <Card
              key={name}
              className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src={imageUrl}
                  alt={`${name} - ${position}`}
                  className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary">
                  {position}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center pb-2">
                <p>{description}</p>
              </CardContent>

              <CardFooter>
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                  <div key={name}>
                    <a
                      rel="noreferrer noopener"
                      href={url}
                      target="_blank"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      <span className="sr-only">{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
