import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Bike,
  ShieldCheck,
  Clock,
  MapPin,
  Phone,
  Star,
  Fuel,
  Gauge,
  Users,
  ArrowRight,
  CheckCircle2,
  Instagram,
  MessageCircle,
} from "lucide-react";
import heroBike from "@/assets/bikes.png";
import bikeVario from "@/assets/vario.png";
import bikeNmax from "@/assets/nmax.png";
import bikePcx from "@/assets/pcx.png";
import bikeScoopy from "@/assets/scoopy.png";
import bikeAerox from "@/assets/aerox.png";
import bikeNinja from "@/assets/ninja.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gasjon — Rental Sepeda Motor Terpercaya & Anti Ribet" },
      {
        name: "description",
        content:
          "Sewa motor harian, mingguan, dan bulanan di Gasjon. Armada lengkap, harga transparan, antar-jemput gratis area kota.",
      },
      { property: "og:title", content: "Gasjon — Rental Sepeda Motor" },
      {
        property: "og:description",
        content:
          "Armada motor matic & sport siap pakai. Booking cepat, harga jujur, layanan 24 jam.",
      },
    ],
  }),
  component: Landing,
});

const bikes = [
  {
    name: "Honda Vario 160",
    type: "Matic Harian",
    price: 80000,
    img: bikeVario,
    cc: "160cc",
    seat: 2,
    fuel: "Irit",
    tag: "Best Seller",
  },
  {
    name: "Yamaha NMAX",
    type: "Matic Premium",
    price: 125000,
    img: bikeNmax,
    cc: "155cc",
    seat: 2,
    fuel: "Irit",
    tag: "Popular",
  },
  {
    name: "Honda PCX 160",
    type: "Matic Touring",
    price: 140000,
    img: bikePcx,
    cc: "160cc",
    seat: 2,
    fuel: "Irit",
  },
  {
    name: "Honda Scoopy",
    type: "Matic Stylish",
    price: 75000,
    img: bikeScoopy,
    cc: "110cc",
    seat: 2,
    fuel: "Super Irit",
    tag: "Hemat",
  },
  {
    name: "Yamaha Aerox 155",
    type: "Matic Sport",
    price: 110000,
    img: bikeAerox,
    cc: "155cc",
    seat: 2,
    fuel: "Standar",
  },
  {
    name: "Kawasaki Ninja 250",
    type: "Sport Bike",
    price: 250000,
    img: bikeNinja,
    cc: "250cc",
    seat: 2,
    fuel: "Performance",
    tag: "Premium",
  },
];

