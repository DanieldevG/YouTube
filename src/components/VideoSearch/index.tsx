import { ChannelImage5, Container2, ImageBanner3, TextCard8, TextContainer6, Title7, TitleContainer4 } from "./styles"

 
interface Props{
    thumbnail: string
    channelImage: string
    title: string
    channelName: string
    details: string
    description: string
}


 function VideoSearch(props : Props){
    return(
        <Container2>
            <ImageBanner3 alt="thumbnail" src={props.thumbnail}/>
            <TitleContainer4>
                <ChannelImage5>
                    {props.channelImage}
                </ChannelImage5>
                <TextContainer6>
                    <Title7>{props.title}</Title7>
                    <TextCard8>{props.channelName}</TextCard8>
                    <TextCard8>{props.details}</TextCard8>
                </TextContainer6>
            </TitleContainer4>
        </Container2>
    )
}
 export default VideoSearch;