import { useState } from "react";
import "./App.css";

function App() {
  const[name, setName] = useState("")
  return (
    <>
      <h1>Trabalhando com Formulário</h1>
      <form>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          name="nome"
          placeholder="Digite seu nome"
          onChange={(e) => console.log(e.target.value)}
        />
        <button>Enviar</button>
      </form>
    </>
  );
}

export default App;
