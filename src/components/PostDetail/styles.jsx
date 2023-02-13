import styled from "styled-components";
import { Link } from "react-router-dom";

// Img

export const PostDetails = styled.div`
margin-bottom:1em;
text-align:center;
text-align:center;
display:flex;
flex-direction: column;
align-items: center;
img {
    max-width:600px;
}
`;

// Title
export const Title = styled.h2`
margin-bottom:.1em;
font-weight:800;
font-size:1.2em;
`;

// Title
export const ContainerTitle = styled.h2`
width:60% !important;
`;


// CreatedBy
export const CreatedBy = styled.span`
font-style:italic;
color:#444;
font-size:0.9em;

`;

// Links 

export const NavLink = styled(Link)`
margin-right:1em;
padding: .4em .6em;
`;


// Tags

export const TagsContainer = styled.div`
display:flex;
margin-bottom:1.2em;
> p {
    margin-right:.5em;
}
span {
    font-weight:bold;
}
`;

//Move button
export const DivBtn = styled.div`
bottom:20px;
position:relative;
`;

