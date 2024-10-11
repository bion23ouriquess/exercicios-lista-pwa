import './MesAtual.css';

function MesAtual () {
    const mesAtual = new Date().getMonth();
    return(
        <>
        <div className="mes_atual_root">{mesAtual}</div>
        </>
    )
}

export default MesAtual;