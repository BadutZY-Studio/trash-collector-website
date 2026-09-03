import { useRef, type MouseEvent } from "react";

/**
 * Tracks the pointer position inside an element and writes it straight to the DOM
 * as `--mx` / `--my` CSS custom properties (no React re-render on every mouse move).
 * Pair the returned `ref` + `onMouseMove` with the `.spotlight` utility class in
 * styles.css to get a soft cursor-following glow on cards and panels.
 */
export function useSpotlight<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  const onMouseMove = (e: MouseEvent<T>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--mx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
    node.style.setProperty("--my", `${((e.clientY - rect.top) / rect.height) * 100}%`);
  };

  return { ref, onMouseMove };
}