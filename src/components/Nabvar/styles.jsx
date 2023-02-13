import styled from "styled-components";
import { Link } from "react-router-dom";

//Navbar
export const Navbars = styled.nav`
 display:flex;
 box-shadow:rgba(0,0,0, .15) 0px -2px 10px 0px;
 justify-content: space-between;
 align-items: center;
 padding: .5em 2em;
`;

// Logo MiniBlog
export const Span = styled.span`
font-weight:900;
text-transform:uppercase;
font-size:1.2em;
`;

export const LogoLink = styled(Link)`
color:#000;
text-transform:uppercase;
font-size:1.2em;
`;

// Links of nav

export const NavLink = styled(Link)`
margin-right:1em;
padding: .4em .6em;
&:active,
&:focus {
    background-color:#000;
    color:#bbb;
    }
`;

export const LinkContainer = styled.li`
list-style: none;
justify-content: space-between;
display:flex;
margin-right:1em;
padding: .4em .6em;
`;