import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }
    
    body {
        background: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.white};
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        @media (max-width: 768px) {
            font-size: 1.4rem;
        }
    }

    a {
        text-decoration: none;
        color: ${(props) => props.theme.colors.secondary};
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
    }
`;

export default GlobalStyles;
