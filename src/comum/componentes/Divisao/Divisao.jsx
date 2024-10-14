import './Divisao.css';

const Divisao = ({ num1, num2 }) => {
    const div = num1 / num2

    return (
        <>
            <div className='divisao_root'>{num1} / {num2} = {div}</div>
        </>
    );
};

export default Divisao;