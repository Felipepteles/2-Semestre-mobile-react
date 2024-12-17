import './ListaClientes.css';
import { toast } from 'sonner';
import { TelaVazia } from './TelaVazia';

export function ListaClientes({ clientes, setClientes, setOpen, setEditado, pesquisa }) {

  function excluirCliente(id) {
    const clienteAtualizado = clientes.filter(function (cliente) {
      if (id == cliente.id) {
        return false
      } else {
        return true
      }
    })
    setClientes(clienteAtualizado)
    fetch(`http://localhost:3000/clientes/${id}`, {
      method: "DELETE"
    })
    toast.error("Cliente Removido")
  }

  function editarCliente(cliente) {
    setOpen(true)
    setEditado(cliente)
  }

  function avisaAniversario(aniversario) {
    const dataAtual = new Date()
    const dataAniversario = new Date(aniversario)
    return dataAtual.getMonth() == dataAniversario.getMonth()
  }

  const lista = clientes.filter(function (cliente) {
    if (cliente.nome.toUpperCase().includes(pesquisa.toUpperCase()) || pesquisa.length == 0) {
      return true
    } else {
      return false
    }
  })

  return (
    <>
      <main className="main__flor">
      {clientes.length >= 1 ?
        <div className='container'>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nome Completo</th>
                <th>Telefone</th>
                <th>Data de Aniversario</th>
                <th>Observações</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {lista.map(function (listagem, index) {
                return (
                  <tr key={listagem.id}>
                    <td>{index}</td>
                    <td>{listagem.nome}</td>
                    <td>{listagem.telefone}</td>
                    <td>{listagem.aniversario} {avisaAniversario(listagem.aniversario) && <img className='bolo' src="./bolo.png" alt="" data-tooltip-id="my-tooltip" data-tooltip-content="Aviso, aniversario!!" />}</td>
                    <td>{listagem.observacoes}</td>
                    <td><div className='icones'>
                      <img className='icon' src="./lixo.png" onClick={() => excluirCliente(listagem.id)} alt="" />
                      <img className='icon' src="./lapis.png" onClick={() => editarCliente(listagem)} alt="" />
                    </div></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        :
        <TelaVazia
          titulo="Você não possui nenhum Cliente cadastrado"
          descricao="Para adicionar um novo Cliente, basta clicar no botão Adicionar"
        />
      }

      </main>
    </>
  )
}

