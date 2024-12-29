import { createContext, Dispatch, useReducer, useState } from "react"
import userReducer, { Action } from "./userReducer"
import { User } from "../models/userType"
import EditUser from "./editUser"
import Login from "./logIn"
import UserName from "./userName"

export type UserContextType = {
    user: User;
    userDispatch: Dispatch<Action>;
}

const defaultUser: User = {
    firstN: '',
    lastN: '',
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

const home = () => {
    const [isLogIn, setIsLogIn] = useState(false);
    const userInit: User =
    {
        firstN: "Mali",
        lastN: "Hildessaimer",
        email: "mali@example.com",
        password: "123456",
        address: "Ben Zaacai 17 BB",
        phone: "0533199321",
    }

    const log_in_home = () => {
        setIsLogIn(true)
    }

    const [user, userDispatch] = useReducer(userReducer, userInit)
    return (<>
        <UserContext.Provider value={{ user, userDispatch }}>
            {isLogIn === false && <Login log_in={log_in_home}></Login>}
            {isLogIn && <UserName></UserName>}
            {isLogIn && <EditUser></EditUser>}
        </UserContext.Provider>
    </>)
}
export default home
