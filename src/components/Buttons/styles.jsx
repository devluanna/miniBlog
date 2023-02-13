import styled, { css } from "styled-components";


export const Button = styled.button`
${(props) => {
        switch (props.$mode) {
                case "dark":
                        return css `
                        background-color: #000;
                        color:#fff;
                        border-radius:0;
                        `;
                        
                        case "outline":
                        return css `
                        background-color: transparent;
                        border: 1px solid #000 !important;
                        color:#000;
                        border-radius:0;
                        padding:7px 30px;
                        `;

                        case "learn":
                        return css `
                        background-color: transparent;
                        border: 1px solid #000 !important;                        
                        color:#000;
                        border-radius:0 !important;                                         
                        padding:7px 30px;
                        :hover {
                          background-color: #000;
                          color:#fff;
                        }
                        `;

                        case "confirm":
                        return css `
                        background-color: #1a8918;
                        color:#fff;
                        font-weight:bold;
                        border:none;
                        text-align:center;
                        align-items: center;
                        padding: 0px 25px;
                        border-radius:10px;
                        font-size:1em;
                        `;
                        
                        default :
                        return css `
                        background-color: #fff;
                        color:#000;
                        `;  
                        
        }
}}
width: ${(props) => props.$width || "fit - content"};
height: ${(props) => props.$height || "40px"};
display: flex;
align-items: center;
text-align: center;
font-family: "Montserrat", sans-serif;
border:none;
border-radius: 0.5em;
cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;