const idr = (n: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Stats />
      <Catalog />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

function Logo() {
  return (
    <a href="#" className="flex items-center gap-2">
      <span
        className="grid h-9 w-9 place-items-center rounded-xl text-primary-foreground font-bold"
        style={{ background: "var(--gradient-primary)" }}
      >
        G
      </span>
      <span className="font-display text-xl font-extrabold tracking-tight">
        Gasjon<span className="text-primary">.</span>
      </span>
    </a>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {["Katalog", "Layanan", "Cara Sewa", "Testimoni"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(" ", "-")}`}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            <Phone className="mr-1.5 h-4 w-4" /> 0812-3456-7890
          </Button>
          <Button
            size="sm"
            className="text-primary-foreground shadow-[var(--shadow-glow)]"
            style={{ background: "var(--gradient-primary)" }}
          >
            Booking Sekarang
          </Button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full opacity-40 blur-3xl"
        style={{ background: "var(--gradient-primary)" }}
      />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
        <div className="relative z-10">
          <Badge
            variant="secondary"
            className="mb-5 gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-primary"
          >
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Layanan 24 Jam · Antar Jemput Gratis
          </Badge>
          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Sewa motor{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              tanpa drama,
            </span>{" "}
            tinggal gas.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Gasjon menyediakan armada motor matic, sport, dan touring siap pakai.
            Booking dalam hitungan menit, harga transparan tanpa biaya tersembunyi.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              size="lg"
              className="rounded-full text-primary-foreground shadow-[var(--shadow-glow)]"
              style={{ background: "var(--gradient-primary)" }}
            >
              Lihat Katalog Motor <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full">
              <MessageCircle className="mr-1.5 h-4 w-4" /> Chat WhatsApp
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            {[
              { icon: ShieldCheck, t: "Asuransi & Helm" },
              { icon: Clock, t: "Proses 5 Menit" },
              { icon: MapPin, t: "Antar Seluruh Kota" },
            ].map((f) => (
              <div key={f.t} className="flex items-center gap-2">
                <f.icon className="h-4 w-4 text-primary" />
                {f.t}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div
            className="absolute inset-0 rounded-[2rem] opacity-30 blur-2xl"
            style={{ background: "var(--gradient-primary)" }}
          />
          <div className="relative overflow-hidden rounded-[2rem] border border-border/50 bg-card shadow-[var(--shadow-card)]">
            <img
              src={heroBike}
              alt="Sepeda motor sport Gasjon siap disewa"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/20 bg-background/70 p-4 backdrop-blur-xl">
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Mulai dari
                </p>
                <p className="font-display text-2xl font-bold">
                  Rp75.000<span className="text-sm text-muted-foreground">/hari</span>
                </p>
              </div>
              <Button size="sm" className="rounded-full">
                Booking
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { k: "500+", v: "Armada Motor" },
    { k: "12K+", v: "Pelanggan Puas" },
    { k: "4.9★", v: "Rating Google" },
    { k: "24/7", v: "Layanan Siaga" },
  ];
  return (
    <section className="border-y border-border/60 bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4">
        {items.map((s) => (
          <div key={s.v} className="text-center">
            <div className="font-display text-3xl font-extrabold text-foreground sm:text-4xl">
              {s.k}
            </div>
            <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Catalog() {
  return (
    <section id="katalog" className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <Badge className="mb-3 rounded-full bg-primary/10 text-primary hover:bg-primary/10">
            Katalog Motor
          </Badge>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Pilih motormu, kami siapkan.
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Semua unit dirawat berkala, full BBM saat pengantaran, lengkap dengan
            helm dan jas hujan.
          </p>
        </div>
        <Button variant="outline" className="rounded-full">
          Lihat semua armada <ArrowRight className="ml-1.5 h-4 w-4" />
        </Button>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {bikes.map((b) => (
          <article
            key={b.name}
            className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card shadow-[var(--shadow-elegant)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
              {b.tag && (
                <Badge
                  className="absolute left-4 top-4 z-10 rounded-full text-primary-foreground"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  {b.tag}
                </Badge>
              )}
              <img
                src={b.img}
                alt={b.name}
                loading="lazy"
                width={1024}
                height={1024}
                className="h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="space-y-4 p-6">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-primary">
                  {b.type}
                </p>
                <h3 className="mt-1 text-xl font-bold">{b.name}</h3>
              </div>
              <div className="flex items-center gap-4 border-y border-border/60 py-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Gauge className="h-3.5 w-3.5" /> {b.cc}
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="h-3.5 w-3.5" /> {b.seat} org
                </span>
                <span className="flex items-center gap-1.5">
                  <Fuel className="h-3.5 w-3.5" /> {b.fuel}
                </span>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">Sewa harian</p>
                  <p className="font-display text-2xl font-extrabold text-foreground">
                    {idr(b.price)}
                  </p>
                </div>
                <Button
                  size="sm"
                  className="rounded-full text-primary-foreground"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  Booking
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: ShieldCheck,
      t: "Unit Terawat & Aman",
      d: "Setiap motor dicek mekanik kami sebelum diserahkan ke kamu.",
    },
    {
      icon: Clock,
      t: "Booking Super Cepat",
      d: "Konfirmasi dalam 5 menit lewat WhatsApp, tanpa antri.",
    },
    {
      icon: MapPin,
      t: "Antar Jemput Gratis",
      d: "Area dalam kota gratis, luar kota dengan ongkos terjangkau.",
    },
    {
      icon: CheckCircle2,
      t: "Harga Transparan",
      d: "Tidak ada biaya tersembunyi. Apa yang kamu lihat itu yang kamu bayar.",
    },
  ];
  return (
    <section id="layanan" className="bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Badge className="mb-3 rounded-full bg-primary/10 text-primary hover:bg-primary/10">
            Kenapa Gasjon?
          </Badge>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Sewa motor harusnya semudah ini.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.t}
              className="rounded-2xl border border-border/60 bg-card p-6 transition-shadow hover:shadow-[var(--shadow-elegant)]"
            >
              <div
                className="mb-5 grid h-12 w-12 place-items-center rounded-xl text-primary-foreground"
                style={{ background: "var(--gradient-primary)" }}
              >
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold">{f.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", t: "Pilih motor", d: "Tentukan tipe motor dan tanggal sewamu." },
    { n: "02", t: "Booking & bayar", d: "Konfirmasi via WhatsApp, bayar dengan transfer atau QRIS." },
    { n: "03", t: "Gas & jalan", d: "Motor diantar ke lokasi, tinggal tanda tangan, langsung jalan." },
  ];
  return (
    <section id="cara-sewa" className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <Badge className="mb-3 rounded-full bg-primary/10 text-primary hover:bg-primary/10">
          Cara Sewa
        </Badge>
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Tiga langkah, motor di tanganmu.
        </h2>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {steps.map((s) => (
          <div
            key={s.n}
            className="relative overflow-hidden rounded-3xl border border-border/60 bg-card p-8"
          >
            <div
              className="font-display text-7xl font-extrabold text-transparent"
              style={{
                backgroundImage: "var(--gradient-primary)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              {s.n}
            </div>
            <h3 className="mt-3 text-xl font-bold">{s.t}</h3>
            <p className="mt-2 text-muted-foreground">{s.d}</p>
            <Bike
              className="absolute -bottom-4 -right-4 h-24 w-24 text-primary/5"
              strokeWidth={1.5}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const tests = [
    {
      n: "Rani Putri",
      r: "Pertama kali sewa, prosesnya gampang banget. Motornya bersih dan harum, bikin nyaman jalan-jalan seharian.",
    },
    {
      n: "Dimas Aditya",
      r: "Sudah langganan 4x untuk dinas ke luar kota. Customer service-nya responsif dan jujur soal kondisi unit.",
    },
    {
      n: "Sari Wulandari",
      r: "Antar-jemput tepat waktu, motor full bensin. Recommended buat yang lagi liburan di kota ini.",
    },
  ];
  return (
    <section id="testimoni" className="bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Badge className="mb-3 rounded-full bg-primary/10 text-primary hover:bg-primary/10">
            Testimoni
          </Badge>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Kata mereka yang sudah gas duluan.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {tests.map((t) => (
            <figure
              key={t.n}
              className="rounded-3xl border border-border/60 bg-card p-7 shadow-[var(--shadow-elegant)]"
            >
              <div className="mb-4 flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-foreground/90">"{t.r}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div
                  className="grid h-10 w-10 place-items-center rounded-full text-sm font-bold text-primary-foreground"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  {t.n.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.n}</p>
                  <p className="text-xs text-muted-foreground">Pelanggan Gasjon</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <div
        className="relative overflow-hidden rounded-[2.5rem] px-8 py-16 text-center text-primary-foreground sm:px-16 sm:py-20"
        style={{ background: "var(--gradient-primary)" }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_30%_20%,white_0%,transparent_40%),radial-gradient(circle_at_80%_70%,white_0%,transparent_45%)]" />
        <div className="relative">
          <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            Siap gas hari ini?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/90">
            Booking sekarang dan dapatkan diskon 10% untuk penyewaan pertama lebih
            dari 3 hari.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button size="lg" variant="secondary" className="rounded-full">
              <MessageCircle className="mr-1.5 h-4 w-4" /> WhatsApp Gasjon
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-white/40 bg-transparent text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
            >
              Lihat Lokasi
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Gasjon — Rental sepeda motor terpercaya, melayani harian, mingguan, dan
            bulanan dengan armada selalu fresh.
          </p>
          <div className="mt-5 flex gap-2">
            <a
              href="#"
              className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold">Menu</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#katalog" className="hover:text-foreground">Katalog</a></li>
            <li><a href="#layanan" className="hover:text-foreground">Layanan</a></li>
            <li><a href="#cara-sewa" className="hover:text-foreground">Cara Sewa</a></li>
            <li><a href="#testimoni" className="hover:text-foreground">Testimoni</a></li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold">Kontak</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone className="h-3.5 w-3.5" /> 0812-3456-7890</li>
            <li className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> Jl. Mawar No. 21, Jakarta</li>
            <li className="flex items-center gap-2"><Clock className="h-3.5 w-3.5" /> 24 Jam Setiap Hari</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Gasjon. All rights reserved.
      </div>
    </footer>
  );
}
