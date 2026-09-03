import { Link } from "react-router-dom";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { IconArrowRight } from "@/components/icons";
import { art } from "@/lib/game-data";
import { usePageMeta } from "@/lib/usePageMeta";

export default function NotFound() {
  usePageMeta("Page Not Found - Trash Collector Game");

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-5 py-24 text-center">
        <Reveal>
          <img src={art.bin} alt="" width={72} height={72} className="anim-bob mx-auto h-18 w-18" />
          <h1 className="font-display mt-6 text-6xl text-foreground">404</h1>
          <p className="mt-3 text-lg text-muted-foreground">
            This page seems to have already been collected and thrown into the trash bin.
          </p>
          <Link to="/" className="btn-pixel mt-8 inline-flex">
            Back to Home
            <IconArrowRight width={16} height={16} />
          </Link>
        </Reveal>
      </main>
      <SiteFooter />
    </div>
  );
}
