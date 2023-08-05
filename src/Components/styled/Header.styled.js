import styled from 'styled-components'

const StyledHeader = styled.header`    
    // background:#F08080;
    height : 80px;
    display : flex;
    justify-content : space-between;
    align-items : center;
    border:1px solid #ffe;
    box-shadow : 1px 1px 2px #333;
    margin-bottom : 20px;
    a{
        height : 78px;
    }
    @media(max-width:${({theme})=>theme.mobile}){
        // z-index: 9999;
        // height : 100vh;
        // width : 100vw;
        // align-items : start;
        position : relative
       
    }
`
const Logo = styled.img`
    width : 150px;
    height : 100%;
`

const StyledNav = styled.nav`
    padding-inline: 25px;

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
            left : -100%;
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
                    &:hover{ 
                        background:#fff;               
                        color:${({theme})=>theme.color.highlighter};
                    }
                    &:active{
                        color:${({theme})=>theme.color.highlighter};
                    }
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