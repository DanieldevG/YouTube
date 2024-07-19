import { createContext , useEffect , useState } from "react";
import api from "../api";

export const  UserContext  = createContext({} as any);

interface Propsl{
children: any
}
export const UserStorage = ({ children }: Propsl) => {
    const [login , setLogin] = useState(false);
    const [user , setUser] = useState({});
    const [token , setToken] = useState(localStorage.getItem('token') as string);


    const getUser = (token: string) => {
        api.get('/user/get-user', {headers:{authorization: token}}).then(({ data }) => {
            setUser(data.user);
            setLogin(true);
        }).catch((error: any) => {
            console.log('Usuário não autenticado', error)
        })
    }

    useEffect(() => {
        getUser(token);
    },[token])


    const handleLogin = (email: string , password: string) => {
        api.post('/user/sign-in' , {email , password}).then(({ data }) => {
            setLogin(true);
            localStorage.setItem('token' , data.token)
            setToken(data.token)
            //puxar os dados 
            getUser(data.token);
        }).catch((error: any) => {
            console.log('Não foi possivel fazer o login', error)
        })
    }
        
    return(
        <UserContext.Provider value={{
            login,
            user,
            handleLogin
        }}>
            {children}
        </UserContext.Provider>
    )
}