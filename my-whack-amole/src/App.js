import { Box, Container } from "@mui/material";
import { Typography } from "@mui/material";
import Data from "./data/Data";
import { useState } from "react";
import { useEffect } from "react";


const MyData = (props) => {
  const [up, setUp] = useState(125);
  useEffect(() => {
    const interval = setInterval(() => {
      setUp(20);
    }, Math.floor(Math.random() * (10000 - 1000)) + 1000);
    return () => clearInterval(interval);
  });
  console.log(props);
  const { Data } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100px",
        height: "300px",
        marginLeft: "32px",
      }}
    >
      <img src="UpperBack.png" alt="upperBack" style={{ position: "absolute" }} />
      <img
        src="rat.png"
        alt="rat"
        style={{
          position: "absolute",
          transition: "0.5s",
          transform: "translateY(60px)",
        }}
      />
      <img
        src="LowerBack.png"
        alt="lowerBack"
        style={{ position: "absolute", transform: "translateY(134px)" }}
      />
    </div>
  );
};

function App() {
  return (
    <Box sx={{ backgroundColor: "#B40000", height: "100vh" }}>
      <Container maxWidth="md">
        <Box>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Typography>Time: 00:00:00 </Typography>
            <Typography>Score: 0</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
            }}
          >
            {Data.map((item, index) => {
              return (
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <MyData />
                  <MyData />
                </Box>
              );
            })}
          </Box>
          <Typography>Start</Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default App;