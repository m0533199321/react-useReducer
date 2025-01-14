import { Outlet } from "react-router";
import NavBar from "./NavBar";
import { Box } from "@mui/material";

const LayOut = () => {
    return (
        <>
            <NavBar />
            <Box 
                display="flex" 
                justifyContent="center" 
                alignItems="center" 
                height="40vh"
                width="40vw"
                border={4} 
                borderColor="lightgreen"
                color="lightgreen" 
                sx={{ 
                    fontSize: '50px',
                    textAlign: 'center',
                    marginTop: '30vh',
                    marginLeft: '30vw',
                    backgroundColor: '#f5f5f5',
                    display: 'fixed',
                    position: 'absolute',
                    bottom: '30vh',
                }}
            >
                <Outlet />
            </Box>
        </>
    );
}

export default LayOut;