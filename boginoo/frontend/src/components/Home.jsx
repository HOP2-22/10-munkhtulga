import React from "react";
import "../styles/Messi.css";
import Logo from "../assets/Logo";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/authcontext";

export const Home = () => {
  const { currentUser } = useContext(AuthContext);
  const [originalLink, setOriginalLink] = useState("");
  const [shortLink, setShortLink] = useState(null);
  const domain = window.location.href;

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:6900/url/create", {
        long: originalLink,
        user: currentUser ? currentUser.id : "",
      });
      console.log(response);
      setShortLink(response.data.data.short);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Logo />
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: "50vh",
        }}
      >
        <div>
          <input
            className="linkinput"
            placeholder="https://www.web-huudas.mn"
            value={originalLink}
            onChange={(event) => setOriginalLink(event.target.value)}
          />
          <button className="buttoninput" onClick={handleSubmit}>
            Богиносгоx
          </button>
        </div>
        {!shortLink ? null : (
          <div>
            <p>Orignal Link: {originalLink}</p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <p>Short Link: </p>
              <a href={originalLink}>{domain + shortLink}</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Home;
