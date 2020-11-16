import { createGlobalStyle } from 'styled-components';
import { theme } from './themes';
import { normalize } from 'polished';

export const GlobalStyle = createGlobalStyle`
    ${normalize()}
    :root {
        font-size: ${theme.typeScale.ratio};
        font-family: ${theme.primaryFont};
        background-color: #e1e1e1;
        box-sizing: border-box;
    }
    *, *:before *:after {
        box-sizing: inherit;
        padding: 0;
        margin: 0;
    }

    h1, h2, h3, h4, h5, h6, p {
        padding: 0;
        margin: 0;
    }

    body {
        width: 1000px;
        margin: 0 auto;
        padding: 0;
        height: 100vh;       
        background-color: white;
    }

    h1 {font-size: ${theme.typeScale.fs_6}};
    h2 {font-size: ${theme.typeScale.fs_5}};
    h3 {font-size: ${theme.typeScale.fs_4}};
    h4 {font-size: ${theme.typeScale.fs_3}};
    h5 {font-size: ${theme.typeScale.fs_2}};
    h6 {font-size: ${theme.typeScale.fs_1}};
    p {font-size: ${theme.typeScale.fs_1}};
    small {font-size: ${theme.typeScale.fs_small}}; 

    @media (max-width: 999px) {
        body {
            margin: 0;
            width:100vw;           
        }
    }
`;