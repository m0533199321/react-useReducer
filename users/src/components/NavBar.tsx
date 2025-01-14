import { Link } from 'react-router';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{marginRight:'70px',marginTop:'20px', width: '80%' ,backgroundColor: '#f5f5f5',zIndex:0}}> 
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
          </Typography>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Button color="inherit">
              <Link to='/HomeEmpty' style={{ color: 'red', textDecoration: 'none',fontSize:'20px' ,margin:'20px', fontWeight:'bold'}}>Home</Link>
            </Button>
            <Button color="inherit">
              <Link to='/About' style={{ color: 'red', textDecoration: 'none',fontSize:'20px' ,margin:'20px', fontWeight:'bold' }}>About</Link>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
// import { Button } from "@mui/material"
// import { Link } from "react-router"

// const NavBar = () => {

//     return (<>
//         <nav style={{ 'marginTop': '0', 'marginLeft': '80vw' }}>
//             <Button variant="contained" color="primary" sx={{ 'marginTop': '0', 'marginLeft': '2vw' }}>
//                 <Link to='/HomeEmpty' style={{ color: 'white', 'textDecoration': 'none' }}>Home</Link>
//             </Button>
//             <Button variant="contained" color="primary" sx={{ 'marginTop': '0', 'marginLeft': '2vw' }}>
//                 <Link to='/About' style={{ color: 'white', 'textDecoration': 'none' }}>About</Link>
//             </Button>
//         </nav>
//     </>)
// }

// export default NavBar


// import { Link } from 'react-router-dom';
// import { Drawer, List, ListItem, Button, AppBar, Toolbar, Typography } from '@mui/material';

// const NavBar = () => {
//     return (
//         <>
//             <AppBar position="static" style={{marginTop:'5vh'}}>
//                 <Toolbar>
//                     <Typography variant="h6">My Application</Typography>
//                 </Toolbar>
//             </AppBar>
//             <Drawer
//                 anchor="right"
//                 variant="temporary"
//                 open={true}
//                 sx={{
//                     '& .MuiDrawer-paper': {
//                         width: '200px',
//                         height: '80%',
//                         top: 0,
//                         boxShadow: 'none',
//                     },
//                 }}
//                 BackdropProps={{
//                     invisible: true,
//                 }}
//             >
//                 <List>
//                     <ListItem>
//                         <Button component={Link} to='/HomeEmpty' variant="contained" color="primary" fullWidth>
//                             Home Empty
//                         </Button>
//                     </ListItem>
//                     <ListItem>
//                         <Button component={Link} to='/About' variant="contained" color="primary" fullWidth>
//                             About
//                         </Button>
//                     </ListItem>
//                 </List>
//             </Drawer>
//         </>
//     );
// }

// export default NavBar;