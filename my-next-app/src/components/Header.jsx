import React from "react";
import { AppBar, Container, Typography, Box, Button, Grid } from "@mui/material";



export const Header = () => {
    return <div><AppBar position="fixed" sx={{ height:40 , backgroundColor:"white", boxShadow:"none"}}>
        <Container sx={{ display: 'flex', justifyContent: 'space-between' , alignItems:'center'}}>
            <Typography sx={{fontSize:30, color:"#1E2742", fontFamily: "Mulish", fontWeight: 800}}>team.</Typography>
            <Box sx={{ display: 'flex', gap: 8 }}>
                <Typography sx={{ color:"#6D7D8B"}}>Products</Typography>
                <Typography sx={{color:"#6D7D8B"}}>Products</Typography>
                <Typography sx={{color:"#6D7D8B"}}>Products</Typography>
                <Typography sx={{color:"#6D7D8B"}}>Products</Typography>

            </Box>
            <Button variant="outlined" color="primary" sx={{ display: 'flex', alignItems: 'flex-end',fontSize:'small' }}> Get Access</Button>

        </Container>

    </AppBar>
    </div>

}
export default Header;