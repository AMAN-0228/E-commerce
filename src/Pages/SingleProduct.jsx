import React, { useEffect } from 'react'
import { useProductContext } from '../context/ProductContext'
import { useParams } from 'react-router-dom'
import { styled } from 'styled-components'
import PageNavigation from '../Components/PageNavigation'
import Container from '../Components/styled/Container'
import { TbReplace, TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from 'react-icons/md'
import FormatePrice from '../Components/FormatePrice'
import MyImg from '../Components/MyImg'

const API =  "https://api.pujakaitem.com/api/products"


const SingleProduct = () => {
  const {id} = useParams();
  const {getSingleProduct,singleProduct,singleLoading} = useProductContext();
  useEffect(()=>{
    getSingleProduct(`${API}?id=${id}`)
  },[id])
  console.log("singleProduct",singleProduct)
  const {
    id:productId,
    name,
    category,
    company,
    price,
    stock,
    stars,
    reviews,
    description,
    colors,
    image,
  }=singleProduct
  if(singleLoading){
    return <div>......Loading</div>
  }
  return (
    <Wrapper>
      <PageNavigation title={name}/>
      <div className='container'>
        <div className="content">
          <div className="product-img">
            {/* img side */}
            <MyImg images={image}/>
          </div>
          <div className="product-data">
            <h2>{name}</h2>
            <p>{stars}</p>
            <p>{reviews} reviews</p>
            <p className="product-price">
              MRP: <del><FormatePrice price = {price + 5000}/></del>
            </p>
            <p className="product-price product-real-price">
              Deal of the Day: <FormatePrice price = {price}/>
            </p>
            <p className="product-description">
              {description}
            </p>
            <div className="product-warranty">
              <div className="product-warranties">
                <TbTruckDelivery/>
                <p>Free Delivery</p>
              </div>
              <div className="product-warranties">
                <TbReplace/>
                <p>30 Days Replacement</p>
              </div>
              <div className="product-warranties">
                <TbTruckDelivery/>
                <p>Free Delivery</p>
              </div>
              <div className="product-warranties">
                <MdSecurity/>
                <p>2yr Warranty</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .container{
    padding : 0 3rem;
  }
  .content{
    margin-block : 40px;
    display : grid;
    grid-template-columns : 1fr 1fr;
    text-align : start;
    gap : 2rem;
    .product-img{
      display : flex;
      justify-content : center;
    }
    .product-data{
      display : flex;
      flex-direction : column;
      align-items : flex-start;
      justify-content : center;
      gap : 2rem;
      h2{
        font-weight : 400;
      }
      p{
        color : ${({theme})=>theme.color.contentColor};
      }
      .product-price{
        color : black;
        font-weight : 500;
      }
      .product-real-price{
        color : red;

      }
      .product-warranty{
        display : flex;
        flex-direction : row;
        .product-warranties{
          color : darkslateblue;
          gap : 10px;
          text-align : center;
          justify-content: center;
          align-items: center;
          p{
            font-size : 12px;
          }
        }
      }
    }
  }
`
export default SingleProduct
