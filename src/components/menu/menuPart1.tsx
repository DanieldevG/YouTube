import { 
    MenuItem, 
    Title,
    Title2,
    Title1,
    Texto,
    ButtonIcon,
    Menu1,
    Linha,
 } from "./styles";
import HomeIcon from '../../assets/botao-de-inicio.png';
import InscrevaIcon from '../../assets/se-inscrever.png';
import ShortsIcon from '../../assets/shorts-240x300.png';
import HistoricoIcon from '../../assets/historia.png';
import VideosIcon from '../../assets/toque.png';
import PlaylistIcon from '../../assets/adicionar-a-playlist.png';
import AssistirIcon from '../../assets/relogio.png';
import GosteiIcon from '../../assets/voto-positivo.png';
import CanalUcon from '../../assets/do-utilizador.png';
import EmAltaIcon from '../../assets/fogueira.png';
import ShoppingIcon from '../../assets/sacolas-de-compras.png';
import MusicaIcon from '../../assets/nota-musical.png';
import FilmesIcon from '../../assets/claquete.png';
import AoVivoIcon from '../../assets/transmissao-ao-vivo.png';
import JogosIcon from '../../assets/controle-de-video-game.png';
import NoticiasIcon from '../../assets/noticias.png';
import EsportesIcon from '../../assets/trofeu.png';
import CursosIcon from '../../assets/ideia-criativa.png';
import PodcastIcon from '../../assets/podcast.png';
import YouTubeIcon from '../../assets/youtube.png';
import StudioICon from '../../assets/icons8-youtube-studio-1-48.png';
import MusicaIcon2 from '../../assets/icons8-musica-youtube-48.png';
import KidsIcon from '../../assets/kids.png';
import ConfigICon from '../../assets/configuracao.png';
import BandeiraIcon from '../../assets/bandeira.png';
import AjudaIcon from '../../assets/ajudando.png';
import FeedbackIncon from '../../assets/icons8-alta-importância-64.png';
import { useNavigate } from "react-router-dom";


const items = [0]


interface IProps{
    openMenu: boolean,
}


