import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { Titulo } from "./components/Titulo";
import './Produtos.css'
import { ListaProdutos } from "./components/ListaProdutos";
import { ModalProdutos } from "./components/ModalProdutos";
import Modal from "react-responsive-modal";
import { useForm } from "react-hook-form";

export function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [open, setOpen] = useState(false);
  const [editado, setEditado] = useState()
  const { register, watch } = useForm()

  useEffect(() => {
    async function getProdutos() {
      const response = await fetch("http://localhost:3000/produtos")
      const produtos2 = await response.json()
      setProdutos(produtos2)
    }
    getProdutos()
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
        <div className="titulo__produtos">
          <h3>Gerenciamento de Produtos</h3>
        </div>
        <div className="container__form">
          <div className="form">
            <input type="text" {...register("pesquisa")} placeholder="Pesquisar Produto" />
          </div>
          <div className="adicionar">
            <a onClick={() => abrirModal()}>Adicionar</a>
            <img onClick={() => abrirModal()} src="./imgmais.svg" alt="" />
          </div>
        </div>
        <div>
          <ListaProdutos
            key={produtos.id}
            produtos={produtos}
            setProdutos={setProdutos}
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
        <ModalProdutos
          produtos={produtos}
          setProdutos={setProdutos}
          editado={editado}
          setEditado={setEditado}
          setOpen={setOpen}
           />
      </Modal>
      <footer>
        <Footer />
      </footer>
    </>
  )
}