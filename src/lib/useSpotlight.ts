import { useRef, type MouseEvent } from "react";

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