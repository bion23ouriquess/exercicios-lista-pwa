import './VerificarIdade.css';

const VerificarIdade = ({ idade }) => {
    const maiorIdade = 18

    if (idade >= maiorIdade) {

        return (
            <>
                <div className="maior-idade_root">{idade} anos, é maior de idade</div>
            </>
        )
    } else {
        return (
            <>
                <div className="menor-idade_root">{idade} anos, é menor de idade</div>
            </>
        )
    };

};

export default VerificarIdade;