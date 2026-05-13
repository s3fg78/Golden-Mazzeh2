/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Star, 
  Coffee, 
  Waves, 
  Car, 
  Wifi, 
  ChefHat, 
  Bell, 
  Instagram, 
  Facebook, 
  Twitter,
  ChevronLeft,
  ChevronRight,
  Clock
} from 'lucide-react';

// --- Constants ---

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1920",
  roomClassic: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1000",
  roomDeluxe: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1000",
  roomSuite: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1000",
  dining: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1000",
  spa: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1000"
};

// --- Components ---

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'الرئيسية', href: '#' },
    { name: 'عن الفندق', href: '#about' },
    { name: 'الغرف والأجنحة', href: '#rooms' },
    { name: 'المرافق', href: '#amenities' },
    { name: 'الموقع', href: '#location' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'bg-dark/95 backdrop-blur-md py-4 border-b border-gold/10' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Reservation Button - Desktop */}
        <div className="hidden lg:block">
          <a 
            href="https://wa.me/963946900059" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3 border border-gold text-gold text-xs tracking-[0.2em] hover:bg-gold hover:text-dark transition-all duration-300 font-lato uppercase"
          >
            احجز الآن
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {menuItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-cream/70 hover:text-gold transition-colors text-sm font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Logo */}
        <div className="text-center">
          <a href="#" className="font-cinzel text-2xl tracking-widest text-gold selection:bg-gold/30">
            GOLDEN <span className="text-cream">MAZZEH</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-gold p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-dark-2 border-t border-gold/10 p-6 flex flex-col items-center gap-6"
          >
            {menuItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-cream text-lg"
              >
                {item.name}
              </a>
            ))}
            <a 
              href="https://wa.me/963946900059" 
              className="w-full py-4 bg-gold text-dark text-center font-bold"
            >
              احجز الآن
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Zoom effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "linear" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={IMAGES.hero} 
          alt="Golden Mazzeh Hotel Exterior" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-dark/50" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-gold tracking-[0.4em] uppercase text-xs mb-6 font-lato"
        >
          دمشق • سوريا • تجربة لا تُنسى
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-6xl md:text-8xl lg:text-9xl mb-8 leading-tight"
        >
          جولدن <span className="text-gold">مزة</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-xl md:text-2xl text-gold-pale/80 font-amiri italic mb-12 max-w-2xl mx-auto"
        >
          حيث تلتقي الفخامة العالمية بعبق الياسمين الدمشقي
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <a 
            href="#rooms" 
            className="px-12 py-4 bg-gold text-dark font-bold hover:bg-gold-light transition-all duration-300 w-full sm:w-auto"
          >
            اكتشف الغرف
          </a>
          <a 
            href="#about" 
            className="px-12 py-4 border border-gold text-gold hover:bg-gold/10 transition-all duration-300 w-full sm:w-auto"
          >
            تعرف علينا
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a 
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
      >
        <span className="text-[12px] tracking-widest uppercase font-amiri">مرر للاسفل للمزيد من التفاصيل</span>
        <div className="w-[1px] h-12 bg-gold" />
      </motion.a>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-dark-2 relative overflow-hidden">
      <div className="container mx-auto grid lg:grid-template-columns-[1.2fr_1fr] gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <p className="text-gold text-sm tracking-widest uppercase mb-4">قصتنا</p>
          <h2 className="text-4xl md:text-5xl mb-8 leading-snug">جوهرة دمشق في قلب حي المزة</h2>
          <div className="space-y-6 text-cream/70 text-lg leading-relaxed font-amiri">
            <p>
              يعد فندق جولدن مزة ملاذاً للفخامة والرفاهية، حيث امتزج التصميم العصري مع لمسات فنية مستوحاة من التراث السوري العريق.
            </p>
            <p>
              نحن نفخر بتقديم تجربة تفوق التوقعات، من الاستقبال الحار بعبق الياسمين إلى الخدمات الفندقية الراقية التي تليق بضيوفنا المتميزين. سواء كنت في رحلة عمل أو للاستجمام، فندق جولدن مزة هو منزلك الثاني في العاصمة.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 mt-12">
            {[
              { label: 'نجوم الفخامة', val: '5' },
              { label: 'خدمة الغرف', val: '24/7' },
              { label: 'تجربة ضيافة', val: '100%' },
              { label: 'ذكريات دمشقية', val: '∞' }
            ].map((stat, i) => (
              <div key={i} className="border-r border-gold/20 pr-6">
                <span className="block text-3xl text-gold font-cinzel mb-1">{stat.val}</span>
                <span className="text-xs uppercase tracking-wider text-cream/40">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group order-1 lg:order-2"
        >
          <div className="aspect-[4/5] overflow-hidden border border-gold/10 relative">
            <img 
              src={IMAGES.roomSuite} 
              alt="Luxury Experience" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          {/* Decorative frame */}
          <div className="absolute -top-6 -right-6 w-32 h-32 border-t border-r border-gold/30 -z-10" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b border-l border-gold/30 -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

const RoomCard = ({ title, desc, img, features }: any) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-dark-2 border border-gold/10 group cursor-pointer overflow-hidden"
    >
      <div className="aspect-video overflow-hidden">
        <img 
          src={img} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl text-gold-pale">{title}</h3>
          <div className="flex text-gold">
            {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
          </div>
        </div>
        <p className="text-cream/60 font-amiri mb-6 line-clamp-3 leading-relaxed">
          {desc}
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {features.map((f: string) => (
            <span key={f} className="text-[10px] px-3 py-1 border border-gold/20 text-gold uppercase tracking-wider">
              {f}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Rooms = () => {
  const rooms = [
    {
      title: "الغرفة الكلاسيكية",
      desc: "تصميم مريح يجمع بين البساطة والأناقة الدمشقية، مثالية للمسافرين بمفردهم أو في رحلات العمل.",
      img: IMAGES.roomClassic,
      features: ["سرير ملكي", "واي فاي", "مطلة على المدينة"]
    },
    {
      title: "الغرفة الديلوكس",
      desc: "مساحة أوسع مجهزة بأرقى الأثاث، مع إطلالات بانورامية ساحرة على حي المزة وجبال دمشق.",
      img: IMAGES.roomDeluxe,
      features: ["سرير ملكي", "شرفة خاصة", "ميني بار"]
    },
    {
      title: "الجناح الذهبي",
      desc: "قمة الفخامة، جناح واسع يضم غرفة معيشة مستقلة، وتفاصيل يدوية الصنع تجسد روح القصور الدمشقية.",
      img: IMAGES.roomSuite,
      features: ["جناح ملكي", "خادم خاص", "جاكوزي"]
    }
  ];

  return (
    <section id="rooms" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold text-sm tracking-widest uppercase mb-4">الإقامة</p>
          <h2 className="text-4xl md:text-5xl">الغرف والأجنحة</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, i) => (
            <RoomCard key={i} {...room} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Amenities = () => {
  const services = [
    { icon: <ChefHat />, title: "مطعم فاخر", sub: "أطباق شرقية وعالمية" },
    { icon: <Coffee />, title: "كافية اللوبي", sub: "قهوة عربية وحلويات" },
    { icon: <Waves />, title: "سبا ونادي صحي", sub: "حمام دمشقي تقليدي" },
    { icon: <Bell />, title: "خدمة الغرف", sub: "متاحة على مدار الساعة" },
    { icon: <Car />, title: "مواقف سيارات", sub: "خدمة ركن السيارات" },
    { icon: <Wifi />, title: "إنترنت فائق السرعة", sub: "في جميع أنحاء الفندق" }
  ];

  return (
    <section id="amenities" className="py-24 px-6 bg-dark-2">
      <div className="container mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gold/5 absolute -inset-10 -z-10 rounded-full blur-3xl opacity-30" />
            <div className="p-12 border border-gold/20 bg-dark/40 backdrop-blur-sm relative">
              <span className="text-6xl text-gold opacity-30 font-serif absolute top-10 right-10">"</span>
              <p className="text-2xl md:text-3xl font-amiri italic leading-relaxed text-cream/90 relative z-10 pt-10">
                دمشق ليست مجرد مدينة، إنها قصيدة حية من الحجر والعطر. في جولدن مزة، ندعوكم لتكونوا جزءاً من أسطورتها الأبدية.
              </p>
              <p className="mt-8 text-gold text-sm tracking-widest uppercase">— جولدن مزة دمشق</p>
            </div>
          </motion.div>

          <div>
            <p className="text-gold text-sm tracking-widest uppercase mb-4">المرافق</p>
            <h2 className="text-4xl md:text-5xl mb-12">كل ما تحتاجه للراحة</h2>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((s, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ backgroundColor: 'rgba(201, 168, 76, 0.05)' }}
                  className="p-6 border border-gold/10 flex items-start gap-4 transition-all duration-300"
                >
                  <div className="text-gold">{s.icon}</div>
                  <div>
                    <h4 className="text-lg text-cream mb-1">{s.title}</h4>
                    <p className="text-xs text-cream/40 uppercase tracking-wider">{s.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Location = () => {
  return (
    <section id="location" className="py-24 grid lg:grid-cols-2 min-h-[600px]">
      {/* Map Side */}
      <div className="h-full min-h-[400px] relative order-2 lg:order-1">
        <iframe 
          src="https://www.google.com/maps?q=F6WW%2B3PH%D8%8C+%D8%AF%D9%85%D8%B4%D9%82%D8%8C+%D8%B3%D9%88%D8%B1%D9%8A%D8%A7&output=embed"
          className="w-full h-full border-none grayscale contrast-[1.1] opacity-70"
          loading="lazy"
          title="Golden Mazzeh Hotel Location"
        />
        <div className="absolute inset-0 bg-dark/20 pointer-events-none" />
      </div>

      {/* Info Side */}
      <div className="bg-dark p-12 md:p-24 flex flex-col justify-center order-1 lg:order-2">
        <p className="text-gold text-sm tracking-widest uppercase mb-4">اتصل بنا</p>
        <h2 className="text-4xl md:text-5xl mb-8">في قلب حي المزة، دمشق</h2>
        <p className="text-cream/60 text-lg font-amiri mb-12">
          موقع استراتيجي يسهل الوصول منه إلى أهم المعالم السياحية والوزارات والمراكز التجارية في العاصمة دمشق.
        </p>

        <div className="space-y-6">
          <a href="#" className="flex items-center gap-6 group">
            <div className="w-12 h-12 border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-dark transition-all">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-[10px] text-gold uppercase tracking-widest mb-1">العنوان</p>
              <p className="text-cream/80">المزة، دمشق، سوريا</p>
            </div>
          </a>
          <a href="tel:+963119663" className="flex items-center gap-6 group">
            <div className="w-12 h-12 border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-dark transition-all">
              <Phone size={20} />
            </div>
            <div>
              <p className="text-[10px] text-gold uppercase tracking-widest mb-1">الهاتف</p>
              <p className="text-cream/80">+963 11 9663</p>
            </div>
          </a>
          <a href="https://wa.me/963946900059" target="_blank" className="flex items-center gap-6 group">
            <div className="w-12 h-12 border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-dark transition-all">
              <MessageCircle size={20} />
            </div>
            <div>
              <p className="text-[10px] text-gold uppercase tracking-widest mb-1">واتساب</p>
              <p className="text-cream/80">+963 946 900 059</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-dark pt-24 pb-12 px-6 border-t border-gold/10">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-full lg:col-span-1">
            <a href="#" className="font-cinzel text-3xl tracking-widest text-gold mb-6 block">
              GOLDEN <span className="text-cream">MAZZEH</span>
            </a>
            <p className="text-cream/50 leading-relaxed font-amiri text-lg max-w-sm">
              تجربة فندقية استثنائية في قلب العاصمة دمشق. نجمع بين الفخامة والضيافة السورية الأصيلة لنقدم لضيوفنا ذكريات لا تُنسى.
            </p>
          </div>

          <div>
            <h4 className="text-gold text-xs tracking-widest uppercase mb-8">روابط سريعة</h4>
            <ul className="space-y-4 text-cream/60">
              <li><a href="#" className="hover:text-gold transition-colors">الرئيسية</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">عن الفندق</a></li>
              <li><a href="#rooms" className="hover:text-gold transition-colors">الغرف والأجنحة</a></li>
              <li><a href="#amenities" className="hover:text-gold transition-colors">المرافق</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold text-xs tracking-widest uppercase mb-8">للتواصل</h4>
            <ul className="space-y-4 text-cream/60">
              <li className="flex items-center gap-3"><Clock size={16} /> متاح 24/7</li>
              <li className="flex items-center gap-3"><Phone size={16} /> +963 11 9663</li>
              <li className="flex items-center gap-3"><MessageCircle size={16} /> +963 946 900 059</li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold text-xs tracking-widest uppercase mb-8">تابعنا</h4>
            <div className="flex gap-6">
              <a href="https://www.instagram.com/salma.m.janat?igsh=dTdlMnp2d280am9i" target="_blank" rel="noopener noreferrer" className="text-cream/40 hover:text-gold transition-colors"><Instagram size={24} /></a>
              <a href="https://www.facebook.com/goldenmazzeh/" target="_blank" rel="noopener noreferrer" className="text-cream/40 hover:text-gold transition-colors"><Facebook size={24} /></a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-gold/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-cream/30 uppercase tracking-[0.2em]">
            © 2026 فندق جولدن مزة • دمشق، سوريا • جميع الحقوق محفوظة
          </p>
          <div className="flex gap-4 opacity-30 grayscale hover:grayscale-0 transition-all">
            {/* Payment Icons Placeholder */}
            <div className="h-6 w-10 border border-cream/20" />
            <div className="h-6 w-10 border border-cream/20" />
            <div className="h-6 w-10 border border-cream/20" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="noise-overlay selection:bg-gold/30">
      <Nav />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Amenities />
        <Location />
        
        {/* Newsletter/CTA */}
        <section className="py-24 px-6 bg-gold text-dark text-center">
          <div className="container mx-auto">
            <h2 className="text-4xl md:text-6xl mb-6">ابدأ رحلتك الفخمة اليوم</h2>
            <p className="text-xl md:text-2xl mb-12 opacity-80 font-amiri italic">
              نحن بانتظار الترحيب بك في فندق جولدن مزة
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              <a 
                href="https://wa.me/963946900059" 
                target="_blank"
                className="px-12 py-4 bg-dark text-gold font-bold hover:bg-dark/90 transition-all uppercase tracking-widest text-sm"
              >
                احجز عبر واتساب
              </a>
              <a 
                href="tel:+963119663" 
                className="px-12 py-4 border-2 border-dark text-dark font-bold hover:bg-dark hover:text-gold transition-all uppercase tracking-widest text-sm"
              >
                اتصل بنا
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

