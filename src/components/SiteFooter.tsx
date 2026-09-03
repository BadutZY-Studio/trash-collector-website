import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { art, GAME } from "@/lib/game-data";
import {
  IconChevronDown,
  IconGithub,
  IconInstagram,
  IconTiktok,
  IconWorld,
  IconX,
  IconYoutube,
} from "@/components/icons";

const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/characters", label: "Characters" },
  { to: "/maps", label: "World" },
  { to: "/trash", label: "Trash" },
  { to: "/gameplay", label: "Gameplay" },
  { to: "/controls", label: "Controls" },
  { to: "/changelog", label: "Changelog" },
  { to: "/download", label: "Download" },
] as const;

// TODO: replace "#" with BadutZY's real account/social media URL.
const socialLinks = [
  // { label: "YouTube", href: "https://www.youtube.com/@badutzy", Icon: IconYoutube },
  // { label: "Instagram", href: "https://www.instagram.com/rzky.mp_36", Icon: IconInstagram },
  // { label: "X", href: "https://x.com/BadutZYY_", Icon: IconX },
  // { label: "TikTok", href: "https://www.tiktok.com/@badutzy._", Icon: IconTiktok },
  { label: "GitHub", href: "https://github.com/BadutZY", Icon: IconGithub },
  { label: "Website", href: "https://badutzy.vercel.app/", Icon: IconWorld },
] as const;

export function SiteFooter() {
  const [showTop, setShowTop] = useState(false);
  const year = new Date().getFullYear();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative mt-24 border-t border-border bg-surface">
      <div
        className="h-6 w-full opacity-70"
        style={{ backgroundImage: `url(${art.grass})`, backgroundSize: "32px 32px" }}
        aria-hidden="true"
      />

      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-5 py-10 text-center">
        <div className="flex flex-col items-center gap-2">
          <img src={art.logo} alt="" width={36} height={36} className="h-9 w-9" />
          <p className="font-display text-base text-foreground">{GAME.name}</p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          {footerLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `transition-colors hover:text-primary ${isActive ? "text-primary" : ""}`
              }
            >
              {({ isActive }) => (
                <span data-active={isActive} className="tab-underline px-0.5 py-0.5">
                  {l.label}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={label}
              title={label}
              className="pixel-box pixel-box-lift flex h-10 w-10 items-center justify-center text-muted-foreground transition-colors hover:text-primary"
            >
              <Icon width={18} height={18} />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-border/60 px-5 py-5">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 text-center text-xs text-muted-foreground">
          <p>
            &copy; {year} {GAME.name}. All rights reserved.
          </p>
          <p>
            Made by
            <a href="https://badutzy.vercel.app">
              <span className="text-foreground"> BadutZY</span>
            </a>
          </p>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top of page"
            className="pixel-box pixel-box-lift mt-1 flex shrink-0 items-center gap-2 px-3 py-2 text-[10px] tracking-widest text-muted-foreground uppercase transition-[opacity,transform] duration-300"
            style={{
              opacity: showTop ? 1 : 0,
              transform: showTop ? "translateY(0)" : "translateY(8px)",
              pointerEvents: showTop ? "auto" : "none",
            }}
          >
            <IconChevronDown width={12} height={12} className="rotate-180" />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}