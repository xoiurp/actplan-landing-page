import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Cta = () => {
  return (
    <section id="cta" className="bg-muted/50">
      <div className="container py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Fale com um Especialista
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Preencha o formulário abaixo e nossa equipe entrará em contato para
            agendar uma consultoria gratuita.
          </p>
        </div>

        <form className="mx-auto mt-12 max-w-lg">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6"
              >
                Nome
              </label>
              <div className="mt-2.5">
                <Input
                  type="text"
                  id="first-name"
                  autoComplete="given-name"
                  placeholder="Seu nome"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6"
              >
                Sobrenome
              </label>
              <div className="mt-2.5">
                <Input
                  type="text"
                  id="last-name"
                  autoComplete="family-name"
                  placeholder="Seu sobrenome"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6"
              >
                E-mail
              </label>
              <div className="mt-2.5">
                <Input
                  type="email"
                  id="email"
                  autoComplete="email"
                  placeholder="Seu melhor e-mail"
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <Button type="submit" className="w-full">
              Enviar
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};
