import { useParams } from "react-router-dom"
import { lista_de_cursos } from "../../utils/lista_cursos";
import { useEffect, useState } from "react";
import { CursoContainer } from "./style";

export const Detalhes = ()  => {
    const {id} = useParams();
    const [curso, setCurso] =  useState();

    function buscarPorId(){
        const curso_encontrado = lista_de_cursos.filter((element)=>element.id === +id);
        setCurso(curso_encontrado[0]);
    }
    useEffect(()=>{
        buscarPorId();
    }, []);
    
    return (
    <>
        <h1>Detalhes</h1>
        {curso && (
            <CursoContainer>
                <h2>Curso: {curso.nome}</h2>
                <p>Turno: {curso.turno}</p>
                <p>Descrição:{curso.descricao}</p>
                <ul>
                    {curso.cadeiras.map((element) => (
                        <li>{element}</li>
                    ))}
                </ul>
            </CursoContainer>
        )}
    </>
)};
