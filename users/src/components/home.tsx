import { createContext, Dispatch, useReducer, useState } from "react"
import userReducer, { Action } from "./UserReducer"
import { User } from "../models/userType"
import EditUser from "./EditUser"
import Login from "./LogIn"
import UserName from "./UserName"

export type UserContextType = {
    user: User;
    userDispatch: Dispatch<Action>;
}

const defaultUser: User = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
    phone: '',
}

const defaultContextValue: UserContextType = {
    user: defaultUser,
    userDispatch: () => null,
}

export const UserContext = createContext<UserContextType>(defaultContextValue)

const Home = () => {
    const [isLogIn, setIsLogIn] = useState(false);

    const log_in_home = () => {
        setIsLogIn(true)
    }

    const [user, userDispatch] = useReducer(userReducer, defaultUser)
    return (<>
        <UserContext.Provider value={{ user, userDispatch }}>
            {isLogIn === false && <Login log_in={log_in_home}></Login>}
            {isLogIn && <EditUser></EditUser>}
            {isLogIn && <UserName></UserName>}
        </UserContext.Provider>
    </>)
}
export default Home
