import './Subtracao.css';

const Subtracao = ({num1, num2}) => {
    const sub = num1 - num2

    return(
        <>
        <div className='subtracao_root'>{num1} - {num2} = {sub}</div>
        </>
    );
};

export default Subtracao;