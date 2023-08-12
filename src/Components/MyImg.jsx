import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components';

const MyImg = ({images = [{url:""}]}) => {
  const [previewImg, setPreviewImg] = useState(images[0]);
  console.log(images)
  useEffect(() => {    
    setPreviewImg(images[0])  
  }, [images])
  
  return (
    <ImgBox>
        <div className="all-imgs-container">
            {
              images.map((item,index)=>{
                 return (
                  <figure className="img-box" key={index} >
                    <img src={item.url} alt={item.filename} onClick={()=> setPreviewImg(item)}/>
                  </figure>
                 )
              })
            }
        </div>
        <div className="preview-img">
            <img src={previewImg.url} alt={previewImg.filename} />
        </div>
      
    </ImgBox>
  )
}

const ImgBox = styled.div`
  display : grid;
  grid-template-columns : .8fr 2fr;
  .all-imgs-container{
    display : flex;
    flex-direction : column;
    justify-content : center;
    padding-block : 20px;
    gap : 1rem;
    figure{
      cursor : pointer;
      width : 200px;
      img{
        width : 180px;
      }
    }
  }
  .preview-img{
    width : 360px;
    // height : 500px;
    display : flex;
    justify-content : center;
    align-items : center;
    img{
      width : inherit;
      // height : 500px;
    }
  }
  @media(max-width : ${({theme})=>theme.color.tablet}){
    grid-template-columns : .4fr 1fr;
  }
`

export default MyImg
