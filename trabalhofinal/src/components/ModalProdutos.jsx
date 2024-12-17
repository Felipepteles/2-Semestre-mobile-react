import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

export function ModalProdutos({ produtos, setProdutos, editado, setEditado, setOpen }) {
  const { register, handleSubmit} = useForm({
    values: editado
  })

  async function cadastrarProduto(info) {
    const novo = {
      nome: info.nome,
      quantidade: info.quantidade,
      observacoes: info.observacoes
    }
    const response = await fetch("http://localhost:3000/produtos", {
      method: "POST",
      body: JSON.stringify(novo)
    })
    const jsonResponse = await response.json()
    const produtos2 = [...produtos, jsonResponse]
    setProdutos(produtos2)
    setOpen(false)
    toast.success(`O ${novo.nome} foi adicionado a sua lista de Produtos!`)
  }

  async function editarProduto(info) {
    const novo = {
      nome: info.nome,
      quantidade: info.quantidade,
      observacoes: info.observacoes
    }
    const response = await fetch(`http://localhost:3000/produtos/${editado.id}`, {
      method: "PUT",
      body: JSON.stringify(novo)
    })
    const jsonResponse = await response.json()
    const produtoEditado = produtos.map(function (produto) {
      if (produto.id == editado.id) {
        return jsonResponse
      } else {
        return produto
      }
    })
    setProdutos(produtoEditado)
    setEditado()
    setOpen(false)
    toast.success(`Os dados do ${novo.nome} foram editados com Sucesso!`)
  }

  return (
    <>
      <form onSubmit={handleSubmit(editado ? editarProduto : cadastrarProduto)}>
        <h2 className='titulo'>{editado ? "Editar" : "Cadastrar"} Produto</h2>
        <div className='formulario'>
          <div className='inputs'>
            <input type="text" placeholder='Nome do Produto' required {...register("nome")} />
          </div>
          <div className='inputs'>
            <input type="number" placeholder='Quantidade em estoque' required {...register("quantidade")} />
          </div>
          <div className='inputs'>
            <input type="text" placeholder='Observações' {...register("observacoes")} />
          </div>
        </div>
        <div className='botoes'>
          <button type='submit'>{editado ? "Editar" : "Adicionar"} Produto</button>
        </div>
      </form>
    </>
  )
}