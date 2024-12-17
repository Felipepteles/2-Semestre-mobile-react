import './ListaAgenda.css';
import { toast } from 'sonner';

export function ListaAgenda({ data, agendas, setData, setOpen, setAgendas }) {

  function abrirModal(hora) {
    data.setHours(hora)
    setData(new Date(data))
    setOpen(true)
  }

  function excluirItem(hora, id) {
    const agendaAtualizada = agendas.filter(function (agendamento) {
      const horarioAtendimento = new Date(agendamento.data)
      if (horarioAtendimento.getMonth() == data.getMonth() && horarioAtendimento.getDate() == data.getDate() && horarioAtendimento.getHours() == hora) {
        return false
      } else {
        return true
      }
    })
    setAgendas(agendaAtualizada)
    fetch(`http://localhost:3000/agendas/${id}`, {
      method: "DELETE"
    })
    // localStorage.setItem("agendas", JSON.stringify(agendaAtualizada))
    toast.error("Agendamento removido")
  }


  function verificaHorario(hora) {
    for (let i = 0; i < agendas.length; i++) {
      const horarioAtendimento = new Date(agendas[i].data)
      if (horarioAtendimento.getMonth() == data.getMonth() && horarioAtendimento.getDate() == data.getDate() && horarioAtendimento.getHours() == hora) {
        return agendas[i]
      }
    }
  }

  return (
    <>
      <div className='agenda'>
        <div className='horarios'>
          <h5>09:00</h5>
          {verificaHorario(9) &&
            <div className='agendado'>
              <div className='texto__agendado'>
                {verificaHorario(9).nome}
              </div>
              <p>-</p>
              <div className='texto__agendado'>
                {verificaHorario(9).servico}
              </div>
            </div>
          }
          <div className='horarios__botoes'>
            {verificaHorario(9) &&
              <img className='desktop' onClick={() => excluirItem(9, verificaHorario(9).id)} src="./imgmenos.svg" alt="" />
            }
            <img className='desktop' onClick={() => abrirModal(9)} src="./imgmais.svg" alt="" />
          </div>
        </div>
        <hr />
        <div className='horarios'>
          <h5>10:00</h5>
          {verificaHorario(10) &&
            <div className='agendado'>
              <div className='texto__agendado'>
                {verificaHorario(10).nome}
              </div>
              <p>-</p>
              <div className='texto__agendado'>
                {verificaHorario(10).servico}
              </div>
            </div>
          }
          <div className='horarios__botoes'>
            {verificaHorario(10) &&
              <img className='desktop' onClick={() => excluirItem(10, verificaHorario(10).id)} src="./imgmenos.svg" alt="" />
            }
            <img className='desktop' onClick={() => abrirModal(10)} src="./imgmais.svg" alt="" />
          </div>
        </div>
        <hr />
        <div className='horarios'>
          <h5>11:00</h5>
          {verificaHorario(11) &&
            <div className='agendado'>
              <div className='texto__agendado'>
                {verificaHorario(11).nome}
              </div>
              <p>-</p>
              <div className='texto__agendado'>
                {verificaHorario(11).servico}
              </div>
            </div>
          }
          <div className='horarios__botoes'>
            {verificaHorario(11) &&
              <img className='desktop' onClick={() => excluirItem(11, verificaHorario(11).id)} src="./imgmenos.svg" alt="" />
            }
            <img className='desktop' onClick={() => abrirModal(11)} src="./imgmais.svg" alt="" />
          </div>
        </div>
        <hr />
        <div className='horarios'>
          <h5>12:00</h5>
          {verificaHorario(12) &&
            <div className='agendado'>
              <div className='texto__agendado'>
                {verificaHorario(12).nome}
              </div>
              <p>-</p>
              <div className='texto__agendado'>
                {verificaHorario(12).servico}
              </div>
            </div>
          }
          <div className='horarios__botoes'>
            {verificaHorario(12) &&
              <img className='desktop' onClick={() => excluirItem(12, verificaHorario(12).id)} src="./imgmenos.svg" alt="" />
            }
            <img className='desktop' onClick={() => abrirModal(12)} src="./imgmais.svg" alt="" />
          </div>
        </div>
        <hr />
        <div className='horarios'>
          <h5>13:00</h5>
          {verificaHorario(13) &&
            <div className='agendado'>
              <div className='texto__agendado'>
                {verificaHorario(13).nome}
              </div>
              <p>-</p>
              <div className='texto__agendado'>
                {verificaHorario(13).servico}
              </div>
            </div>
          }
          <div className='horarios__botoes'>
            {verificaHorario(13) &&
              <img className='desktop' onClick={() => excluirItem(13, verificaHorario(13).id)} src="./imgmenos.svg" alt="" />
            }
            <img className='desktop' onClick={() => abrirModal(13)} src="./imgmais.svg" alt="" />
          </div>
        </div>
        <hr />
        <div className='horarios'>
          <h5>14:00</h5>
          {verificaHorario(14) &&
            <div className='agendado'>
              <div className='texto__agendado'>
                {verificaHorario(14).nome}
              </div>
              <p>-</p>
              <div className='texto__agendado'>
                {verificaHorario(14).servico}
              </div>
            </div>
          }
          <div className='horarios__botoes'>
            {verificaHorario(14) &&
              <img className='desktop' onClick={() => excluirItem(14, verificaHorario(14).id)} src="./imgmenos.svg" alt="" />
            }
            <img className='desktop' onClick={() => abrirModal(14)} src="./imgmais.svg" alt="" />
          </div>
        </div>
        <hr />
        <div className='horarios'>
          <h5>15:00</h5>
          {verificaHorario(15) &&
            <div className='agendado'>
              <div className='texto__agendado'>
                {verificaHorario(15).nome}
              </div>
              <p>-</p>
              <div className='texto__agendado'>
                {verificaHorario(15).servico}
              </div>
            </div>
          }
          <div className='horarios__botoes'>
            {verificaHorario(15) &&
              <img className='desktop' onClick={() => excluirItem(15, verificaHorario(15).id)} src="./imgmenos.svg" alt="" />
            }
            <img className='desktop' onClick={() => abrirModal(15)} src="./imgmais.svg" alt="" />
          </div>
        </div>
        <hr />
        <div className='horarios'>
          <h5>16:00</h5>
          {verificaHorario(16) &&
            <div className='agendado'>
              <div className='texto__agendado'>
                {verificaHorario(16).nome}
              </div>
              <p>-</p>
              <div className='texto__agendado'>
                {verificaHorario(16).servico}
              </div>
            </div>
          }
          <div className='horarios__botoes'>
            {verificaHorario(16) &&
              <img className='desktop' onClick={() => excluirItem(16, verificaHorario(16).id)} src="./imgmenos.svg" alt="" />
            }
            <img className='desktop' onClick={() => abrirModal(16)} src="./imgmais.svg" alt="" />
          </div>
        </div>
        <hr />
        <div className='horarios'>
          <h5>17:00</h5>
          {verificaHorario(17) &&
            <div className='agendado'>
              <div className='texto__agendado'>
                {verificaHorario(17).nome}
              </div>
              <p>-</p>
              <div className='texto__agendado'>
                {verificaHorario(17).servico}
              </div>
            </div>
          }
          <div className='horarios__botoes'>
            {verificaHorario(17) &&
              <img className='desktop' onClick={() => excluirItem(17, verificaHorario(17).id)} src="./imgmenos.svg" alt="" />
            }
            <img className='desktop' onClick={() => abrirModal(17)} src="./imgmais.svg" alt="" />
          </div>
        </div>
        <hr />
        <div className='horarios'>
          <h5>18:00</h5>
          {verificaHorario(18) &&
            <div className='agendado'>
              <div className='texto__agendado'>
                {verificaHorario(18).nome}
              </div>
              <p>-</p>
              <div className='texto__agendado'>
                {verificaHorario(18).servico}
              </div>
            </div>
          }
          <div className='horarios__botoes'>
            {verificaHorario(18) &&
              <img className='desktop' onClick={() => excluirItem(18, verificaHorario(18).id)} src="./imgmenos.svg" alt="" />
            }
            <img className='desktop' onClick={() => abrirModal(18)} src="./imgmais.svg" alt="" />
          </div>
        </div>
        <hr />
      </div>
    </>
  )
}