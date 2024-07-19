import { useCallback, useEffect, useState } from "react";
import { ContainerSearch } from "./searchStyles";
import axios from "axios";
import moment from "moment";
import { useSearchContext } from "./context";
import VideoSearch from "../../components/VideoSearch";

interface IProps{
    openMenu: boolean;
    id: string;
    snippet: {
        title: string;
        thumbnails: {
            high: {
                url: string;
            }
            maxres: {
                url: string;
            }
        }
        channelTitle: string;
        publishedAt: string;
        description: string;
    }
}


function Pesquisa() {
const [videos , setVideos] = useState<IProps[]>([]);
const {search} = useSearchContext();
    
const API_KEY = 'AIzaSyAiq1BcFbwMnBfSCj91ForphFg_lnN9vII';
    
const load = useCallback(async () => {
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${search}&maxResults=48&&key=${API_KEY}`;
    try {
      const resposta = await axios.get(url);
      setVideos(resposta.data.items);
    } catch (erro) {
      console.log(erro);
    }
  }, [search, API_KEY]); // Adicione API_KEY como dependência

  useEffect(() => {
    load();
  }, [load]); // Adicione load como dependência


// function formatViewCount(viewCount: number): string{
//     if(viewCount >= 1000000){
//         return `${(viewCount / 1000000).toFixed(0)} mi visualizações`;
//     } else if(viewCount >= 1000) {
//         return `${(viewCount / 1000).toFixed(0)} mil visualizações`;
//     } else {
//         return `${viewCount} visualizações`
//     }
// }

function getPlublishedTime(plublishedAt: string){
    const now = moment();
    const plublishedTime = moment(plublishedAt);
    const diffDays = now.diff(plublishedTime, "days");

    if(diffDays <= 0){
        return "Hoje";
    } else if(diffDays === 1){
        return "Há 1 dia";
    } else if(diffDays <= 7){
        return `há ${diffDays} dias`;
    } else if(diffDays <= 30){
        const diffWeeks = Math.floor(diffDays / 7);
        if(diffWeeks === 1){
            return "há 1 semana";
        } else{
            return `há ${diffWeeks} semanas`
        }
    } else {
        const diffYears = Math.floor(diffDays / 365);
        if(diffYears === 1){
            return "há 1 ano"
        } else {
            return `há ${diffYears} anos`;
        }
    }

}

    return(
        <ContainerSearch>
            {videos.map((video) => (
                <VideoSearch
                title={video.snippet.title}
                thumbnail={video.snippet.thumbnails.maxres?.url || video.snippet.thumbnails.high?.url}
                channelImage={video.snippet.channelTitle.charAt(0).toUpperCase()}
                channelName={video.snippet.channelTitle}
                details={`10 mi visualizações - ${getPlublishedTime(video.snippet.publishedAt)}` }
                description={video.snippet.description}
                key={video.id}
                />
            ))}
        </ContainerSearch>
    )
}

export default Pesquisa;