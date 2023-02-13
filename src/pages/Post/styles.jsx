import styled from "styled-components";


// Title
export const Title = styled.h2`
margin-bottom:.4em;
font-weight:800;
width:40%;

`;

// This Post
export const ThisPost = styled.h3`
margin-bottom:.1em;
font-weight:800;
font-size:1.2em;
`;

// Tags
export const TagsContainer = styled.div`
display:flex;
justify-content:center;
margin-bottom:1.2em;
> p {
    margin-right:.5em;
}
span {
    font-weight:bold;
}
`;

// Img

export const PostDetail = styled.div`
margin-bottom:2em;
text-align:center;
text-align:center;
display:flex;
flex-direction: column;
align-items: center;
img {
    max-width:600px;
}

`;

// Body Post

export const BodyPost = styled.div`
margin-top:1em;
text-align:left;
width:30.5%;
height:auto;
border-left:2px solid #2b2b2b;
padding:15px;
`;

// CreatedBy
export const CreatedBy = styled.span`
font-style:italic;
color:#444;
font-size:0.9em;
margin-top:1em;
span {
    font-weight:600;
    font-style:normal;
}
`;
