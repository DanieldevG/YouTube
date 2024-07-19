import { ContainerCentro } from "./stylesConteudo";

interface IProps{
    openMenu: boolean;
}

function Conteudo({openMenu} : IProps){
    return(
        <ContainerCentro openMenu={openMenu}>
        
        </ContainerCentro>
    )
}

export default Conteudo;