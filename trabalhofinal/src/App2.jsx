import './App2.css'
import { useState, useEffect } from 'react'
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css'
import { Titulo } from './components/Titulo'
import { Footer } from './components/Footer'
import { ModalAgenda } from './components/ModalAgenda';
import { ListaAgenda } from './components/ListaAgenda';



function App2() {
  const [data, setData] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [agendas, setAgendas] = useState([]);

  useEffect(() => {
    async function getAgendas() {
      const response = await fetch("http://localhost:3000/agendas")
      const agendas2 = await response.json()
      setAgendas(agendas2)
    }
    getAgendas()
    // if (localStorage.getItem("agendas")) {
    //   const agendas2 = JSON.parse(localStorage.getItem("agendas"))
    //   setAgendas(agendas2)
    // }
  }, [])

  const meusMeses = {
    0: "Janeiro",
    1: "Fevereiro",
    2: "Março",
    3: "Abril",
    4: "Maio",
    5: "Junho",
    6: "Julho",
    7: "Agosto",
    8: "Setembro",
    9: "Outubro",
    10: "Novembro",
    11: "Dezembro"
  }

  const diaDaSemamana = {
    0: "Domingo",
    1: "Segunda-Feira",
    2: "Terça-Feira",
    3: "Quarta-Feira",
    4: "Quinta-Feira",
    5: "Sexta-Feira",
    6: "Sábado"
  }


  function onClickMesAnterior() {
    const mesAtual = data.getMonth()
    data.setMonth(mesAtual - 1)
    setData(new Date(data))
  }

  function onClickMesProximo() {
    const mesAtual = data.getMonth()
    data.setMonth(mesAtual + 1)
    setData(new Date(data))
  }

  function onClickDiaAnterior() {
    const diaAtual = data.getDate()
    data.setDate(diaAtual - 1)
    setData(new Date(data))
  }

  function onClickDiaProximo() {
    const diaAtual = data.getDate()
    data.setDate(diaAtual + 1)
    setData(new Date(data))
  }

  return (
    <>
      <header>
          <Titulo />
      </header>
      <main className='main__flor'>
      <div className="mes">
          <img className='setas' onClick={onClickMesAnterior} src="./setamesesquerda.png" alt="" />
          <h3>{meusMeses[data.getMonth()]}</h3>
          <img className='setas' onClick={onClickMesProximo} src="./setamesdireita.png" alt="" />
        </div>
        <div className='dia__container'>
          <img className='setas' onClick={onClickDiaAnterior} src="./setamesesquerda.png" alt="" />
          <div className='dia'>
            <h1>{data.getDate()}</h1>
            <h3>{diaDaSemamana[data.getDay()]}</h3>
          </div>
          <img className='setas' onClick={onClickDiaProximo} src="./setamesdireita.png" alt="" />
        </div>
        <div>
          <ListaAgenda
            key={agendas.nome}
            agendas={agendas}
            data={data}
            setData={setData}
            setOpen={setOpen}
            setAgendas={setAgendas} />
        </div>
      </main>
      <Modal  classNames={{root:"modal__flor"}} open={open} onClose={() => setOpen(false)} center>
        <ModalAgenda  data={data} agendas={agendas} setAgendas={setAgendas} setOpen={setOpen} />
      </Modal>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App2
