import { useContext, useEffect, useState } from "react"
import { UserContext } from "./home"
import { Button, Container, Modal, Paper, TextField, Typography } from "@mui/material"

const editUser = () => {
    const context = useContext(UserContext)
    const [open, setOpen] = useState(false)
    const [userData, setUserData] = useState({
        firstN: '',
        lastN: '',
        email: '',
        password: '',
        address: '',
        phone: ''
    });

    useEffect(() => {
        if (open) {
            setUserData({
                firstN: context.user.firstN || '',
                lastN: context.user.lastN || '',
                email: context.user.email || '',
                password: context.user.password || '',
                address: context.user.address || '',
                phone: context.user.phone || ''
            });
        }
    }, [open, context.user]);
    
    const handleSubmit = () => {
        setOpen(false)
        context.userDispatch({ type: "EDIT_USER", data: userData })
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData(prevState => ({ ...prevState, [name]: value }))
    }

    return (
        <>
            <Button onClick={() => { setOpen(true) }} variant="contained" color="primary" sx={{ marginTop: 1.5, marginLeft: 2 }}>Update</Button>
            <Modal
                open={open}
                onClose={() => { setOpen(false) }}
                aria-labelledby="form-modal-title"
                aria-describedby="form-modal-description"
            >
                <Container style={{ position: 'absolute', top: 60, left: 510, maxWidth: '35%' }}>
                    <Paper elevation={3} style={{ padding: '20px' }}>
                        <Typography variant="h5" align="center">Update your details</Typography>
                        <form>
                            <TextField
                                name="firstN"
                                value={userData.firstN}
                                onChange={handleInputChange}
                                label="first name"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                name="lastN"
                                value={userData.lastN}
                                onChange={handleInputChange}
                                label="last name"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                name="email"
                                value={userData.email}
                                onChange={handleInputChange}
                                label="email"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                name="password"
                                value={userData.password}
                                onChange={handleInputChange}
                                label="password"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                name="address"
                                value={userData.address}
                                onChange={handleInputChange}
                                label="address"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                name="phone"
                                value={userData.phone}
                                onChange={handleInputChange}
                                label="phone"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                            />
                            <Button onClick={handleSubmit} variant="contained" color="primary" fullWidth>
                                Update
                            </Button>
                        </form>
                    </Paper>
                </Container>
            </Modal>
        </>
    )
}
export default editUser
