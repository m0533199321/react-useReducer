import { useContext, useEffect, useState } from "react"
import { UserContext } from "./home"
import { Avatar, Typography } from "@mui/material"

const userName = () => {
    const context = useContext(UserContext)
    const [lastN, setLastN] = useState('')
    const [firstN, setFirstN] = useState('')
    const [firstL, setFirstL] = useState('')

    useEffect(() => {
        if (context.user) {
            setLastN(context.user.lastN ? context.user.lastN.toString() : '')
            setFirstN(context.user.firstN.toString())
            setFirstL(firstN ? firstN[0] : '')
        }
    }, [context.user])

    return (
        <>
            <Avatar sx={{ width: 56, height: 56, bgcolor: "deepskyblue", fontSize: 30, marginLeft: 4 }}>{firstL}</Avatar>
            <Typography variant="h5" align="left" sx={{ marginTop: 2, marginLeft: 4 }}>{firstN} {lastN}</Typography>
        </>
    )
}

export default userName