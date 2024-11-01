import { Link } from "react-router-dom"

//  ({curso}) -> para desestruturar precisa da {}
export const Card = ({curso}) =>{
    return (
        <Link to={`/detalhes/${curso.id}`}>
            <div key={curso.id}>
                <h2>Nome: {curso.nome}</h2>
                <p>Turno: {curso.turno}</p>
                <p>Duracao: {curso.duracao}</p>
                <p>Data de Inicio: {curso.data_inicio}</p>
            </div>
        </Link>
    )
}