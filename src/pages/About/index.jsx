import React from "react";
import { TitlePage, Span, NavLink, Abouts, Text } from "./styles";
import ButtonDefault from "../../components/Buttons";

const About = () => {
    return (
        <>
        <Abouts>
        <TitlePage>Sobre o Mini <Span>Blog</Span></TitlePage>
        <Text>This project consists of a blog made with
         React.js on the front end and 
         Firebase on the back end.
        </Text>
        
        <NavLink to="/posts/create">
           <ButtonDefault 
           type={"outline"} 
           name={"Create your post...."}/>
           </NavLink>
            </Abouts>
        </>
    );
};

export default About;