import React from "react";
import s from "../../css/sidebar.module.css";

export function Sidebar() {
  return (
    <nav className={s.sideBarApp}>
     <header className={s.headerTotal}>
       <img className={s.imgInoac} src="public/img/inoac.png"></img>
     </header>
     <section className={s.relojTiempo}>
     </section>
     <section className={s.bottom}>
     </section>
    </nav>
  );
}
