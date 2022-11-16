import React, { useState ,useEffect} from "react"
import Header from "./Header"
import { AppBar, Container, Typography, Box, Button, Grid, CardMedia } from "@mui/material";
import { useParams } from "react-router";
import axios from "axios";

export function CardInfo(props) {
    const {id} = useParams()
    const [data, setData ] = useState()
    const instance = axios.create({
        baseURL : `https://dummyapi.io/data/v1/post/${id}`,
        headers: {
            "app-id": "636e0d6642c1f665f684f489"
        }
    })

    useEffect(() => {
        const fetchProps = async() => {
            try {
                const res = await instance.get("/")
                console.log(res)
                setData(res.data)
            }catch (err) {
                console.log(err)
            }
        }
        fetchProps()
    } , [])

    return (
        <div>
            <Header />
            <Container SX={{ display:"flex", justifyContent:"center"}}>
                <Box sx={{justifyContent:"center"}}>
                <CardMedia sx={{ display: "flex", alignContent: "flex-start", maxWidth: 800, justifyContent:"center" }}
                    component="img"
                    Height="600"
                    width="800"
                    image={data?.image}
                    alt="green iguana"
                ></CardMedia>
                {data?.tags+""}</Box>
            </Container>
        </div>
    )
}