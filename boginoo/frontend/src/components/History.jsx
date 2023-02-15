import React from "react";
import Logo from "../assets/Logo";
import { useContext } from "react";
import { AuthContext } from "../context/authcontext";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export const History = () => {
  const { currentUser } = useContext(AuthContext);
  const [historyList, setHistoryList] = useState([]);

  useEffect(() => {
    async function getHistory() {
      try {
        const response = await axios.post(
          "http://localhost:6900/url/history/:page/:limit",
          {
            user: currentUser.id,
          }
        );
        setHistoryList(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getHistory();
  }, []);
  console.log(historyList);
  return (
    <div className="home">
      {historyList.map((list, index) => {
        return (
          <div>
            <p>Long: {list.long}</p>
            <p>Long: {list.short}</p>
          </div>
        );
      })}
    </div>
  );
};
export default History;
