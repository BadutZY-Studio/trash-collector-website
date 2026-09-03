import { Link, NavLink } from "react-router-dom";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { art, GAME } from "@/lib/game-data";
import { IconClose, IconDownload, IconMenu } from "@/components/icons";
import { Magnetic } from "@/components/Magnetic";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/characters", label: "Characters" },
  { to: "/maps", label: "World" },
  { to: "/trash", label: "Trash" },
  { to: "/gameplay", label: "Gameplay" },
  { to: "/controls", label: "Controls" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const panelContentRef = useRef<HTMLDivElement>(null);
  const [panelHeight, setPanelHeight] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Auto-close the mobile menu the moment the page scrolls, instead of trying to lock
  // background scrolling. Locking scroll (e.g. via body { overflow: hidden } or position: fixed)
  // sounds nice but resets window.scrollY as a side effect in most browsers — which made the
  // header's "scrolled" background flicker transparent while the menu was open, and made the
  // page visibly flash back to the top when closing it. Closing on scroll avoids touching the
  // document's scroll position entirely, so none of that ever happens.
  useEffect(() => {
    if (!open) return;
    const closeOnScroll = () => setOpen(false);
    window.addEventListener("scroll", closeOnScroll, { passive: true });
    return () => window.removeEventListener("scroll", closeOnScroll);
  }, [open]);

  // Measure the real height of the menu's content (nav links + button, including its bottom
  // shadow) so the panel's max-height always matches exactly — nothing gets clipped, and it
  // still animates smoothly since we transition max-height between 0 and this measured value.
  useLayoutEffect(() => {
    const node = panelContentRef.current;
    if (!node) return;
    const measure = () => setPanelHeight(node.offsetHeight);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 relative ${
        scrolled ? "border-border bg-background/92 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      {/* Reading-progress bar — a small, purposeful signal of how far down the page you are. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-transparent">
        <div className="scroll-progress h-full" style={{ width: `${progress}%` }} aria-hidden="true" />
      </div>

      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 py-3">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={art.logo}
            alt="Trash Collector Game icon"
            width={40}
            height={40}
            className="h-10 w-10 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-0.5 group-hover:rotate-6"
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg text-foreground">Trash Collector</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={"end" in l ? l.end : false}
              className={({ isActive }) =>
                `font-display px-3 py-2 text-base transition-colors hover:text-foreground ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`
              }
            >
              {({ isActive }) => (
                <span data-active={isActive} className="tab-underline">
                  {l.label}
                </span>
              )}
            </NavLink>
          ))}
          <Magnetic strength={0.25} className="ml-3">
            <Link to="/download" className="btn-pixel !px-4 !py-2 !text-sm">
              <IconDownload width={16} height={16} />
              Play
            </Link>
          </Magnetic>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="pixel-box flex h-10 w-10 items-center justify-center text-foreground transition-transform duration-150 active:scale-90 lg:hidden"
        >
          <span
            className="grid transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
            style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)" }}
          >
            {open ? <IconClose width={18} height={18} /> : <IconMenu width={18} height={18} />}
          </span>
        </button>
      </div>

      {/* Mobile menu — floats as an overlay anchored to the bottom of the header instead of
          living in normal document flow, so opening it never pushes the page content behind it
          down. It stays mounted and just fades + slides in/out for a light, smooth feel. */}
      <div
        data-open={open}
        aria-hidden={!open}
        className="absolute inset-x-0 top-full z-40 overflow-hidden border-t lg:hidden"
        style={{
          borderColor: open ? "var(--color-border)" : "transparent",
          background: "var(--color-background)",
          boxShadow: open ? "0 16px 32px -16px oklch(0 0 0 / 45%)" : "none",
          maxHeight: open ? `${panelHeight}px` : "0px",
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0)" : "translateY(-6px)",
          pointerEvents: open ? "auto" : "none",
          transition:
            "max-height 320ms var(--ease-out-expo), opacity 220ms ease, transform 260ms var(--ease-out-expo), border-color 300ms ease, box-shadow 300ms ease",
        }}
      >
        <nav ref={panelContentRef} className="mx-auto flex max-w-6xl flex-col px-5 pt-3 pb-5">
          {links.map((l, i) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={"end" in l ? l.end : false}
              onClick={() => setOpen(false)}
              style={{
                transitionProperty: "opacity, transform",
                transitionDuration: "260ms",
                transitionTimingFunction: "var(--ease-out-expo)",
                transitionDelay: open ? `${i * 40}ms` : "0ms",
                opacity: open ? 1 : 0,
                transform: open ? "translateX(0)" : "translateX(-8px)",
              }}
              className={({ isActive }) =>
                `font-display border-b border-border/60 py-3 text-lg last:border-0 ${
                  isActive ? "text-primary" : "text-foreground"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/download"
            onClick={() => setOpen(false)}
            className="btn-pixel mt-4 mb-2 !text-sm justify-center"
          >
            <IconDownload width={16} height={16} />
            Download &amp; Play
          </Link>
        </nav>
      </div>
    </header>
  );
}