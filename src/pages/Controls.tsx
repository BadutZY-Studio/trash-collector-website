import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ControllerShowcase } from "@/components/ControllerShowcase";
import {
  IconArrowRight,
  IconGamepad,
  IconKeyboard,
  IconMonitor,
  IconSliders,
} from "@/components/icons";
import { controllerFeatures, controls, displaySettings, } from "@/lib/game-data";
import { usePageMeta } from "@/lib/usePageMeta";

export default function Controls() {
  usePageMeta(
    "Controls & Settings - Trash Collector Game",
    "Keyboard controls, full Xbox/PlayStation controller support, display settings, and the tech stack of Trash Collector Game.",
  );

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 pt-14">
        <Reveal>
          <span className="font-mono text-[11px] tracking-[0.25em] text-primary uppercase">Accessibility</span>
          <h1 className="font-display mt-3 text-4xl text-foreground sm:text-5xl">Controls &amp; Settings</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Play with a keyboard, gamepad, or both, everything can be rebound, and the display
            can be tuned down to the smallest detail.
          </p>
        </Reveal>

        {/* Keyboard */}
        <section className="mt-14">
          <div className="flex items-center gap-3">
            <IconKeyboard width={22} height={22} className="text-primary" />
            <h2 className="font-display text-2xl text-foreground sm:text-3xl">Keyboard Controls</h2>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {controls.map((c, i) => (
              <Reveal
                key={c.label}
                delay={i * 50}
                className="pixel-box flex flex-col items-center gap-3 p-4 text-center"
              >
                <img
                  src={c.key}
                  alt={`${c.label} Key`}
                  width={40}
                  height={40}
                  className="h-10 w-10"
                  style={{ imageRendering: "pixelated" }}
                />
                <span className="text-sm text-muted-foreground">{c.action}</span>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Controller */}
        <section className="mt-16">
          <div className="flex items-center gap-3">
            <IconGamepad width={22} height={22} className="text-primary" />
            <h2 className="font-display text-2xl text-foreground sm:text-3xl">Full Controller Support</h2>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {controllerFeatures.map((f, i) => (
              <Reveal key={f.title} delay={i * 60} className="pixel-box p-5">
                <h3 className="font-display text-lg text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120} className="mt-6">
            <ControllerShowcase />
          </Reveal>
        </section>

        {/* Display settings */}
        <section className="mt-16">
          <div className="flex items-center gap-3">
            <IconMonitor width={22} height={22} className="text-primary" />
            <h2 className="font-display text-2xl text-foreground sm:text-3xl">Display Settings</h2>
          </div>
          <div className="pixel-box mt-6 divide-y divide-border">
            {displaySettings.map((d, i) => (
              <Reveal
                key={d.label}
                delay={i * 40}
                className="flex flex-wrap items-center justify-between gap-2 px-5 py-4"
              >
                <span className="font-display text-base text-foreground">{d.label}</span>
                <span className="text-right text-sm text-muted-foreground">{d.value}</span>
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal className="pixel-box mt-16 flex flex-col items-center gap-4 p-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-3">
            <IconSliders width={28} height={28} className="text-primary" />
            <div>
              <h2 className="font-display text-2xl text-foreground">Set It Up Your Way</h2>
              <p className="mt-1 text-sm text-muted-foreground">All settings are saved automatically per device.</p>
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
