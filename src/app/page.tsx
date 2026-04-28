"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Scale,
  Mail,
  Phone,
  Check,
  Gavel,
  ShieldCheck,
  Trophy,
  Play,
  Building2,
  HeartPulse,
  Briefcase,
  GraduationCap,
  Star,
  MapPin,
  ArrowRight,
  Quote,
  Menu,
  X,
} from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </div>
  );
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [whatsappData, setWhatsappData] = useState({ name: "", service: "" });

  const services = [
    "Direito Civil",
    "Direito de Família",
    "Direito Criminal",
    "Direito Imobiliário",
    "Direito do Trabalho",
    "Direito Empresarial",
    "Outros"
  ];

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "5521993145542";
    const message = `Olá, meu nome é ${whatsappData.name}. Gostaria de atendimento sobre: ${whatsappData.service}.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
    setIsWhatsAppModalOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen">
      {/* TOPBAR */}
      <div className="hidden md:block bg-dark2 text-gray-light py-2 text-sm border-b border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex justify-between items-center">
          <div className="flex gap-6 items-center">
            <a href="mailto:contato@pedropauloadvogados.com.br" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail size={14} /> contato@pedropauloadvogados.com.br
            </a>
            <span className="text-white/20">|</span>
            <a href="tel:+5521993145542" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone size={14} /> +55 21 99314-5542
            </a>
          </div>
          <div className="flex gap-5 items-center">
            <a href="#" className="hover:text-gold transition-colors"><FaFacebookF size={14} /></a>
            <a href="#" className="hover:text-gold transition-colors"><FaTwitter size={14} /></a>
            <a href="#" className="hover:text-gold transition-colors"><FaLinkedinIn size={14} /></a>
            <a href="#" className="hover:text-gold transition-colors"><FaInstagram size={14} /></a>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-dark/95 backdrop-blur-md shadow-lg py-4" : "bg-dark/90 backdrop-blur-sm py-5 border-b border-white/5"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 text-white">
            <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
              <Scale size={20} className="text-white" />
            </div>
            <span className="font-serif text-3xl font-bold tracking-wide">
              Pedro Paulo<span className="text-gold"> Advogados</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {[
              { name: "Início", link: "home" },
              { name: "Sobre Nós", link: "about" },
              { name: "Áreas de Atuação", link: "practice" },
              { name: "Atendimento", link: "contact" }
            ].map((item) => (
              <a
                key={item.name}
                href={`#${item.link}`}
                className="text-white/85 text-[15px] hover:text-gold transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a href="#contact" className="btn-primary ml-2 py-2.5 px-6">
              Consulta Gratuita
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-dark2 top-[76px] lg:hidden transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 gap-6">
          {[
            { name: "Início", link: "home" },
            { name: "Sobre Nós", link: "about" },
            { name: "Áreas de Atuação", link: "practice" },
            { name: "Atendimento", link: "contact" }
          ].map((item) => (
            <a
              key={item.name}
              href={`#${item.link}`}
              className="text-white/80 text-lg border-b border-white/10 pb-4"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

      {/* HERO SECTION */}
      <section id="home" className="relative min-h-[90vh] flex items-center pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="relative w-full h-full scale-110"
            style={{ transform: `translateY(${scrollY * 0.4}px)` }}
          >
            <Image
              src="https://duruthemes.com/demo/html/lawdit/light/img/slider/3.jpg"
              alt="Hero background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-dark/75"></div>
        </div>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 w-full relative z-10 text-white">
          <Reveal delay={0}>
            <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/40 text-gold px-4 py-1.5 text-sm tracking-widest uppercase mb-8">
              <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
              Soluções Jurídicas de Alta Performance
            </div>
          </Reveal>
          <Reveal delay={150}>
            <h1 className="text-5xl md:text-7xl lg:text-[80px] font-serif font-semibold leading-[1.1] mb-8 max-w-4xl">
              Defenda seus direitos com <em className="text-gold italic">excelência jurídica</em>
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl leading-relaxed">
              Pedro Paulo Advogados: Atendimento full service em todo o Brasil, unindo tradição e inovação para proteger o que é seu.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#about" className="btn-primary">
                Conheça o Escritório
              </a>
              <button onClick={() => setIsWhatsAppModalOpen(true)} className="btn-outline border-white text-white hover:bg-white hover:text-dark">
                Falar com Especialista
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <Reveal>
              <div className="relative">
                <Image
                  src="/images/team.png"
                  alt="Equipe Pedro Paulo Advogados"
                  width={800}
                  height={500}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-gold text-white w-32 h-32 flex flex-col items-center justify-center text-center p-4">
                  <span className="font-serif text-5xl font-bold leading-none mb-1">20</span>
                  <span className="text-xs uppercase tracking-widest font-medium">Anos de Experiência</span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="lg:pl-8">
                <span className="tag-label">Sobre o Escritório</span>
                <h2 className="text-4xl md:text-5xl lg:text-[54px] font-semibold leading-tight mb-6 text-dark">
                  Presença <em className="text-gold italic">Física e Digital</em>
                </h2>
                <p className="text-gray text-[17px] leading-relaxed mb-8">
                  Atuamos com excelência jurídica em diversas áreas, unindo a tradição do atendimento presencial com a agilidade do mundo digital. Nossas unidades estão localizadas em pontos estratégicos do Rio de Janeiro.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start gap-3 text-gray text-base">
                    <Check className="text-gold mt-1 flex-shrink-0" size={18} />
                    Unidade Recreio dos Bandeirantes
                  </li>
                  <li className="flex items-start gap-3 text-gray text-base">
                    <Check className="text-gold mt-1 flex-shrink-0" size={18} />
                    Unidade Barra da Tijuca
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FEATURES STRIP */}
      <section className="bg-off-white py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-12">
            <Reveal delay={0}>
              <div className="text-center group">
                <div className="w-20 h-20 mx-auto flex items-center justify-center border border-gold text-gold rounded-full mb-6 transition-all duration-300 group-hover:bg-gold group-hover:text-white">
                  <Gavel size={32} />
                </div>
                <h4 className="text-2xl font-serif font-medium mb-3">Ética Jurídica</h4>
                <p className="text-gray text-base leading-relaxed">
                  Compromisso com a ética e resultados sólidos para nossos clientes em cada processo.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="text-center group">
                <div className="w-20 h-20 mx-auto flex items-center justify-center border border-gold text-gold rounded-full mb-6 transition-all duration-300 group-hover:bg-gold group-hover:text-white">
                  <ShieldCheck size={32} />
                </div>
                <h4 className="text-2xl font-serif font-medium mb-3">Segurança & Sigilo</h4>
                <p className="text-gray text-base leading-relaxed">
                  Compromisso com a ética e resultados sólidos para nossos clientes em cada processo.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="text-center group">
                <div className="w-20 h-20 mx-auto flex items-center justify-center border border-gold text-gold rounded-full mb-6 transition-all duration-300 group-hover:bg-gold group-hover:text-white">
                  <Trophy size={32} />
                </div>
                <h4 className="text-2xl font-serif font-medium mb-3">Excelência Comprovada</h4>
                <p className="text-gray text-base leading-relaxed">
                  Compromisso com a ética e resultados sólidos para nossos clientes em cada processo.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="relative py-28 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/scales.png"
            alt="Legal consultancy"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-dark/90"></div>
        </div>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <Image
                src="/images/founder.png"
                alt="Lawyer"
                width={800}
                height={500}
                className="w-full h-[400px] object-cover opacity-90 grayscale-[20%]"
              />
            </Reveal>
            <Reveal delay={150}>
              <div>
                <span className="tag-label">Experiência que faz a diferença</span>
                <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
                  Oferecemos <em className="text-gold italic">consultoria jurídica</em> especializada
                </h2>
                <p className="text-white/70 text-lg leading-relaxed mb-10">
                  Todos são iguais perante a lei, mas um atendimento personalizado e estratégico é o que define o sucesso de uma causa. Conte com nossa expertise.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                  <button onClick={() => setIsWhatsAppModalOpen(true)} className="btn-outline">
                    Consulta Gratuita
                  </button>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/images/founder.png"
                      alt="Founder"
                      width={56}
                      height={56}
                      className="rounded-full border-2 border-gold object-cover"
                    />
                    <div>
                      <div className="font-serif text-[19px] font-semibold">Pedro Paulo Lucas da Silva</div>
                      <div className="text-gold text-xs uppercase tracking-widest">Sócio-Fundador</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PRACTICE AREAS (Replacing old case studies layout with the modern grid) */}
      <section id="practice" className="py-24 lg:py-32 bg-off-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid xl:grid-cols-[350px_1fr] gap-16 items-start">
            <Reveal>
              <div>
                <span className="tag-label">Excelência em cada causa</span>
                <h2 className="text-4xl md:text-[42px] font-semibold leading-tight mb-6">
                  Nossas <em className="text-gold italic">Áreas de Atuação</em>
                </h2>
                <p className="text-gray text-[17px] leading-relaxed mb-8">
                  Oferecemos suporte jurídico completo para pessoas físicas e jurídicas com foco em resultados céleres.
                </p>
              </div>
            </Reveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Building2, title: "Real Estate Law" },
                { icon: ShieldCheck, title: "Personal Law" },
                { icon: HeartPulse, title: "Personal Injury" },
                { icon: Briefcase, title: "Business Law" },
                { icon: GraduationCap, title: "Education Law" },
                { icon: Scale, title: "Criminal Law" },
              ].map((pa, i) => (
                <Reveal delay={i * 100} key={pa.title}>
                  <div className="bg-white p-10 border border-[#e8e4db] text-center hover:border-gold hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                    <pa.icon size={42} className="text-gold mx-auto mb-6 transition-transform group-hover:scale-110" />
                    <h4 className="text-2xl font-serif font-semibold">{pa.title}</h4>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <Reveal>
            <div className="text-center mb-16">
              <span className="tag-label justify-center">Nossos clientes satisfeitos</span>
              <h2 className="text-4xl md:text-5xl font-semibold">
                O que nossos <em className="text-gold italic">Clientes Dizem?</em>
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Jodi Martha", role: "Client", img: "/images/client1.png" },
              { name: "James Martha", role: "Client", img: "/images/client2.png" },
              { name: "Olivia Brown", role: "Client", img: "/images/client3.png" },
            ].map((testi, i) => (
              <Reveal delay={i * 100} key={testi.name}>
                <div className="bg-off-white p-10 border-t-4 border-transparent hover:border-gold transition-colors duration-300">
                  <div className="flex gap-1 text-gold mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray text-[17px] leading-relaxed mb-8 italic">
                    "Best lawyers in the law. I felt an unbelievably difficult company to deal with. I really trusted Lawdit law firm."
                  </p>
                  <div className="flex items-center gap-4">
                    <Image
                      src={testi.img}
                      alt={testi.name}
                      width={56}
                      height={56}
                      className="rounded-full border-2 border-gold object-cover w-14 h-14"
                    />
                    <div>
                      <div className="font-serif text-[19px] font-semibold">{testi.name}</div>
                      <div className="text-gray-light text-sm">{testi.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-dark2 text-white/65 pt-24 border-t border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
            <div>
              <div className="flex items-center gap-3 text-white mb-6">
                <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                  <Scale size={20} className="text-white" />
                </div>
                <span className="font-serif text-2xl font-bold tracking-wide">
                  Pedro Paulo Advogados
                </span>
              </div>
              <p className="text-[15px] leading-relaxed">
                Escritório de advocacia Full Service com atendimento em todo o Brasil. Soluções jurídicas inovadoras e personalizadas.
              </p>
            </div>
            
            <div>
              <h5 className="font-serif text-2xl text-white mb-8">Links Rápidos</h5>
              <ul className="space-y-3 text-[15px]">
                {[
                  { name: "Início", link: "home" },
                  { name: "Sobre Nós", link: "about" },
                  { name: "Áreas de Atuação", link: "practice" },
                  { name: "Atendimento", link: "contact" }
                ].map(item => (
                  <li key={item.name}>
                    <a href={`#${item.link}`} className="hover:text-gold hover:pl-2 transition-all">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-serif text-2xl text-white mb-8">Contact</h5>
              <ul className="space-y-4 text-[15px]">
                <li className="flex items-start gap-3">
                  <MapPin className="text-gold shrink-0 mt-1" size={18} />
                  <span>Rua Engenheiro Haroldo Cavalcante 360, sala 305,<br/>Recreio, Rio de Janeiro - RJ, 22795-240</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="text-gold shrink-0" size={18} />
                  <span>contato@pedropauloadvogados.com.br</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-gold shrink-0" size={18} />
                  <span>+55 21 99314-5542</span>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-serif text-2xl text-white mb-8">Receba Novidades</h5>
              <p className="text-[15px] mb-6">
                Fique por dentro das novidades jurídicas. Assine nossa newsletter para receber conteúdos exclusivos.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Seu E-mail"
                  className="bg-white/5 border border-white/10 border-r-0 px-4 py-3.5 w-full text-white text-sm focus:outline-none focus:border-gold"
                />
                <button className="bg-gold px-5 py-3.5 text-white hover:bg-[#b8903c] transition-colors">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[15px]">
            <span>© 2026 Todos os Direitos Reservados | Pedro Paulo Advogados</span>
            <div className="flex gap-8">
              <a href="#" className="hover:text-gold transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-gold transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>

      {/* WHATSAPP BUTTON */}
      <button
        onClick={() => setIsWhatsAppModalOpen(true)}
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform animate-pulse-whatsapp"
        aria-label="Contato via WhatsApp"
      >
        <FaWhatsapp size={32} />
      </button>

      {/* WHATSAPP MODAL */}
      {isWhatsAppModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-dark/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="bg-gold p-6 text-white flex justify-between items-center">
              <h3 className="font-serif text-2xl font-bold">Iniciar Atendimento</h3>
              <button onClick={() => setIsWhatsAppModalOpen(false)} className="hover:rotate-90 transition-transform">
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleWhatsAppSubmit} className="p-8 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray mb-2">Seu Nome</label>
                <input
                  required
                  type="text"
                  className="w-full border-b-2 border-off-white focus:border-gold py-2 outline-none transition-colors text-dark"
                  placeholder="Como podemos te chamar?"
                  value={whatsappData.name}
                  onChange={(e) => setWhatsappData({ ...whatsappData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray mb-2">Serviço de Interesse</label>
                <select
                  required
                  className="w-full border-b-2 border-off-white focus:border-gold py-2 outline-none transition-colors text-dark bg-transparent"
                  value={whatsappData.service}
                  onChange={(e) => setWhatsappData({ ...whatsappData, service: e.target.value })}
                >
                  <option value="" disabled>Selecione uma área</option>
                  {services.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-[#25D366] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#1ebd5e] transition-colors shadow-lg"
              >
                <FaWhatsapp size={20} />
                Falar com Advogado
              </button>
              <p className="text-[11px] text-gray-light text-center">
                Seus dados serão utilizados apenas para este atendimento.
              </p>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
