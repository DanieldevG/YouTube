import styled from "styled-components";

export const Container2 = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 16px; // Espaço entre vídeos
`;

export const ImageBanner3 = styled.img`
    width: 360px; // Largura fixa para a thumbnail
    height: 210px;
    border-radius: 12px;
    margin-right: 16px; // Espaço entre a thumbnail e o texto
`;

export const TitleContainer4 = styled.div`
    flex: 1; // Permitir que o contêiner do texto ocupe o espaço restante
    display: flex;
    flex-direction: column;
    white-space: nowrap;
`;

export const ChannelImage5 = styled.div`
    background-color: beige;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-bottom: 10px;
`;

export const TextContainer6 = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title7 = styled.span`
    font-weight: 600;
    color: #0f0f0f;
`;

export const TextCard8 = styled.span`
    color: #8c8c8c;
    font-size: 14px;
`;
