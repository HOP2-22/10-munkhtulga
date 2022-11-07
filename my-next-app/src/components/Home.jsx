import React from "react";
import { AppBar, Container, Typography, Box, Button, Grid } from "@mui/material";
import Header from './Header';
import ActionAreaCard from './Card'
const cardData = [
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
            <Container>
                <Grid container columns={{xs:4, md:8, lg:12}} spacing={4}>
                    {
                        cardData.map((card, index) => (
                            <Grid item xs={4} key={index}>
                                    <ActionAreaCard title={card.title} date={card.date} avatar={card.avatar} description={card.desc} name={card.name} />
                            </Grid> 
                        ))
                    }
                </Grid>
            </Container>
        </>
    )
}
export default Home;