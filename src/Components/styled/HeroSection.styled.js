import styled from 'styled-components'

const StyledHeroSection = styled.section`
    margin-block : 100px;
    // margin-inline : auto;
    display : grid;
    grid-template-columns : 1fr 1fr 1fr 1fr;
    // grid-template-rows : 100px 1fr 100px;
    // display : flex;
    gap : 2rem;
    // flex-direction : row;
    // flex-wrap : wrap;
    .part-1{
        // margin-block : auto;
        // min-width :  450px;
        // display : grid;
        // height : 100px;
        // grid-row : 2/3;
        grid-column:2/3;
        color :${({theme})=>theme.color.contentColor};
        div{
            // grid-row: 2/3;
        }
        span{
            color:${({theme})=>theme.color.color1};
        }
        h2{
            color:${({theme})=>theme.color.color2};
            font-size : 28px;
            text-transform : capitalize;
            margin-bottom : 20px;
        }
    }
    .part-2{
        width : 100%;
        height :auto;
        display : flex;
        align-items : center;
        justify-content : center;
        grid-column : 3/4;
        // grid-row : 2/3;
        // width : 200px;
        figure{
            position : relative;

            &::after{
                content : "";
                width : 60%;
                height : 80%;
                position : absolute;
                background-color : ${({theme})=>theme.color.bg};
                left : 50%;
                top : -15%;
                z-index : -1;
            }
        }
        img{
            width : 100%;
            height : auto;
        }
        
    }
    @media(max-width:${({theme})=>theme.mobile}){
        // margin-inline : 35px;
        // // flex-direction : column;
        // flex-wrap : wrap;
        grid-template-rows : repeat(2,1fr);
        .part-1{
            grid-row : 1/2;
            grid-column : 2/4;
        }
        .part-2{
            grid-column : 2/4;
            grid-row : 2/3;
        }

    }
`

export default StyledHeroSection