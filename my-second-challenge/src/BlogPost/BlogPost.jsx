import React, { useEffect, useState } from "react";
import { AppBar, Container, Typography, Box, Button, Grid } from "@mui/material";
import Header from './Header';
import Footer from './Footer'
import ActionAreaCard from './Card'
import axios from "axios"
export const BlogPost = () => {
    const [data, setData ] = useState()
    const instance = axios.create({
        baseURL : "https://dummyapi.io/data/v1/post/",
        headers: {
            "app-id": "636e0d6642c1f665f684f489"
        }
    })

    useEffect(() => {
        const fetchProps = async() => {
            try {
                const res = await instance.get("/")
                console.log(res)
                setData(res.data.data)
            }catch (err) {
                console.log(err)
            }
        }
        fetchProps()
    } , [])

    return (
        <>
            <Header />
            <Container sx={{paddingTop:15, fontFamily:"Mulish", }}>
                <Typography sx={{fontFamily:"Mulish", fontWeight:"800", fontSize:50}}>Blog posts</Typography>
                <Typography sx={{color:"#6D7D8B", fontFamily:"Mulish", fontWeight:"600", paddingTop:3 , fontSize:20 }}>Our latest updates and blogs about managing your team</Typography>
                <Grid container columns={{xs:8, md:12, lg:12}} spacing={4}>
                    {
                        data?.map((card, index) => (
                            <Grid item xs={3} key={index}>
                                    <ActionAreaCard title={card.text} id={card.id} date={card.date} avatar={card.owner.picture} description={card.description} name={card.name} image={card.image} firstname={card.owner.firstName} lastname={card.owner.lastName} >
                                    </ActionAreaCard>
                                   
                            </Grid> 
                        ))
                    }
                </Grid>
                <Footer/>
            </Container>
           
        </>
    )
}
export default BlogPost;