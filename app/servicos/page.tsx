'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function ServicosPage() {
  const services = [
    {
      title: "Pintura Profissional",
      description: "Renove a aparência de seus ambientes com um serviço de pintura de alta qualidade. Preparamos as superfícies com o máximo cuidado para garantir um acabamento liso, uniforme e duradouro, utilizando as melhores tintas do mercado.",
      image: "/images/imagem-pintor.jpeg",
      features: [
        "Pintura de interiores e exteriores",
        "Pintura de fachadas",
        "Aplicação de texturas e efeitos decorativos",
        "Envernizamento de madeiras"
      ],
      reverse: false
    },
    {
      title: "Reformas e Alvenaria",
      description: "Realizamos desde pequenas reformas até grandes modificações estruturais. Seja para construir uma nova parede, demolir uma estrutura antiga ou criar novos espaços, nossa equipe de alvenaria trabalha com precisão e limpeza.",
      image: "/images/imagem-parede.jpeg",
      features: [
        "Construção e demolição de paredes",
        "Abertura de vãos para portas e janelas",
        "Reboco, contrapiso e acabamentos",
        "Reformas estruturais planejadas"
      ],
      reverse: true
    },
    {
      title: "Instalações Elétricas",
      description: "A segurança da sua família e do seu patrimônio é nossa prioridade. Executamos todos os serviços elétricos seguindo as normas técnicas vigentes (NBR 5410), garantindo uma instalação segura, eficiente e bem dimensionada.",
      image: "/images/imagem-eletricista.jpeg",
      features: [
        "Troca de fiação e quadros de disjuntores",
        "Instalação de tomadas, interruptores e luminárias",
        "Projetos de iluminação",
        "Instalação de chuveiros e ventiladores de teto"
      ],
      reverse: false
    },
    {
      title: "Pisos e Revestimentos",
      description: "A aplicação correta de pisos e revestimentos é fundamental para um acabamento perfeito. Trabalhamos com todos os tipos de materiais, garantindo um assentamento nivelado, alinhado e com rejunte de qualidade.",
      image: "/images/imagem-piso.jpeg",
      features: [
        "Instalação de porcelanatos e cerâmicas",
        "Aplicação de revestimentos 3D e pastilhas",
        "Instalação de pisos vinílicos e laminados",
        "Criação de nichos e bancadas em porcelanato"
      ],
      reverse: true
    },
    {
      title: "Gesso e Drywall",
      description: "Modernize seus ambientes com a versatilidade do gesso e do drywall. Criamos soluções de forros rebaixados, sancas iluminadas, paredes divisórias e mobiliário planejado de forma rápida, limpa e com um acabamento impecável.",
      image: "/images/imagem-gesso.jpeg",
      features: [
        "Forros de gesso e sancas",
        "Paredes e divisórias em drywall",
        "Estantes, nichos e painéis de TV",
        "Isolamento acústico e térmico"
      ],
      reverse: false
    }
  ];

  return (
    <>
      {/* Page Header */}
      <section className="relative bg-gradient-to-r from-red-900 to-red-800 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Nossos Serviços
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Soluções completas para transformar e valorizar o seu imóvel.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`flex flex-col ${service.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#D93025]">
                    {service.title}
                  </h2>
                  <p className="text-gray-700 mb-6 text-lg">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-6 h-6 text-[#D93025] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#D93025] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Não encontrou o que precisa ou tem um projeto especial?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Nossa equipe está pronta para avaliar suas necessidades e oferecer a melhor solução. Entre em contato conosco!
            </p>
            <a
              href="https://wa.me/5571984836460?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20com%20a%20SrReformas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-[#D93025] font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Solicite um Orçamento Personalizado
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
