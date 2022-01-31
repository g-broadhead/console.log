import { createContext } from "react"

const UserContext = createContext({
    loggedIn: false,
    userData: {},
});

export default UserContext;