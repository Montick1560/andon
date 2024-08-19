import s from '../../css/main.module.css'

export function Main() {
    return (
        <section className={s.mainContent}>
            <div className={s.divTiempos}>
                <h1 className={s.tipoTiempoTexto}>EN PRODUCCIÓN</h1>
                <h1 className={s.contadorTiempos}>00:00:00</h1>
            </div>
            <div className={s.contenedorTiempos}>
                <div className={s.tiempoProduccion}>
                    <h1 className={s.tProduccion} >00:00</h1>
                </div >
                <div className={s.tiempoMuerto}>
                    <h1 className={s.tMuerto}>00:00</h1>
                </div>
                <div className={s.tiempoFalla}>
                    <h1 className={s.tFalla}>00:00</h1>
                </div>
            </div>
        </section>
    )
}