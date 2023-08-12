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
import Star from '../Components/Star'

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
            <Star stars={stars} reviews={reviews}/>
            {/* <p>{stars}</p>
            <p>{reviews} reviews</p> */}
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
            {/* <hr /> */}
            <div className="product-color-option">
              Color : { colors &&
                colors.map((item,index)=>{
                  return(
                    <span key={index} className='color-option' style={{backgroundColor: item}}></span>
                  )
                })
              }
            </div>
            <div className="product-basic-info">
              <p>Available :<span> {stock} In Stock</span></p>
              <p>ID :<span> {id} </span></p>
              <p>Brand :<span> {company}</span></p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .container{
    // padding-inline : 5rem;
  }
  .content{
    margin-block : 40px;
    display : grid;
    grid-template-columns : repeat(12,1fr);
    column-gap : 32px;
    text-align : start;
    gap : 2rem;
    .product-img{
      grid-column : 4/6;
      display : flex;
      justify-content : center;
    }
    .product-data{
      grid-column : 9/12;
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
      hr{
        background : black;
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
        justify-content : space-between;
        border-bottom : 1px solid darkslategray;
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
      .product-color-option{
        display : flex;
        gap : 12px;
        align-items : center;
        border-bottom : 2px solid black;
        .color-option{
          // margin-inline : 10px;
          padding : 9px;
          border-radius: 50%; 
          border-color : 1px solid white;
          cursor : pointer;
        }
      }
      .product-basic-info{
        display : flex;
        flex-direction : column;
        gap : 10px;
        span{
          font-weight : 500;
        }
      }
    }
  }

`
export default SingleProduct
