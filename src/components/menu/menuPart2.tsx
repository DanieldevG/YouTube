import {  
   Menu2,
   MenuItem, 
   ButtonIcon, 
 } from "./styles";
import HomeIcon from '../../assets/botao-de-inicio.png';
import InscrevaIcon from '../../assets/se-inscrever.png';
import ShortsIcon from '../../assets/shorts-240x300.png';
import VideoIcon from '../../assets/video.png';

const items = [0];

interface IProps{
    openMenu: boolean;
}


function MenuPart2({openMenu} : IProps){
   return(
    <Menu2 openMenu={openMenu}>
       {items.map(() => (
            <MenuItem openMenu={openMenu}>
            <ButtonIcon alt='' src={HomeIcon}/>
            <span>Início</span>
            </MenuItem>
         ))}

            {items.map(() => (
            <MenuItem openMenu={openMenu}>
            <ButtonIcon alt='' src={ShortsIcon}/>
            <span>Shorts</span>
            </MenuItem>
         ))} 

            {items.map(() => (
            <MenuItem openMenu={openMenu}>
            <ButtonIcon alt='' src={InscrevaIcon}/>
            <span> Inscrições</span>
            </MenuItem>
         ))}

{        items.map(() => (
        <MenuItem openMenu={openMenu}>
        <ButtonIcon alt='' src={VideoIcon}/>
        <span>Você</span>
        </MenuItem>
         ))} 
        
    </Menu2>
   )
}

export default MenuPart2;