import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { LightBulbIcon } from "./Icons";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt="Foto de cliente"
              src="https://i.pravatar.cc/150?img=32"
            />
            <AvatarFallback>CS</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Carlos Silva</CardTitle>
            <CardDescription>Diretor Financeiro</CardDescription>
          </div>
        </CardHeader>

        <CardContent>A consultoria da ACTPlan nos ajudou a economizar mais de 30% em impostos no último ano, tudo dentro da legalidade.</CardContent>
      </Card>

      {/* Missão */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex justify-center items-center pb-2">
          <CardTitle className="text-center">Nossa Missão</CardTitle>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            Maximizar a eficiência tributária das empresas, garantindo conformidade legal e promovendo economia inteligente através de estratégias personalizadas.
          </p>
        </CardContent>
      </Card>

      {/* Benefícios */}
      <Card className="absolute top-[150px] left-[50px] w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Benefícios
            <Badge
              variant="secondary"
              className="text-sm text-primary"
            >
              Economia real
            </Badge>
          </CardTitle>

          <CardDescription>
            Diga adeus às taxas ocultas e às alíquotas imprevisíveis.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button className="w-full">Agendar Consultoria</Button>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {[
              "Economia média de 20%",
              "Redução de riscos",
              "Monitoramento contínuo"
            ].map(
              (benefit: string) => (
                <span
                  key={benefit}
                  className="flex"
                >
                  <Check className="text-primary" />{" "}
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              )
            )}
          </div>
        </CardFooter>
      </Card>

      {/* Serviço */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Planejamento Tributário</CardTitle>
            <CardDescription className="text-md mt-2">
              Estratégias personalizadas para minimizar o pagamento de impostos de forma legal e segura.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
