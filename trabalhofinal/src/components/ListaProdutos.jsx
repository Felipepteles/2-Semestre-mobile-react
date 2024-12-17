import './ListaProdutos.css';
import { toast } from 'sonner';
import { TelaVazia } from './TelaVazia';



export function ListaProdutos({ produtos, setProdutos, setOpen, setEditado, pesquisa }) {

  function excluirProduto(id) {
    const produtoAtualizado = produtos.filter(function (produto) {
      if (id == produto.id) {
        return false
      } else {
        return true
      }
    })
    setProdutos(produtoAtualizado)
    fetch(`http://localhost:3000/produtos/${id}`, {
      method: "DELETE"
    })
    toast.error("Produto Removido")
  }

  function editarProduto(produto) {
    setOpen(true)
    setEditado(produto)
  }

  function adicionaProduto(produto) {
    editar({ id: produto.id, nome: produto.nome, quantidade: Number(produto.quantidade) + 1, observacoes: produto.observacoes })

  }

  function removeProduto(produto) {
    if (produto.quantidade < 1) {
      toast.error("Produto Esgotado")
      return
    }
    editar({ id: produto.id, nome: produto.nome, quantidade: Number(produto.quantidade) - 1, observacoes: produto.observacoes })
  }

  async function editar(info) {
    const novo = {
      nome: info.nome,
      quantidade: info.quantidade,
      observacoes: info.observacoes
    }
    const response = await fetch(`http://localhost:3000/produtos/${info.id}`, {
      method: "PUT",
      body: JSON.stringify(novo)
    })
    const jsonResponse = await response.json()
    const produtoEditado = produtos.map(function (produto) {
      if (produto.id == info.id) {
        return jsonResponse
      } else {
        return produto
      }
    })
    setProdutos(produtoEditado)
  }

    const lista = produtos.filter(function (produto){
      if(produto.nome.toUpperCase().includes(pesquisa.toUpperCase()) || pesquisa.length == 0){
        return true
      }else{
        return false
      }
    })

  return (
    <>
      <main className="main__flor">
      {produtos.length >= 1 ?
        <div className='container'>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Produto</th>
                <th>Quantidade</th>
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
                    <td>
                      <div className='quantidade'>
                        <div className='texto__quantidade'>
                          {listagem.quantidade} {(listagem.quantidade < 5) && <img className='bolo' src="./aviso.png" alt="" data-tooltip-id="my-tooltip" data-tooltip-content="Aviso, repor estoque" />}
                        </div>
                        <div>
                          <img className='icon2' src="./mais.png" onClick={() => adicionaProduto(listagem)} alt="" />
                          <img className='icon2' src="./menos.png" onClick={() => removeProduto(listagem)} alt="" />
                        </div>
                      </div>
                    </td>
                    <td>{listagem.observacoes}</td>
                    <td><div className='icones'>
                      <img className='icon' src="./lixo.png" onClick={() => excluirProduto(listagem.id)} alt="" />
                      <img className='icon' src="./lapis.png" onClick={() => editarProduto(listagem)} alt="" />
                    </div></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        :
        <TelaVazia
          titulo="Você não possui nenhum Produto cadastrado"
          descricao="Para adicionar um novo Produto, basta clicar no botão Adicionar"
        />
      }
      </main>
    </>
  )
}