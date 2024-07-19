import { useRef, useState ,useEffect } from "react";
import { Button, IconButton, ListContainer, ListItem, NaviGationContainer } from "./styles";
import IconMaiorQue from '../../assets/maior-que (1).png';
import IconMenorQue from '../../assets/menor-que.png';
import { useCategoryContext } from "../../context/categories";

const items = [
{name: "Tudo", id: "0"},
{name: "games", id: "20"},
{name: "Futebol", id: "17"},
{name: "Entreterimento", id: "24"},
{name: "Música", id: "10"},
{name: "Pessoas e blogs", id: "22"},
{name: "Automóveis e veículos", id: "2"},
{name: "Animais e pets", id: "15"},
{name: "Comédia", id: "23"},
{name: "Shorts", id: "26"},
{name: "Esportes", id: "17"},
];


function ButtonPart1(){
    const listRef = useRef<HTMLDivElement>(null);
    const [leftHiddenButton , setLeftHiddenButton] = useState(false);
    const {setCategoryId} = useCategoryContext();

    function searchCategoryId(id: string){
        setCategoryId(id);
    }

      const checkScrollPosition = () => {
        if (listRef.current) {
            // Verificar se o scroll está no início (ou próximo o suficiente)
            const { scrollLeft } = listRef.current;
            const atStart = scrollLeft <= 0;

            setLeftHiddenButton(!atStart); // Mostra o botão se não estiver no início
        }
    };

    useEffect(() => {
    checkScrollPosition();
    }, []);

    const scrollLeft = () => {
        if (listRef.current){
            listRef.current.scrollBy({
                left: -200,
                behavior: 'smooth'
            })
            checkScrollPosition(); // Verifica a posição após o scroll
        }
    };

    const scrollRight = () => {
        if(listRef.current){
            listRef.current.scrollBy({
                left: 200,
                behavior: 'smooth'
            })
            setLeftHiddenButton(true); // Sempre mostrar o botão ao scrollar para a direita

        }
    }
   
    return (
        <NaviGationContainer>
        {leftHiddenButton && (
           <Button onClick={scrollLeft}>
            <IconButton alt='' src={IconMenorQue}/>
           </Button>
        )}
           <ListContainer ref={listRef}>
            {items.map((button , index) =>( //item
                <ListItem onClick={() => searchCategoryId(button.id)} key={index}>{button.name}</ListItem>
            ))}
           </ListContainer>
           <Button onClick={scrollRight}>
           <IconButton alt='' src={IconMaiorQue}/>
           </Button>
        </NaviGationContainer>
      
    )
}

export default ButtonPart1;