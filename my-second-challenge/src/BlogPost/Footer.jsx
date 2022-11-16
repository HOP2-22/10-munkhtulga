import React from "react"
import { AppBar, Container, Typography, Box, Button, Grid, Icon } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

export const Footer=()=>{
 return(
    <Box sx={{ display:"flex", height: 400, backgroundColor: "#252B3B" , width:"100%"}}>
     <Box>
         <Typography>team.</Typography>
         <Typography><InstagramIcon />Instagram</Typography>
         <Typography><FacebookIcon/>Facebook</Typography>
         <Typography><TwitterIcon/>Twitter</Typography>
         <Typography><InstagramIcon/>Instagram</Typography>
         <Typography><FacebookIcon/>Facebook</Typography>
         <Typography><TwitterIcon/>Twitter</Typography>
     </Box>
    </Box>
    
 )
  
}
export default Footer;