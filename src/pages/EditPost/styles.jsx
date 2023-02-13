import styled from "styled-components";


// Container

export const Containers = styled.div`
text-align:center;
display:flex;
flex-direction: column;
align-items: center;
`;

export const PreviewImg = styled.div`
text-align:center;
align-items: center;
img {
    width:100%;
}
> p {
    color:#A8A4A4;
}
`;

// container title and subtitle

export const TitlePage = styled.h2`
  color:#000;
`;

export const Subtitle = styled.p`
 color:#2B2B2B;
 max-width:600px;
`;


// button 
export const DivBtn = styled.div`
position: relative;
top:25px;
`;

// post body title
export const Title = styled.span`
font-weight:900;
text-transform:uppercase;
font-size:1.2em;
`;

// post body title
export const Form = styled.div`
margin: 0 auto;
min-width: 40%;
`;
