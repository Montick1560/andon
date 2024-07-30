import React, { useEffect, useState } from "react";
import s from "../../css/sidebar.module.css";

export function Sidebar() {
  const [currentTime, setCurrentTime] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const date = new Date();
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");

      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    }, 1000);
  }, [currentTime]);

  return (
    <nav className={s.sideBarApp}>
      <header className={s.headerTotal}>
        <img className={s.imgInoac} src="public/img/INOACLOGOw.png"></img>
      </header>
      <div className={s.barraAzul}></div>
      <Molde/>
      <section className={s.relojTiempo}>
        <img className={s.imgReloj} src="public/img/reloj.png"></img>
        <h1>{currentTime}</h1>
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
function Molde(){
  const [statusMolde,setStatusMolde] = useState(null)
  return(
    <section className={s.moldeActual}>
    <img className={s.imgBotonEstado} src={statusMolde == 1 ? "public/img/botonGris.png": statusMolde == 2 ?"public/img/botonVerde.png":"public/img/botonRojo.png" }></img>
    <h1>Esperando molde...</h1>
  </section>
  )
}

