import { Shield, Scale, CheckCircle, Heart } from "lucide-react";

interface ValueProps {
  icon: JSX.Element;
  name: string;
}

const values: ValueProps[] = [
  {
    icon: <Shield size={34} />,
    name: "Transparência",
  },
  {
    icon: <CheckCircle size={34} />,
    name: "Excelência",
  },
  {
    icon: <Scale size={34} />,
    name: "Compromisso",
  },
  {
    icon: <Heart size={34} />,
    name: "Foco no Cliente",
  },
];

export const Sponsors = () => {
  return (
    <section
      id="values"
      className="container pt-24 sm:py-32"
    >
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        Nossos Valores
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {values.map(({ icon, name }: ValueProps) => (
          <div
            key={name}
            className="flex items-center gap-1 text-muted-foreground/60"
          >
            <span>{icon}</span>
            <h3 className="text-xl font-bold">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
