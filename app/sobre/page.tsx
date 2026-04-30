'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, FileCheck, Clock, Smile } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function SobrePage() {
  const commitments = [
    {
      icon: <Award className="w-12 h-12 text-[#D93025]" />,
      title: "Qualidade Superior",
      description: "Selecionamos rigorosamente os materiais e a mão de obra para garantir um acabamento perfeito e duradouro em cada detalhe do seu projeto."
    },
    {
      icon: <FileCheck className="w-12 h-12 text-[#D93025]" />,
      title: "Transparência Total",
      description: "Você recebe um orçamento claro e detalhado. Nossa comunicação é aberta durante todo o processo para que você esteja sempre no controle."
    },
    {
      icon: <Clock className="w-12 h-12 text-[#D93025]" />,
      title: "Pontualidade Rigorosa",
      description: "Seu tempo é precioso. Cumprimos rigorosamente os cronogramas estabelecidos, planejando cada etapa para evitar atrasos."
    },
    {
      icon: <Smile className="w-12 h-12 text-[#D93025]" />,
      title: "Satisfação do Cliente",
      description: "Nosso maior objetivo é superar suas expectativas. Não consideramos um trabalho concluído até que você esteja 100% satisfeito."
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
            Sobre a SR Reformas
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Paixão por transformar ambientes, compromisso com a sua satisfação.
          </motion.p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <motion.div
              className="relative h-96 rounded-xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/images/logo/logo-sr-reformas.svg"
                alt="SR Reformas"
                fill
                className="object-contain p-8"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Nossa História
              </h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  A SR Reformas nasceu da paixão por construção e do desejo de oferecer um serviço diferenciado em Salvador. Fundada por José Régis, um profissional com anos de experiência no setor, a empresa surgiu para preencher uma lacuna no mercado: a necessidade de um serviço de reformas que unisse qualidade técnica, transparência no orçamento e, acima de tudo, respeito aos prazos e ao cliente.
                </p>
                <p>
                  Começamos com pequenos reparos e pinturas, mas, graças à confiança de nossos clientes e às indicações, crescemos e expandimos nossa gama de serviços. Hoje, realizamos desde reformas completas de apartamentos e casas até projetos comerciais, sempre mantendo o mesmo DNA de qualidade e atenção aos detalhes do primeiro dia.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-3 text-[#D93025]">
                  Nossa Missão
                </h3>
                <p className="text-gray-700 text-lg">
                  Executar projetos de reforma com excelência, transformando os espaços e a vida de nossos clientes através de soluções criativas, seguras e com o melhor acabamento do mercado.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-3 text-[#D93025]">
                  Nossa Visão
                </h3>
                <p className="text-gray-700 text-lg">
                  Ser a empresa de reformas referência em Salvador e região, reconhecida pela confiança, inovação e pela satisfação total de cada cliente que atendemos.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Nosso Compromisso com Você
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {commitments.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
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
              Pronto para transformar seu imóvel?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Vamos conversar sobre o seu projeto. Entre em contato e solicite um orçamento sem compromisso.
            </p>
            <a
              href="https://wa.me/5571984836460?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20com%20a%20SrReformas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-[#D93025] font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Fale Conosco Agora
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
