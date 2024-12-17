import { useForm } from "react-hook-form";  
import "./NovoClienteElegancy.css"


export function NovoClienteElegancy({ clientesElegancy, setClientesElegancy, setOpen }) {
  const { register, handleSubmit } = useForm();

  function cadastrarCliente(data) {
    const novo = {
      nomeElegancy: data.nomeElegancy,
      dataNascimentoElegancy: data.dataNascimentoElegancy,
      emailElegancy: data.emailElegancy,
      senhaElegancy: data.senhaElegancy,
    };
    const clientesElegancy2 = [...clientesElegancy, novo];
    setClientesElegancy(clientesElegancy2);
    fetch("http://localhost:3000/clientesElegancy", {
        method: "POST",
        body:JSON.stringify(novo)
    })
    setOpen(false)
    
  }

  return (
    <div className="container__cadastro__cliente">
      <h2 className="titulo__bem__vindo">Bem-vindo!</h2>
      <h5 className="titulo__bem__vindo">Registre-se</h5>
      <form
        onSubmit={handleSubmit(cadastrarCliente)}
        className="form__cadastro"
      >
        <div className="container__nome">
          <label htmlFor="nome" className="nome__titulo__cliente">
            Nome
          </label>
          <input
            type="text"
            id="nome"
            className="nome__add"
            {...register("nomeElegancy")}
          />
        </div>
        <div className="container__dataNascimento">
          <label htmlFor="dataNascimento" className="dataNascimento__titulo">
            Data de nascimento
          </label>
          <input
            type="date"
            id="dataNascimento"
            className="dataNascimento__add"
            {...register("dataNascimentoElegancy")}
          />
        </div>
        <div className="container__email">
          <label htmlFor="email" className="email__titulo__cliente">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="email__add"
            {...register("emailElegancy")}
          />
        </div>
        <div className="container__senha">
          <label htmlFor="senha" className="senha__titulo">
            Senha
          </label>
          <input
            type="password"
            id="senha"
            className="senha__add"
            {...register("senhaElegancy")}
          />
        </div>
        <div className="container__inputs">
          <input type="submit" value="Cadastrar" className="botao__cadastrar" />
          <input type="reset" value="Limpar" className="botao__limpar" />
        </div>
      </form>
    </div>
  );
}
