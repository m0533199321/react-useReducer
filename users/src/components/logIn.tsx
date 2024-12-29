import { useContext, useRef, useState } from "react"
import { UserContext } from "./home"
import { Button, TextField, Typography, Container, Paper, Modal } from "@mui/material"

const LogIn = ({ log_in }: { log_in: Function }) => {
    const [open, setOpen] = useState(false)
    const firstN = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
    const context = useContext(UserContext)

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        if (context) setOpen(false)
        if (context?.user.firstN === firstN.current?.value &&
            context?.user.password === password.current?.value) {
            log_in()
        }
        else {
            context?.userDispatch({ type: "CREATE_USER", data: { firstN: firstN.current?.value || '', password: password.current?.value || '' } })
            log_in()
        }
    }

    return (
        <>
            <Button onClick={() => { setOpen(true) }} variant="contained" color="primary" sx={{marginTop:1.5, marginLeft:2}}>Log in</Button>
            <Modal
                open={open}
                onClose={() => { setOpen(false) }}
                aria-labelledby="form-modal-title"
                aria-describedby="form-modal-description"
            >
                <Container style={{ position: 'absolute', top: 200, left: 510, maxWidth: '35%' }}>
                    <Paper elevation={3} style={{ padding: '20px' }}>
                        <Typography variant="h5" align="center">Log In</Typography>
                        <form>
                            <TextField
                                inputRef={firstN}
                                label="First Name"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                inputRef={password}
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
