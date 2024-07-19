import React, { createContext , useContext , useState } from "react";

interface contextSearch{
    search: string;
    setSearch: (inputValue: string) => void
}

interface searchProps{
    children: React.ReactNode;
}

const SearchContext = createContext<contextSearch>({} as contextSearch);

export const SearchProvider: React.FC<searchProps> = ({ children }) => {
    const [search , setSearch] = useState('')
    return(
    <SearchContext.Provider value={{ search , setSearch }}>
        {children}
    </SearchContext.Provider>
    );
};

export function useSearchContext(){
    return useContext(SearchContext);
}
