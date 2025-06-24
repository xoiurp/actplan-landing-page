import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users } from "lucide-react";

export const Team = () => {
  return (
    <section
      id="team"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Nossa Equipe{" "}
        </span>
        Especializada
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground text-center">
        Conheça os profissionais dedicados que trabalham para garantir a melhor assessoria tributária para o seu negócio.
      </p>

      <Card
        className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center max-w-lg mx-auto"
      >
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <div className="absolute -top-12 rounded-full w-24 h-24 aspect-square bg-primary flex items-center justify-center">
            <Users className="text-white h-12 w-12" />
          </div>
          <CardTitle className="text-center">Equipe ACTPlan</CardTitle>
          <CardDescription className="text-primary">
            Especialistas em Assessoria Tributária
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>Nossa equipe é formada por contadores, advogados e administradores com vasta experiência no mercado, prontos para oferecer as melhores soluções para sua empresa.</p>
        </CardContent>
      </Card>
    </section>
  );
};
