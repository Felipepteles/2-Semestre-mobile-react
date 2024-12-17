import { Titulo } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { PinicialMain } from "./components/PaginaInicial/PinicialMain";
import { useState, useEffect } from "react";
import "./App.css";
import { NovoClienteElegancy } from "./components/Cliente Elegancy/NovoClienteElegancy";


function App() {
  const [clientesElegancy, setClientesElegancy] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function getClientesElegancy() {
      const response = await fetch("http://localhost:3000/clientesElegancy");
      const clientesElegancy2 = await response.json();
      setClientesElegancy(clientesElegancy2);
    }
    getClientesElegancy();
  }, []);

  const listaClientesElegancy = clientesElegancy.map((clientesElegancy) => (
    <NovoClienteElegancy
    key={clientesElegancy.id}
    setOpen={setOpen}
    clientesElegancy={clientesElegancy}
    setClientesElegancy={setClientesElegancy}
    />
  )
  )
  return (
    <>
      <Titulo />
      <PinicialMain />
      <Footer />
    </>
  );
}

export default App;