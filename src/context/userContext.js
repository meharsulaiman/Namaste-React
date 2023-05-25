import { createContext } from "react";

const userContext = createContext({
    name: "user",
    email: "user@example.com",
    password: "password",
})

userContext.displayName = "userContext"

export default userContext;