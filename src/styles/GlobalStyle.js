import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        
    }
    html{
        font-size: 10px;
        
    }
    body{
        margin:0;
        overflow-x:hidden;
        
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
    	margin: 0;
    }
    ul,
    li {
	    list-style: none;
	    padding-left: 0;
    }
    p {
    	margin: 0;
	    word-break: keep-all;
	    white-space: pre-wrap;
    }
`;
export default GlobalStyle;
