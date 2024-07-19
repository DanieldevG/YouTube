import { Container } from "./styles";
import MenuPart1 from "../../../src/components/menu/menuPart1";
import MenuPart2 from "../../../src/components/menu/menuPart2";


interface Props {
    openMenu: boolean,
}

function Menu({openMenu} : Props) {
    return(

        <Container openMenu={openMenu}>
        {openMenu ? <MenuPart1 openMenu={openMenu} /> : <MenuPart2 openMenu={openMenu} />}
         </Container>
    )
}

export default Menu;


