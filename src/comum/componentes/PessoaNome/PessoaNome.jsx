import './PessoaNome.css'

const PessoaNome = (nome) => {
    nome = 'Gabriel'
    return (
        <> 
        <div className='pessoa-nome_root'> Olá, {nome}!</div>
        </>
    )
}

export default PessoaNome; 