import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components';

const MyImg = ({images}) => {
  const [preview, setPreview] = useState();
  console.log(images)
  
  return (
    <ImgBox>
        <div className="all-imgs-container">
            {
              images.map((item,index)=>{
                <div className="img-box" key={index} onClick={()=> setPreview({...item})}>
                  <img src={item.url} alt={item.filename} />
                </div>
              })
            }
        </div>
        <div className="preview-img">
            {preview && <img src={preview.url} alt={preview.filename} />}
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
    width : 200px;
    height : 200px;
    
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
`

export default MyImg
