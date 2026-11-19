// Edit these before you deploy.
const LINKS = {
  solar: "https://solar.sollnistechnologies.com/", // Sollnis Solar website URL
  pay: "https://pay.sollnistechnologies.com/", // Sollnis Pay app URL
  email: "info.sollnistechnologies@gmail.com", // public contact email
  whatsapp: "https://wa.me/2349136745664", // your WhatsApp link
  phone: "09136745664",
};

const ADDRESS = "No 2 Folayan Road, Ipoti Ekiti, Ekiti State, Nigeria";

type Product = {
  id: "solar" | "pay";
  name: string;
  line: string;
  items: string[];
  cta: string;
  href: string;
};

const products: Product[] = [
  {
    id: "solar",
    name: "Sollnissolar",
    line: "Reliable power you own.",
    items: ["Solar generators", "Solar installation", "Lithium battery packs"],
    cta: "Visit Sollnissolar",
    href: LINKS.solar,
  },
  {
    id: "pay",
    name: "Sollnispay",
    line: "Everyday payments in one place.",
    items: [
      "Airtime and data",
      "TV subscriptions",
      "Gift cards and currency swap",
      "Betting top-ups",
    ],
    cta: "Open Sollnispay",
    href: LINKS.pay,
  },
];

// Palette: cream ground, forest ink, deep green text accent, mint highlight
const serif = "font-[family-name:var(--font-serif)]";
const padX = "px-[clamp(1.25rem,5vw,4rem)]";
const focus =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B7A4B]";

