import './AnoAtual.css';

function AnoAtual () {

    const anoAtual = new Date().getFullYear();
    
    return(
        <>
        <div className='ano_atual_root'>{anoAtual}</div>
        </>
    );

};

export default AnoAtual;