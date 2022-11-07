import React from "react";
import { AppBar, Container, Typography, Box, Button, Grid } from "@mui/material";



export const Header = () => {
    return <div><AppBar position="fixed" sx={{ height:40}}>
        <Container sx={{ display: 'flex', justifyContent: 'space-between' , alignItems:'center'}}>
            <Typography sx={{fontSize:30}}>team.</Typography>
            <Box sx={{ display: 'flex', gap: 8 }}>
                <Typography>Products</Typography>
                <Typography>Products</Typography>
                <Typography>Products</Typography>
                <Typography>Products</Typography>

            </Box>
            <Button variant="outlined" color="inherit" sx={{ display: 'flex', alignItems: 'flex-end',fontSize:'small' }}> Get Access</Button>

        </Container>

    </AppBar>
    </div>

}
export default Header;