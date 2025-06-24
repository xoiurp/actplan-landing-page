import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { 
  ShieldCheck, 
  Award, 
  Handshake, 
  DollarSign, 
  TrendingUp, 
  Search, 
  Lightbulb, 
  BarChart4
} from "lucide-react";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32 bg-white"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          Quem Somos
        </h2>
        <p className="text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
          A ACTPlan é uma empresa nacional especializada na prestação de serviços de assessoria tributária para empresas. Localizada em Mogi Mirim/SP e Campinas/SP, contamos com uma equipe qualificada que trabalha focada dentro das áreas tributária, contábil, administrativa e jurídica.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Missão */}
        <Card className="bg-gradient-to-b from-white to-muted/30 border-muted/50">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-primary">Missão</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Maximizar a eficiência tributária das empresas, garantindo conformidade legal e promovendo economia inteligente.
            </p>
            
            <div className="grid grid-cols-1 gap-3 mt-6">
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-muted/50">
                <div className="p-2 bg-white rounded-md">
                  <DollarSign size={18} className="text-primary" />
                </div>
                <div className="text-sm">
                  <p className="font-medium">Redução Tributária</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-muted/50">
                <div className="p-2 bg-white rounded-md">
                  <BarChart4 size={18} className="text-primary" />
                </div>
                <div className="text-sm">
                  <p className="font-medium">Gestão Estratégica</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-muted/50">
                <div className="p-2 bg-white rounded-md">
                  <TrendingUp size={18} className="text-primary" />
                </div>
                <div className="text-sm">
                  <p className="font-medium">Economia Inteligente</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Visão */}
        <Card className="bg-gradient-to-b from-white to-muted/30 border-muted/50">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-primary">Visão</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Transformar o cenário tributário empresarial, oferecendo soluções inovadoras que garantam economia, segurança e conformidade legal.
            </p>
            
            <div className="grid grid-cols-1 gap-3 mt-6">
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-muted/50">
                <div className="p-2 bg-white rounded-md">
                  <Lightbulb size={18} className="text-primary" />
                </div>
                <div className="text-sm">
                  <p className="font-medium">Inovação Contábil</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-muted/50">
                <div className="p-2 bg-white rounded-md">
                  <TrendingUp size={18} className="text-primary" />
                </div>
                <div className="text-sm">
                  <p className="font-medium">Crescimento Sustentável</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-muted/50">
                <div className="p-2 bg-white rounded-md">
                  <Search size={18} className="text-primary" />
                </div>
                <div className="text-sm">
                  <p className="font-medium">Competitividade Fiscal</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Valores */}
        <Card className="bg-gradient-to-b from-white to-muted/30 border-muted/50">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-primary">Valores</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="p-4 bg-white rounded-lg border border-muted/50">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck size={20} className="text-primary" />
                  <h3 className="font-medium">Transparência</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Comunicação clara e ética com clientes e parceiros.
                </p>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-muted/50">
                <div className="flex items-center gap-3 mb-2">
                  <Award size={20} className="text-primary" />
                  <h3 className="font-medium">Excelência</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Compromisso constante com a qualidade e atualização profissional.
                </p>
              </div>
              
              <div className="p-4 bg-white rounded-lg border border-muted/50">
                <div className="flex items-center gap-3 mb-2">
                  <Handshake size={20} className="text-primary" />
                  <h3 className="font-medium">Compromisso</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Dedicação em gerar resultados concretos e mensuráveis.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
