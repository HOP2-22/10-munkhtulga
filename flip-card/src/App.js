import { Box, Container } from "@mui/system";
import { useState } from "react";
import { Button, Grid } from "@mui/material";

import { Images } from "./assets/imgCollection";
import CardCover from "./assets/img/question.jpeg";

const Card = ({ image, flip, isFlipped }) => {
  return (
    <Box
      onClick={() => flip()}
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "200px",
        position: "relative",
        transform: `rotateY(${isFlipped ? "180deg" : "0deg"})`,
        transformStyle: "preserve-3d",
        transition: "transform 0.6s",
        boxSizing: "border-box",
        borderRadius: "15px",
      }}
    >
      {image !== null && (
        <>
          <img
            src={CardCover}
            alt="cardcover"
            style={{
              position: "absolute",
              height: "100%",
              width: "200px",
              backfaceVisibility: "hidden",
            }}
          />

          <img
            src={image.src}
            alt="something"
            style={{
              position: "absolute",
              height: "100%",
              width: "200px",
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              borderRadius: "15px",
            }}
          />
        </>
      )}
    </Box>
  );
};

const CardContainer = () => {
  const [images, setImage] = useState([]);
  const [cardFlip, setCardFlip] = useState(false);
  const [firstFlip, setFisrtFlip] = useState(null);

  const [flipped, setFlipped] = useState(new Array(10).fill(false));

  const generate = () => {
    const newImages = [...Images, ...Images].sort(
      (a, b) => Math.random() - 0.5
    );
    setImage(newImages);
  };
  const flip = (index) => {
    let newFlipped = flipped.map((item, i) => (i === index ? !item : item));
    // let flippedCount = newFlipped.filter((flip) => flip === true);
    setFlipped(newFlipped);
    if (firstFlip === null) {
      setFisrtFlip(index);
    } else {
      if (images[firstFlip] === images[index] && index !== firstFlip) {
        setTimeout(() => {
          setImage(images.map((img) => (img === images[index] ? null : img)));
        }, 600);
      }
      setTimeout(() => {
        setFisrtFlip(null);
        setFlipped(new Array(10).fill(false));
      }, 600);
    }
  };

  return (
    <Box sx={{backgroundColor:"gray"
    ,height:"100vh"}}>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          
        }}
      >
        <Grid spacing={3} container>
          {images.map((image, index) => {
            return (
              <Grid item xl={2.4} md={2.4}>
                <Card
                  flip={() => flip(index)}
                  image={image}
                  isFlipped={flipped[index]}
                  cardFlip={cardFlip}
                  key={index}
                />
              </Grid>
            );
          })}
        </Grid>
        <Button
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
          backgroundColor: "black",
          position: "fixed",
        }}
        onClick={() => generate()}
      >
        SIUUU
      </Button>
      </Container>

    </Box>
  );
};

export default CardContainer;