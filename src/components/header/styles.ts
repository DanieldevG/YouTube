import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 55px;
    background-color: #fff;
    padding: 0 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const ButtonContainer = styled.div<{margin?: string}>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin:${({margin}) => margin? margin : '0 50px'};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;



    :hover{
        background-color: #f2f2f2;
    }
`;

export const HeaderButton = styled.div`
    width: 200px;
    display: flex;
`;


export const ButtonIcon = styled.img`
    width: 20px;
`;

export const SearchContainer = styled.div`
    display: flex;
`;

export const SearchInputContainer = styled.div`
    width: 450px;
    height: 35px;
    border: 1px solid #d3d3d3;
    border-radius: 40px 0 0 40px;
    display: flex;
    align-items: center;
    padding: 0 16px;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 25px;
    outline: none;
    border: none;
`;

export const SearchButton = styled.div`
    border-radius: 0 40px 40px 0;
    height: 35px;
    width: 70px;
    background-color: #f8f8f8;
    border: 1px solid #d3d3d3;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;


export const NaviGationContainer  = styled.div`
      display: flex;
      align-items: center;
      overflow: hidden;
      width: 80%;
      margin-left: 260px;
      position: sticky;
      top: 55px;
      background-color: #fff;
`;

export const Button = styled.button`
    background-color: #fff;
    border: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 50%;

    &:hover{
        background-color: #e1e1e1;
    }
`;

export const ListContainer = styled.div`
     display: flex;
     overflow-x: hidden;
     scroll-behavior: smooth;
     width: 100%;
`;

export const ListItem = styled.div`
    width: auto;
    height: auto;
    white-space: nowrap;
    margin: 5px;
    padding: 0 10px;
    background-color: #f1f1f1;
    text-align: center;
    line-height: 30px;
    font-size: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    cursor: pointer;
    background-color: #fff;

     &:hover{
        background-color: #e1e1e1;
     }
`; 

export const IconButton = styled.img`
    width: 15px;
`;
interface ClearButtonProps {
    clearButton: boolean;
  }
  
  export const ClearButton = styled.button<ClearButtonProps>`
  
  `;

  export const ButtonGroup = styled.div`
    display: flex;
    gap: 10px;
  `;


