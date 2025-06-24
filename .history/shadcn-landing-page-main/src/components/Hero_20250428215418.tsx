import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { Input } from "./ui/input";

export const Hero = () => {
  return (
    <section className="container flex flex-col lg:flex-row items-center justify-between py-20 md:py-32 gap-10 relative overflow-hidden">
      <div className="text-center lg:text-start space-y-6 lg:max-w-[45%]">
        <main className="text-5xl md:text-6xl font-extrabold">
          <h1 className="text-primary">
            Qual é o seu plano para sobreviver?
          </h1>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Em um cenário de alta carga tributária no Brasil, conte com nossa assessoria especializada para maximizar a eficiência tributária da sua empresa, garantindo conformidade legal e economia inteligente.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-2 mt-8 w-full md:w-4/5">
          <div className="relative w-full">
            <Input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              className="pr-32 h-12 bg-background border-muted-foreground/20"
            />
            <Button className="absolute right-0 top-0 h-12 rounded-l-none">
              Enviar
            </Button>
          </div>
        </div>
        
        <div className="pt-2">
          <a
            rel="noreferrer noopener"
            href="#about"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Ou conheça mais sobre nossos serviços
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10 relative lg:max-w-[35%]">
        <HeroCards />
      </div>

      {/* Background grid pattern */}
      <div className="absolute top-0 left-0 w-full h-full -z-20 opacity-5">
        <div className="w-full h-full grid grid-cols-12 grid-rows-12 gap-4">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-primary/30 rounded-sm"></div>
          ))}
        </div>
      </div>
    </section>
  );
};
