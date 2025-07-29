import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { 
  CheckCircle, 
  Lightbulb, 
  TrendingUp, 
  Search, 
  Target, 
  Shield, 
  Award, 
  Users 
} from "lucide-react";

const missionItems = [
  {
    title: "Redução Tributária",
    icon: CheckCircle,
  },
  {
    title: "Gestão Estratégica",
    icon: Target,
  },
  {
    title: "Economia Inteligente",
    icon: TrendingUp,
  },
];

const visionItems = [
  {
    title: "Inovação Contábil",
    icon: Lightbulb,
  },
  {
    title: "Crescimento Sustentável",
    icon: TrendingUp,
  },
  {
    title: "Competitividade Fiscal",
    icon: Search,
  },
];

const valuesItems = [
  {
    title: "Transparência",
    description: "Comunicação clara e ética com clientes e parceiros.",
    icon: Shield,
  },
  {
    title: "Excelência",
    description: "Compromisso constante com a qualidade e atualização profissional.",
    icon: Award,
  },
  {
    title: "Compromisso",
    description: "Dedicação em gerar resultados concretos e mensuráveis.",
    icon: Users,
  },
];

export const About = () => {
  return (
    <section id="about" className="bg-muted/50">
      <div className="container py-24 sm:py-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold md:text-4xl text-[#2e2d42] mb-4">
            Quem Somos
          </h2>
          <p className="mx-auto max-w-4xl text-xl text-muted-foreground leading-relaxed">
            A <span className="font-medium">Actplan</span> é uma empresa nacional especializada na 
            prestação de serviços de <span className="font-medium">assessoria tributária</span> para empresas. 
            Localizada em Mogi Mirim/SP e Campinas/SP, contamos com uma equipe qualificada que trabalha 
            focada dentro das áreas <span className="font-medium">tributária, contábil, administrativa e jurídica</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Missão */}
          <Card className="bg-gradient-to-b from-slate-100/80 to-white/80 border-slate-200 flex flex-col">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-semibold text-[#2e2d42]">
                Missão
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col gap-4">
              <CardDescription className="text-center text-sm leading-relaxed text-black">
                Maximizar a eficiência tributária das empresas, garantindo
                conformidade legal e promovendo economia inteligente.
              </CardDescription>
              <div className="space-y-2 flex-1">
                {missionItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="bg-white border border-slate-200 rounded-lg p-3 flex items-center justify-between"
                    >
                      <span className="text-xs font-light text-[#0c0c0c]">
                        {item.title}
                      </span>
                      <IconComponent className="h-4 w-4 text-slate-600" />
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Visão */}
          <Card className="bg-gradient-to-b from-slate-100/80 to-white/80 border-slate-200 flex flex-col">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-semibold text-[#2e2d42]">
                Visão
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col gap-4">
              <CardDescription className="text-center text-sm leading-relaxed text-black">
                Transformar o cenário tributário empresarial, oferecendo soluções
                inovadoras que garantam economia.
              </CardDescription>
              <div className="space-y-2 flex-1">
                {visionItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="bg-white border border-slate-200 rounded-lg p-3 flex items-center justify-between"
                    >
                      <span className="text-xs font-light text-[#0c0c0c]">
                        {item.title}
                      </span>
                      <IconComponent className="h-4 w-4 text-slate-600" />
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Valores */}
          <Card className="bg-gradient-to-b from-slate-100/80 to-white/80 border-slate-200 flex flex-col">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-semibold text-[#2e2d42]">
                Valores
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col gap-2">
              {valuesItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className="bg-white border border-slate-200 rounded-lg p-4 flex gap-4 items-start"
                  >
                    <div className="flex-1">
                      <h4 className="font-medium text-sm text-[#2e2d42] mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs font-light text-[#2e2d42] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <IconComponent className="h-6 w-6 text-slate-600 flex-shrink-0" />
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
