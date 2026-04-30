'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Paintbrush, Zap, Droplet, Grid3x3, Star, Award, Users, TrendingUp, CheckCircle2, X } from 'lucide-react';
import Counter from '@/components/Counter';
import WaveDivider from '@/components/WaveDivider';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);

  const services = [
    {
      icon: <Paintbrush className="w-10 h-10" />,
      title: "Pintura Profissional",
      description: "Renove seus ambientes com pinturas de alta qualidade, internas e externas.",
      gradient: "from-orange-400 to-red-500"
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Instalações Elétricas",
      description: "Segurança e eficiência em instalações e manutenções elétricas completas.",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Droplet className="w-10 h-10" />,
      title: "Serviços Hidráulicos",
      description: "Soluções para vazamentos, instalações de louças e sistemas hidráulicos.",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      icon: <Grid3x3 className="w-10 h-10" />,
      title: "Pisos e Revestimentos",
      description: "Instalação de porcelanatos, cerâmicas e outros revestimentos com perfeição.",
      gradient: "from-purple-400 to-pink-500"
    }
  ];

  const stats = [
    {
      icon: <Award className="w-8 h-8" />,
      number: 5,
      suffix: "+",
      label: "Anos de Experiência",
      gradient: "from-red-500 to-orange-500"
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      number: 500,
      suffix: "+",
      label: "Projetos Concluídos",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: 450,
      suffix: "+",
      label: "Clientes Satisfeitos",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Star className="w-8 h-8" />,
      number: 4.9,
      suffix: "/5",
      label: "Avaliação Média",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  const gallery = [
    { image: "/images/imagem-pintor.jpeg", title: "Pintura Residencial" },
    { image: "/images/imagem-eletricista.jpeg", title: "Instalação Elétrica" },
    { image: "/images/imagem-piso.jpeg", title: "Piso Porcelanato" },
    { image: "/images/imagem-parede.jpeg", title: "Alvenaria" },
    { image: "/images/imagem-gesso.jpeg", title: "Gesso e Drywall" },
  ];

  const testimonials = [
    {
      quote: "Contratei a SR Reformas para a reforma completa do meu apartamento e o resultado foi incrível! Profissionalismo do início ao fim. Recomendo demais!",
      author: "Maria Oliveira",
      location: "Pituba",
      rating: 5
    },
    {
      quote: "Serviço rápido, limpo e de muita qualidade. A equipe foi muito atenciosa e cumpriu o prazo à risca. Estou muito satisfeito.",
      author: "João Costa",
      location: "Graça",
      rating: 5
    },
    {
      quote: "Excelente trabalho! Superou minhas expectativas. A equipe é muito profissional e o acabamento ficou perfeito.",
      author: "Ana Santos",
      location: "Barra",
      rating: 5
    }
  ];

  const benefits = [
    {
      title: "Qualidade Garantida",
      description: "Utilizamos os melhores materiais e técnicas para um acabamento impecável e duradouro."
    },
    {
      title: "Pontualidade na Entrega",
      description: "Respeitamos o cronograma e nos comprometemos com os prazos acordados com você."
    },
    {
      title: "Equipe Qualificada",
      description: "Nossos profissionais são experientes e dedicados a entregar o melhor resultado."
    },
    {
      title: "Orçamento Transparente",
      description: "Oferecemos orçamentos detalhados e justos, sem surpresas no final da obra."
    }
  ];

  return (
    <>
      {/* Hero Section com Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: heroY }}
        >
          <Image
            src="/images/hero-background.jpeg"
            alt="Reforma de qualidade"
            fill
            className="object-cover scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-[#D93025]/30" />
        </motion.div>

        {/* Badge destaque */}
        <motion.div
          className="absolute top-32 left-1/2 transform -translate-x-1/2 z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
        </motion.div>

        {/* Content */}
        <motion.div
          className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Transformamos seu imóvel,{' '}
            <span className="bg-gradient-to-r from-red-400 via-red-500 to-orange-500 bg-clip-text text-transparent">
              realizamos seu sonho
            </span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-10 text-gray-100 max-w-3xl mx-auto drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Reformas residenciais e comerciais em Salvador com qualidade, prazo e o melhor custo-benefício.
          </motion.p>
          <motion.a
            href="https://w.app/srreformas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-gradient-to-r from-[#D93025] to-[#FF6B6B] text-white font-bold rounded-xl text-lg shadow-2xl shadow-red-500/50 hover:shadow-red-500/70 transition-all duration-300 hover:scale-105 relative overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Solicite seu Orçamento Gratuito</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B] to-[#D93025] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/80 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#D93025] via-[#E94235] to-[#FF6B6B] animate-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={fadeInUp}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm mb-4 text-white`}>
                  {stat.icon}
                </div>
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  <Counter end={stat.number} suffix={stat.suffix} />
                </div>
                <p className="text-white/90 font-medium text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Wave Divider */}
      <WaveDivider className="text-gray-50 -mt-1" fill="#f9fafb" />

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Nossos Principais <span className="gradient-text">Serviços</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Soluções completas para transformar seu espaço
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="gradient-border p-8 text-center group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white rounded-xl"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div className="text-center" variants={fadeInUp}>
              <Link
                href="/servicos"
                className="inline-block px-8 py-4 bg-gradient-to-r from-[#D93025] to-[#FF6B6B] text-white font-bold rounded-xl hover:shadow-xl hover:shadow-red-500/30 transition-all duration-300 hover:scale-105"
              >
                Ver todos os serviços
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Nossos <span className="gradient-text">Trabalhos</span>
              </h2>
              <p className="text-xl text-gray-600">
                Veja alguns dos nossos projetos realizados
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {gallery.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedImage(item.image)}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">{item.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors"
          >
            <X size={32} />
          </button>
          <motion.div
            className="relative max-w-5xl w-full h-[80vh]"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Trabalho realizado"
              fill
              className="object-contain rounded-lg"
            />
          </motion.div>
        </motion.div>
      )}

      {/* Wave Divider */}
      <WaveDivider className="text-gray-50 -mb-1" fill="#f9fafb" />

      {/* CTA Section */}
      <section className="relative py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto glass-effect rounded-3xl p-12 shadow-2xl border border-white/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Pronto para <span className="gradient-text">transformar</span> seu espaço?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Entre em contato agora e receba um orçamento personalizado e gratuito para o seu projeto!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/5571984836460?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20com%20a%20SrReformas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-[#D93025] to-[#FF6B6B] text-white font-bold rounded-xl text-lg shadow-xl shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300 hover:scale-105"
                >
                  Falar no WhatsApp
                </a>
                <a
                  href="tel:71987569792"
                  className="inline-flex items-center justify-center px-10 py-4 bg-white text-[#D93025] font-bold rounded-xl text-lg border-2 border-[#D93025] hover:bg-[#D93025] hover:text-white transition-all duration-300 hover:scale-105"
                >
                  Ligar Agora
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Por que escolher a <span className="gradient-text">SR Reformas?</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-red-200 hover:shadow-xl transition-all duration-300 group"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#D93025] to-[#FF6B6B] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-[#D93025] transition-colors">{benefit.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                O que nossos <span className="gradient-text">clientes</span> dizem
              </h2>
              <p className="text-xl text-gray-600">
                Depoimentos reais de quem confiou em nosso trabalho
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-[#D93025] group hover:-translate-y-2"
                  variants={fadeInUp}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative mb-6">
                    <svg className="absolute -top-2 -left-2 w-8 h-8 text-red-100" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <blockquote className="text-gray-700 italic pl-6 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D93025] to-[#FF6B6B] flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
