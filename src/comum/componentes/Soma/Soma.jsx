import './Soma.css';

const Soma = ({num1, num2 }) => {
    const soma = num1 + num2
    return(
        <>
            <div className='soma_root'>{num1} + {num2} = {soma}</div>
        </>
    );
};

export default Soma;