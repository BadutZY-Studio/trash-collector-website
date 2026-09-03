import { useState } from "react";
import { IconChevronDown } from "@/components/icons";

export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={item.q}
            className="px-1 py-1 transition-colors duration-300"
            style={{ background: isOpen ? "oklch(0.72 0.19 143 / 5%)" : "transparent" }}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="group flex w-full items-center justify-between gap-4 py-4 text-left"
            >
              <span
                className={`font-display text-base transition-colors duration-200 sm:text-lg ${
                  isOpen ? "text-primary" : "text-foreground"
                }`}
              >
                {item.q}
              </span>
              <IconChevronDown
                width={18}
                height={18}
                data-open={isOpen}
                className={`chevron-rotate shrink-0 transition-colors duration-200 ${
                  isOpen ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                }`}
              />
            </button>
            <div data-open={isOpen} className="accordion-panel">
              <div>
                <p className="pb-4 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}