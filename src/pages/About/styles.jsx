import styled from "styled-components";
import { Link } from "react-router-dom";

// Titles and subtitles 

export const TitlePage = styled.h2`
  color:#000;
`;

export const Text = styled.p`
 color:#2B2B2B;
 max-width:600px;
`;

export const Span = styled.span`
font-weight:900;
text-transform:uppercase;
font-size:1.2em;
`;

// Links body about

export const NavLink = styled(Link)`
margin-right:1em;
padding: .4em .6em;
`;

// About Container

export const Abouts = styled.div`
text-align:center;
display:flex;
flex-direction: column;
align-items: center;
`;
