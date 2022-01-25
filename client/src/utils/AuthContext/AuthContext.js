import { createContext } from "react"

const AuthContext = createContext({
 name: '',
 email: '',
 username: '',
 password: '',
 lUsername: '',
 lPassword: '',
 handleInputChange: () => { },
 handleRegisterUser: () => { },
 handleLoginUser: () => { }
})

export default AuthContext
