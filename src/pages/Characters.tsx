import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { IconArrowRight, IconCheck, IconLock } from "@/components/icons";
import { art, characters } from "@/lib/game-data";
import { usePageMeta } from "@/lib/usePageMeta";

type Filter = "all" | "free" | "locked";

export default function Characters() {
  usePageMeta(
    "Character - Trash Collector Game",
    "A collection of 16 unique trash bin characters in Trash Collector Game. Unlock them with coins from combos, from the free Melow up to Spider Black.",
  );

  const [filter, setFilter] = useState<Filter>("all");

  const filtered = useMemo(() => {
    if (filter === "free") return characters.filter((c) => c.price === 0);
    if (filter === "locked") return characters.filter((c) => c.price > 0);
    return characters;
  }, [filter]);

  const totalCost = useMemo(() => characters.reduce((sum, c) => sum + c.price, 0), []);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 pt-14">
        <Reveal>
          <span className="font-mono text-[11px] tracking-[0.25em] text-primary uppercase">Collection</span>
          <h1 className="font-display mt-3 text-4xl text-foreground sm:text-5xl">16 Characters</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Every character is a trash bin with its own face and personality. Collect coins
            from combo chains to unlock them, once bought a character is saved permanently.
          </p>
        </Reveal>

        <Reveal className="mt-8 flex flex-wrap items-center gap-3">
          {(
            [
              { id: "all" as const, label: `All (${characters.length})` },
              { id: "free" as const, label: `Default (${characters.filter((c) => c.price === 0).length})` },
              { id: "locked" as const, label: `Locked (${characters.filter((c) => c.price > 0).length})` },
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
            Total to unlock all
            <img src={art.coin} alt="" width={12} height={12} className="h-3 w-3" />
            <span className="text-accent">{totalCost.toLocaleString("en-US")}</span>
          </span>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-4">
          {filtered.map((c, i) => (
            <Reveal key={c.id} delay={(i % 2) * 60} className="pixel-box group p-5">
              <div className="flex items-start justify-between">
                <span className="block h-8 w-8 border border-border" style={{ backgroundColor: c.color }} aria-hidden="true" />
                {c.price === 0 ? (
                  <span className="font-mono flex items-center gap-1 text-[10px] tracking-wider text-primary uppercase">
                    <IconCheck width={12} height={12} /> Default
                  </span>
                ) : (
                  <span className="font-mono flex items-center gap-1 text-[10px] tracking-wider text-muted-foreground uppercase">
                    <IconLock width={12} height={12} /> Locked
                  </span>
                )}
              </div>
              <img
                src={c.face}
                alt={`${c.name} Character`}
                width={72}
                height={72}
                className="anim-bob mx-auto mt-4 h-18 w-18 transition-transform duration-200 group-hover:-translate-y-1"
                style={{ animationDelay: `${(i % 6) * 0.2}s` }}
              />
              <p className="font-display mt-4 text-center text-xl text-foreground">{c.name}</p>
              <p className="mt-2 flex items-center justify-center gap-1.5 text-sm text-accent">
                <img src={art.coin} alt="" width={16} height={16} className="h-4 w-4" />
                {c.price === 0 ? "Free" : `${c.price} coins`}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="pixel-box mt-14 flex flex-col items-center gap-4 p-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h2 className="font-display text-2xl text-foreground">Coins Don't Come on Their Own</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Learn which biome Golden Trash appears in most often, then farm combos there.
            </p>
          </div>
          <Link to="/maps" className="btn-pixel shrink-0 !text-sm">
            Explore the World
            <IconArrowRight width={16} height={16} />
          </Link>
        </Reveal>
      </main>
      <SiteFooter />
    </div>
  );
}
