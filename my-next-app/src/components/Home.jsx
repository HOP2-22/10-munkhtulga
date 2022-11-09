import React from "react";
import { AppBar, Container, Typography, Box, Button, Grid } from "@mui/material";
import Header from './Header';
import ActionAreaCard from './Card'
const cardData = [
    {
        title: 'The 2020 Guide for White Men in Tech',
        description: 'How to use centuries of unfair advantage to make the world a more equal place',
        avatar: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
        name: 'Darlene Robert',
        date: '2nd January,2022'
    },
    {
        title: 'Why Are Women Still Behind in the Design World?',
        description: 'It’s 2020, but women designers still face lower pay and less opportunity. What gives?',
        avatar: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
        name: 'Leslie Alexander',
        date: '2nd January,2022'
    },
    {
        title: 'title',
        description: 'description',
        avatar: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
        name: 'name',
        date: 'date'
    },
    {
        title: 'title',
        description: 'desc',
        avatar: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
        name: 'name',
        date: 'date'
    },
    {
        title: 'title',
        description: 'desc',
        avatar: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
        name: 'name',
        date: 'date'
    }
    , {
        title: 'title',
        description: 'desc',
        avatar: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
        name: 'name',
        date: 'date'
    },
    {
        title: 'title',
        description: 'desc',
        avatar: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
        name: 'name',
        date: 'date'
    },
    {
        title: 'title',
        description: 'desc',
        avatar: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
        name: 'name',
        date: 'date'
    },
    {
        title: 'title',
        description: 'desc',
        avatar: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
        name: 'name',
        date: 'date'
    }
]

export const Home = () => {
    return (
        <>
            <Header />
            <Container sx={{paddingTop:15, fontFamily:"Mulish"}}>
                <Typography sx={{fontFamily:"Mulish", fontWeight:"800", fontSize:50}}>Blog posts</Typography>
                <Typography sx={{color:"#6D7D8B", fontFamily:"Mulish", fontWeight:"600", paddingTop:3 , fontSize:20 }}>Our latest updates and blogs about managing your team</Typography>
                <Grid container columns={{xs:4, md:8, lg:12}} spacing={2}>
                    {
                        cardData.map((card, index) => (
                            <Grid item xs={4} key={index}>
                                    <ActionAreaCard title={card.title} date={card.date} avatar={card.avatar} description={card.description} name={card.name}  >
                                    </ActionAreaCard>
                                   
                            </Grid> 
                        ))
                    }
                </Grid>
            </Container>
        </>
    )
}
export default Home;