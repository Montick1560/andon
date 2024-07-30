import React from "react";
import s from "../../css/sidebar.module.css";

export function Sidebar() {
  return (
    <nav className={s.sideBarApp}>
      <header className={s.headerTotal}>
        <img className={s.imgInoac} src="public/img/INOACLOGOw.png"></img>
      </header>
      <div className={s.barraAzul}></div>
      <section className={s.moldeActual}>
       <img className={s.imgBotonEstado} src='public/img/botonGris.png'></img> 
       <h1>Esperando molde...</h1>
      </section>
      <section className={s.relojTiempo}>
        <img className={s.imgReloj} src="public/img/reloj.png"></img>
        <h1>10:26:26 p.m</h1>
      </section>
      <section className={s.bottom}>
        <button className={s.buttonAjustes}>AJUSTES</button>
      </section>
      <div className={s.barraAzul}></div>
      <section className={s.headerTotal}>
        <img className={s.imgInoac} src="public/img/baacc.png"></img>
      </section>
    </nav>
  );
}
