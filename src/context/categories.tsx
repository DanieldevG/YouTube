import React, { createContext ,useContext , useState } from "react";

interface CategoryContextData{
    categoryId: string;
    setCategoryId: (id: string) => void;
}

interface CategoryContextProps{
    children: React.ReactNode;
}

const categoryContext = createContext<CategoryContextData>({} as CategoryContextData);

export const CategoryProvider: React.FC<CategoryContextProps> = ({children}) => {
    const [categoryId , setCategoryId] = useState('0');


    return(
        <categoryContext.Provider value={{ categoryId , setCategoryId }}>
            {children}
        </categoryContext.Provider>
    )
}

export function useCategoryContext(){
    return useContext(categoryContext);
}

