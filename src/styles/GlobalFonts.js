import { createGlobalStyle } from 'styled-components';
import Mon_Bold from '../fonts/Montserrat-Bold.woff';
import KR_Bold from '../fonts/NotoSansKR-Bold.woff';
import KR_Medium from '../fonts/NotoSansKR-Medium.woff';

const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family: 'mon-b';
        src: local('mon-b'), url(${Mon_Bold}) format('woff');
    }
    @font-face {
        font-family: 'kr-b';
        src: local('kr-b'), url(${KR_Bold}) format('woff');
    }
    @font-face {
        font-family: 'kr-m';
        src: local('kr-m'), url(${KR_Medium}) format('woff');
    }   

`;
export default GlobalFonts;
