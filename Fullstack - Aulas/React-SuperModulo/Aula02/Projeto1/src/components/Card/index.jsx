import "./style.css"

export const Card = ({linguagem_recebida}) => {
    return(
        <>
            <div className="card">
                <h2 className="titulo">{linguagem_recebida.nome}</h2>
                <p className="descricao">{linguagem_recebida.descricao}</p>
                <p className="nota">{linguagem_recebida.nota}</p>
            </div> 
        </>
    )
}

// function Card(){
//     return(
//         <>
//             <h1>Card</h1>
//         </> 
//     )
// }

// export default Card