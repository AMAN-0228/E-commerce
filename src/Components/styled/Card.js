import styled from 'styled-components'

const Card = styled.div`
    width : 200px;
    height : 215px;
    padding : 10px;
    border : 1px solid;
    figure{
        position : relative;
        img{
            margin : 10px;
            width : 160px;
            height : 150px;
        }
        figcaption{
            background : transparent;
            position : absolute;
            top : 13px;
            right : 13px;
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