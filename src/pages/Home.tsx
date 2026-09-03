import { Link } from "react-router-dom";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useSpotlight } from "@/lib/useSpotlight";
import { Magnetic } from "@/components/Magnetic";
import {
  IconArrowRight,
  IconCoinStack,
  IconGamepad,
  IconLayers,
  IconMoonSun,
  IconSave,
  IconSpark,
  IconWorld,
} from "@/components/icons";
import { art, characters, controllerBindings, controllerIcons, controls, GAME, goldenTrash, maps, trashTypes } from "@/lib/game-data";
import { usePageMeta } from "@/lib/usePageMeta";

const features = [
  {
    icon: IconWorld,
    title: "Procedural World",
    desc: "Every session generates a new platform layout and trash spread, so no two playthroughs are the same.",
    to: "/maps",
  },
  {
    icon: IconCoinStack,
    title: "Combo & Coins",
    desc: "Collect trash in sequence to raise the combo multiplier and harvest more coins in each chain.",
    to: "/gameplay",
  },
  {
    icon: IconSpark,
    title: "Golden Trash",
    desc: "Rare golden trash appears randomly at night with a doubled coin reward, chase it before it disappears.",
    to: "/gameplay",
  },
  {
    icon: IconGamepad,
    title: "16 Characters",
    desc: "Unlock sixteen unique trash bins, from the free Melow up to Spider Black at 2000 coins.",
    to: "/characters",
  },
  {
    icon: IconMoonSun,
    title: "Day-Night Cycle",
    desc: "The sky changes as playtime passes, altering the atmosphere and the chances of rare items appearing.",
    to: "/gameplay",
  },
  {
    icon: IconSave,
    title: "Auto Save",
    desc: "Coin, character, and upgrade progress is saved automatically, continue anytime without losing anything.",
    to: "/controls",
  },
];

function SectionHeading({ kicker, title, desc }: { kicker: string; title: string; desc?: string }) {
  return (
    <Reveal className="mb-10">
      <span className="font-mono text-[11px] tracking-[0.25em] text-primary uppercase">{kicker}</span>
      <h2 className="font-display mt-3 text-3xl text-foreground sm:text-4xl">{title}</h2>
      {desc ? <p className="mt-3 max-w-2xl text-muted-foreground">{desc}</p> : null}
    </Reveal>
  );
}

/** Feature card with a cursor-tracked glow — its own component so each instance can hold its own pointer hook. */
function FeatureCard({ feature }: { feature: (typeof features)[number] }) {
  const { ref, onMouseMove } = useSpotlight<HTMLAnchorElement>();
  return (
    <Link
      ref={ref}
      onMouseMove={onMouseMove}
      to={feature.to}
      className="pixel-box pixel-box-lift spotlight block h-full p-5"
    >
      <feature.icon width={26} height={26} className="text-primary" />
      <h3 className="font-display mt-4 text-xl text-foreground">{feature.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.desc}</p>
    </Link>
  );
}

