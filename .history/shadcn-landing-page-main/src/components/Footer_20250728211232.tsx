import { LogoActplan } from "./LogoActplan";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container grid grid-cols-2 gap-x-12 gap-y-8 py-20 md:grid-cols-4 xl:grid-cols-5">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="flex text-xl font-bold"
          >
            <LogoActplan className="h-8 text-primary" />
          </a>
          <h3 className="mt-4 text-lg font-bold">Entre em Contato</h3>
          <p className="text-muted-foreground">
            Agende uma consulta inicial gratuita e descubra como podemos ajudar
            sua empresa a economizar com impostos de forma legal e segura.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">Localização</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Avenida dos Jacarandás, 420/419 - Mogi Mirim/SP
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">Navegação</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#about"
              className="opacity-60 hover:opacity-100"
            >
              Sobre Nós
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#services"
              className="opacity-60 hover:opacity-100"
            >
              Serviços
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#howItWorks"
              className="opacity-60 hover:opacity-100"
            >
              Processo
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">Links Úteis</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#testimonials"
              className="opacity-60 hover:opacity-100"
            >
              Depoimentos
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#faq"
              className="opacity-60 hover:opacity-100"
            >
              FAQ
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Política de Privacidade
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">Horário</h3>
          <p className="opacity-60">Segunda a Sexta</p>
          <p className="opacity-60">8:00 - 18:00</p>
          <p className="opacity-60">Sábado</p>
          <p className="opacity-60">9:00 - 13:00</p>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2025 ACTPlan - Assessoria, Consultoria Tributária e
          Planejamento Financeiro. Todos os direitos reservados.
        </h3>
      </section>
    </footer>
  );
};
