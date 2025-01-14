import { useContext, useEffect, useState } from "react"
import { UserContext } from "./Home"
import { Button, Container, Modal, Paper, TextField, Typography } from "@mui/material"
import axios from "axios"

const EditUser = () => {
    const context = useContext(UserContext)
    console.log(context)
    const [open, setOpen] = useState(false)
    const [userData, setUserData] = useState({
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        address: '',
        phone: ''
    })

    useEffect(() => {
        if (open) {
            setUserData({
                id: context.user.id || '',
                firstName: context.user.firstName || '',
                lastName: context.user.lastName || '',
                email: context.user.email,
                password: context.user.password,
                address: context.user.address || '',
                phone: context.user.phone || ''
            })
        }
    }, [open, context.user])

    const handleSubmit = async () => {
        setOpen(false)
        try {
            const res = await axios.put('http://localhost:3000/api/user/',
                userData,
                {
                    headers: {
                        'user-id': userData.id
                    }
                })
            console.log(userData.password)
            console.log(res.data.password)
            context.userDispatch({ type: "EDIT_USER", data: { ...context.user, ...res.data } })
        }
        catch (err) {
            console.log(err)
            if (axios.isAxiosError(err) && err.response?.status === 404)
                alert('user doesn\'t exist')
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData(prevState => ({ ...prevState, [name]: value }))
    }

    return (
        <>
            <Button onClick={() => { setOpen(true) }} variant="contained" color="inherit" sx={{ marginTop: 0, marginLeft: '2vw', width: '10vw', color: 'deepskyblue', fontWeight: 'bold' }}>Update</Button>
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
                                name="firstName"
                                value={userData.firstName}
                                onChange={handleInputChange}
                                label="first name"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                            />
                            <TextField
                                name="lastName"
                                value={userData.lastName}
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
export default EditUser
