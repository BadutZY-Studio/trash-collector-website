import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "square" as const,
  strokeLinejoin: "miter" as const,
  width: 24,
  height: 24,
  "aria-hidden": true,
  focusable: false,
};

export function IconDownload(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v11" />
      <path d="M7 10l5 5 5-5" />
      <path d="M4 20h16" />
    </svg>
  );
}

export function IconPlay(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 4l12 8-12 8V4z" />
    </svg>
  );
}

export function IconWorld(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3a9 9 0 100 18 9 9 0 000-18z" />
      <path d="M3 12h18" />
      <path d="M12 3c3 3.5 3 14.5 0 18" />
      <path d="M12 3c-3 3.5-3 14.5 0 18" />
    </svg>
  );
}

export function IconCoinStack(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3z" />
      <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
      <path d="M4 7v10c0 1.7 3.6 3 8 3s8-1.3 8-3V7" />
    </svg>
  );
}

export function IconGamepad(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 17l2-9h14l2 9" />
      <path d="M7 12h4" />
      <path d="M9 10v4" />
      <path d="M16 11h.01" />
      <path d="M18 14h.01" />
      <path d="M3 17a2 2 0 004 0" />
      <path d="M17 17a2 2 0 004 0" />
    </svg>
  );
}

export function IconKeyboard(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2" y="6" width="20" height="12" />
      <path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M8 14h8" />
    </svg>
  );
}

export function IconMoonSun(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 4v2M12 18v2M4 12h2M18 12h2M6 6l1.5 1.5M16.5 16.5L18 18M18 6l-1.5 1.5M7.5 16.5L6 18" />
      <path d="M12 8a4 4 0 000 8 4 4 0 000-8z" />
    </svg>
  );
}

export function IconSave(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 4h13l3 3v13H4z" />
      <path d="M8 4v6h8V4" />
      <rect x="8" y="13" width="8" height="7" />
    </svg>
  );
}

export function IconLayers(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5" />
    </svg>
  );
}

export function IconSpark(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z" />
    </svg>
  );
}

export function IconMonitor(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4" width="18" height="12" />
      <path d="M8 20h8M12 16v4" />
    </svg>
  );
}

export function IconTerminal(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4" width="18" height="16" />
      <path d="M7 9l3 3-3 3M13 15h4" />
    </svg>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12h15" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconTrash(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16" />
      <path d="M9 7V4h6v3" />
      <path d="M6 7l1 13h10l1-13" />
      <path d="M10 11v6M14 11v6" />
    </svg>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IconClose(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 13l4 4 10-10" />
    </svg>
  );
}

export function IconLock(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="10" width="14" height="10" />
      <path d="M8 10V7a4 4 0 018 0v3" />
    </svg>
  );
}

export function IconHistory(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 12a9 9 0 1018 0 9 9 0 00-18 0z" />
      <path d="M12 7v5l3 3" />
      <path d="M3 12h2" />
    </svg>
  );
}

export function IconGitCommit(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M3 12h9M15 12h6" />
    </svg>
  );
}

export function IconChevronDown(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function IconSun(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

export function IconMoon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 14.5A8 8 0 119.5 4a6.5 6.5 0 0010.5 10.5z" />
    </svg>
  );
}

export function IconSliders(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h13M21 18h0" />
      <circle cx="16" cy="6" r="2" />
      <circle cx="10" cy="12" r="2" />
      <circle cx="19" cy="18" r="2" />
    </svg>
  );
}

export function IconTarget(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.5" />
    </svg>
  );
}

export function IconVolume(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 9h4l6-5v16l-6-5H4z" />
      <path d="M17 9c1.2 1 1.2 5 0 6" />
    </svg>
  );
}

export function IconDice(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="4" width="16" height="16" />
      <path d="M8 8h.01M16 8h.01M8 16h.01M16 16h.01M12 12h.01" />
    </svg>
  );
}

export function IconLeaf(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 4c-9 0-16 5-16 14 9 0 14-5 16-14z" />
      <path d="M6 18C10 12 14 9 20 4" />
    </svg>
  );
}

export function IconRecycle(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M10 4h4l2 4h-8l2-4z" />
      <path d="M18 8l3 5-3 5" />
      <path d="M20 18h-6l-2-4" />
      <path d="M8 18H5l3-5" />
      <path d="M6 9L3 14h6" />
    </svg>
  );
}

export function IconSeed(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21c-5-1-8-5-8-10a8 8 0 0116 0c0 5-3 9-8 10z" />
      <path d="M12 21V9" />
    </svg>
  );
}

/* ---------------------------------------------------------------------- */
/* Brand / social icons — official logo marks (filled), sourced from the   */
/* Simple Icons project (CC0). Kept separate from the outline icon set     */
/* above since brand marks must use their real shape, not a redrawn one.   */
/* ---------------------------------------------------------------------- */

const brand = {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  width: 20,
  height: 20,
  "aria-hidden": true,
  focusable: false,
};

export function IconYoutube(props: IconProps) {
  return (
    <svg {...brand} {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function IconInstagram(props: IconProps) {
  return (
    <svg {...brand} {...props}>
      <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
    </svg>
  );
}

export function IconX(props: IconProps) {
  return (
    <svg {...brand} {...props}>
      <path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z" />
    </svg>
  );
}

export function IconTiktok(props: IconProps) {
  return (
    <svg {...brand} {...props}>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

export function IconGithub(props: IconProps) {
  return (
    <svg {...brand} {...props}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}