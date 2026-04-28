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
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

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

  useEffect(() => {
    const handleScroll = () => {
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
            <a href="mailto:info@lawdit.com" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail size={14} /> info@lawdit.com
            </a>
            <span className="text-white/20">|</span>
            <a href="tel:+12345678900" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone size={14} /> +1 234 567 8900
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
              Law<span className="text-gold">dit</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {["Home", "About", "Practice Areas", "Case Study", "Attorneys", "Blog"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().split(" ")[0]}`}
                className="text-white/85 text-[15px] hover:text-gold transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a href="#contact" className="btn-primary ml-2 py-2.5 px-6">
              Free Consult
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
          {["Home", "About", "Practice Areas", "Case Study", "Attorneys", "Blog", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().split(" ")[0]}`}
              className="text-white/80 text-lg border-b border-white/10 pb-4"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* HERO SECTION */}
      <section id="home" className="relative min-h-[90vh] flex items-center pt-20 pb-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-dark/75"></div>
        </div>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 w-full relative z-10 text-white">
          <Reveal delay={0}>
            <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/40 text-gold px-4 py-1.5 text-sm tracking-widest uppercase mb-8">
              <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
              Available Legal Solution
            </div>
          </Reveal>
          <Reveal delay={150}>
            <h1 className="text-5xl md:text-7xl lg:text-[80px] font-serif font-semibold leading-[1.1] mb-8 max-w-4xl">
              We are here for the <em className="text-gold italic">voice of justice</em>
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <div className="flex flex-wrap gap-4 mt-10">
              <a href="#about" className="btn-primary">
                Explore Company
              </a>
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
                  alt="Lawdit Team"
                  width={800}
                  height={500}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-gold text-white w-32 h-32 flex flex-col items-center justify-center text-center p-4">
                  <span className="font-serif text-5xl font-bold leading-none mb-1">20</span>
                  <span className="text-xs uppercase tracking-widest font-medium">Years of Experience</span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="lg:pl-8">
                <span className="tag-label">About Our Firm</span>
                <h2 className="text-4xl md:text-5xl lg:text-[54px] font-semibold leading-tight mb-6 text-dark">
                  We are here to fight against <em className="text-gold italic">any violence</em>
                </h2>
                <p className="text-gray text-[17px] leading-relaxed mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Nam dui ligula, fringilla a, euismod sodales, sollicitudin vel, wisi.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start gap-3 text-gray text-base">
                    <Check className="text-gold mt-1 flex-shrink-0" size={18} />
                    Full service corporate &amp; business law firm
                  </li>
                  <li className="flex items-start gap-3 text-gray text-base">
                    <Check className="text-gold mt-1 flex-shrink-0" size={18} />
                    Reputable and innovative legal solutions
                  </li>
                </ul>
                <a href="#contact" className="btn-primary">
                  Discover more
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FEATURES STRIP */}
      <section className="bg-off-white py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Gavel, title: "Legal Production" },
              { icon: ShieldCheck, title: "Private & Secure" },
              { icon: Trophy, title: "Winning Awards" },
            ].map((feature, i) => (
              <Reveal delay={i * 100} key={feature.title}>
                <div className="text-center group">
                  <div className="w-20 h-20 mx-auto flex items-center justify-center border border-gold text-gold rounded-full mb-6 transition-all duration-300 group-hover:bg-gold group-hover:text-white">
                    <feature.icon size={32} />
                  </div>
                  <h4 className="text-2xl font-serif font-medium mb-3">{feature.title}</h4>
                  <p className="text-gray text-base leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit condimentum diam lorem.
                  </p>
                </div>
              </Reveal>
            ))}
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
                <span className="tag-label">Profit make the difference</span>
                <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
                  We here for provide <em className="text-gold italic">legal consultancy</em>
                </h2>
                <p className="text-white/70 text-lg leading-relaxed mb-10">
                  All people are equal before the law. A good attorney is what makes a difference. Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                  <a href="#contact" className="btn-outline">
                    Free Consultation
                  </a>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/images/founder.png"
                      alt="Founder"
                      width={56}
                      height={56}
                      className="rounded-full border-2 border-gold object-cover"
                    />
                    <div>
                      <div className="font-serif text-[19px] font-semibold">Emily D. Michael</div>
                      <div className="text-gold text-xs uppercase tracking-widest">President & Co-Founder</div>
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
                <span className="tag-label">Legal case studies</span>
                <h2 className="text-4xl md:text-[42px] font-semibold leading-tight mb-6">
                  General &amp; Legal <em className="text-gold italic">Practice Areas</em>
                </h2>
                <p className="text-gray text-[17px] leading-relaxed mb-8">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit fermentum lorem diam lorem.
                </p>
                <a href="#contact" className="btn-primary">
                  Discover more
                </a>
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
              <span className="tag-label justify-center">Our satisfied clients</span>
              <h2 className="text-4xl md:text-5xl font-semibold">
                What Our <em className="text-gold italic">Clients Say?</em>
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
                  Lawdit
                </span>
              </div>
              <p className="text-[15px] leading-relaxed">
                Full service corporate &amp; business law firm. Reputable and innovative legal solutions for all your needs.
              </p>
            </div>
            
            <div>
              <h5 className="font-serif text-2xl text-white mb-8">Quick Links</h5>
              <ul className="space-y-3 text-[15px]">
                {["Home", "About", "Practice Areas", "Attorneys", "Blog"].map(link => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().split(" ")[0]}`} className="hover:text-gold hover:pl-2 transition-all">
                      {link}
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
                  <span>6965 Paulding St. Victoria,<br/>Brooklyn NY 11209</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="text-gold shrink-0" size={18} />
                  <span>info@lawdit.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-gold shrink-0" size={18} />
                  <span>+1 234 567 890</span>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-serif text-2xl text-white mb-8">Subscribe</h5>
              <p className="text-[15px] mb-6">
                Stay in the know about our news. Sign up and be the first to be notified by email.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-white/5 border border-white/10 border-r-0 px-4 py-3.5 w-full text-white text-sm focus:outline-none focus:border-gold"
                />
                <button className="bg-gold px-5 py-3.5 text-white hover:bg-[#b8903c] transition-colors">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[15px]">
            <span>© 2026 All Rights Reserved By Lawdit</span>
            <div className="flex gap-8">
              <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
