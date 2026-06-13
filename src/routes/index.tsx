import { createFileRoute } from "@tanstack/react-router";
import heroSalon from "../assets/hero-salon.jpg";
import serviceColor from "../assets/service-color.jpg";
import serviceCut from "../assets/service-cut.jpg";
import serviceSpa from "../assets/service-spa.jpg";
import serviceBridal from "../assets/service-bridal.jpg";
import aiMirror from "../assets/ai-mirror.jpg";
import artisanElara from "../assets/artisan-elara.jpg";
import artisanJulian from "../assets/artisan-julian.jpg";
import artisanSasha from "../assets/artisan-sasha.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Veloura Salon | Luxury Hair & Spa Atelier" },
      { name: "description", content: "A Parisian-inspired atelier dedicated to the architectural precision of hair and the chemistry of radiance. Book your consultation today." },
      { property: "og:title", content: "Veloura Salon | Luxury Hair & Spa Atelier" },
      { property: "og:description", content: "A Parisian-inspired atelier dedicated to the architectural precision of hair and the chemistry of radiance." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="font-serif text-2xl tracking-widest uppercase">Veloura</span>
          <div className="hidden md:flex gap-10 text-sm tracking-widest uppercase text-foreground/70">
            <a href="#catalog" className="hover:text-primary transition-colors">Collections</a>
            <a href="#mirror" className="hover:text-primary transition-colors">The Atelier</a>
            <a href="#artisans" className="hover:text-primary transition-colors">Artisans</a>
            <a href="#rewards" className="hover:text-primary transition-colors">Rewards</a>
          </div>
          <button className="text-sm tracking-widest uppercase py-2.5 px-6 ring-1 ring-foreground hover:bg-foreground hover:text-background transition-colors">
            Reserve
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="py-12 md:py-24 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-8 text-balance">
                The sanctuary of <span className="italic">luminous</span> artistry.
              </h1>
              <p className="text-lg text-foreground/80 mb-10 max-w-[40ch] text-pretty leading-relaxed">
                A Parisian-inspired atelier dedicated to the architectural precision of hair and the chemistry of radiance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary text-primary-foreground text-sm tracking-widest uppercase py-4 px-8 ring-1 ring-primary hover:bg-primary/90 transition-colors">
                  Book Consultation
                </button>
              </div>
            </div>
            <div className="lg:col-span-7">
              <img
                src={heroSalon}
                alt="Veloura salon interior with marble and golden accents"
                className="w-full aspect-[4/5] object-cover rounded-[min(1vw,12px)] shadow-2xl"
                width={1152}
                height={1600}
              />
            </div>
          </div>
        </section>

        {/* Services — The Catalog */}
        <section id="catalog" className="py-24 bg-muted/50 border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-end mb-16">
              <div>
                <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium block mb-4">The Catalog</span>
                <h2 className="font-serif text-4xl text-balance">Curated Rituals</h2>
              </div>
              <a href="#" className="text-sm tracking-widest uppercase border-b border-primary/30 pb-1 hover:border-primary transition-colors">View All</a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-primary/10 ring-1 ring-primary/10">
              <ServiceCard
                number="01"
                title="Couture Color"
                description="Hand-painted balayage and corrective chemistry tailored to your complexion."
                image={serviceColor}
                alt="Golden blonde hair texture"
              />
              <ServiceCard
                number="02"
                title="Architectural Cut"
                description="Precision-engineered silhouettes that respect natural movement and texture."
                image={serviceCut}
                alt="Minimalist hair styling tools"
              />
              <ServiceCard
                number="03"
                title="Scalp Spa"
                description="Botanical infusions and lymphatic drainage for total cranial restoration."
                image={serviceSpa}
                alt="Water ripples in ceramic bowl"
              />
              <ServiceCard
                number="04"
                title="Bridal Edit"
                description="On-location editorial styling for the most discerning aesthetic requirements."
                image={serviceBridal}
                alt="Silk ribbon and hair pins"
              />
            </div>
          </div>
        </section>

        {/* AI Mirror Feature */}
        <section id="mirror" className="py-24 px-6">
          <div className="max-w-5xl mx-auto ring-1 ring-primary/20 p-8 md:p-12 bg-zinc-900 text-background relative overflow-hidden rounded-sm">
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-4xl mb-6 leading-tight">The Digital Mirror</h2>
                <p className="text-background/70 mb-8 text-pretty leading-relaxed">
                  Our proprietary AI analyzes your facial geometry and hair density to suggest three architectural directions before the first cut.
                </p>
                <button className="flex items-center gap-2 py-2 pr-3 pl-2 text-sm tracking-widest uppercase ring-1 ring-primary text-primary hover:bg-primary hover:text-foreground transition-colors">
                  <svg className="size-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                  Start Session
                </button>
              </div>
              <div className="relative">
                <img
                  src={aiMirror}
                  alt="AI hairstyle recommendation interface"
                  className="w-full aspect-square object-cover rounded-full opacity-90"
                  width={608}
                  height={608}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Artisans */}
        <section id="artisans" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="font-serif text-5xl italic">The Hands Behind the Chair</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <ArtisanCard
                name="Elara Vance"
                role="Creative Director / Master Colorist"
                image={artisanElara}
                alt="Elara Vance portrait"
              />
              <ArtisanCard
                name="Julian Thorne"
                role="Senior Stylist / Precision Cutting"
                image={artisanJulian}
                alt="Julian Thorne portrait"
                offset
              />
              <ArtisanCard
                name="Sasha Reid"
                role="Trichology Specialist"
                image={artisanSasha}
                alt="Sasha Reid portrait"
              />
            </div>
          </div>
        </section>

        {/* Loyalty Tiers */}
        <section id="rewards" className="py-24 bg-zinc-900 text-background">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <span className="text-xs tracking-[0.4em] uppercase text-primary/60 mb-4 block">Membership</span>
            <h2 className="font-serif text-5xl mb-16">The Gilded Circle</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <TierCard name="Silk" description="Priority booking and seasonal hair spa rituals." number="01" />
              <TierCard name="Velvet" description="Unlimited treatments, dedicated atelier concierge, and private suite access." number="02" featured />
              <TierCard name="Gold" description="Home delivery of curated formulas and semi-annual transformation days." number="03" />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="pt-24 pb-12 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          <div>
            <span className="font-serif text-2xl tracking-widest uppercase block mb-8">Veloura</span>
            <p className="text-sm text-foreground/60 leading-relaxed">
              14 Rue de la Paix, 75002 Paris<br />
              reservations@veloura-salon.com<br />
              +33 1 42 61 57 46
            </p>
          </div>
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-8 font-medium">The Atelier</h4>
            <ul className="space-y-4 text-sm text-foreground/60">
              <li>Mon — Fri: 9:00 — 20:00</li>
              <li>Sat: 10:00 — 18:00</li>
              <li>Sun: Closed</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-8 font-medium">Follow</h4>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-foreground/60 hover:text-primary">Instagram</a>
              <a href="#" className="text-sm text-foreground/60 hover:text-primary">Journal</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-12 border-t border-primary/5 flex justify-between items-center text-[10px] tracking-widest uppercase text-foreground/30">
          <span>&copy; 2024 Veloura Atelier</span>
          <span>All Rights Reserved</span>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ number, title, description, image, alt }: {
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}) {
  return (
    <div className="bg-background p-8 group">
      <span className="text-xs text-primary/60 mb-8 block font-medium">{number}</span>
      <h3 className="font-serif text-2xl mb-4">{title}</h3>
      <p className="text-sm text-foreground/60 mb-8 leading-relaxed text-pretty">{description}</p>
      <img
        src={image}
        alt={alt}
        className="w-full aspect-video object-cover rounded-sm"
        width={512}
        height={512}
        loading="lazy"
      />
    </div>
  );
}