function MenuPart1({openMenu} : IProps){
    const navigate = useNavigate();

    return(
        <Menu1 openMenu={openMenu}>
            {items.map(() => (
            <MenuItem openMenu={openMenu} onClick={() => navigate('início')}>
            <ButtonIcon alt='' src={HomeIcon}/>
            <span>Início</span>
            </MenuItem>
         ))}

            {items.map(() => (
            <MenuItem openMenu={openMenu} onClick={() => navigate('shorts')}>
            <ButtonIcon alt='' src={ShortsIcon}/>
            <span>Shorts</span>
            </MenuItem>
         ))} 

            {items.map(() => (
            <MenuItem openMenu={openMenu} onClick={() => navigate('inscrições')}>
            <ButtonIcon alt='' src={InscrevaIcon}/>
            <span> Inscrições</span>
            </MenuItem>
         ))}

         <Linha></Linha>
         
         <Title1>Você</Title1>

            {items.map(() => (
            <MenuItem openMenu={openMenu}>
            <ButtonIcon alt='' src={CanalUcon}/>
            <span>Seu canal</span>
            </MenuItem>
         ))}

        {items.map(() => (
        <MenuItem openMenu={openMenu}>
        <ButtonIcon alt='' src={HistoricoIcon}/>
        <span>Histórico</span>
        </MenuItem>
         ))}

        {items.map(() => (
        <MenuItem openMenu={openMenu}>
        <ButtonIcon alt='' src={PlaylistIcon}/>
        <span>Playlists</span>
        </MenuItem>
         ))}

         
        {items.map(() => (
        <MenuItem openMenu={openMenu}>
        <ButtonIcon alt='' src={VideosIcon}/>
        <span>Seus vídeos</span>
        </MenuItem>
         ))}

         
        {items.map(() => (
        <MenuItem openMenu={openMenu}>
        <ButtonIcon alt='' src={AssistirIcon}/>
        <span>Assistir mais tarde</span>
        </MenuItem>
         ))}

        
        {items.map(() => (
        <MenuItem openMenu={openMenu}>
        <ButtonIcon alt='' src={GosteiIcon}/>
        <span>Vídeos com "Gostei"</span>
        </MenuItem>
         ))} 

         <Linha></Linha>

         <Title>Explorar</Title>

         {items.map(() => (
        <MenuItem openMenu={openMenu}>
        <ButtonIcon alt='' src={EmAltaIcon }/>
        <span>Em alta</span>
        </MenuItem>
         ))} 

        {items.map(() => (
        <MenuItem openMenu={openMenu}>
        <ButtonIcon alt='' src={ShoppingIcon}/>
        <span>Shopping</span>
        </MenuItem>
         ))} 

        {items.map(() => (
        <MenuItem openMenu={openMenu}>
        <ButtonIcon alt='' src={MusicaIcon}/>
        <span>Música</span>
        </MenuItem>
         ))} 

        {items.map(() => (
        <MenuItem openMenu={openMenu}>
        <ButtonIcon alt='' src={FilmesIcon}/>
        <span>Filmes</span>
        </MenuItem>
         ))} 

        {items.map(() => (
        <MenuItem openMenu={openMenu}>
        <ButtonIcon alt='' src={AoVivoIcon}/>
        <span>Ao vivo</span>
        </MenuItem>
         ))} 

        {items.map(() => (
        <MenuItem openMenu={openMenu}>
        <ButtonIcon alt='' src={JogosIcon}/>
        <span>Jogos</span>
        </MenuItem>
         ))} 

        {items.map(() => (
        <MenuItem openMenu={openMenu}>
        <ButtonIcon alt='' src={NoticiasIcon}/>
        <span>Notícias</span>
        </MenuItem>
         ))} 

        {items.map(() => (
        <MenuItem openMenu={openMenu}>
        <ButtonIcon alt='' src={EsportesIcon}/>
        <span>Esportes</span>
        </MenuItem>
         ))} 

        {items.map(() => (
        <MenuItem openMenu={openMenu}>
        <ButtonIcon alt='' src={CursosIcon}/>
        <span>Cursos</span>
        </MenuItem>
         ))} 

        {items.map(() => (
        <MenuItem openMenu={openMenu}>
        <ButtonIcon alt='' src={PodcastIcon}/>
        <span>Podcasts</span>
        </MenuItem>
         ))} 

         <Linha></Linha>

         <Title2>Mais do You Tube</Title2>

         {items.map(() => (
        <MenuItem openMenu={openMenu}>
        <ButtonIcon alt='' src={YouTubeIcon}/>
        <span>You Tube Premium</span>
        </MenuItem>
         ))} 

        {items.map(() => (
        <MenuItem openMenu={openMenu}>
        <ButtonIcon alt='' src={StudioICon}/>
        <span>You Tube Studio</span>
        </MenuItem>
         ))} 

        {items.map(() => (
        <MenuItem openMenu={openMenu}>
        <ButtonIcon alt='' src={MusicaIcon2}/>
        <span>You tube Music</span>
        </MenuItem>
         ))} 

        {items.map(() => (
        <MenuItem openMenu={openMenu}>
        <ButtonIcon alt='' src={KidsIcon}/>
        <span>You tube Kids</span>
        </MenuItem>
         ))} 

         <Linha></Linha>

        {items.map(() => (
        <MenuItem openMenu={openMenu}>
        <ButtonIcon alt='' src={ConfigICon}/>
        <span>Configurações</span>
        </MenuItem>
         ))} 

        {items.map(() => (
        <MenuItem openMenu={openMenu}>
        <ButtonIcon alt='' src={BandeiraIcon}/>
        <span>Histórico de denun...</span>
        </MenuItem>
         ))} 

        {items.map(() => (
        <MenuItem openMenu={openMenu}>
        <ButtonIcon alt='' src={AjudaIcon}/>
        <span>Ajuda</span>
        </MenuItem>
         ))} 

        {items.map(() => (
        <MenuItem openMenu={openMenu}>
        <ButtonIcon alt='' src={FeedbackIncon}/>
        <span>Enviar feedback</span>
        </MenuItem>
         ))} 

         <Texto>
            Sobre Imprensa Direitos autorais Entre em
            contato Criadores de
            conteúdo Publicidade Desenvolvedores
            Termos Privacidade Política e segurança Como funciona
            o YouTubeTestar os novos recursos
            © 2024 Google LLC
        </Texto>
        </Menu1>
    )
}

export default MenuPart1;