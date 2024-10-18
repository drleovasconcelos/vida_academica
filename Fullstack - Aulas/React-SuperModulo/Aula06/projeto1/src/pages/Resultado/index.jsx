import { useLocation } from "react-router-dom";

export const Resultado = () => { 
    const {state} = useLocation()
    const {nome, email, mensagem} = state
    console.log(location);
    return (
        <>
            <h1>Resultado</h1>
            <p>Olá {nome} sua mensagem {mensagem} enviada com sucesso pelo email {email}.</p>
            {/* posso deixar apenas state em vez de location.state}*/}
        </>
    )
};