function ArtisanCard({ name, role, image, alt, offset }: {
  name: string;
  role: string;
  image: string;
  alt: string;
  offset?: boolean;
}) {
  return (
    <div className={`group text-center ${offset ? "md:mt-12" : ""}`}>
      <img
        src={image}
        alt={alt}
        className="w-full aspect-[4/5] bg-muted mb-6 grayscale group-hover:grayscale-0 transition-all duration-700 object-cover shadow-lg"
        width={800}
        height={1024}
        loading="lazy"
      />
      <h3 className="font-serif text-2xl mb-1">{name}</h3>
      <span className="text-xs tracking-widest uppercase text-primary">{role}</span>
    </div>
  );
}

function TierCard({ name, description, number, featured }: {
  name: string;
  description: string;
  number: string;
  featured?: boolean;
}) {
  return (
    <div className={`p-10 flex flex-col items-center relative ${
      featured
        ? "ring-1 ring-primary/50 bg-primary/5"
        : "ring-1 ring-background/10 hover:ring-primary/30 transition-colors"
    }`}>
      {featured && (
        <div className="absolute -top-3 px-4 bg-primary text-foreground text-[10px] tracking-widest uppercase font-medium">
          Most Preferred
        </div>
      )}
      <span className="font-serif text-xl mb-6 italic">{name}</span>
      <div className="h-px w-12 bg-primary/30 mb-8" />
      <p className="text-sm text-background/70 mb-8">{description}</p>
      <span className="text-xs tracking-widest uppercase text-primary mt-auto">{number}</span>
    </div>
  );
}
