import type { MapTheme } from "@/lib/game-data";
import { trashTypes } from "@/lib/game-data";

export function BiomeScene({ map, floatItems = true }: { map: MapTheme; floatItems?: boolean }) {
  return (
    <div
      className="group relative h-52 w-full overflow-hidden md:h-64"
      style={{ background: `linear-gradient(180deg, ${map.tone}22 0%, ${map.tone}55 100%)` }}
    >
      <div className="absolute inset-0 transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.04]">
        <img
          src={map.scene.cloud}
          alt=""
          className="absolute top-3 h-8 opacity-60"
          style={{ animation: "drift 32s linear infinite" }}
          aria-hidden="true"
        />
        <img
          src={map.scene.cloudB}
          alt=""
          className="absolute top-10 h-6 opacity-40"
          style={{ animation: "drift 48s linear infinite", animationDelay: "-14s" }}
          aria-hidden="true"
        />

        <div
          className="absolute inset-x-0 bottom-14 h-28 opacity-50"
          style={{ backgroundImage: `url(${map.scene.mountains})`, backgroundSize: "auto 100%", backgroundRepeat: "repeat-x" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-10 h-16 opacity-90"
          style={{ backgroundImage: `url(${map.scene.hill})`, backgroundSize: "auto 100%", backgroundRepeat: "repeat-x" }}
          aria-hidden="true"
        />

        {floatItems ? (
          <div className="pointer-events-none absolute inset-x-0 bottom-12 flex justify-around" aria-hidden="true">
            {trashTypes.slice(map.index % 3, (map.index % 3) + 4).map((t, j) => (
              <img
                key={t.name}
                src={t.src}
                alt=""
                className="anim-float h-7 w-7 drop-shadow"
                style={{ animationDelay: `${j * 0.3}s` }}
              />
            ))}
          </div>
        ) : null}

        <div className="absolute inset-x-0 bottom-0" aria-hidden="true">
          <div className="h-6" style={{ backgroundImage: `url(${map.scene.grass})`, backgroundSize: "24px 24px" }} />
          <div className="h-6" style={{ backgroundImage: `url(${map.scene.dirt})`, backgroundSize: "24px 24px" }} />
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-0 opacity-40 transition-opacity duration-500 group-hover:opacity-60"
        style={{ boxShadow: "inset 0 -30px 40px -20px oklch(0.1 0.03 265 / 70%)" }}
        aria-hidden="true"
      />
    </div>
  );
}