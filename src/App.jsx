import './App.css';
import OlaMundo from './comum/componentes/OlaMundo/OlaMundo';
import DiaAtual from './comum/componentes/DiaAtual/DiaAtual';
import MesAtual from './comum/componentes/MesAtual/MesAtual';
import AnoAtual from './comum/componentes/AnoAtual/AnoAtual';
import HoraAtual from './comum/componentes/HoraAtual/HoraAtual';
import MinutoAtual from './comum/componentes/MinutoAtual/MinutoAtual';
import DataCompletaAtual from './comum/componentes/DataCompletaAtual/DataCompletaAtual';




function App() {
  return (
    <>
      <span> 1. Crie um componente chamado 'OlaMundo' que mostra uma mensagem: "Olá,
        Mundo!!" em uma div com o fundo vermelho, texto centralizado na cor
        azul.
      </span>
      <OlaMundo />
      <hr />

      <span> 2. Crie um componente chamado 'DiaAtual' que mostra o texto: "15" em uma
        div redonda com o fundo azul, texto centralizado na cor branco.
      </span>
      <DiaAtual />
      <hr />

      <span> 3. Crie um componente chamado 'MesAtual' que mostra o texto:
        "03" em uma div com o fundo verde, texto justificado à esquerda na cor branco.
      </span>
      <MesAtual />
      <hr />

      <span> 4. Crie um componente chamado 'AnoAtual' que mostra o texto:
        "2024" em uma div com o fundo vermelho, justificado à direita na cor amarelo.
      </span>
      <AnoAtual />
      <hr />

      <span> 5. Crie um componente chamado 'HoraAtual' que mostra o texto:
        "20" em uma div redonda 50x50 px centralizada com o fundo azul, texto na cor
        amarelo.
      </span>
      <HoraAtual />
      <hr />

      <span> 6. Crie um componente chamado 'MinutoAtual' que mostra o texto:
        "30" em uma div redonda 50x50 px centralizada com o fundo rosa, texto na cor
        preta.
      </span>
      <MinutoAtual />
      <hr />

      <span> 7. Crie um componente chamado 'DataCompletaAtual' que mostra o texto:
        "15/03/2024 20:30" em uma div com o fundo marrom, texto centralizado na cor
        branca.
      </span>
      <DataCompletaAtual />
      <hr />

      <span> 8. Crie um componente chamado 'OlaPessoa' que aceita uma prop chamada 'nome'
        e mostra o texto:
        "Olá, [nome]!" em uma div com o fundo laranja, texto centralizado na cor branca
      </span>
      
      <hr />
    </>
  );
}

export default App;
