import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import {Link} from "react-router-dom"
export default function ActionAreaCard(props) {
  const { title, description, avatar, firstname, lastname, date,image } = props;
  return (
    <Box sx={{marginTop:5,}}>
    <Link to="/cardinfo"><Card sx={{ maxWidth: 455 , borderRadius:6, height:300}}>
    <CardActionArea sx={{height:"100%" ,textDecoration:"none"}} >
        <CardMedia sx={{display:"flex" , alignContent:"flex-start"}}
          component="img"
          height="180"
          image={image}
          alt="green iguana"
        ></CardMedia>
        <CardContent sx={{textDecoration:"none"}}>
          <Typography gutterBottom variant="h6" component="div"  sx={{fontSize:"small", textDecoration:"none"}} >
            {title}
          </Typography>
          <Typography sx={{textDecoration:"none"}}>
            {description}
          </Typography>
          <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center", textDecoration:"none"  }}>
            <Avatar alt="Remy Sharp" src={avatar} />
            <Box sx={{display:"flex" ,gap:1}}><Typography sx={{fontFamily:"Mulish", fontWeight:"600", color:"#6D7D8B", fontSize:12, textDecoration:"none"}}>
            {firstname}
          </Typography>
          <Typography sx={{fontFamily:"Mulish", fontWeight:"600", color:"#6D7D8B", fontSize:12}}>
            {lastname}
          </Typography></Box>
          <Typography>|</Typography>
          <Typography variant="body2" color="text.secondary" sx={{color:"#6D7D8B", fontFamily:"Mulish", fontWeight:"600", fontSize:12,}}>
            {date}
          </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card></Link></Box>
  );
}