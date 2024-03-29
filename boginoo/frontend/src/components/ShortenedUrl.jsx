import React from "react";
import "../styles/Messi.css";
import Footer from "../assets/Footer";
import Header from "../assets/Header";
import InputLink from "../assets/InputLink";
import Logo from "../assets/Logo";
import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/authcontext";
export const ShortLink = () => {
  const { currentUser } = useContext(AuthContext);
  const [shortenedLink, setShortenedLink] = useState("");
  const [URL, setURL] = useState();
  const RandomGenerator = (length) => {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const handleInput = async (event) => {
    setURL(event.target.value);
  };

  RandomGenerator(5);
  console.log(currentUser, "current user");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${URL}`
      );
      setShortenedLink(response.data.result.short_link);
    } catch (e) {
      console.log(e);
    }
    return (
      <div className="Home">
        <Header />
        <Logo />
        <InputLink />
        <Footer />
      </div>
    );
  };
};
export default ShortLink;
