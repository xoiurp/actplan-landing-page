import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt="Equipe ACTPlan"
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Quem{" "}
                </span>
                Somos
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                A ACTPlan é uma empresa nacional especializada na prestação de serviços de assessoria tributária para empresas. Localizada em Mogi Mirim/SP e Campinas/SP, contamos com uma equipe qualificada que trabalha focada dentro das áreas tributária, contábil, administrativa e jurídica.
              </p>
              
              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-2">Nossa Essência</h3>
                
                <h4 className="text-xl font-semibold mt-4">Missão</h4>
                <p className="text-muted-foreground">
                  Maximizar a eficiência tributária das empresas, garantindo conformidade legal e promovendo economia inteligente através de estratégias personalizadas.
                </p>
                
                <h4 className="text-xl font-semibold mt-4">Visão</h4>
                <p className="text-muted-foreground">
                  Transformar o cenário tributário empresarial, oferecendo soluções inovadoras que garantam economia, segurança e conformidade legal.
                </p>
              </div>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
