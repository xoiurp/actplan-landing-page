"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, ResponsiveContainer, Tooltip, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FinanceCard } from "./FinanceCard"
import heroImage from "@/assets/heroimage.png";

const chartData = [
  { month: "Brasil", desktop: 27 },
  { month: "Dinamarca", desktop: 25 },
  { month: "Noruega", desktop: 24 },
  { month: "Grécia", desktop: 23 },
  { month: "Islândia", desktop: 22 }
];

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex gap-4 relative w-[800px] h-[380px]">
      {/* Grid de fundo */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="w-full h-full grid grid-cols-12 grid-rows-12 gap-4 opacity-5">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-primary/30 rounded-sm"></div>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-1 w-[350px] h-full">
        {/* Gráfico */}
        <Card className="w-full shadow-md bg-white z-10 flex-[0.65]">
          <CardHeader className="pb-2 pt-3">
            <CardTitle className="text-sm font-medium">Gráfico de IVA</CardTitle>
            <CardDescription className="text-xs">*Imposto sobre Valor Agregado (IVA)</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="h-[calc(100%-80px)] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={chartData}
                  margin={{
                    top: 20,
                    right: 10,
                    left: 10,
                    bottom: 20,
                  }}
                >
                  <CartesianGrid vertical={false} strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="month" 
                    tickLine={false} 
                    tickMargin={10}  // aumentar a margem
                    axisLine={false}
                    angle={-45}  // rotacionar o texto
                    textAnchor="end"  // alinhar o texto
                    style={{ fontSize: '8px' }}  // diminuir a fonte
                  />
                  <Tooltip 
                    cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e2e8f0',
                      borderRadius: '0.375rem',
                      padding: '0.5rem'
                    }}
                    formatter={(value: number) => `${value}%`}
                  />
                  <defs>
                    <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2E2D42" />
                      <stop offset="100%" stopColor="#A0A3BD" />
                    </linearGradient>
                  </defs>
                  <Bar 
                    dataKey="desktop" 
                    name="Taxa (%)" 
                    fill="url(#barGradient)" 
                    radius={[4, 4, 0, 0]}
                  >
                    <LabelList 
                      dataKey="desktop" 
                      position="top" 
                      offset={10}
                      formatter={(value: number) => `${value}%`}
                      style={{ fontSize: '8px', fill: 'hsl(var(--foreground))' }}
                    />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
          <CardFooter className="flex-col items-start gap-2 text-sm pt-0 pb-3">
            <div className="flex gap-2 font-medium leading-none text-xs">
              Maior taxa de IVA da Europa <TrendingUp className="h-3 w-3 text-success" />
            </div>
            <div className="leading-none text-muted-foreground text-[10px]">
              Mostrando as maiores taxas de IVA do mundo
            </div>
          </CardFooter>
        </Card>

        {/* Card de Finanças */}
        <div className="flex-[0.35]">
          <FinanceCard />
        </div>
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
