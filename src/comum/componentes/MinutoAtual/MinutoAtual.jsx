import './MinutoAtual.css';

function MinutoAtual(){
    const agora = new Date().getMinutes();
    return(
    <>
    <div className="minuto_atual">{agora}</div>
    </>)
}

export default MinutoAtual;