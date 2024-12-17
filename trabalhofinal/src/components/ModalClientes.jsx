import { useForm } from 'react-hook-form';
import { toast } from 'sonner';



export function ModalClientes({ clientes, setClientes, editado, setEditado, setOpen }) {
  const { register, handleSubmit } = useForm({
    values: editado,
  })

  async function cadastrarCliente(info) {
    const novo = {
      nome: info.nome,
      telefone: info.telefone,
      aniversario: info.aniversario,
      observacoes: info.observacoes
    }
    const response = await fetch("http://localhost:3000/clientes", {
      method: "POST",
      body: JSON.stringify(novo)
    })
    const jsonResponse = await response.json()
    const clientes2 = [...clientes, jsonResponse]
    setClientes(clientes2)
    setOpen(false)
    toast.success(`${novo.nome} adicionado a lista de Clientes!`)
  }

  async function editarCliente(info) {
    const novo = {
      nome: info.nome,
      telefone: info.telefone,
      aniversario: info.aniversario,
      observacoes: info.observacoes
    }
    const response = await fetch(`http://localhost:3000/clientes/${editado.id}`, {
      method: "PUT",
      body: JSON.stringify(novo)
    })
    const jsonResponse = await response.json()
    const clienteEditado = clientes.map(function (cliente) {
      if (cliente.id == editado.id) {
        return jsonResponse
      } else {
        return cliente
      }
    })
    setClientes(clienteEditado)
    setEditado()
    setOpen(false)
    toast.success(`Dados do cliente ${novo.nome} foram editados com Sucesso!`)
  }

  return (
    <>
      <form onSubmit={handleSubmit(editado ? editarCliente : cadastrarCliente)}>
        <h2 className='titulo'>{editado ? "Editar" : "Cadastrar"} Cliente</h2>
        <div className='formulario'>
          <div className="inputs">
            <input type="text" placeholder='Nome do Cliente' required {...register("nome")} />
          </div>
          <div className="inputs">
            <input type="tel" placeholder='Telefone do Cliente' required {...register("telefone")} />
          </div>
          <div className='inputs'>
            <input type="date" placeholder='Data de nascimento' required {...register("aniversario")} />
          </div>
          <div className="inputs">
            <input type="text" placeholder='Observações' {...register("observacoes")} />
          </div>
        </div>
        <div className="botoes">
          <button type="submit">{editado ? "Editar" : "Adicionar"} Cliente</button>
        </div>
      </form>
    </>
  )
}
