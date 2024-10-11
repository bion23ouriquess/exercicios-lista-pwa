import './DataCompletaAtual.css';

function DataCompletaAtual (){

    const agora = new Date();
    const ano = agora.getFullYear();

    let dia = agora.getDate();
    dia = dia.toString().padStart(2, '0');
  
    let mes = agora.getMonth() + 1;
    mes = mes.toString().padStart(2, '0');
    
    let hora = agora.getHours();
    
    let minutos = agora.getMinutes();
    minutos = minutos.toString().padStart(2, '0');

    let segundos = agora.getSeconds();
    segundos = segundos.toString().padStart(2, '0');
    
    return(
        <>
        <div className='data_completa_root'>{dia}/{mes}/{ano} - {hora}:{minutos}:{segundos}</div>
        </>
    );

};

export default DataCompletaAtual;