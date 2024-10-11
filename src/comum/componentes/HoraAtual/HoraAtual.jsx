import './HoraAtual.css';

function HoraAtual(){
    const horaAtual = new Date().getHours();

    return(
    <>
    <div className='hora_atual_root'>{horaAtual}</div>
    </>
    );
};

export default HoraAtual; 