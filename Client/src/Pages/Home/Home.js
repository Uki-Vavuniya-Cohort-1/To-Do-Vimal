import React from "react";
import './Home.css'
import Navbar from "../../Components/Navbar/Navbar";

import Button from "../../Components/Button";
import DataShowing from '../../Components/DataShowing'

export default function Home() {
    return (
        <>
            <Navbar />
            <DataShowing/>
            <a href="/Login"><Button className="Login" name="Login"/></a>
            <a href="/Signup"><Button className="Signup" name="Signup"/></a>

        </>
    )
}