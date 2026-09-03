import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ComboMeter } from "@/components/ComboMeter";
import { IconArrowRight, IconDice, IconSave, IconSeed, IconSpark } from "@/components/icons";
import { art, economy, saveInfo, upgradeKinds, worldOptions, worldSystem } from "@/lib/game-data";
import { usePageMeta } from "@/lib/usePageMeta";

export default function Gameplay() {
  usePageMeta(
    "Gameplay & Economy - Trash Collector Game",
    "How world creation works, the coin economy formula, combo chains, and five upgrade paths in Trash Collector Game.",
  );

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 pt-14">
        <Reveal>
          <span className="font-mono text-[11px] tracking-[0.25em] text-primary uppercase">Behind the Scenes</span>
          <h1 className="font-display mt-3 text-4xl text-foreground sm:text-5xl">Gameplay &amp; Economy</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            From the options you choose when creating a new world, down to the exact formula behind every
            coin that lands in your wallet, it's all laid out here.
          </p>
        </Reveal>

        {/* World creation options */}
        <section className="mt-14">
          <div className="flex items-center gap-3">
            <IconDice width={22} height={22} className="text-primary" />
            <h2 className="font-display text-2xl text-foreground sm:text-3xl">Create a World Your Way</h2>
          </div>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            The Create World screen offers eight different settings before the very first tile is ever generated.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {worldOptions.map((opt, i) => (
              <Reveal key={opt.label} delay={i * 50} className="pixel-box p-4">
                <h3 className="font-display text-base text-foreground">{opt.label}</h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {opt.values.map((v) => (
                    <span
                      key={v}
                      className="font-mono border border-border bg-surface-2 px-2 py-1 text-[10px] tracking-wider text-muted-foreground uppercase"
                    >
                      {v}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{opt.detail}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* World & seed system */}
        <section className="mt-16">
          <div className="flex items-center gap-3">
            <IconSeed width={22} height={22} className="text-primary" />
            <h2 className="font-display text-2xl text-foreground sm:text-3xl">Multiple Worlds, One Seed</h2>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {worldSystem.map((w, i) => (
              <Reveal key={w.title} delay={i * 60} className="pixel-box p-5">
                <h3 className="font-display text-lg text-foreground">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Economy & combo */}
        <section className="mt-16">
          <div className="flex items-center gap-3">
            <IconSpark width={22} height={22} className="text-primary" />
            <h2 className="font-display text-2xl text-foreground sm:text-3xl">The Formula Behind Every Coin</h2>
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <Reveal className="pixel-box p-6 md:p-8">
              <span className="font-mono text-[11px] tracking-[0.25em] text-primary uppercase">Formula</span>
              <p className="font-mono mt-3 border border-border bg-surface-2 px-3 py-3 text-xs leading-relaxed text-accent sm:text-sm">
                {economy.formula}
              </p>
              <dl className="mt-5 grid grid-cols-2 gap-4">
                <div>
                  <dt className="text-xs text-muted-foreground">Base Coins</dt>
                  <dd className="font-display mt-1 text-lg text-foreground">{economy.baseCoins}</dd>
                </div>
                <div>
                  <dt className="text-xs text-muted-foreground">Golden</dt>
                  <dd className="font-display mt-1 text-lg text-foreground">{economy.goldenMultiplier}</dd>
                </div>
                <div>
                  <dt className="text-xs text-muted-foreground">Combo</dt>
                  <dd className="font-display mt-1 text-lg text-foreground">{economy.comboWindow}</dd>
                </div>
                <div>
                  <dt className="text-xs text-muted-foreground">Max Coin Bonus</dt>
                  <dd className="font-display mt-1 text-lg text-foreground">{economy.coinBonusMax}</dd>
                </div>
              </dl>
            </Reveal>
            <Reveal delay={100}>
              <ComboMeter />
            </Reveal>
          </div>
        </section>

        {/* Full upgrades */}
        <section className="mt-16">
          <h2 className="font-display text-2xl text-foreground sm:text-3xl">Five Upgrade Paths</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Each path levels up independently, spend your coins to match your playstyle.
          </p>
          <div className="mt-6 space-y-4">
            {upgradeKinds.map((kind, i) => {
              const maxLevel = kind.levels.length - 1;
              return (
                <Reveal key={kind.id} delay={i * 60} className="pixel-box p-5 md:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="font-display text-lg text-foreground sm:text-xl">{kind.label}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{kind.desc}</p>
                    </div>
                    <span className="font-mono shrink-0 border border-border bg-surface-2 px-2 py-1 text-[10px] tracking-wider text-muted-foreground uppercase">
                      {maxLevel} levels
                    </span>
                  </div>
                  <div className="mt-4 flex gap-1">
                    {kind.levels.map((_, li) => (
                      <span
                        key={li}
                        className="h-2 flex-1 border border-border"
                        style={{ background: li === 0 ? "var(--color-primary)" : "var(--color-surface-2)" }}
                      />
                    ))}
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
                    {kind.levels.map((lvl) => (
                      <div key={lvl.level} className="border border-border/70 bg-surface-2/60 px-2 py-2 text-center">
                        <p className="font-mono text-[9px] tracking-wider text-muted-foreground uppercase">Lv{lvl.level}</p>
                        <p className="font-display mt-1 text-sm text-foreground">{lvl.value}</p>
                        <p className="mt-1 flex items-center justify-center gap-1 text-[10px] text-accent">
                          {lvl.cost === null ? (
                            "Starting"
                          ) : (
                            <>
                              <img src={art.coin} alt="" width={10} height={10} className="h-2.5 w-2.5" />
                              {lvl.cost}
                            </>
                          )}
                        </p>
                      </div>
                    ))}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* Save system */}
        <section className="mt-16">
          <div className="flex items-center gap-3">
            <IconSave width={22} height={22} className="text-primary" />
            <h2 className="font-display text-2xl text-foreground sm:text-3xl">Progress Saved Automatically</h2>
          </div>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Coins, characters, upgrade levels, settings, and keybinds are written automatically to a local
            save file whenever something changes.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {saveInfo.map((s, i) => (
              <Reveal key={s.platform} delay={i * 60} className="pixel-box p-5">
                <h3 className="font-display text-base text-foreground">{s.platform}</h3>
                <code className="font-mono mt-3 block border border-border bg-surface-2 px-3 py-2 text-xs break-all text-accent">
                  {s.path}
                </code>
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal className="pixel-box scanlines relative mt-16 overflow-hidden p-8 text-center md:p-12">
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-14 opacity-50"
            style={{ backgroundImage: `url(${art.grass})`, backgroundSize: "32px 32px" }}
            aria-hidden="true"
          />
          <h2 className="font-display text-2xl text-foreground sm:text-3xl">Try the Formula Yourself</h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground">
            Read the theory here, then feel firsthand how combos and upgrades reinforce each other
            the moment you start collecting.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
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
