"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import heroImage from "@/assets/heroimage.png";

const chartData = [
  { month: "Janeiro", desktop: 186 },
  { month: "Fevereiro", desktop: 305 },
  { month: "Março", desktop: 237 },
  { month: "Abril", desktop: 73 },
  { month: "Maio", desktop: 209 },
  { month: "Junho", desktop: 214 },
]

const chartConfig = {
  desktop: {
    label: "Faturamento",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

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

      {/* Gráfico */}
      <div className="flex flex-col gap-2 w-[350px]">
        <Card className="w-full shadow-md bg-white z-10">
          <CardHeader className="pb-2 pt-3">
            <CardTitle className="text-sm font-medium">Gráfico de Faturamento</CardTitle>
            <CardDescription className="text-xs">Janeiro - Junho 2024</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <ChartContainer config={chartConfig}>
              <BarChart
                accessibilityLayer
                data={chartData}
                margin={{
                  top: 20,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8}>
                  <LabelList
                    position="top"
                    offset={12}
                    className="fill-foreground"
                    fontSize={12}
                  />
                </Bar>
              </BarChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col items-start gap-2 text-sm pt-0 pb-3">
            <div className="flex gap-2 font-medium leading-none text-xs">
              Crescimento de 5,2% este mês <TrendingUp className="h-3 w-3 text-success" />
            </div>
            <div className="leading-none text-muted-foreground text-[10px]">
              Mostrando faturamento total dos últimos 6 meses
            </div>
          </CardFooter>
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
