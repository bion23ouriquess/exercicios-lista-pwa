import './Calculadora.css';

const Calculadora = ({ num1, num2, operacao }) => {

    switch (operacao) {

        case operacao = '+':
            let soma = num1 + num2
            return (
                <>
                    <div className='calculadora_root'>{num1} + {num2} = {soma}</div></>
            );
        break
        case operacao =  '-':
            let sub = num1 - num2
            return (
                <>
                    <div className='calculadora_root'>{num1} - {num2} = {sub}</div></>
            );
        break
        case operacao =  '*':
            let multi = num1 * num2
            return (
                <>
                    <div className='calculadora_root'>{num1} x {num2} = {multi}</div></>
            );
        break
        case operacao = '/':
            let div = num1 / num2
            return (
                <>
                    <div className='calculadora_root'>{num1} / {num2} = {div}</div></>
            );
        break

        default:
            return(
                <>
                <div className='calculadora_root'>Operação Inválida</div></>
            )

    };

};

export default Calculadora;