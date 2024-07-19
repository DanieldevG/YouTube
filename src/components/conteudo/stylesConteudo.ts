import styled from "styled-components";

export const ContainerCentro = styled.div<{openMenu: boolean}>`
    width: 100%;
    padding: 30px 50px;
    box-sizing: border-box; 
    display: flex;
    justify-content: center;
    margin-left: ${({openMenu}) => openMenu? '250px' : '70px'};
    overflow-x: hidden;
`;