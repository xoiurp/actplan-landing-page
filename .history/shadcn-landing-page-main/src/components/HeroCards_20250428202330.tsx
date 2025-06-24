import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import heroImage from "@/assets/heroimage.png";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex gap-4 relative w-[800px] h-[400px]">
      {/* Grid de fundo */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="w-full h-full grid grid-cols-12 grid-rows-12 gap-4 opacity-5">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-primary/30 rounded-sm"></div>
          ))}
        </div>
      </div>

      {/* Coluna de cards */}
      <div className="flex flex-col gap-2 w-[350px]">
        {/* IVA Mundial Card */}
        <Card className="w-full shadow-md bg-white z-10">
          <CardHeader className="pb-1 pt-3">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#7562B9]"></div>
              <CardTitle className="text-sm font-medium">IVA Mundial</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pb-3">
            <div className="flex justify-between items-end gap-2">
              <div className="flex flex-col items-center">
                <div className="h-28 w-12 bg-gradient-to-t from-[#2E2D42] to-[#A0A3BD] rounded flex flex-col justify-end items-center text-white text-[10px] p-1">
                  <span>Brasil</span>
                  <span className="font-bold">27%</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-24 w-12 bg-gradient-to-t from-[#2E2D42] to-[#A0A3BD] rounded flex flex-col justify-end items-center text-white text-[10px] p-1">
                  <span>Hungria</span>
                  <span className="font-bold">25%</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-20 w-12 bg-gradient-to-t from-[#2E2D42] to-[#A0A3BD] rounded flex flex-col justify-end items-center text-white text-[10px] p-1">
                  <span>Suécia</span>
                  <span className="font-bold">24%</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-16 w-12 bg-gradient-to-t from-[#2E2D42] to-[#A0A3BD] rounded flex flex-col justify-end items-center text-white text-[10px] p-1">
                  <span>França</span>
                  <span className="font-bold">20%</span>
                </div>
              </div>
            </div>
            <p className="text-[10px] text-muted-foreground mt-2 text-center">*Imposto sobre Valor Agregado (IVA)</p>
          </CardContent>
        </Card>

        {/* Faturamento e Impostos Card */}
        <Card className="w-full shadow-md bg-white z-10">
          <CardHeader className="pb-1 pt-3">
            <CardTitle className="text-sm font-medium">Faturamento e Impostos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 pb-3">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs font-medium">Faturamento Mensal</p>
                <p className="text-[10px] text-muted-foreground">29 Mar</p>
              </div>
              <p className="text-[#0A8D3E] font-medium">+ 250.000,00</p>
            </div>
            
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs font-medium">ICMS</p>
                <p className="text-[10px] text-muted-foreground">29 Mar</p>
              </div>
              <p className="text-[rgba(141,10,10,0.63)] font-medium">- 45.000,00</p>
            </div>
            
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs font-medium">COFINS</p>
                <p className="text-[10px] text-muted-foreground">29 Mar</p>
              </div>
              <p className="text-[rgba(141,10,10,0.63)] font-medium">- 16.720,00</p>
            </div>
            
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs font-medium">PIS</p>
                <p className="text-[10px] text-muted-foreground">29 Mar</p>
              </div>
              <p className="text-[rgba(141,10,10,0.63)] font-medium">- 3.630,00</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Imagem à direita */}
      <div className="relative w-[400px] h-full rounded-lg overflow-hidden">
        <img 
          src={heroImage} 
          alt="Profissionais analisando dados financeiros" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#7262B9]/30 to-transparent"></div>
      </div>
    </div>
  );
};
