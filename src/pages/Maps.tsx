import { useState } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BiomeScene } from "@/components/BiomeScene";
import { IconArrowRight } from "@/components/icons";
import { art, maps } from "@/lib/game-data";
import { usePageMeta } from "@/lib/usePageMeta";

export default function Maps() {
  usePageMeta(
    "World - Trash Collector Game",
    "Five procedural biomes in Trash Collector Game: Green Land, Desert, Snow, Jungle, and Safari. Every session generates a new layout.",
  );

  const [activeId, setActiveId] = useState(maps[0]!.id);
  const active = maps.find((m) => m.id === activeId) ?? maps[0]!;

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 pt-14">
        <Reveal>
          <span className="font-mono text-[11px] tracking-[0.25em] text-primary uppercase">Biomes</span>
          <h1 className="font-display mt-3 text-4xl text-foreground sm:text-5xl">Five Worlds</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            The world is generated procedurally on top of your chosen biome theme, the platforms, ground, and
            trash spread are always different each session. Try each biome below.
          </p>
        </Reveal>

        {/* Interactive biome picker */}
        <Reveal className="pixel-box mt-10 overflow-hidden !p-0">
          <div className="flex flex-wrap border-b border-border" role="tablist" aria-label="Biome selection">
            {maps.map((m) => (
              <button
                key={m.id}
                type="button"
                role="tab"
                aria-selected={activeId === m.id}
                onClick={() => setActiveId(m.id)}
                className={`font-display flex-1 min-w-[6.5rem] px-3 py-3 text-sm transition-colors sm:text-base ${
                  activeId === m.id
                    ? "bg-surface-2 text-primary"
                    : "text-muted-foreground hover:bg-surface-2/60 hover:text-foreground"
                }`}
                style={activeId === m.id ? { boxShadow: `inset 0 -3px 0 0 ${active.tone}` } : undefined}
              >
                {m.name}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-[1.3fr_1fr]">
            <BiomeScene map={active} key={active.id} />
            <div className="flex flex-col justify-center gap-3 p-6 md:p-8">
              <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
                Biome {String(active.index + 1).padStart(2, "0")} / {maps.length}
              </span>
              <h2 className="font-display text-2xl text-foreground sm:text-3xl">{active.name}</h2>
              <p className="leading-relaxed text-muted-foreground">{active.desc}</p>
              <div className="mt-2 flex items-center gap-2">
                <span className="block h-5 w-5 border border-border" style={{ backgroundColor: active.tone }} aria-hidden="true" />
                <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                  Color theme {active.tone}
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Full list of all biomes */}
        <div className="mt-14 space-y-6">
          {maps.map((m, i) => (
            <Reveal key={m.id} delay={i * 60} className="pixel-box overflow-hidden">
              <div className={`grid items-center md:grid-cols-[1fr_1.2fr] ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className="p-6 md:p-8">
                  <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
                    Biome {String(m.index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display mt-2 text-2xl text-foreground sm:text-3xl">{m.name}</h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{m.desc}</p>
                  <div className="mt-5 flex items-center gap-2">
                    <span className="block h-5 w-5 border border-border" style={{ backgroundColor: m.tone }} aria-hidden="true" />
                    <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                      Color theme {m.tone}
                    </span>
                  </div>
                </div>
                <BiomeScene map={m} />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="pixel-box mt-14 flex flex-col items-center gap-4 p-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-4">
            <img src={art.bin} alt="" width={56} height={56} className="anim-bob h-14 w-14" />
            <div>
              <h2 className="font-display text-2xl text-foreground">Pick a Biome, Start Playing</h2>
              <p className="mt-1 text-sm text-muted-foreground">All biomes are already unlocked and playable.</p>
            </div>
          </div>
          <Link to="/download" className="btn-pixel shrink-0 !text-sm">
            Download &amp; Play
            <IconArrowRight width={16} height={16} />
          </Link>
        </Reveal>
      </main>
      <SiteFooter />
    </div>
  );
}
