import styled from "styled-components";
import { Link } from "react-router-dom";


//Div button page body
export const DivBtn = styled.div`
 justify-content: space-between;
 display:flex;
`;


// PostsContainer
export const NoPosts = styled.div`
 text-align:center;
 margin-bottom:1.5em;
 padding: 10px 25px;
`;

// No posts were found.
export const Span = styled.span`
font-weight:700;
font-size:1.2em;
`;

export const TitlePage = styled.h1`
text-align:center;
`;

// Links body posts

export const NavLink = styled(Link)`
margin-right:1em;
padding: .4em .6em;
`;