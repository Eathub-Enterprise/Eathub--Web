import "./formpage.css";
import background from "../../Assets/images/formbackground.webp";
import { Link, Outlet } from "react-router-dom";
import { Suspense } from "react";
import Preloader from "../../layouts/Preloader/Preloader";

export default function Formpage() {
  return (
    <div className="Formpage">
      <div className="Formpage-main">
        <aside className="Formpage-img">
          <img loading="lazy" src={background} alt={background} />
        </aside>
        <aside className="Formpage-comp">
          <Suspense fallback={<Preloader />}>
            <Outlet />
          </Suspense>
        </aside>
      </div>
    </div>
  );
}
