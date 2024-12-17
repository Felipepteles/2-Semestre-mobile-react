import { useForm } from 'react-hook-form';
import './ModalAgenda.css';
import { toast } from 'sonner';

export function ModalAgenda({ agendas, setAgendas, data, setOpen }) {
  const { register, handleSubmit } = useForm()

  async function cadastrarServico(info) {
    const novo = {
      nome: info.nome,
      servico: info.servico,
      tempo: info.tempo,
      data: data?.toISOString()
    }
    const response = await fetch("http://localhost:3000/agendas", {
      method: "POST",
      body: JSON.stringify(novo)
    })
    const jsonResponse = await response.json()
    const agendas2 = [...agendas, jsonResponse]
    setAgendas(agendas2)
    setOpen(false)
    toast.success(`${novo.servico} adicionado para a cliente ${novo.nome}`)
  }
  return (
    <>
      <form onSubmit={handleSubmit(cadastrarServico)}>
        <h2 className='titulo'>Agendar Serviço</h2>
        <div className="formulario">
          <div className='inputs'>
            <input type="text" placeholder='Nome do Cliente' required {...register("nome")} />
          </div>
          <div className='inputs'>
            <input type="text" placeholder='Serviço Executado' required {...register("servico")} />
          </div>
          <div className='inputs'>
            <input type="number" max="60" placeholder='Tempo de duração em minutos' required {...register("tempo")} />
          </div>
        </div>
        <div className='botoes'>
          <button type="submit">Adicionar</button>
        </div>

      </form>
    </>
  )
}