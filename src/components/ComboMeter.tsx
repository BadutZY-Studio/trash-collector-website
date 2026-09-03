import { useEffect, useState } from "react";
import { comboChain } from "@/lib/game-data";
import { useSpotlight } from "@/lib/useSpotlight";

/** Animated bar chart that steps through the combo chain automatically, echoing the in-game combo meter. */
export function ComboMeter() {
  const [active, setActive] = useState(0);
  const { ref, onMouseMove } = useSpotlight<HTMLDivElement>();

  useEffect(() => {
    const id = setInterval(() => {
      setActive((v) => (v + 1) % (comboChain.length + 2));
    }, 550);
    return () => clearInterval(id);
  }, []);

  return (
    <div ref={ref} onMouseMove={onMouseMove} className="pixel-box spotlight p-6 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <span className="font-mono text-[11px] tracking-[0.25em] text-primary uppercase">Combo Chain</span>
          <h3 className="font-display mt-1 text-xl text-foreground">+8% per Level, Maximum +72%</h3>
        </div>
        <span className="font-mono border border-primary/40 bg-primary/12 px-2 py-1 text-[11px] tracking-wider text-primary uppercase">
          4-second Window
        </span>
      </div>

      <div className="mt-8 flex h-32 items-end gap-1.5 sm:gap-2">
        {comboChain.map((c, i) => {
          const isLit = i <= active;
          const isCurrent = i === active;
          return (
            <div key={c.chain} className="flex flex-1 flex-col items-center gap-2">
              <div
                className={`w-full origin-bottom border border-border transition-all duration-300 ease-[var(--ease-out-expo)] ${
                  isCurrent ? "anim-pulse-glow" : ""
                }`}
                style={{
                  height: `${18 + c.bonus * 1.05}px`,
                  background: isLit ? "var(--color-primary)" : "var(--color-surface-2)",
                  boxShadow: isLit ? "0 0 10px oklch(0.72 0.19 143 / 45%)" : "none",
                  transform: isCurrent ? "scaleY(1.04)" : "scaleY(1)",
                }}
              />
              <span className={`font-mono text-[9px] transition-colors duration-300 ${isCurrent ? "text-primary" : "text-muted-foreground"}`}>
                {c.chain}
              </span>
            </div>
          );
        })}
      </div>
      <p className="mt-4 text-center text-xs text-muted-foreground sm:text-sm">
        Collect trash without a pause longer than 4 seconds to keep the chain alive, each
        level adds 8% coins up to a cap of +72%.
      </p>
    </div>
  );
}