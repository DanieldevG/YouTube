import styled from "styled-components";

export const Container = styled.div<{openMenu: boolean}>`
    width: ${({openMenu}) => openMenu? '250px' : '100px' };  
    height: calc(100vh - 55px);
    box-sizing: border-box;
    padding: 10px 10px 10px 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: auto;
    row-gap: 15px;
    white-space: nowrap;
    overflow-x: hidden;
    position: fixed;
    top:55px;
    left: 0;
`;

export const MenuItem = styled.div<{openMenu: boolean}>`
    width: 98%;
    min-height: ${({openMenu}) => openMenu? '45px' : '70px' };
    border-radius: 10px;
    cursor: pointer;
    padding: 2px 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction: ${({openMenu}) => openMenu? 'row' : 'column'};
    align-items: center;
    justify-content: ${({openMenu}) => openMenu? 'none' : 'center'};
    margin-left: ${({openMenu}) => openMenu? '10px' : '0'};

span{
    font-weight: 600;
    margin-left: 20px;
    font-size: 16px;
    margin-right: ${({openMenu}) => openMenu? '' : '15px'};
}


:hover{
    background-color: #f2f2f2;
}

`;

export const Title = styled.h1`
    font-weight: bold;
    font-size: 20px;
    padding: 5px 90px 10px 0; 
    margin-left: 30px;
`;
  
export const ButtonIcon = styled.img`
    width: 25px;
  `;

export const Title2 = styled.h1`
        font-weight: bold;
        font-size: 20px;
        padding: 5px 20px 10px 0;
        white-space: nowrap;
        margin-left: 30px;

        
`;

export const Title1 = styled.h1`
        font-weight: bold;
        font-size: 20px;
        padding: 5px 140px 10px 0;
        margin-left: 30px;

`;

export const Texto = styled.p`
 padding: 50px;
 white-space: break-spaces;
`;

export const Menu1 = styled.div<{openMenu: boolean}>`
    visibility: ${({ openMenu }) => (openMenu ? 'visible' : 'hidden')};
`;

export const Menu2 = styled.div<{openMenu: boolean}>`
     visibility: ${({ openMenu }) => (openMenu ? 'hidden' : 'visible')};
     display: ${({ openMenu }) => (openMenu ? 'none' : 'block')}; 
`;

export const Linha = styled.hr`
    border: none;
    border-top: 1px solid #ccc;
    margin: 20px 0;
    width: 100%;
`;



  
   


