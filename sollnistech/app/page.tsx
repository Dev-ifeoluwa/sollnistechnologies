// Edit these before you deploy.
const LINKS = {
  solar: "https://sollnissolar.vercel.app/", // Sollnis Solar website URL
  pay: "https://sollnispay.vercel.app/", // Sollnis Pay app URL, e.g. https://pay.yourdomain.com
  email: "info.sollnistechnologies@gmail.com", // public contact email
  whatsapp: "https://wa.me/2349136745664", // your WhatsApp link
};

type Product = {
  id: "solar" | "pay";
  name: string;
  line: string;
  items: string[];
  cta: string;
  href: string;
  panel: string;
};

const products: Product[] = [
  {
    id: "solar",
    name: "Sollnis Solar",
    line: "Clean power for homes and small businesses.",
    items: ["Solar generators", "Solar installation", "Lithium battery packs"],
    cta: "Visit Sollnis Solar",
    href: LINKS.solar,
    panel: "bg-suntint",
  },
  {
    id: "pay",
    name: "Sollnis Pay",
    line: "One wallet for the payments you make every day.",
    items: ["Airtime and data", "TV subscriptions", "Gift cards and currency swaps", "Betting wallet funding"],
    cta: "Open Sollnis Pay",
    href: LINKS.pay,
    panel: "bg-tealtint",
  },
];

const padX = "px-[clamp(1.25rem,5vw,4rem)]";

export default function Home() {
  return (
    <>
      <header className={`flex items-center justify-between py-5 ${padX}`}>
        <a href="#top" className="font-display text-2xl font-extrabold tracking-tight">
          Sollnis
        </a>
        <nav aria-label="Brands" className="flex gap-6 font-medium">
          <a href="#solar" className="underline-offset-8 hover:underline">Solar</a>
          <a href="#pay" className="underline-offset-8 hover:underline">Pay</a>
          <a href="#contact" className="underline-offset-8 hover:underline">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className={`grid items-center gap-12 py-[clamp(2rem,8vw,6rem)] lg:grid-cols-[1.2fr_1fr] ${padX}`}>
          <div>
            <h1 className="max-w-[14ch] text-[clamp(2.6rem,6.5vw,5.4rem)] font-extrabold leading-[1.02]">
              Power for your home and your money.
            </h1>
            <p className="mt-6 max-w-[46ch] text-xl">
              Sollnis Technologies builds Sollnis Solar and Sollnis Pay, products for people across
              Africa who want energy and payments that simply work.
            </p>
          </div>
          <div
            role="img"
            aria-label="A sun made of two halves: solar amber and payment teal"
            className="flex aspect-square w-[clamp(220px,34vw,420px)] lg:justify-self-center"
          >
            <span className="h-full w-1/2 animate-join-left rounded-l-full bg-sun motion-reduce:animate-none" />
            <span className="h-full w-1/2 animate-join-right rounded-r-full bg-teal motion-reduce:animate-none" />
          </div>
        </section>

        <section aria-label="Our brands" className="grid md:grid-cols-2">
          {products.map((p) => (
            <article
              key={p.id}
              id={p.id}
              className={`flex flex-col items-start py-[clamp(2rem,6vw,4.5rem)] ${padX} ${p.panel}`}
            >
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold">{p.name}</h2>
              <p className="mt-2 max-w-[34ch] text-lg">{p.line}</p>
              <ul className="my-8 w-full max-w-md border-b border-ink/25">
                {p.items.map((item) => (
                  <li key={item} className="border-t border-ink/25 py-3">
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={p.href}
                className="mt-auto rounded-full bg-ink px-6 py-3 font-semibold text-white hover:bg-[#1b3a66]"
              >
                {p.cta}
              </a>
            </article>
          ))}
        </section>

        <section className={`max-w-4xl py-[clamp(3rem,8vw,6rem)] ${padX}`}>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold">Why one company?</h2>
          <p className="mt-4 max-w-[60ch]">
            Energy and money are both about power. Sollnis starts with solar and everyday payments,
            and aims to build more products that keep life running, with a physical presence people
            can visit and trust.
          </p>
        </section>
      </main>

      <footer id="contact" className={`flex flex-wrap justify-between gap-8 bg-ink py-10 text-white ${padX}`}>
        <div>
          <strong>Sollnis Technologies</strong>
          <p className="mt-1 max-w-[36ch] opacity-80">
            Questions, partnerships, or installation requests? Reach us directly.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <a href={`mailto:${LINKS.email}`} className="focus-visible:outline-white">{LINKS.email}</a>
          <a href={LINKS.whatsapp} className="focus-visible:outline-white">Chat on WhatsApp</a>
        </div>
      </footer>
      <p className={`bg-ink pb-8 text-sm text-white/90 ${padX}`}>
        © {new Date().getFullYear()} Sollnis Technologies Ltd
      </p>
    </>
  );
}
