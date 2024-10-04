// import { useEffect, useState } from "react";
// import "./App.css";
// import axios from "axios";

// function App() {
//   const [cats, setCats] = useState([]);
//   async function getCats() {
//     try {
//       const { data } = await axios.get(
//         "https://api.thecatapi.com/v1/images/search?limit=2"
//       );
//       console.log(data);
//       setCats(data);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   useEffect(() => {
//     getCats();
//   }, []);

//   return (
//     <>
//       <h1>Projeto dos Gatos</h1>
//       <section>{cats && cats.map((element)=> <img src={element.url} />)}</section>
//     </>
//   );
// }

// export default App;

// _______________________exercício 2____________
// import { useState } from "react";
// import "./App.css";

// function App() {
//   const[name, setName] = useState("")
//   function enviarAlgo(e){
//     e.preventDefault()
//     console.log(`Você enviou o nome ${name}`)
//   }
//   return (
//     <>
//       <h1>Trabalhando com Formulário</h1>
//       <form onSubmit={enviarAlgo}>
//         <label htmlFor="nome">Nome</label>
//         <input
//           type="text"
//           id="nome"
//           name="nome"
//           placeholder="Digite seu nome"
//           // onChange={(e) => console.log(e.target.value)}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <button>Enviar</button>
//       </form>
//     </>
//   );
// }

// export default App;
// =======================exercício 3=================== consumo de api via cep
// https://viacep.com.br/ws/60426000/json/

import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [cep, setCep] = useState("");
  const [resultado, setResultado] = useState();

  async function consultarCEP(e) {
    e.preventDefault();
    try {
      const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      setResultado(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1>Consultando CEP</h1>

      <form onSubmit={consultarCEP}>
        <label htmlFor="cep">CEP</label>
        <input
          type="text"
          id="cep"
          name="cep"
          placeholder="Digite seu CEP"
          onChange={(e) => setCep(e.target.value)}
        />
        <button>Buscar</button>
      </form>

      {resultado && (
        <div>
          <h2>Endereço: {resultado.logradouro}</h2>
          <p>Complemento: {resultado.complemento}</p>
          <p>Bairro: {resultado.bairro}</p>
          <p>Cidade: {resultado.localidade}</p>
          <p>Estado: {resultado.estado}</p>
          <p>Região: {resultado.regiao}</p>
          <p>DDD: {resultado.ddd}</p>
        </div>
      )}
    </>
  );
}

export default App;
