import { useState } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Accordion } from "@/components/Accordion";
import { IconArrowRight, IconCheck, IconDownload, IconMonitor } from "@/components/icons";
import { art, faq, GAME } from "@/lib/game-data";
import { usePageMeta } from "@/lib/usePageMeta";

const zipFileName = "TrashCollectorGame-v2.3.0.zip";
const exeFileName = "TrashCollectorGame.exe";

const requirements = [
  { label: "Platform", value: "Windows 10 / 11" },
  { label: "Resolution", value: GAME.resolution },
  { label: "Storage", value: "~110 MB" },
];

const runSteps = [
  { step: "Download the .zip file", code: zipFileName },
  { step: "Extract to any folder", code: "Right-click → Extract" },
  { step: "Run the .exe inside it", code: exeFileName },
];

export default function Download() {
  usePageMeta(
    "Download - Trash Collector Game",
    `Download Trash Collector Game v${GAME.version} free for Windows. Portable, extract the .zip file then run its .exe, no installation and no need to install Java.`,
  );

  const [started, setStarted] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 pt-14">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <span className="pixel-box font-mono inline-flex items-center gap-2 px-3 py-1.5 text-[10px] tracking-widest text-accent uppercase">
              <span className="block h-2 w-2 bg-primary" />
              Version {GAME.version}
            </span>
            <h1 className="font-display mt-5 text-4xl text-foreground sm:text-5xl">
              Download {GAME.name}
            </h1>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Free forever. A single portable <span className="text-foreground">.zip</span> file for
              Windows. Extract, then run the .exe inside it. No installation, no separate Java
              install, no account, no ads.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                type="button"
                href={GAME.linkDownload}
                className="btn-pixel"
                aria-live="polite"
              >
                <IconDownload width={18} height={18} />
                {started ? "Coming Soon!" : `Download v${GAME.version} (.zip)`}
              </a>
              <span className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase">
                {zipFileName}
              </span>
            </div>

            <dl className="mt-8 grid max-w-xl grid-cols-3 gap-2 sm:mt-10 sm:gap-3">
              {requirements.map((r) => (
                <div key={r.label} className="pixel-box min-w-0 px-1.5 py-2 sm:px-3 sm:py-3">
                  <dt className="font-mono text-[8px] tracking-wider text-muted-foreground uppercase sm:text-[10px]">
                    {r.label}
                  </dt>
                  <dd className="font-display mt-1 text-[11px] text-foreground sm:text-base">{r.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={120} className="pixel-box p-4 sm:p-6">
            <div className="flex items-center gap-2 border-b border-border pb-3">
              <IconMonitor width={16} height={16} className="text-primary sm:h-[18px] sm:w-[18px]" />
              <span className="font-mono text-[9px] tracking-widest text-muted-foreground uppercase sm:text-[10px]">
                3-Step Run Guide, No Install
              </span>
            </div>
            <ol className="mt-4 space-y-4 sm:mt-5 sm:space-y-5">
              {runSteps.map((s, i) => (
                <li key={s.step} className="flex gap-3 sm:gap-4">
                  <span className="pixel-box font-display flex h-8 w-8 shrink-0 items-center justify-center text-sm text-primary sm:h-9 sm:w-9 sm:text-base">
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs text-foreground sm:text-sm">{s.step}</p>
                    <code className="font-mono mt-1.5 block truncate border border-border bg-surface-2 px-2 py-1.5 text-[11px] text-accent">
                      {s.code}
                    </code>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-5 flex items-start gap-3 border-t border-border pt-4 sm:mt-6">
              <IconCheck width={16} height={16} className="mt-0.5 shrink-0 text-primary sm:h-[18px] sm:w-[18px]" />
              <p className="text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
                Seeing a Windows SmartScreen warning? Click <span className="text-foreground">"More info"</span> then{" "}
                <span className="text-foreground">"Run anyway"</span>. This is normal for an uncertified
                indie app, not a sign of a harmful file.
              </p>
            </div>
          </Reveal>
        </div>

        {/* FAQ */}
        <section className="mt-20">
          <Reveal>
            <span className="font-mono text-[11px] tracking-[0.25em] text-primary uppercase">Help</span>
            <h2 className="font-display mt-3 text-2xl text-foreground sm:text-3xl">Frequently Asked Questions</h2>
          </Reveal>
          <Reveal delay={80} className="pixel-box mt-6 px-5 sm:px-8">
            <Accordion items={faq} />
          </Reveal>
        </section>

        <Reveal className="pixel-box scanlines relative mt-16 overflow-hidden p-8 text-center">
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-14 opacity-50"
            style={{ backgroundImage: `url(${art.grass})`, backgroundSize: "32px 32px" }}
            aria-hidden="true"
          />
          <img src={art.bin} alt="Trash Collector Game mascot" width={64} height={64} className="anim-bob mx-auto h-16 w-16" />
          <p className="font-display mt-4 text-xl text-foreground">See you in Green Land!</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Have feedback or found a bug? This project keeps growing with every version.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link to="/controls" className="btn-pixel-ghost !text-sm">
              Report a Bug or Suggest an Update
              <IconArrowRight width={16} height={16} />
            </Link>
          </div>
        </Reveal>
      </main>
      <SiteFooter />
    </div>
  );
}
