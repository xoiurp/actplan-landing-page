import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#766CFF] to-[#4A3AFF] text-transparent bg-clip-text">
              Maximize
            </span>{" "}
            a Eficiência Tributária
          </h1>{" "}
          <h2 className="inline">
            do Seu{" "}
            <span className="inline bg-gradient-to-r from-[#4A3AFF] to-[#211F54] text-transparent bg-clip-text">
              Negócio
            </span>
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Em um cenário de alta carga tributária, conte com nossa assessoria especializada para otimizar seus impostos com segurança e conformidade legal.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">Agendar Consultoria</Button>

          <a
            rel="noreferrer noopener"
            href="#about"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Saiba Mais
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
