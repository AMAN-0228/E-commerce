import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
    margin : 0;
    padding : 0;
    box-sizing : border-box;
    // font-family : 'EduSABeginner','Quicksand' ,'Anton','LibreBaskerville';
    .grid{
        display : grid;
    }
    .grid-two-columns{
        grid-template-columns : repeat(2,2fr);
    }
    .grid-three-columns{
        grid-template-columns : repeat(3,2fr);
    }
    .grid-temp-col{
        grid-template-columns : ${({Col})=>Col}
    }
    .grid-col{
        grid-column : ${({col})=>col};
    }
    .grid-row{
        grid-row : ${({row})=>row};
    }
    .flex{
        display :flex;
    }
`
export default GlobalStyle