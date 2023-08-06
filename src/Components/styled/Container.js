import styled from 'styled-components'

const Container = styled.div`
    display : grid;
    grid-template-columns : 150px 2fr 150px;
    text-align : center;
    .content{
        grid-column : 2/3;
        align-items : center;
        // display : grid;
        svg{
            font-size: 24px;
        }
        span{
            display : block;
        }
        div{
            display : flex;
            flex-direction : column;
            gap :2rem;
        }
    }
    
`
export default Container