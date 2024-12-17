import { Footer } from "./components/Footer";
import { Titulo } from "./components/Titulo";
import './Clientes.css'
import { useEffect, useState } from "react";
import Modal from "react-responsive-modal";
import { ModalClientes } from "./components/ModalClientes";
import { ListaClientes } from "./components/ListaClientes";
import { useForm } from "react-hook-form";

export function Clientes() {
  const [clientes, setClientes] = useState([]);
  const [open, setOpen] = useState(false);
  const [editado, setEditado] = useState()
  const { register, watch } = useForm()

  useEffect(() => {
    async function getClientes() {
      const response = await fetch("http://localhost:3000/clientes")
      const clientes2 = await response.json()
      setClientes(clientes2)
    }
    getClientes()
  }, [])

  function abrirModal() {
    setOpen(true)
  }



  return (
    <>
      <header>
        <Titulo />
      </header>
      <main className="main__flor">
        <div className="titulo__clientes">
          <h3>Gerenciamento de Clientes</h3>
        </div>
        <div className="container__form">
          <div className="form">
          <input type="text" {...register("pesquisa")} placeholder="Pesquisar Cliente"/>
          </div>
          <div className="adicionar">
          <a onClick={() => abrirModal()}>Adicionar</a>
          <img onClick={() => abrirModal()} src="./imgmais.svg" alt="" />
          </div>
        </div>
        <div>
          <ListaClientes
            key={clientes.id}
            clientes={clientes}
            setClientes={setClientes}
            open={open}
            setOpen={setOpen}
            editado={editado}
            setEditado={setEditado}
            pesquisa={watch("pesquisa")}
          />
        </div>
      </main>
      <Modal classNames={{root:"modal__flor"}} open={open} onClose={() => {
        setOpen(false)
        setEditado()
      }} center>
        <ModalClientes  clientes={clientes} setClientes={setClientes} editado={editado} setEditado={setEditado} setOpen={setOpen} />
      </Modal>
      <footer>
        <Footer />
      </footer>
    </>
  )
}