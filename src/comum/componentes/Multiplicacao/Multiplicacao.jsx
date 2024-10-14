import './Multiplicacao.css';

const Multiplicacao = ({ num1, num2 }) => {
    const multi = num1 * num2

    return (
        <>
            <div className='multiplicacao_root'>{num1} x {num2} = {multi}</div>
        </>
    );
};

export default Multiplicacao;