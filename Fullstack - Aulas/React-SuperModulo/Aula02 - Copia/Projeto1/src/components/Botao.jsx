export const Botao = ({funcaoDoClick, texto}) => {
    return(
        <button className="botao" onClick={funcaoDoClick}>{texto}</button>
    )
}