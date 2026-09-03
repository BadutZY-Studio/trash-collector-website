import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { art, GAME, goldenTrash, stats, trashTypes } from "@/lib/game-data";
import { IconArrowRight, IconDownload, IconMoon, IconPlay, IconSun } from "@/components/icons";
import { Magnetic } from "@/components/Magnetic";
import { useSpotlight } from "@/lib/useSpotlight";

export function Hero() {
  const [offset, setOffset] = useState(0);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [night, setNight] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const panelSpotlight = useSpotlight<HTMLDivElement>();

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setOffset(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPointer({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setPointer({ x: 0, y: 0 })}
      className="scanlines relative isolate overflow-hidden"
    >
      {/* Sky — transitions smoothly between day and night, demonstrating the game's day-night cycle */}
      <div
        className="absolute inset-0 -z-30 transition-[background] duration-700 ease-out"
        style={{
          background: night
            ? "linear-gradient(180deg, oklch(0.1 0.03 265) 0%, oklch(0.16 0.05 268) 45%, oklch(0.24 0.06 260) 100%)"
            : "linear-gradient(180deg, oklch(0.19 0.045 265) 0%, oklch(0.28 0.07 268) 45%, oklch(0.42 0.09 250) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Stars — get brighter at night */}
      <div
        className="absolute inset-0 -z-30 transition-opacity duration-700"
        style={{ opacity: night ? 1 : 0.35 }}
        aria-hidden="true"
      >
        {STARS.map((s, i) => (
          <span
            key={i}
            className="anim-twinkle absolute block bg-foreground"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: s.s,
              height: s.s,
              opacity: s.o,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* Sun / moon — swap position following the cycle */}
      <div
        className="pointer-events-none absolute top-8 -z-30 h-14 w-14 transition-all duration-700 ease-out sm:top-12 sm:h-20 sm:w-20"
        style={{ left: night ? "78%" : "14%", opacity: 1 }}
        aria-hidden="true"
      >
        {night ? (
          <IconMoon width="100%" height="100%" className="text-[oklch(0.9_0.02_240)] drop-shadow-[0_0_18px_oklch(0.9_0.02_240_/_55%)]" />
        ) : (
          <IconSun width="100%" height="100%" className="anim-spin-slow text-[oklch(0.88_0.15_88)] drop-shadow-[0_0_22px_oklch(0.88_0.15_88_/_60%)]" />
        )}
      </div>

      {/* Passing clouds */}
      <div className="pointer-events-none absolute inset-x-0 top-14 -z-20 h-40" aria-hidden="true">
        <img
          src={art.cloud}
          alt=""
          className="absolute top-0 h-16 opacity-35"
          style={{ animation: "drift 46s linear infinite" }}
        />
        <img
          src={art.cloudB}
          alt=""
          className="absolute top-20 h-12 opacity-25"
          style={{ animation: "drift 68s linear infinite", animationDelay: "-20s" }}
        />
      </div>

      {/* Parallax mountains and hills */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-24 -z-20 h-64 opacity-45"
        style={{
          backgroundImage: `url(${art.mountains})`,
          backgroundSize: "auto 100%",
          backgroundRepeat: "repeat-x",
          backgroundPosition: `${offset * -0.08 + pointer.x * 18}px bottom`,
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-16 -z-20 h-44 opacity-75"
        style={{
          backgroundImage: `url(${art.hill})`,
          backgroundSize: "auto 100%",
          backgroundRepeat: "repeat-x",
          backgroundPosition: `${offset * -0.18 + pointer.x * 34}px bottom`,
          filter: night ? "brightness(0.55)" : "none",
          transition: "filter 700ms ease",
        }}
        aria-hidden="true"
      />

      {/* Ground */}
      <div className="absolute inset-x-0 bottom-0 -z-10" aria-hidden="true">
        <div
          className="h-8 transition-[filter] duration-700"
          style={{ backgroundImage: `url(${art.grass})`, backgroundSize: "32px 32px", filter: night ? "brightness(0.6)" : "none" }}
        />
        <div
          className="h-16 transition-[filter] duration-700"
          style={{ backgroundImage: `url(${art.dirt})`, backgroundSize: "32px 32px", filter: night ? "brightness(0.6)" : "none" }}
        />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pt-16 pb-40 md:grid-cols-[1.1fr_0.9fr] md:pt-24 md:pb-48">
        <div>
          <h1 className="mt-5 text-5xl leading-[0.95] font-bold sm:text-6xl lg:text-7xl">
            <span className="block text-foreground">Trash</span>
            <span className="text-gradient-gold block">Collector</span>
            <span className="block text-primary">Game</span>
          </h1>

          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            Explore a procedurally generated world, collect scattered trash,
            chain combos for more coins, then unlock sixteen characters and boost
            your collection speed.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Magnetic strength={0.25}>
              <Link to="/download" className="btn-pixel">
                <IconDownload width={18} height={18} />
                Download Now
              </Link>
            </Magnetic>
            <Magnetic strength={0.25}>
              <Link to="/maps" className="btn-pixel-ghost">
                <IconPlay width={18} height={18} />
                View World
              </Link>
            </Magnetic>
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="pixel-box anim-pop-in px-3 py-3"
                style={{ animationDelay: `${300 + i * 90}ms` }}
              >
                <dt className="font-display text-2xl text-accent">{s.value}</dt>
                <dd className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">{s.label}</dd>
              </div>
            ))}
          </dl>

          {/* Day-night cycle switch — try it directly, demonstrating an in-game feature */}
          <button
            type="button"
            onClick={() => setNight((v) => !v)}
            aria-pressed={night}
            className="pixel-box mt-6 inline-flex items-center gap-3 px-3 py-2 transition-colors hover:border-primary"
          >
            <span className="cycle-track h-6 w-12 rounded-full border border-border bg-surface-2 p-0.5">
              <span
                className="cycle-thumb flex h-full w-5 items-center justify-center rounded-full bg-primary text-primary-foreground"
                style={{ transform: night ? "translateX(22px)" : "translateX(0)" }}
              >
                {night ? <IconMoon width={12} height={12} /> : <IconSun width={12} height={12} />}
              </span>
            </span>
            <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
              Cycle: {night ? "Night" : "Day"}
            </span>
          </button>
        </div>

        {/* Scene panel */}
        <div className="relative">
          <div
            ref={panelSpotlight.ref}
            onMouseMove={panelSpotlight.onMouseMove}
            className="pixel-box spotlight pixel-box-lift relative overflow-hidden p-5"
          >
            <div className="flex items-center justify-between border-b border-border pb-3">
              <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">Session in Progress</span>
              <span className="flex items-center gap-2">
                <img src={art.coin} alt="" width={18} height={18} className="anim-coin h-4.5 w-4.5" />
                <span className="font-display text-lg text-accent">2450</span>
              </span>
            </div>

            <div className="relative mt-5 h-44">
              <img
                src={art.bin}
                alt="Trash bin character from Trash Collector Game"
                className="anim-bob absolute bottom-0 left-1/2 h-28 -translate-x-1/2"
              />
              {trashTypes.slice(0, 6).map((t, i) => (
                <img
                  key={t.name}
                  src={t.src}
                  alt=""
                  className="anim-float absolute h-8 w-8"
                  style={{ left: `${8 + i * 16}%`, top: `${(i % 3) * 26 + 6}%`, animationDelay: `${i * 0.35}s` }}
                />
              ))}
              <img
                src={goldenTrash.src}
                alt=""
                className="anim-float absolute top-2 right-2 h-10 w-10 drop-shadow-[0_0_12px_oklch(0.84_0.16_88_/_60%)]"
                style={{ animationDelay: "0.8s" }}
              />
            </div>

            <div
              className="mt-2 h-6"
              style={{ backgroundImage: `url(${art.platform})`, backgroundSize: "24px 24px" }}
              aria-hidden="true"
            />

            <div className="mt-4 grid grid-cols-3 gap-2">
              {["Combo x4", "Golden", night ? "Night" : "Day"].map((label) => (
                <span
                  key={label}
                  className="font-mono border border-border bg-surface-2 px-2 py-1.5 text-center text-[10px] tracking-wider text-muted-foreground uppercase"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const STARS = Array.from({ length: 46 }, (_, i) => {
  const seed = (i * 9301 + 49297) % 233280;
  const r = seed / 233280;
  const r2 = ((i * 4177 + 12345) % 233280) / 233280;
  return {
    x: Math.round(r * 100),
    y: Math.round(r2 * 55),
    s: r > 0.8 ? 3 : 2,
    o: 0.3 + r2 * 0.6,
  };
});