export default function Home() {
  usePageMeta(
    "Trash Collector Game - Official Website",
    "Trash Collector Game, a 2D pixel platformer with a procedural world, 16 characters, 5 biomes, and a combo system.",
  );

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />

        {/* Features */}
        <section className="mx-auto max-w-6xl px-5 pt-24">
          <SectionHeading
            kicker="Gameplay"
            title="Collect and Deposit"
            desc="A simple gameplay loop. Explore the platforms, gather trash, and turn coins into real progress."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 70}>
                <FeatureCard feature={f} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* Characters */}
        <section className="mx-auto max-w-6xl px-5 pt-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              kicker="Collection"
              title="Sixteen Characters"
              desc="Every character has its own face and color. Collect coins from combos to unlock them one by one."
            />
            <Reveal className="mb-10">
              <Link to="/characters" className="btn-pixel-ghost !text-sm">
                All Characters
                <IconArrowRight width={16} height={16} />
              </Link>
            </Reveal>
          </div>
          <div className="grid grid-cols-4 gap-3 sm:grid-cols-8">
            {characters.slice(0, 8).map((c, i) => (
              <Reveal key={c.id} delay={i * 50} className="pixel-box flex flex-col items-center gap-2 p-3">
                <img
                  src={c.face}
                  alt={`${c.name} Character`}
                  width={48}
                  height={48}
                  className="anim-bob h-12 w-12"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
                <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">{c.name}</span>
                <span className="flex items-center gap-1 text-[10px] text-accent">
                  <img src={art.coin} alt="" width={12} height={12} className="h-3 w-3" />
                  {c.price === 0 ? "Free" : c.price}
                </span>
              </Reveal>
            ))}
          </div>
        </section>

        {/* World */}
        <section className="mx-auto max-w-6xl px-5 pt-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              kicker="Biomes"
              title="Five Worlds to Explore"
              desc="Choose your favorite atmosphere, from lush green grassland to vast safari savanna."
            />
            <Reveal className="mb-10">
              <Link to="/maps" className="btn-pixel-ghost !text-sm">
                All Worlds
                <IconArrowRight width={16} height={16} />
              </Link>
            </Reveal>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {maps.map((m, i) => (
              <Reveal key={m.id} delay={i * 70} className="pixel-box pixel-box-lift overflow-hidden">
                <div
                  className="h-28 w-full"
                  style={{
                    backgroundImage: `url(${m.scene.hill})`,
                    backgroundSize: "auto 100%",
                    backgroundRepeat: "repeat-x",
                    backgroundPosition: "bottom",
                    backgroundColor: `${m.tone}33`,
                  }}
                  aria-label={`${m.name} biome preview`}
                  role="img"
                />
                <div className="p-3">
                  <p className="font-display text-base text-foreground">{m.name}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Trash & combo */}
        <section className="mx-auto max-w-6xl px-5 pt-24">
          <div className="pixel-box grid items-center gap-8 p-6 md:grid-cols-2 md:p-10">
            <Reveal>
              <span className="font-mono text-[11px] tracking-[0.25em] text-primary uppercase">Collection System</span>
              <h2 className="font-display mt-3 text-3xl text-foreground sm:text-4xl">9 Trash Types, One Golden</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Each trash type is worth a different coin value. Chain pickups without a pause to
                raise the combo multiplier to its max, and watch for <span className="text-accent">Golden Trash</span>, which
                only appears briefly.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {trashTypes.map((t) => (
                  <Link
                    key={t.name}
                    to="/trash"
                    className="font-mono flex items-center gap-1.5 border border-border bg-surface-2 px-2 py-1.5 text-[10px] tracking-wider text-muted-foreground uppercase transition-colors hover:border-primary/50 hover:text-foreground"
                  >
                    <img src={t.src} alt="" width={14} height={14} className="h-3.5 w-3.5" />
                    {t.name}
                  </Link>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/trash" className="btn-pixel-ghost !text-sm">
                  View Trash Gallery
                  <IconArrowRight width={16} height={16} />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={120} className="relative flex items-center justify-center">
              <div className="relative h-52 w-full max-w-sm">
                <div
                  className="absolute inset-x-0 bottom-0 h-6"
                  style={{ backgroundImage: `url(${art.platform})`, backgroundSize: "24px 24px" }}
                  aria-hidden="true"
                />
                {trashTypes.slice(0, 5).map((t, i) => (
                  <img
                    key={t.name}
                    src={t.src}
                    alt=""
                    className="anim-float absolute h-9 w-9"
                    style={{ left: `${6 + i * 19}%`, bottom: `${20 + (i % 3) * 26}%`, animationDelay: `${i * 0.3}s` }}
                  />
                ))}
                <img
                  src={goldenTrash.src}
                  alt="Golden Trash"
                  className="anim-float absolute top-2 left-1/2 h-14 w-14 -translate-x-1/2 drop-shadow-[0_0_16px_oklch(0.84_0.16_88_/_70%)]"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Controls: keyboard & controller */}
        <section className="mx-auto grid max-w-6xl gap-6 px-5 pt-24 lg:grid-cols-2">
          <Reveal className="pixel-box p-6 md:p-8">
            <span className="font-mono text-[11px] tracking-[0.25em] text-primary uppercase">Keyboard</span>
            <h2 className="font-display mt-3 text-2xl text-foreground sm:text-3xl">Keyboard Buttons</h2>
            <ul className="mt-6 space-y-2.5">
              {controls.map((c) => (
                <li key={c.label} className="flex items-center justify-between border-b border-border/60 pb-2.5 last:border-0 last:pb-0">
                  <span className="text-sm text-muted-foreground">{c.action}</span>
                  <img src={c.key} alt={`${c.label} Key`} width={32} height={32} className="h-8 w-8" style={{ imageRendering: "pixelated" }} />
                </li>
              ))}
            </ul>
            <Link to="/controls" className="btn-pixel-ghost mt-6 !text-sm">
              Controls
              <IconArrowRight width={16} height={16} />
            </Link>
          </Reveal>
          <Reveal delay={120} className="pixel-box p-6 md:p-8">
            <span className="font-mono text-[11px] tracking-[0.25em] text-primary uppercase">Controller</span>
            <h2 className="font-display mt-3 text-2xl text-foreground sm:text-3xl">Controller Buttons</h2>
            <ul className="mt-6 space-y-2.5">
              {controllerBindings.slice(0, controls.length).map((b) => (
                <li key={b.icon} className="flex items-center justify-between border-b border-border/60 pb-2.5 last:border-0 last:pb-0">
                  <span className="text-sm text-muted-foreground">{b.action}</span>
                  <img
                    src={controllerIcons.xbox[b.icon]}
                    alt={b.label}
                    width={32}
                    height={32}
                    className="h-8 w-8"
                    style={{ imageRendering: "pixelated" }}
                  />
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-5 pt-24">
          <Reveal className="pixel-box scanlines relative overflow-hidden p-10 text-center md:p-16">
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-20 opacity-60"
              style={{ backgroundImage: `url(${art.hill})`, backgroundSize: "auto 100%", backgroundRepeat: "repeat-x" }}
              aria-hidden="true"
            />
            <IconLayers width={34} height={34} className="mx-auto text-primary" />
            <h2 className="font-display mx-auto mt-5 max-w-2xl text-3xl text-foreground sm:text-4xl">
              Ready to Clean Up the Pixel World?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              {GAME.name} is free to play on Windows. Extract it and start playing right away.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Magnetic strength={0.22}>
                <Link to="/download" className="btn-pixel">
                  Download {GAME.name}
                </Link>
              </Magnetic>
            </div>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
