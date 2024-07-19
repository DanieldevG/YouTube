import { 
    Container , 
    LogoContainer,
    ButtonContainer, 
    ButtonIcon, 
    SearchContainer,
    SearchInputContainer,
    SearchInput, 
    SearchButton,
    ClearButton,
    ButtonGroup,
} from "./styles";
import HamburguerIcon from '../../assets/menu-hamburger_d4d55bca8dfb4e53a6ce3353dd74700e.png';
import Logo from '../../assets/YouTube-Logo_14337a3830a247d380197bdf6e56b1ee.png';
import SearchIcon from '../../assets/search_4de61024f7e34cdd88c4c38005340b3e.png';
import MicIcon from '../../assets/microfone-gravador_e6433e54cf274f8eaafa27d9a5d5ac41.png';
import VideoIcon from '../../assets/video_6da7f19e417a4b7299b28849bc286786.png';
import NotificationIcon from '../../assets/sino_8dd73cb0e3d44166bc298e18bc789b17.png';
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { useSearchContext } from "../../pages/search/context";


interface IProps {
    openMenu: boolean,
    setOpenMenu: (openMenu: boolean) => void,
}


function Header({openMenu , setOpenMenu } : IProps) {
const {setSearch} = useSearchContext();

const [clearButton , setClearButton] = useState(false);

const [inputValue , setInputValue] = useState('');

function handleInput(inputValue: string){
    setInputValue(inputValue)
    if(inputValue === ''){
        setClearButton(false)
    } else{
        setClearButton(true)
    }
}

const inputRef = useRef<HTMLInputElement>(null);

const clearInput = () => {
    setInputValue('')
    setClearButton(false)
    if(inputRef.current){
        inputRef.current.focus()
    }
}

    const navigate = useNavigate();
    return(
        <Container>
            <LogoContainer>
                <ButtonContainer onClick={() => setOpenMenu(!openMenu)} margin='0 10px 0 0'>
                    <ButtonIcon alt='' src={HamburguerIcon}/>
                </ButtonContainer >
                <img onClick={() => navigate('/início')}
                style={{cursor: 'pointer', width: '100px'}}
                alt=''
                src={Logo}
                />
            </LogoContainer>
            
            <SearchContainer>
                <SearchInputContainer>
                    <SearchInput 
                     ref={inputRef}
                    value={inputValue}
                    placeholder="Pesquisar"
                    onChange={(e) => {
                    handleInput(e.target.value)
                }}
                  onKeyDown={(e) => {
                    if(e.key === 'Enter')
                    setSearch(inputValue)
                   navigate('/search')
                }}
                />
                <ClearButton
                clearButton={clearButton}
                 onClick={clearInput} />

                </SearchInputContainer>
                <SearchButton onClick={() => {
                    if(inputValue.trim() === ''){
                        alert('Digite uma palavra chave antes de pesquisar')
                        return;
                    }
                    setSearch(inputValue)
                    navigate('/search')
                }}>
                    <ButtonIcon alt="" src={SearchIcon}/>
                </SearchButton>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={MicIcon}/>
                </ButtonContainer>

            </SearchContainer>
           <ButtonGroup>
            <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={VideoIcon}/>
                </ButtonContainer>

                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={NotificationIcon}/>
                </ButtonContainer>

                <ButtonContainer margin='0 0 0 10px'>
                   P
                </ButtonContainer>
           </ButtonGroup>
        </Container>
    )
}

export default Header;