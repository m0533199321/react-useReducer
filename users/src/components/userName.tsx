import { useContext, useEffect, useState } from "react"
import { UserContext } from "./Home"
import { Avatar, Typography } from "@mui/material"

const UserName = () => {
    const context = useContext(UserContext)
    const [lastN, setLastN] = useState('')
    const [firstN, setFirstN] = useState('')
    const [firstL, setFirstL] = useState('')

    useEffect(() => {
        if (context.user) {
            setLastN(context.user.lastName ? context.user.lastName.toString() : '')
            setFirstN(context.user.firstName ? context.user.firstName.toString() : '')
            setFirstL(context.user.firstName ? context.user.firstName[0] : '')
        }
    }, [context.user])

    return (
        <>
        <div style={{display:'inline-block', marginTop: '3vh', marginLeft:'5vw'}}>
            <Avatar sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 65,
                height: 65,
                bgcolor: "deepskyblue",
                fontSize: 40,
                zIndex: 20
            }}>
                {firstL}
            </Avatar>
            </div>
            <Typography
                variant="h5"
                sx={{
                    display: 'inline-block',
                    marginTop: 2,
                    marginLeft: 5,
                    fontWeight: 'bold',
                    position: 'relative',
                    zIndex: 30,
                    color: 'deepskyblue'
                }}
            >
                {firstN} {lastN}
            </Typography>
        </>
    )
}

export default UserName