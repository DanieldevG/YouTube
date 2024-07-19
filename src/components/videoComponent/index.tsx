import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from './styles'
 
interface Props{
    thumbnail: string
    channelImage: string
    title: string
    channelName: string
    details: string
    description: string
}


 function VideoComponent(props : Props){
    return(
        <Container>
            <ImageBanner alt="thumbnail" src={props.thumbnail}/>
            <TitleContainer>
                <ChannelImage>
                    {props.channelImage}
                </ChannelImage>
                <TextContainer>
                    <Title>{props.title}</Title>
                    <TextCard>{props.channelName}</TextCard>
                    <TextCard>{props.details}</TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    )
}
 export default VideoComponent;