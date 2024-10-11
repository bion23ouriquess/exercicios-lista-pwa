import './ListaProdutos.css'

const ListaProdutos = () => {

    const produtos = [
        'Celular Samsung',
        'Notebook Acer',
        'Smart TV LG',
        'Impressora HP',
        'Tablet Multilaser',
        'Monitor Dell'
    ];

    return (
        <>
        <div className="lista-produtos_root">
            <ul>
                {produtos.map((produtos, index) => (
                    <li key={index}>{produtos}</li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default ListaProdutos;