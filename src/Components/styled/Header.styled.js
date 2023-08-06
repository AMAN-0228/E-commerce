import styled from 'styled-components'

const StyledHeader = styled.header`    
    background:#176B87;
    height : 80px;
    display : flex;
    justify-content : space-between;
    align-items : center;
    border-bottom:1px solid #ffe;
    box-shadow : 1px 1px 2px #333;
    a{
        height : 78px;
    }
    @media(max-width:${({theme})=>theme.mobile}){
        z-index: 1;
        // height : 100vh;
        width : 100vw;
        // align-items : start;
        position : fixed;
        top : 0;

       
    }
`
const Logo = styled.img`
    width : 150px;
    height : 100%;
`

const StyledNav = styled.nav`
    padding-inline: 50px;
    font-size : 18px;
    ul{
        display : flex;
        justify-content : space-between;
        align-items : center;
        gap: 2rem;
    }
    li{
        position : relative;
        list-style : none;
        a{
            text-decoration : none;
            color : #40128B;
            &:hover{ 
                // background:#fff;               
                color:${({theme})=>theme.color.highlighter};
            }
            &:active{
                color:${({theme})=>theme.color.highlighter};
            }
        }
        span{
            position : absolute;
            bottom: 10px;
            background-color: #898dd5;
            padding : 5px;
            font-size : 8px;
            border-radius: 50%;
        }
    }
    .mobile-view{
        display : none;
        font-size : 25px;    
        .mobile-btn{
            display : none;
        }
        .mobile-view-btn[name="cross-btn"]{
            display : none;
        }
        .cross-btn{
            display : none;
        }
    }
    @media(max-width:${({theme})=>theme.mobile}){
        ul{
            position : fixed;
            height : 100vh;
            width : 100vw;
            left : -120%;
            top : 80px;
            background: #fff;
            transition : all .5s;
            justify-content: start;
            li{
                margin-block : 30px;
            }
        }
        .sideNav{
            display :flex;
            flex-direction : column;
            left : 0%;
            gap : 0;
            font-size : 20px;
            li{
                a{
                    // color : #fff;
                    
                }
            }
        }
        .mobile-view{
            float : right;
            // margin-top: 35px;
            display: block;
            cursor : pointer;
            .mobile-view-btn{
                display : block;
            }
            .cross-btn{
                display : block;
            }
            .active{
                display : none;
            }
        }
        
    }
`
export {StyledHeader,Logo,StyledNav} 