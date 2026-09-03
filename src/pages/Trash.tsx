import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Accordion } from "@/components/Accordion";
import { IconArrowRight, IconLeaf, IconRecycle, IconSpark } from "@/components/icons";
import { art, economy, goldenTrash, trashCategoryCounts, trashGallery, type TrashCategory } from "@/lib/game-data";
import { usePageMeta } from "@/lib/usePageMeta";

type Filter = "all" | TrashCategory;

const categoryLabel: Record<TrashCategory, string> = {
  organic: "Organic",
  inorganic: "Inorganic",
};

export default function Trash() {
  usePageMeta(
    "Trash Gallery - Trash Collector Game",
    "See clear photos of all 9 trash types in Trash Collector Game, complete with organic/inorganic categories and an explanation of each item, including the rare Golden Trash.",
  );

  const [filter, setFilter] = useState<Filter>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return trashGallery;
    return trashGallery.filter((t) => t.category === filter);
  }, [filter]);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 pt-14">
        {/* Hero */}
        <div className="grid items-center gap-8 md:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <span className="font-mono text-[11px] tracking-[0.25em] text-primary uppercase">Encyclopedia</span>
            <h1 className="font-display mt-3 text-4xl text-foreground sm:text-5xl">Trash Gallery</h1>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Clear photos of all {trashGallery.length} trash types you can collect in
              Trash Collector Game, plus one rare golden-shimmering item.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted-foreground">
              <span className="font-mono flex items-center gap-1.5 border border-border bg-surface-2 px-2.5 py-1.5 text-[10px] tracking-wider uppercase">
                <IconLeaf width={13} height={13} className="text-primary" />
                {trashCategoryCounts.organic} Organic
              </span>
              <span className="font-mono flex items-center gap-1.5 border border-border bg-surface-2 px-2.5 py-1.5 text-[10px] tracking-wider uppercase">
                <IconRecycle width={13} height={13} className="text-primary" />
                {trashCategoryCounts.inorganic} Inorganic
              </span>
              <span className="font-mono flex items-center gap-1.5 border border-border bg-surface-2 px-2.5 py-1.5 text-[10px] tracking-wider text-accent uppercase">
                <IconSpark width={13} height={13} />
                1 Golden
              </span>
            </div>
          </Reveal>
          <Reveal delay={120} className="flex justify-center">
            <img
              src={art.logoLarge}
              alt="High-resolution Trash Collector Game icon"
              width={200}
              height={200}
              className="anim-bob h-40 w-40 drop-shadow-[0_18px_30px_oklch(0_0_0/45%)] sm:h-48 sm:w-48"
            />
          </Reveal>
        </div>

        {/* Warning-stripe themed divider, made from the game's actual boundary tile */}
        <Reveal className="mt-12 h-6 w-full overflow-hidden border-y border-border" aria-hidden="true">
          <div className="h-full w-full" style={{ backgroundImage: `url(${art.boundary})`, backgroundSize: "24px 24px" }} />
        </Reveal>

        {/* Filter */}
        <Reveal className="mt-10 flex flex-wrap items-center gap-3">
          {(
            [
              { id: "all" as const, label: `All (${trashGallery.length})` },
              { id: "organic" as const, label: `Organic (${trashCategoryCounts.organic})` },
              { id: "inorganic" as const, label: `Inorganic (${trashCategoryCounts.inorganic})` },
            ]
          ).map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={`font-mono border px-3 py-1.5 text-[11px] tracking-widest uppercase transition-colors ${
                filter === f.id
                  ? "border-primary bg-primary/12 text-primary"
                  : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
          <span className="font-mono ml-auto flex items-center gap-1.5 text-[11px] tracking-widest text-muted-foreground uppercase">
            Base coins
            <img src={art.coin} alt="" width={12} height={12} className="h-3 w-3" />
            <span className="text-accent">{economy.baseCoins}</span>
          </span>
        </Reveal>

        {/* Gallery grid */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          {filtered.map((t, i) => (
            <Reveal key={t.id} delay={(i % 2) * 60} className="pixel-box pixel-box-lift group p-5">
              <div className="flex items-start justify-between">
                <span
                  className={`font-mono flex items-center gap-1 text-[10px] tracking-wider uppercase ${
                    t.category === "organic" ? "text-primary" : "text-sky"
                  }`}
                >
                  {t.category === "organic" ? <IconLeaf width={12} height={12} /> : <IconRecycle width={12} height={12} />}
                  {categoryLabel[t.category]}
                </span>
              </div>
              <div className="mx-auto mt-4 flex h-24 w-24 items-center justify-center border border-border/70 bg-surface-2">
                <img
                  src={t.src}
                  alt={t.name}
                  width={72}
                  height={72}
                  className="h-16 w-16 transition-transform duration-200 group-hover:-translate-y-1 group-hover:scale-110"
                />
              </div>
              <p className="font-display mt-4 text-center text-lg text-foreground">{t.name}</p>
            </Reveal>
          ))}
        </div>

        {/* Golden Trash — special card */}
        <Reveal className="pixel-box scanlines relative mt-10 overflow-hidden p-6 md:p-8">
          <div
            className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full opacity-30 blur-2xl"
            style={{ background: "oklch(0.84 0.16 88)" }}
            aria-hidden="true"
          />
          <div className="relative grid items-center gap-6 md:grid-cols-[auto_1fr]">
            <img
              src={goldenTrash.src}
              alt="Golden Trash"
              width={112}
              height={112}
              className="anim-float mx-auto h-24 w-24 drop-shadow-[0_0_20px_oklch(0.84_0.16_88_/_70%)] md:h-28 md:w-28"
            />
            <div>
              <span className="font-mono text-[11px] tracking-[0.25em] text-accent uppercase">Rare Item</span>
              <h2 className="font-display mt-2 text-2xl text-foreground sm:text-3xl">Golden Trash</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Not part of either the organic or inorganic trash category. Golden Trash is a game bonus
                that appears randomly and only briefly. Successfully collecting it gives{" "}
                <span className="text-accent">{economy.goldenMultiplier}</span> compared to regular trash,
                so it's always worth chasing the moment it shimmers on screen.
              </p>
            </div>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal className="pixel-box scanlines relative mt-16 overflow-hidden p-8 text-center md:p-12">
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-14 opacity-50"
            style={{ backgroundImage: `url(${art.grass})`, backgroundSize: "32px 32px" }}
            aria-hidden="true"
          />
          <h2 className="font-display text-2xl text-foreground sm:text-3xl">See the Formula, Then Play</h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground">
            Every piece of trash has the same base coin value, what sets your final result apart is
            the combo chain and upgrades you choose.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link to="/gameplay" className="btn-pixel-ghost !text-sm">
              View Economy Formula
            </Link>
            <Link to="/download" className="btn-pixel !text-sm">
              Download &amp; Play
              <IconArrowRight width={16} height={16} />
            </Link>
          </div>
        </Reveal>
      </main>
      <SiteFooter />
    </div>
  );
}
