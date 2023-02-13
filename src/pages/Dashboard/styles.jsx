import styled from "styled-components";
import { Link } from "react-router-dom";

// Title
export const Title = styled.h2`
margin-bottom:.4em;
font-weight:800;
text-align:left;
`;

// Links
export const NavLink = styled(Link)`
margin-right:.3em;
`;

// button 
export const DivBtn = styled.div`
display:flex;
`;

// Header Title and Action 

export const HeaderPost = styled.div`
display:flex;
justify-content:space-between;
font-weight: bold;
border-bottom: 2px solid #ccc;
width:80%;
padding:10px;
`;

// Header Buttons and post
export const PostRow = styled.div`
align-items:center;
border-bottom:1px solid #eee;
display:flex;
justify-content:space-between;
width:80%;
`;

// Container
export const DashBoard = styled.div`
text-align: center;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

// NoPosts
export const NoPosts = styled.div`
 text-align:center;
 margin-bottom:1.5em;
 padding: 10px 25px;
`;

export const Button = styled.button`
background-color: transparent;
border: 1px solid #000 !important;
color:#000;
border-radius:0 !important;     
padding:7px 30px;
cursor:pointer;
:hover {
background-color: #DC3545;
}
`;

// title page dashboard
export const TitlePage = styled.h1`
text-align:center;
`;
