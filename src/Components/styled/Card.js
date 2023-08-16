import styled from 'styled-components'

const Card = styled.div`
    width : 90%;
    height : 215px;
    padding : 10px;
    border : 1px solid;
    margin : auto;
    figure{
        position : relative;
        display : flex;
        justify-content : center;
        align-items : center;
        height : 90%;
        img{
            // margin : 10px;
            width : 100%;
            height : 100%;
        }
        figcaption{
            background : transparent;
            position : absolute;
            top : 5px;
            right : 0;
            padding : 5px;
            background-color : #fff;
            border-radius : 16px;
        }
    }
    div{
        display : flex;
        justify-content : space-between;
        // margin-inline : 10px;
        
    }

`
export default Card