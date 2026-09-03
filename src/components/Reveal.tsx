import { useEffect, useRef, useState, type ReactNode } from "react";

const VARIANT_CLASS = {
  up: "reveal",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
} as const;

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  variant = "up",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
  /** Direction/style of the entrance animation. Defaults to "up" (rise + soften into focus). */
  variant?: keyof typeof VARIANT_CLASS;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${VARIANT_CLASS[variant]} ${className}`}
    >
      {children}
    </Tag>
  );
}