import React from 'react'
import { styled } from 'styled-components'
import FormatePrice from './FormatePrice'
import { NavLink } from 'react-router-dom'

const ListView = ({products}) => {
  return (
    <Wrapper className=''>
      {
        products.map((item)=>{
            const {name,id,price,description,image} = item
            return(
              <div className="list-view" key={id}>
                <figure>
                    <img src={image} alt={name}/>
                </figure>
                <div className="product-info">
                    <h2>{name}</h2>
                    <p><span> <FormatePrice price={price}/> </span> <del> <FormatePrice price={price + 5000}/> </del> </p>
                    <p className='description'>{description.slice(0,90)}...</p>
                    <NavLink to={`/singleProduct/${id}`}>
                        <button>Read More</button>
                    </NavLink>
                </div>
              </div>
            )
        })
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display : flex;
  flex-wrap : wrap;
  .list-view{
    padding : 20px 10px;
    margin-block : 8px;
    display : grid;
    grid-template-columns : .7fr 1fr;
    gap : 1rem;
    background : #33f3;
    figure{
        grid-column : 1/2;
        display : flex;
        justify-content : center;
        align-items : center;
        img{
            width : 96%;
            height : 89%;
        }
    }
    .product-info{
        grid-column : 2/3;
        gap: 1rem;
        display: flex;
        flex-direction: column;
        h2{
            color : ${({theme})=>theme.color.color1};
        }
        p{
          span{
            color : red;
            font-size : 22px;
          }  
        }
        .description{
            color : ${({theme})=>theme.color.contentColor};
            font-size : 15px;
        }
        button{
            margin : 5px 10px ;
            padding : 10px;
            color : #8f5adbfa;
            &:hover{
                border : none;
                color : white;
                background-color : #8f5adbfa;
                border-radius : 2px;
                transition : all .8s ease-in;
            }
        }        
    }
  }
`


export default ListView
