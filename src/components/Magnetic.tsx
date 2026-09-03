import { useRef, type MouseEvent, type ReactNode } from "react";

/**
 * Wraps a button/link with a subtle magnetic pull toward the cursor — a small,
 * deliberate micro-interaction (not decoration on every element) reserved for the
 * page's primary calls to action. Resets smoothly on mouse leave.
 */
export function Magnetic({
  children,
  strength = 0.3,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    node.style.transform = `translate(${x}px, ${y}px)`;
  };

  const onMouseLeave = () => {
    ref.current?.style.setProperty("transform", "translate(0px, 0px)");
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`magnetic inline-block ${className}`}
    >
      {children}
    </div>
  );
}