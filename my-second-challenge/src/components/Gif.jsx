import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
export const Gif = () => {
  const [inputValue, setInputValue] = useState();

  const Gif = axios.create({
    baseURL: `https://api.giphy.com/v1/gifs/search?api_key=W6VMUY7SK2kwYQry5FCSa8nTc7Wcgl2V&q=${inputValue}&limit=25&offset=0&rating=g&lang=en`
  });
  const [gif, setGif] = React.useState([]);
  const getData = () => {
    const fetchPosts = async () => {
      try {
        const res = await Gif.get("/");
        setGif(res.data.data);
        console.log(res.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchPosts();
  };
  return (
    <div style={{width:"100vw"}}>
      <input
        className="search"
        type="text"
        placeholder="Search Here"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button onClick={getData}> search </button>
      <div style={{display:"flex" ,  }}>
        {gif.map((dataa, index) => {
          return (
            <div className="Gif">
              <img src={dataa?.images.fixed_height.url} alt="gif" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Gif;


