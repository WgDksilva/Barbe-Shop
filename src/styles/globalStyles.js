import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        text-decoration: none;
        font-family: "Montserrat", sans-serif;
    }

    body {
        background: #000000;
    }

    @media screen and (max-width:770px){
        
    }
`;