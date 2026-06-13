import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import heroSalon from "../assets/hero-salon.jpg";
import serviceColor from "../assets/service-color.jpg";
import serviceCut from "../assets/service-cut.jpg";
import serviceSpa from "../assets/service-spa.jpg";
import serviceBridal from "../assets/service-bridal.jpg";
import aiMirror from "../assets/ai-mirror.jpg";
import artisanElara from "../assets/artisan-elara.jpg";
import artisanJulian from "../assets/artisan-julian.jpg";
import artisanSasha from "../assets/artisan-sasha.jpg";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

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

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function Index() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [mirrorOpen, setMirrorOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="font-serif text-2xl tracking-widest uppercase">Veloura</span>
          <div className="hidden md:flex gap-10 text-sm tracking-widest uppercase text-foreground/70">
            <button onClick={() => scrollTo("catalog")} className="hover:text-primary transition-colors cursor-pointer bg-transparent border-none font-inherit text-inherit tracking-widest uppercase text-sm">Collections</button>
            <button onClick={() => scrollTo("mirror")} className="hover:text-primary transition-colors cursor-pointer bg-transparent border-none font-inherit text-inherit tracking-widest uppercase text-sm">The Atelier</button>
            <button onClick={() => scrollTo("artisans")} className="hover:text-primary transition-colors cursor-pointer bg-transparent border-none font-inherit text-inherit tracking-widest uppercase text-sm">Artisans</button>
            <button onClick={() => scrollTo("rewards")} className="hover:text-primary transition-colors cursor-pointer bg-transparent border-none font-inherit text-inherit tracking-widest uppercase text-sm">Rewards</button>
          </div>
          <Dialog open={bookingOpen} onOpenChange={setBookingOpen}>
            <DialogTrigger asChild>
              <button className="text-sm tracking-widest uppercase py-2.5 px-6 ring-1 ring-foreground hover:bg-foreground hover:text-background transition-colors cursor-pointer">Reserve</button>
            </DialogTrigger>
            <BookingContent formData={formData} setFormData={setFormData} submitted={submitted} handleSubmit={handleSubmit} setSubmitted={setSubmitted} />
          </Dialog>
        </div>
      </nav>

      <main>
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
                <Dialog open={bookingOpen} onOpenChange={setBookingOpen}>
                  <DialogTrigger asChild>
                    <button className="bg-primary text-primary-foreground text-sm tracking-widest uppercase py-4 px-8 ring-1 ring-primary hover:bg-primary/90 transition-colors cursor-pointer">
                      Book Consultation
                    </button>
                  </DialogTrigger>
                  <BookingContent formData={formData} setFormData={setFormData} submitted={submitted} handleSubmit={handleSubmit} setSubmitted={setSubmitted} />
                </Dialog>
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

        <section id="catalog" className="py-24 bg-muted/50 border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-end mb-16">
              <div>
                <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium block mb-4">The Catalog</span>
                <h2 className="font-serif text-4xl text-balance">Curated Rituals</h2>
              </div>
              <Dialog open={bookingOpen} onOpenChange={setBookingOpen}>
                <DialogTrigger asChild>
                  <button className="text-sm tracking-widest uppercase border-b border-primary/30 pb-1 hover:border-primary transition-colors cursor-pointer bg-transparent font-inherit text-inherit">View All</button>
                </DialogTrigger>
                <BookingContent formData={formData} setFormData={setFormData} submitted={submitted} handleSubmit={handleSubmit} setSubmitted={setSubmitted} />
              </Dialog>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-primary/10 ring-1 ring-primary/10">
              <ServiceCard number="01" title="Couture Color" description="Hand-painted balayage and corrective chemistry tailored to your complexion." image={serviceColor} alt="Golden blonde hair texture" />
              <ServiceCard number="02" title="Architectural Cut" description="Precision-engineered silhouettes that respect natural movement and texture." image={serviceCut} alt="Minimalist hair styling tools" />
              <ServiceCard number="03" title="Scalp Spa" description="Botanical infusions and lymphatic drainage for total cranial restoration." image={serviceSpa} alt="Water ripples in ceramic bowl" />
              <ServiceCard number="04" title="Bridal Edit" description="On-location editorial styling for the most discerning aesthetic requirements." image={serviceBridal} alt="Silk ribbon and hair pins" />
            </div>
          </div>
        </section>

        <section id="mirror" className="py-24 px-6">
          <div className="max-w-5xl mx-auto ring-1 ring-primary/20 p-8 md:p-12 bg-zinc-900 text-background relative overflow-hidden rounded-sm">
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-4xl mb-6 leading-tight">The Digital Mirror</h2>
                <p className="text-background/70 mb-8 text-pretty leading-relaxed">
                  Our proprietary AI analyzes your facial geometry and hair density to suggest three architectural directions before the first cut.
                </p>
                <Dialog open={mirrorOpen} onOpenChange={setMirrorOpen}>
                  <DialogTrigger asChild>
                    <button className="flex items-center gap-2 py-2 pr-3 pl-2 text-sm tracking-widest uppercase ring-1 ring-primary text-primary hover:bg-primary hover:text-foreground transition-colors cursor-pointer">
                      <svg className="size-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                      Start Session
                    </button>
                  </DialogTrigger>
                  <MirrorContent />
                </Dialog>
              </div>
              <div className="relative">
                <img src={aiMirror} alt="AI hairstyle recommendation interface" className="w-full aspect-square object-cover rounded-full opacity-90" width={608} height={608} loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section id="artisans" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="font-serif text-5xl italic">The Hands Behind the Chair</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <ArtisanCard name="Elara Vance" role="Creative Director / Master Colorist" image={artisanElara} alt="Elara Vance portrait" />
              <ArtisanCard name="Julian Thorne" role="Senior Stylist / Precision Cutting" image={artisanJulian} alt="Julian Thorne portrait" offset />
              <ArtisanCard name="Sasha Reid" role="Trichology Specialist" image={artisanSasha} alt="Sasha Reid portrait" />
            </div>
          </div>
        </section>

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

      <footer className="pt-24 pb-12 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          <div>
            <span className="font-serif text-2xl tracking-widest uppercase block mb-8">Veloura</span>
            <p className="text-sm text-foreground/60 leading-relaxed">
              14 Rue de la Paix, 75002 Paris<br />
              <a href="mailto:reservations@veloura-salon.com" className="hover:text-primary transition-colors">reservations@veloura-salon.com</a><br />
              <a href="tel:+33142615746" className="hover:text-primary transition-colors">+33 1 42 61 57 46</a>
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
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/60 hover:text-primary transition-colors">Instagram</a>
              <a href="https://veloura-salon.com/journal" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/60 hover:text-primary transition-colors">Journal</a>
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

const STYLES = [
  { name: "Textured Bob", desc: "Chin-length with soft waves — flatters oval and heart faces." },
  { name: "Layered Shag", desc: "Voluminous layers that enhance natural texture and movement." },
  { name: "Blunt Lob", desc: "Sleek shoulder-length cut — clean lines for a refined silhouette." },
];
const COLORS = ["Warm Caramel Balayage", "Cool Ash Bronde", "Rich Espresso Gloss"];

function MirrorContent() {
  const [step, setStep] = useState<"upload" | "analyzing" | "results">("upload");
  const [selfie, setSelfie] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setSelfie(reader.result as string);
      setStep("analyzing");
      setTimeout(() => setStep("results"), 2000);
    };
    reader.readAsDataURL(file);
  }

  function reset() {
    setStep("upload");
    setSelfie(null);
  }

  return (
    <DialogContent className="sm:max-w-lg">
      <DialogHeader>
        <DialogTitle>AI Mirror{step === "results" ? " — Analysis Complete" : " Preview"}</DialogTitle>
        <DialogDescription>
          {step === "upload" && "Upload a selfie to see how different cuts and colors look on you."}
          {step === "analyzing" && "Analyzing facial geometry, hair density, and skin tone..."}
          {step === "results" && "Here are your recommended architectural directions."}
        </DialogDescription>
      </DialogHeader>
      <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={handleFile} />

      {step === "upload" && (
        <div className="grid gap-4 py-4">
          <img src={aiMirror} alt="AI Mirror preview" className="w-full aspect-square object-cover rounded-lg" width={608} height={608} />
          <p className="text-sm text-muted-foreground text-center">
            Our proprietary AI analyzes facial geometry and hair density to suggest three architectural directions before the first cut.
          </p>
          <Button className="w-full" onClick={() => inputRef.current?.click()}>Try It Now</Button>
        </div>
      )}

      {step === "analyzing" && (
        <div className="flex flex-col items-center gap-6 py-12">
          <div className="size-16 rounded-full border-4 border-primary border-t-transparent animate-spin" />
          <p className="text-sm text-muted-foreground animate-pulse">Scanning facial proportions...</p>
        </div>
      )}

      {step === "results" && selfie && (
        <div className="grid gap-6 py-4">
          <div className="flex gap-4 items-start">
            <img src={selfie} alt="Your selfie" className="size-24 rounded-full object-cover shrink-0 ring-2 ring-primary/30" />
            <div>
              <p className="text-sm font-medium mb-1">Face Shape Detected: <span className="text-primary">Oval</span></p>
              <p className="text-sm text-muted-foreground">Skin Tone: Warm undertone · Medium contrast</p>
            </div>
          </div>
          <div>
            <h4 className="text-xs tracking-widest uppercase text-primary mb-3">Recommended Cuts</h4>
            <div className="grid gap-3">
              {STYLES.map((s, i) => (
                <div key={i} className="ring-1 ring-border rounded-lg p-3">
                  <p className="text-sm font-medium">{s.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs tracking-widest uppercase text-primary mb-3">Color Directions</h4>
            <div className="flex flex-wrap gap-2">
              {COLORS.map((c, i) => (
                <span key={i} className="text-xs ring-1 ring-border rounded-full px-3 py-1">{c}</span>
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            <Button className="flex-1" onClick={reset}>Try Another</Button>
            <Button variant="outline" className="flex-1" onClick={() => setStep("upload")}>Close</Button>
          </div>
        </div>
      )}
    </DialogContent>
  );
}

function BookingContent({ formData, setFormData, submitted, handleSubmit, setSubmitted }: {
  formData: { name: string; email: string; phone: string; message: string };
  setFormData: (d: any) => void;
  submitted: boolean;
  handleSubmit: (e: React.FormEvent) => void;
  setSubmitted: (s: boolean) => void;
}) {
  if (submitted) {
    return (
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Thank You</DialogTitle>
          <DialogDescription>Your consultation request has been received. We'll be in touch within 24 hours.</DialogDescription>
        </DialogHeader>
        <Button onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", message: "" }); }} className="w-full mt-4">
          Close
        </Button>
      </DialogContent>
    );
  }

  return (
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Book a Consultation</DialogTitle>
        <DialogDescription>Fill in your details and we'll confirm your appointment.</DialogDescription>
      </DialogHeader>
      <form onSubmit={handleSubmit} className="grid gap-4 py-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your name" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="your@email.com" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+33 6 12 34 56 78" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="message">Preferred Service</Label>
          <Textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us what you're looking for..." />
        </div>
        <Button type="submit" className="w-full">Send Request</Button>
      </form>
    </DialogContent>
  );
}

function ServiceCard({ number, title, description, image, alt }: {
  number: string; title: string; description: string; image: string; alt: string;
}) {
  return (
    <div className="bg-background p-8 group">
      <span className="text-xs text-primary/60 mb-8 block font-medium">{number}</span>
      <h3 className="font-serif text-2xl mb-4">{title}</h3>
      <p className="text-sm text-foreground/60 mb-8 leading-relaxed text-pretty">{description}</p>
      <img src={image} alt={alt} className="w-full aspect-video object-cover rounded-sm" width={512} height={512} loading="lazy" />
    </div>
  );
}

function ArtisanCard({ name, role, image, alt, offset }: {
  name: string; role: string; image: string; alt: string; offset?: boolean;
}) {
  return (
    <div className={`group text-center ${offset ? "md:mt-12" : ""}`}>
      <img src={image} alt={alt} className="w-full aspect-[4/5] bg-muted mb-6 grayscale group-hover:grayscale-0 transition-all duration-700 object-cover shadow-lg" width={800} height={1024} loading="lazy" />
      <h3 className="font-serif text-2xl mb-1">{name}</h3>
      <span className="text-xs tracking-widest uppercase text-primary">{role}</span>
    </div>
  );
}

function TierCard({ name, description, number, featured }: {
  name: string; description: string; number: string; featured?: boolean;
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
