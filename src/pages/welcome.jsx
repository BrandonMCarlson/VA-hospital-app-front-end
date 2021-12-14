import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import Button from "../components/Button";



const Welcome = () => {
    return ( 
        <div>
            <h1>Welcome to Veteran Affairs Health Helper</h1>
            <Button/>
        </div>
     );
}
 
export default Welcome;