import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import image from "../assets/Rectangle.png"
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
export default function ActionAreaCard(props) {
  const { title, description, avatar, name, date } = props;
  return (
    <Box sx={{marginTop:5}}>
    <Card sx={{ maxWidth: 345 , borderRadius:6, height:400}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image= {image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography>
            {description}
          </Typography>
          <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            <Avatar alt="Remy Sharp" src={avatar} />
            <Typography sx={{fontFamily:"Mulish", fontWeight:"600", color:"#6D7D8B", fontSize:12}}>
            {name}
          </Typography>
          <Typography>|</Typography>
          <Typography variant="body2" color="text.secondary" sx={{color:"#6D7D8B", fontFamily:"Mulish", fontWeight:"600", fontSize:12,}}>
            {date}
          </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card></Box>
  );
}