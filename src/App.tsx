import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "@/pages/Home";
import Characters from "@/pages/Characters";
import Maps from "@/pages/Maps";
import Trash from "@/pages/Trash";
import Gameplay from "@/pages/Gameplay";
import Controls from "@/pages/Controls";
import Download from "@/pages/Download";
import NotFound from "@/pages/NotFound";

/** Resets scroll position on every route change (plain SPA has no built-in behavior for this). */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="/gameplay" element={<Gameplay />} />
        <Route path="/controls" element={<Controls />} />
        <Route path="/download" element={<Download />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}