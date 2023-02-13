import React from "react";
import { Footers } from "./styles";

/* To use one of the "dark, danger, outline, confirm, learn" cases call props 

>> Example:

<ButtonDefault type={"dark"} name={"read the post"}/>

and name={""} to write to the button.

*/


const Footer = () => {
    return (
        <>
        <Footers>
        <h3>My first project developed using react.js and firebase as a backend.</h3>
        <p>Mini Blog &copy;  2023</p>
        </Footers>
        </>
    );
};

export default Footer;