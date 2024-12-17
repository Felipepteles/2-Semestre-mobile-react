import './TelaVazia.css';


export function TelaVazia({ titulo, descricao }) {
  return (
    <>
      <div className='container'>
        <div className='tela__texto'>
          <h3>{titulo}</h3>
          <p>{descricao}</p>
        </div>
        <div>
          <img className='seta' src="./seta.png" alt="" />
        </div>
      </div>

    </>
  )
}