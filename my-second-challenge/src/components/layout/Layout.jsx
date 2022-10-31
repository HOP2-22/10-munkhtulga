import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import {Footer} from "../Footer"


export const Layout = ({ children }) => {

    const [offset, setoffset] = useState(0)

    useEffect(() => {
        const onScroll = () => setoffset(window.pageYOffset)
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])
    return <div>
        <Header />
        {children}
        <Footer />
    </div>

}

export default Layout;