export default function Home() {
  return (
    <div className="bg-[#FBFAF6] text-[#10231B]">
      {/* NAV */}
      <header className={`mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 py-6 ${padX}`}>
        <a href="#top" className={`${serif} flex items-center gap-2.5 text-[28px] ${focus}`}>
          <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
            <circle cx="14" cy="14" r="12" fill="#7FE0A8" />
            <path d="M7 15c3-6 11-6 14 0" stroke="#10231B" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </svg>
          Sollnis
        </a>
        <nav aria-label="Main" className="flex flex-wrap items-center gap-7 text-[15px] font-medium">
          <a href="#work" className={`hover:opacity-80 ${focus}`}>What we do</a>
          <a href="#vision" className={`hover:opacity-80 ${focus}`}>Vision</a>
          <a
            href="#contact"
            className={`rounded-xl bg-[#10231B] px-5 py-3 text-[#FBFAF6] hover:opacity-85 ${focus}`}
          >
            Contact us
          </a>
        </nav>
      </header>

      <main id="top">
        {/* HERO */}
        <section
          className={`mx-auto grid max-w-[1200px] items-center gap-14 pb-[clamp(3rem,8vw,5.5rem)] pt-14 lg:grid-cols-2 ${padX}`}
        >
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-wide text-[#0B7A4B]">
              Sollnis Technologies Ltd
            </p>
            <h1 className={`${serif} text-[clamp(2.75rem,6.5vw,5rem)] leading-none`}>
              Power and payments, made simple.
            </h1>
            <p className="mt-6 max-w-[34ch] text-[19px] leading-relaxed text-[#41574C]">
              One Nigerian company building clean energy and everyday finance for homes and
              businesses.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className={`rounded-xl bg-[#7FE0A8] px-7 py-4 font-semibold hover:opacity-85 ${focus}`}
              >
                See what we build
              </a>
              <a
                href="#contact"
                className={`rounded-xl border-[1.5px] border-[#10231B] px-7 py-4 font-semibold hover:opacity-80 ${focus}`}
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href={LINKS.solar}
              className={`flex items-center gap-5 rounded-[28px] bg-[#10231B] p-8 text-[#FBFAF6] ${focus}`}
            >
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#7FE0A8" strokeWidth="3" strokeLinecap="round" aria-hidden="true">
                <circle cx="32" cy="32" r="11" />
                <path d="M32 6v9M32 49v9M6 32h9M49 32h9M13.6 13.6l6.4 6.4M44 44l6.4 6.4M13.6 50.4l6.4-6.4M44 20l6.4-6.4" />
              </svg>
              <span>
                <span className={`${serif} block text-[28px]`}>Sollnissolar</span>
                <span className="mt-1 block text-[15px] text-[#B7C7BE]">
                  Generators, installation, lithium packs
                </span>
              </span>
            </a>
            <a
              href={LINKS.pay}
              className={`flex items-center gap-5 rounded-[28px] bg-[#7FE0A8] p-8 sm:ml-10 ${focus}`}
            >
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#10231B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="8" y="14" width="48" height="36" rx="7" />
                <path d="M8 26h48M18 40h12" />
              </svg>
              <span>
                <span className={`${serif} block text-[28px]`}>Sollnispay</span>
                <span className="mt-1 block text-[15px]">Airtime, data, TV, gift cards and more</span>
              </span>
            </a>
            <div className="rounded-[28px] border-2 border-dashed border-[#A9BBB0] px-8 py-7 text-[#41574C]">
              Next product coming soon&hellip;
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section id="work" aria-label="Our brands" className="border-y border-[#DCE4DE]">
          <div className={`mx-auto max-w-[1200px] ${padX}`}>
            {products.map((p, i) => (
              <article
                key={p.id}
                id={p.id}
                className="grid items-start gap-6 border-b border-[#DCE4DE] py-12 md:grid-cols-[auto_1fr_1fr_auto] md:gap-10"
              >
                <span className={`${serif} text-[56px] leading-none text-[#0B7A4B]`} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className={`${serif} text-4xl`}>{p.name}</h2>
                  <p className="mt-2.5 text-[#41574C]">{p.line}</p>
                </div>
                <ul className="flex flex-col gap-2 text-[17px]">
                  {p.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a
                  href={p.href}
                  className={`font-semibold text-[#0B7A4B] hover:underline ${focus}`}
                >
                  {p.cta} &rarr;
                </a>
              </article>
            ))}

            <article className="grid items-start gap-6 py-12 md:grid-cols-[auto_1fr_1fr_auto] md:gap-10">
              <span className={`${serif} text-[56px] leading-none text-[#A9BBB0]`} aria-hidden="true">03</span>
              <div>
                <h2 className={`${serif} text-4xl`}>More to come</h2>
                <p className="mt-2.5 text-[#41574C]">New Sollnis products as we grow.</p>
              </div>
              <span />
              <a href="#contact" className={`font-semibold text-[#0B7A4B] hover:underline ${focus}`}>
                Suggest a product &rarr;
              </a>
            </article>
          </div>
        </section>

        {/* VISION */}
        <section id="vision" className={`mx-auto max-w-[1000px] py-[clamp(4rem,10vw,6.5rem)] text-center ${padX}`}>
          <p className={`${serif} text-[clamp(1.9rem,4.6vw,3.25rem)] leading-tight`}>
            We are building a company that Africa and the world can trust, one useful product at a
            time.
          </p>
        </section>
      </main>

      {/* CONTACT */}
      <footer id="contact" className="bg-[#10231B] text-[#FBFAF6]">
        <div className={`mx-auto grid max-w-[1200px] gap-12 pb-10 pt-20 md:grid-cols-2 ${padX}`}>
          <div>
            <h2 className={`${serif} text-[clamp(2.1rem,4.6vw,3.5rem)] leading-[1.05]`}>Let us talk.</h2>
            <p className="mt-4 max-w-[34ch] text-lg leading-relaxed text-[#B7C7BE]">
              Solar project, partnership or question? We would love to hear from you.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-lg">
            <a href={`mailto:${LINKS.email}`} className="border-b border-[#35504A] pb-4 focus-visible:outline-white">
              {LINKS.email}
            </a>
            <a href={`tel:${LINKS.phone}`} className="border-b border-[#35504A] pb-4 focus-visible:outline-white">
              {LINKS.phone}
            </a>
            <a href={LINKS.whatsapp} className="border-b border-[#35504A] pb-4 focus-visible:outline-white">
              Chat on WhatsApp
            </a>
            <p className="leading-normal text-[#B7C7BE]">{ADDRESS}</p>
          </div>
        </div>
        <p className={`mx-auto max-w-[1200px] border-t border-[#243C34] pb-8 pt-6 text-sm text-[#9BB0A5] ${padX}`}>
          &copy; {new Date().getFullYear()} Sollnis Technologies Ltd. All rights reserved.
        </p>
      </footer>
    </div>
  );
}