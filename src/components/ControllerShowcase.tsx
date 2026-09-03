import { useLayoutEffect, useRef, useState } from "react";
import { controllerBindings, controllerIcons } from "@/lib/game-data";
import { useSpotlight } from "@/lib/useSpotlight";

/**
 * Interactive Xbox / PlayStation icon-style switcher — mirrors the game's own
 * "Icon Style" controller setting, which forces button icons to a brand style.
 */
export function ControllerShowcase() {
  const [style, setStyle] = useState<"xbox" | "ps">("xbox");
  const icons = controllerIcons[style];
  const { ref, onMouseMove } = useSpotlight<HTMLDivElement>();

  const xboxRef = useRef<HTMLButtonElement>(null);
  const psRef = useRef<HTMLButtonElement>(null);
  // Measured in px rather than assumed as a 50/50 split, since "Xbox" and
  // "PlayStation" are very different lengths — the thumb must match each
  // button's real rendered width, or it drifts off the text (see bug report).
  const [thumb, setThumb] = useState({ left: 0, width: 0 });

  useLayoutEffect(() => {
    const el = style === "xbox" ? xboxRef.current : psRef.current;
    if (!el) return;

    const measure = () => setThumb({ left: el.offsetLeft, width: el.offsetWidth });
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(el);
    if (el.parentElement) observer.observe(el.parentElement);
    return () => observer.disconnect();
  }, [style]);

  return (
    <div ref={ref} onMouseMove={onMouseMove} className="pixel-box spotlight p-6 md:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
        <div>
          <span className="font-mono text-[11px] tracking-[0.25em] text-primary uppercase">Icon Style</span>
          <h3 className="font-display mt-1 text-xl text-foreground">Automatic Xbox &amp; PlayStation Detection</h3>
        </div>

        <div className="pixel-box relative flex overflow-hidden !p-0" role="tablist" aria-label="Controller icon style">
          {/* Sliding highlight behind the active option, instead of an instant color swap */}
          <span
            aria-hidden="true"
            className="segment-thumb absolute inset-y-0 left-0 bg-primary"
            style={{ width: thumb.width, transform: `translateX(${thumb.left}px)` }}
          />
          <button
            ref={xboxRef}
            type="button"
            role="tab"
            aria-selected={style === "xbox"}
            onClick={() => setStyle("xbox")}
            className={`font-mono relative z-10 px-4 py-2 text-center text-[11px] tracking-widest whitespace-nowrap uppercase transition-colors duration-200 ${
              style === "xbox" ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Xbox
          </button>
          <button
            ref={psRef}
            type="button"
            role="tab"
            aria-selected={style === "ps"}
            onClick={() => setStyle("ps")}
            className={`font-mono relative z-10 px-4 py-2 text-center text-[11px] tracking-widest whitespace-nowrap uppercase transition-colors duration-200 ${
              style === "ps" ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            PlayStation
          </button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {controllerBindings.map((b, i) => (
          <div
            key={`${style}-${b.icon}`}
            className="anim-pop-in flex flex-col items-center gap-2 border border-border bg-surface-2 p-3 text-center transition-transform duration-200 hover:-translate-y-1 hover:border-primary/50"
            style={{ animationDelay: `${i * 40}ms` }}
          >
            <img src={icons[b.icon]} alt={b.label} width={32} height={32} className="h-8 w-8" style={{ imageRendering: "pixelated" }} />
            <span className="font-mono text-[10px] tracking-wider text-accent uppercase">{b.label}</span>
            <span className="text-[11px] leading-tight text-muted-foreground">{b.action}</span>
          </div>
        ))}
      </div>
    </div>
  );
}