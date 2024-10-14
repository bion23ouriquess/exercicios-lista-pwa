import'./NumerosImpares.css';

const NumerosImpares = () => {

    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const impares = numeros.filter(numero => numero % 2 == 1);

        return (
            <>
                <div className='numeros-impares_root'>
                    <ul>
                        {impares.map((impares, index) => (
                            <li key={index}>{impares}</li>
                        ))}
                    </ul>
                </div>
            </>
        );

};

export default NumerosImpares;