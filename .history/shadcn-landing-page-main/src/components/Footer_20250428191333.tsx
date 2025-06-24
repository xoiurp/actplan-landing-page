import { LogoIcon } from "./Icons";
import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex"
          >
            <LogoIcon />
            ACTPlan
          </a>
          
          <div className="mt-4">
            <h3 className="font-bold text-lg">Entre em Contato</h3>
            <p className="mt-2 text-muted-foreground">
              Agende uma consulta inicial gratuita e descubra como podemos ajudar sua empresa a economizar com impostos de forma legal e segura.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Contato</h3>
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <a
              rel="noreferrer noopener"
              href="tel:+5516982056000"
              className="opacity-60 hover:opacity-100"
            >
              (16) 98205-6000
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={16} />
            <a
              rel="noreferrer noopener"
              href="mailto:olivia.tazawa@actplanconsultoria.com"
              className="opacity-60 hover:opacity-100"
            >
              olivia.tazawa@actplanconsultoria.com
            </a>
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span className="opacity-60">
              Avenida dos Jacarandás, 420/419 - Mogi Mirim/SP
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Navegação</h3>
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
          <h3 className="font-bold text-lg">Links Úteis</h3>
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
          <h3 className="font-bold text-lg">Horário</h3>
          <div>
            <p className="opacity-60">
              Segunda a Sexta
            </p>
            <p className="opacity-60">
              8:00 - 18:00
            </p>
          </div>

          <div className="mt-2">
            <p className="opacity-60">
              Sábado
            </p>
            <p className="opacity-60">
              9:00 - 13:00
            </p>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2025 ACTPlan - Assessoria, Consultoria Tributária e Planejamento Financeiro. Todos os direitos reservados.
        </h3>
      </section>
    </footer>
  );
};
