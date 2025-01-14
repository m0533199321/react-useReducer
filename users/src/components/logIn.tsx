import axios from "axios"
import { useContext, useRef, useState } from "react"
import { UserContext } from "./Home"
import { Button, TextField, Typography, Container, Paper, Modal } from "@mui/material"

const LogIn = ({ log_in }: { log_in: Function }) => {
    const [open, setOpen] = useState(false)
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const context = useContext(UserContext)
    const [signIn, setSignIn] = useState(true)

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()

        if (context) setOpen(false)
        if (signIn) {
            try {
                const res = await axios.post('http://localhost:3000/api/user/login',
                    {
                        email: emailRef.current?.value,
                        password: passwordRef.current?.value
                    },
                )
                context?.userDispatch({ type: "LOGIN_IN_USER", data: res.data.user })
                console.log(context)
                log_in()
            }
            catch (err) {
                console.log(err)
                if (axios.isAxiosError(err) && err.response?.status === 422)
                    alert('user doesn\'t exist')
            }
        }
        else {
            const e = emailRef.current?.value
            const p = passwordRef.current?.value
            try {
                const res = await axios.post('http://localhost:3000/api/user/register',
                    {
                        email: emailRef.current?.value,
                        password: passwordRef.current?.value
                    },
                )
                console.log(e, p)
                context?.userDispatch({ type: "CREATE_USER", data: { id: res.data.userId, email: e, password: p } })
                log_in()
            }
            catch (err) {
                console.log(err)
                if (axios.isAxiosError(err) && err.response?.status === 422)
                    alert('user already signed up')
            }
        }

        if (emailRef.current) {
            emailRef.current.value = ''
        }
        if (passwordRef.current) {
            passwordRef.current.value = ''
        }
        // email.current!.value = ''
        // password.current!.value = ''
    }

    return (
        <>
            <Button onClick={() => { setOpen(true), setSignIn(true) }} variant="contained" color="inherit" sx={{ marginTop:'2vh', marginLeft:'2vw', width:'10vw', color:'deepskyblue', fontWeight:'bold'}}>Sign in</Button>
            <div></div>
            <Button onClick={() => { setOpen(true), setSignIn(false) }} variant="contained" color="inherit" sx={{marginTop:'4vh', marginLeft:'2vw', width:'10vw', color:'deepskyblue', fontWeight:'bold'}}>Sign up</Button>
            <Modal
                open={open}
                onClose={() => { setOpen(false) }}
                aria-labelledby="form-modal-title"
                aria-describedby="form-modal-description"
            >
                <Container style={{ position: 'absolute', top: 200, left: 510, maxWidth: '35%' }}>
                    <Paper elevation={3} style={{ padding: '20px' }}>
                        <Typography variant="h5" align="center">Sign</Typography>
                        <form>
                            <TextField
                                inputRef={emailRef}
                                label="Email"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                inputRef={passwordRef}
                                label="Password"
                                type="password"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                            />
                            <Button onClick={handleSubmit} variant="contained" color="primary" fullWidth>
                                Enter
                            </Button>
                        </form>
                    </Paper>
                </Container>
            </Modal>
        </>
    )
}
export default LogIn
