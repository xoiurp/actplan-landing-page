import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { Input } from "./ui/input";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
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
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
