"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface FinanceItemProps {
  label: string;
  date: string;
  value: string;
  isPositive?: boolean;
}

const FinanceItem = ({ label, date, value, isPositive = false }: FinanceItemProps) => (
  <div className="flex justify-between items-center border-b border-[rgba(44,41,69,0.26)] py-[2px]">
    <div className="flex flex-col">
      <p className="text-[8px] font-medium">{label}</p>
      <p className="text-[6px] font-light text-[rgba(0,0,0,0.59)]">{date}</p>
    </div>
    <p className={`text-[10px] font-medium ${isPositive ? 'text-[#0A8D3E]' : 'text-[rgba(141,10,10,0.63)]'}`}>
      {value}
    </p>
  </div>
);

export const FinanceCard = () => {
  return (
    <Card className="w-full shadow-md bg-white z-10">
      <CardHeader className="pb-1 pt-2">
        <CardTitle className="text-[10px] font-semibold text-[#2E2D42]">Faturamento e Impostos</CardTitle>
      </CardHeader>
      <CardContent className="space-y-0 pb-2">
        <FinanceItem 
          label="Faturamento Mensal"
          date="29 Mar"
          value="+ 250.000,00"
          isPositive={true}
        />
        <FinanceItem 
          label="ICMS"
          date="29 Mar"
          value="- 45.000,00"
        />
        <FinanceItem 
          label="COFINS"
          date="29 Mar"
          value="- 16.720,00"
        />
        <FinanceItem 
          label="PIS"
          date="29 Mar"
          value="- 3.630,00"
        />
      </CardContent>
    </Card>
  );
};
